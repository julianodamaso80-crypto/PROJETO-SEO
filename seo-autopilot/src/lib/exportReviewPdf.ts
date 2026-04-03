import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface ExportField {
  label: string;
  value: string | null;
  fieldPath: string;
}

interface ExportSection {
  icon: string;
  label: string;
  fields: ExportField[];
}

interface ExportNote {
  id: string;
  fieldPath: string | null;
  content: string;
}

interface ExportReviewOptions {
  clientName: string;
  clientEmail: string | null;
  status: string;
  createdAt: string;
  sections: ExportSection[];
  notes: ExportNote[];
}

const ICON_MAP: Record<string, string> = {
  "🏢": "[Negocio]",
  "👥": "[Publico]",
  "🌐": "[Digital]",
  "🎤": "[Conteudo]",
  "🎯": "[Objetivos]",
  "🔗": "[Referencias]",
  "🔑": "[Acesso]",
};

export function exportReviewPdf(options: ExportReviewOptions): void {
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 20;

  // Header
  doc.setFontSize(22);
  doc.setTextColor(16, 52, 89); // --blue
  doc.text("SEO Inteligente", 14, y);
  y += 12;

  doc.setFontSize(17);
  doc.setTextColor(0, 15, 33); // --navy
  doc.text(options.clientName, 14, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  const statusText = options.status === "completed" ? "Completo" : "Pendente";
  const dateStr = new Date(options.createdAt).toLocaleDateString("pt-BR");
  doc.text(
    `${options.clientEmail || ""} | ${statusText} | ${dateStr}`,
    14,
    y,
  );
  y += 6;

  // Separator
  doc.setDrawColor(200, 200, 200);
  doc.line(14, y, pageWidth - 14, y);
  y += 10;

  // Sections
  for (const section of options.sections) {
    // Check if we need a new page
    if (y > pageHeight - 50) {
      doc.addPage();
      y = 20;
    }

    // Section title
    const iconText = ICON_MAP[section.icon] || "";
    doc.setFontSize(13);
    doc.setTextColor(0, 15, 33);
    doc.text(`${iconText} ${section.label}`, 14, y);
    y += 2;

    // Build table body
    const body: (string | { content: string; colSpan: number; styles: Record<string, unknown> })[][] = [];

    for (const field of section.fields) {
      // Skip sensitive password field entirely
      if (field.fieldPath === "wpAppPassword") continue;

      const displayValue = field.value || "Nao preenchido";
      body.push([field.label, displayValue]);

      // Add operator notes for this field
      const fieldNotes = options.notes.filter(
        (n) => n.fieldPath === field.fieldPath,
      );
      for (const note of fieldNotes) {
        body.push([
          {
            content: `Nota: ${note.content}`,
            colSpan: 2,
            styles: {
              fontStyle: "italic",
              fillColor: [235, 235, 235],
              textColor: [80, 80, 80],
            },
          },
        ]);
      }
    }

    autoTable(doc, {
      startY: y,
      head: [["Campo", "Valor"]],
      body,
      theme: "grid",
      headStyles: {
        fillColor: [0, 15, 33],
        textColor: [230, 230, 230],
        fontStyle: "bold",
        fontSize: 9,
      },
      styles: {
        fontSize: 9,
        cellPadding: 3,
        overflow: "linebreak",
      },
      columnStyles: {
        0: { cellWidth: 50, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
      margin: { left: 14, right: 14 },
    });

    y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable
      .finalY + 10;
  }

  // Footer with page numbers
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.text(
      `Pagina ${i} de ${pageCount} | SEO Inteligente`,
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" },
    );
  }

  // Save
  const safeName = options.clientName
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase();
  const today = new Date().toISOString().slice(0, 10);
  doc.save(`review-${safeName}-${today}.pdf`);
}
