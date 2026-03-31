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

export async function PATCH(
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
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }

    // Already completed — don't overwrite
    if (entry.status === "completed") {
      return NextResponse.json({ ok: true });
    }

    await db
      .update(clientOnboarding)
      .set({
        clientName: body.clientName ?? entry.clientName,
        clientEmail: body.clientEmail ?? entry.clientEmail,
        businessName: body.businessName ?? entry.businessName,
        businessDescription: body.businessDescription ?? entry.businessDescription,
        mainProduct: body.mainProduct ?? entry.mainProduct,
        targetAudience: body.targetAudience ?? entry.targetAudience,
        location: body.location ?? entry.location,
        hasSite: body.hasSite ?? entry.hasSite,
        siteUrl: body.siteUrl ?? entry.siteUrl,
        competitors: body.competitors ?? entry.competitors,
        competitorUrls: body.competitorUrls ?? entry.competitorUrls,
        keywords: body.keywords ?? entry.keywords,
        contentGoal: body.contentGoal ?? entry.contentGoal,
        tone: body.tone ?? entry.tone,
        differentials: body.differentials ?? entry.differentials,
        monthlyBudget: body.monthlyBudget ?? entry.monthlyBudget,
        extraInfo: body.extraInfo ?? entry.extraInfo,
        b2bOrB2c: body.b2bOrB2c ?? entry.b2bOrB2c,
        yearsInBusiness: body.yearsInBusiness ?? entry.yearsInBusiness,
        clientsServed: body.clientsServed ?? entry.clientsServed,
        hasBlog: body.hasBlog ?? entry.hasBlog,
        clientProblem: body.clientProblem ?? entry.clientProblem,
        certifications: body.certifications ?? entry.certifications,
        contactMethod: body.contactMethod ?? entry.contactMethod,
        seasonality: body.seasonality ?? entry.seasonality,
        clientQuestions: body.clientQuestions ?? entry.clientQuestions,
        segment: body.segment ?? entry.segment,
        subNiche: body.subNiche ?? entry.subNiche,
        mainCity: body.mainCity ?? entry.mainCity,
        state: body.state ?? entry.state,
        serviceAreas: body.serviceAreas ?? entry.serviceAreas,
        hasPhysicalLocation: body.hasPhysicalLocation ?? entry.hasPhysicalLocation,
        fullAddress: body.fullAddress ?? entry.fullAddress,
        businessHours: body.businessHours ?? entry.businessHours,
        highestRevenueService: body.highestRevenueService ?? entry.highestRevenueService,
        averageTicket: body.averageTicket ?? entry.averageTicket,
        hasGoogleBusinessProfile: body.hasGoogleBusinessProfile ?? entry.hasGoogleBusinessProfile,
        googleBusinessUrl: body.googleBusinessUrl ?? entry.googleBusinessUrl,
        socialMediaUrls: body.socialMediaUrls ?? entry.socialMediaUrls,
        currentSeoInvestment: body.currentSeoInvestment ?? entry.currentSeoInvestment,
        blogPostCount: body.blogPostCount ?? entry.blogPostCount,
        usesWordPress: body.usesWordPress ?? entry.usesWordPress,
        wordPressVersion: body.wordPressVersion ?? entry.wordPressVersion,
        hasWpAdminAccess: body.hasWpAdminAccess ?? entry.hasWpAdminAccess,
        hasSearchConsole: body.hasSearchConsole ?? entry.hasSearchConsole,
        hasGoogleAnalytics: body.hasGoogleAnalytics ?? entry.hasGoogleAnalytics,
        styleReference: body.styleReference ?? entry.styleReference,
        hasCaseStudies: body.hasCaseStudies ?? entry.hasCaseStudies,
        caseStudiesDetails: body.caseStudiesDetails ?? entry.caseStudiesDetails,
        hasTestimonials: body.hasTestimonials ?? entry.hasTestimonials,
        hasTeamPhotos: body.hasTeamPhotos ?? entry.hasTeamPhotos,
        hasOwnData: body.hasOwnData ?? entry.hasOwnData,
        ownDataDetails: body.ownDataDetails ?? entry.ownDataDetails,
        sensitiveTopics: body.sensitiveTopics ?? entry.sensitiveTopics,
        priorityRegions: body.priorityRegions ?? entry.priorityRegions,
        priorityServices: body.priorityServices ?? entry.priorityServices,
        timeline: body.timeline ?? entry.timeline,
        competitorSitesAdmired: body.competitorSitesAdmired ?? entry.competitorSitesAdmired,
        referenceSites: body.referenceSites ?? entry.referenceSites,
        contentConsumption: body.contentConsumption ?? entry.contentConsumption,
        desiredKeywords: body.desiredKeywords ?? entry.desiredKeywords,
        additionalNotes: body.additionalNotes ?? entry.additionalNotes,
        colorPaletteId: body.colorPaletteId ?? entry.colorPaletteId,
        colorPrimary: body.colorPrimary ?? entry.colorPrimary,
        colorSecondary: body.colorSecondary ?? entry.colorSecondary,
        colorAccent: body.colorAccent ?? entry.colorAccent,
        logoUrl: body.logoUrl ?? entry.logoUrl,
        teamPhotos: body.teamPhotos ?? entry.teamPhotos,
        referenceImages: body.referenceImages ?? entry.referenceImages,
        nicheSpecificData: body.nicheSpecificData ?? entry.nicheSpecificData,
        wpAdminUrl: body.wpAdminUrl ?? entry.wpAdminUrl,
        wpUsername: body.wpUsername ?? entry.wpUsername,
        wpAppPassword: body.wpAppPassword ?? entry.wpAppPassword,
        gscAuthorizedEmail: body.gscAuthorizedEmail ?? entry.gscAuthorizedEmail,
        gaAuthorizedEmail: body.gaAuthorizedEmail ?? entry.gaAuthorizedEmail,
        domainRegistrar: body.domainRegistrar ?? entry.domainRegistrar,
        hostingProvider: body.hostingProvider ?? entry.hostingProvider,
      })
      .where(eq(clientOnboarding.token, token));

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("[onboarding PATCH] Error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
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
