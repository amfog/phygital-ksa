// ===========================================================
// TRANSLATION DICTIONARY
// Add new keys here as pages get translated. Keep keys grouped
// by the area of the site they belong to so this stays navigable
// as it grows past the initial nav/footer/homepage coverage.
//
// Pattern for translating a new page: import { useTranslation }
// from "@/lib/i18n/LanguageContext", call const { t } = useTranslation(),
// then use t("section.key") anywhere a hardcoded string currently sits.
// Add the matching key to BOTH `en` and `ar` below — missing Arabic
// keys fall back to the English string (see LanguageContext.tsx).
// ===========================================================

export const translations = {
  en: {
    nav: {
      home: "Home",
      map: "Map",
      about: "About",
      team: "Saudi Legends",
      institutionsHub: "Institutions Hub",
      directory: "Directory",
      players: "Players",
      calendar: "Calendar",
      hallOfFame: "Hall of Fame",
      rules: "Rules",
      news: "News",
      partners: "Partners",
      contact: "Contact",
    },
    footer: {
      tagline:
        "The national hub for phygital competition in Saudi Arabia — hosting the SEF Arena tournament with Al-Ittihad Al-Saudi and aligned with Phygital International.",
      compete: "Compete",
      registerInstitution: "Register Institution",
      tournamentCalendar: "Tournament Calendar",
      hallOfFame: "Hall of Fame",
      explore: "Explore",
      directory: "Directory",
      players: "Players",
      rulesFormats: "Rules & Formats",
      connect: "Connect",
      news: "News",
      partners: "Partners",
      contact: "Contact",
      rights: "All rights reserved.",
      builtBy: "Built by",
    },
    home: {
      eyebrow: "National Operator · Saudi Arabia",
      titleLine1: "The National Face",
      titleLine2: "of Phygital in",
      titleLine3: "Saudi Arabia",
      subtitle:
        "Phygital KSA runs phygital competition across the Kingdom — hosting the SEF Arena tournament with Al-Ittihad Al-Saudi, and deploying a standardized framework across schools, universities, and corporates, aligned with Phygital International and the Games of the Future.",
      registerCta: "Register Your Institution",
      calendarCta: "View National Calendar",
      statsInstitutions: "Institutions Registered",
      statsPlayers: "Registered Players",
      statsTournaments: "Sanctioned Tournaments",
      tracksTag: "Two Tracks, One System",
      tracksTitle: "How Phygital KSA Works",
      sefTitle: "SEF Arena Hosting",
      sefBody:
        "In partnership with Al-Ittihad Al-Saudi, Phygital KSA hosts the flagship Phygital Tournament at SEF Arena — the Kingdom's marquee phygital competition event.",
      sefCta: "View SEF Arena Open",
      deploymentTitle: "National Deployment Framework",
      deploymentBody:
        "A standardized onboarding system for schools, universities, and corporates — building a pathway to Phygital International and Games of the Future eligibility.",
      deploymentCta: "Onboard an Institution",
      featuredTag: "Live Now",
      featuredTitle: "Featured Tournament",
      viewDetails: "View Details",
      noLiveTournament: "No live tournament right now — check the calendar.",
      hofTag: "Hall of Fame",
      hofTitle: "Most Recent Winner",
      viewHof: "View Hall of Fame",
    },
    langToggle: {
      label: "EN / AR",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      map: "الخريطة",
      about: "من نحن",
      team: "الأساطير السعودية",
      institutionsHub: "بوابة المؤسسات",
      directory: "الدليل",
      players: "اللاعبون",
      calendar: "التقويم",
      hallOfFame: "قاعة الأبطال",
      rules: "القوانين",
      news: "الأخبار",
      partners: "الشركاء",
      contact: "تواصل معنا",
    },
    footer: {
      tagline:
        "المنصة الوطنية للمنافسات الفيجيتال في المملكة العربية السعودية — تستضيف بطولة ساحة SEF مع الاتحاد السعودي، وتتماشى مع الاتحاد الدولي للفيجيتال.",
      compete: "المنافسة",
      registerInstitution: "تسجيل مؤسسة",
      tournamentCalendar: "تقويم البطولات",
      hallOfFame: "قاعة الأبطال",
      explore: "استكشف",
      directory: "الدليل",
      players: "اللاعبون",
      rulesFormats: "القوانين والأنظمة",
      connect: "تواصل",
      news: "الأخبار",
      partners: "الشركاء",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
      builtBy: "تطوير",
    },
    home: {
      eyebrow: "المشغل الوطني · المملكة العربية السعودية",
      titleLine1: "الوجه الوطني",
      titleLine2: "للفيجيتال في",
      titleLine3: "المملكة العربية السعودية",
      subtitle:
        "تدير فيجيتال السعودية منافسات الفيجيتال في جميع أنحاء المملكة — تستضيف بطولة ساحة SEF مع الاتحاد السعودي، وتنشر إطار عمل موحد عبر المدارس والجامعات والشركات، بما يتماشى مع الاتحاد الدولي للفيجيتال وألعاب المستقبل.",
      registerCta: "سجّل مؤسستك",
      calendarCta: "عرض التقويم الوطني",
      statsInstitutions: "مؤسسة مسجّلة",
      statsPlayers: "لاعب مسجّل",
      statsTournaments: "بطولة معتمدة",
      tracksTag: "مساران، نظام واحد",
      tracksTitle: "كيف تعمل فيجيتال السعودية",
      sefTitle: "استضافة ساحة SEF",
      sefBody:
        "بالشراكة مع الاتحاد السعودي، تستضيف فيجيتال السعودية بطولة الفيجيتال الرئيسية في ساحة SEF — أبرز حدث للمنافسات الفيجيتال في المملكة.",
      sefCta: "عرض بطولة ساحة SEF",
      deploymentTitle: "إطار الانتشار الوطني",
      deploymentBody:
        "نظام تسجيل موحّد للمدارس والجامعات والشركات — يبني مسارًا نحو الأهلية في الاتحاد الدولي للفيجيتال وألعاب المستقبل.",
      deploymentCta: "سجّل مؤسسة",
      featuredTag: "مباشر الآن",
      featuredTitle: "البطولة المميزة",
      viewDetails: "عرض التفاصيل",
      noLiveTournament: "لا توجد بطولة مباشرة حاليًا — تحقق من التقويم.",
      hofTag: "قاعة الأبطال",
      hofTitle: "آخر بطل",
      viewHof: "عرض قاعة الأبطال",
    },
    langToggle: {
      label: "AR / EN",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationDict = typeof translations.en;