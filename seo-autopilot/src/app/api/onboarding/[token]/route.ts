import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { clientOnboarding, users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { sendOnboardingCompleteEmail } from "@/server/services/emailService";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const [entry] = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.token, token))
    .limit(1);

  if (!entry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(entry);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
  const { token } = await params;
  const body = await req.json();

  const [entry] = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.token, token))
    .limit(1);

  if (!entry) {
    return NextResponse.json({ error: "Link não encontrado" }, { status: 404 });
  }

  if (entry.status === "completed") {
    return NextResponse.json({ error: "Questionário já foi respondido" }, { status: 400 });
  }

  await db
    .update(clientOnboarding)
    .set({
      // Original fields
      clientName: body.clientName,
      clientEmail: body.clientEmail,
      businessName: body.businessName,
      businessDescription: body.businessDescription,
      mainProduct: body.mainProduct,
      targetAudience: body.targetAudience,
      location: body.location,
      hasSite: body.hasSite,
      siteUrl: body.siteUrl,
      competitors: body.competitors,
      competitorUrls: body.competitorUrls,
      keywords: body.keywords,
      contentGoal: body.contentGoal,
      tone: body.tone,
      differentials: body.differentials,
      monthlyBudget: body.monthlyBudget,
      extraInfo: body.extraInfo,
      b2bOrB2c: body.b2bOrB2c,
      yearsInBusiness: body.yearsInBusiness,
      clientsServed: body.clientsServed,
      hasBlog: body.hasBlog,
      clientProblem: body.clientProblem,
      certifications: body.certifications,
      contactMethod: body.contactMethod,
      seasonality: body.seasonality,
      clientQuestions: body.clientQuestions,

      // v2 expanded fields — Step 1
      segment: body.segment,
      subNiche: body.subNiche,
      mainCity: body.mainCity,
      state: body.state,
      serviceAreas: body.serviceAreas,
      hasPhysicalLocation: body.hasPhysicalLocation,
      fullAddress: body.fullAddress,
      businessHours: body.businessHours,

      // Step 2
      highestRevenueService: body.highestRevenueService,
      averageTicket: body.averageTicket,

      // Step 3
      hasGoogleBusinessProfile: body.hasGoogleBusinessProfile,
      googleBusinessUrl: body.googleBusinessUrl,
      socialMediaUrls: body.socialMediaUrls,
      currentSeoInvestment: body.currentSeoInvestment,
      blogPostCount: body.blogPostCount,
      usesWordPress: body.usesWordPress,
      wordPressVersion: body.wordPressVersion,
      hasWpAdminAccess: body.hasWpAdminAccess,
      hasSearchConsole: body.hasSearchConsole,
      hasGoogleAnalytics: body.hasGoogleAnalytics,

      // Step 4
      styleReference: body.styleReference,
      hasCaseStudies: body.hasCaseStudies,
      caseStudiesDetails: body.caseStudiesDetails,
      hasTestimonials: body.hasTestimonials,
      hasTeamPhotos: body.hasTeamPhotos,
      hasOwnData: body.hasOwnData,
      ownDataDetails: body.ownDataDetails,
      sensitiveTopics: body.sensitiveTopics,

      // Step 5
      priorityRegions: body.priorityRegions,
      priorityServices: body.priorityServices,
      timeline: body.timeline,

      // Step 6
      competitorSitesAdmired: body.competitorSitesAdmired,
      referenceSites: body.referenceSites,
      contentConsumption: body.contentConsumption,
      desiredKeywords: body.desiredKeywords,
      additionalNotes: body.additionalNotes,

      // Step 4: Colors + Images
      colorPaletteId: body.colorPaletteId || null,
      colorPrimary: body.colorPrimary || null,
      colorSecondary: body.colorSecondary || null,
      colorAccent: body.colorAccent || null,
      logoUrl: body.logoUrl || null,
      teamPhotos: body.teamPhotos || null,
      referenceImages: body.referenceImages || null,

      // Niche-specific data
      nicheSpecificData: body.nicheSpecificData || null,

      // Step 7
      wpAdminUrl: body.wpAdminUrl,
      wpUsername: body.wpUsername,
      wpAppPassword: body.wpAppPassword,
      gscAuthorizedEmail: body.gscAuthorizedEmail,
      gaAuthorizedEmail: body.gaAuthorizedEmail,
      domainRegistrar: body.domainRegistrar,
      hostingProvider: body.hostingProvider,

      status: "completed",
      completedAt: new Date(),
    })
    .where(eq(clientOnboarding.token, token));

  // Notify operator via email (non-blocking)
  if (entry.createdBy) {
    db.select({ email: users.email })
      .from(users)
      .where(eq(users.id, entry.createdBy))
      .limit(1)
      .then(([user]) => {
        if (user?.email) {
          sendOnboardingCompleteEmail(
            user.email,
            body.clientName || body.businessName || "Cliente"
          ).catch(() => {});
        }
      })
      .catch(() => {});
  }

  return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("[onboarding POST] Error:", error);
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json({ error: `Erro ao salvar: ${message}` }, { status: 500 });
  }
}
