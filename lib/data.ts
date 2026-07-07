// ===========================================================
// MOCK CMS DATA — swap this file for real Supabase queries later.
// Every consumer (pages, components) imports from here only.
// ===========================================================

export type Sector = "School" | "University" | "Corporate";
export type TournamentStatus = "Upcoming" | "Ongoing" | "Completed";
export type WinnerType = "player" | "institution";

export interface Institution {
  id: string;
  name: string;
  sector: Sector;
  city: string;
  status: "Active" | "Pending";
  logo: string;
  description: string;
  contact: { name: string; email: string; phone: string };
}

export interface Player {
  id: string;
  name: string;
  institutionId: string;
  sector: Sector;
  discipline: string;
  photo: string;
  stats: { matches: number; wins: number; placements: string };
  achievements: string[];
  social: Record<string, string>;
}

export interface Tournament {
  id: string;
  name: string;
  discipline: string;
  sector: Sector;
  dateStart: string;
  dateEnd: string;
  venue: string;
  status: TournamentStatus;
  institutionIds: string[];
  winnerId: string | null;
  winnerType: WinnerType | null;
  description: string;
}

export interface Result {
  id: string;
  tournamentId: string;
  winnerId: string;
  winnerType: WinnerType;
  runnerUpId: string;
  runnerUpType: WinnerType;
  notes: string;
  date: string;
  photo: string;
}

export interface Rule {
  id: string;
  discipline: string;
  summary: string;
  eligibility: string;
  rulebookLink: string | null;
}

export interface NewsItem {
  id: string;
  title: string;
  tag: "Result" | "Announcement" | "Partnership" | "Creator Content";
  date: string;
  cover: string;
  tournamentId: string | null;
  body: string;
}

export interface Partner {
  id: string;
  name: string;
  tier: "Federation" | "International Body" | "Sponsor";
  logo: string;
  link: string;
}

export const institutions: Institution[] = [
  { id: "inst-001", name: "King Saud University", sector: "University", city: "Riyadh", status: "Active",
    logo: "KSU", description: "Founding university partner for the national phygital deployment framework.",
    contact: { name: "Faisal Al-Otaibi", email: "faisal.otaibi@ksu.edu.sa", phone: "+966 50 000 0001" } },
  { id: "inst-002", name: "Al-Ittihad Al-Saudi Academy", sector: "Corporate", city: "Jeddah", status: "Active",
    logo: "ITHD", description: "Club academy hosting the SEF Arena phygital tournament track.",
    contact: { name: "Sara Al-Ghamdi", email: "sara.ghamdi@ittihad.sa", phone: "+966 50 000 0002" } },
  { id: "inst-003", name: "Riyadh Schools Cluster 4", sector: "School", city: "Riyadh", status: "Active",
    logo: "RSC4", description: "Public school cluster onboarded through the national schools track.",
    contact: { name: "Mona Al-Zahrani", email: "mona.zahrani@rsc4.edu.sa", phone: "+966 50 000 0003" } },
  { id: "inst-004", name: "NEOM Sports Corporate League", sector: "Corporate", city: "NEOM", status: "Pending",
    logo: "NEOM", description: "Corporate wellness league evaluating phygital format for FY27 rollout.",
    contact: { name: "Yousef Al-Harbi", email: "yousef.harbi@neom.sa", phone: "+966 50 000 0004" } },
  { id: "inst-005", name: "Dammam International School", sector: "School", city: "Dammam", status: "Active",
    logo: "DIS", description: "Eastern Province school pilot for the phygital PE curriculum.",
    contact: { name: "Layla Al-Muraikhi", email: "layla.m@dis.edu.sa", phone: "+966 50 000 0005" } },
  { id: "inst-006", name: "Prince Sultan University", sector: "University", city: "Riyadh", status: "Active",
    logo: "PSU", description: "University esports program integrating phygital formats into varsity play.",
    contact: { name: "Omar Al-Dosari", email: "omar.dosari@psu.edu.sa", phone: "+966 50 000 0006" } }
];

export const players: Player[] = [
  { id: "plr-001", name: "Abdullah Al-Qahtani", institutionId: "inst-001", sector: "University", discipline: "Phygital Football",
    photo: "AQ", stats: { matches: 14, wins: 10, placements: "1st x2, 2nd x1" },
    achievements: ["SEF Arena Qualifier Winner", "MVP — Spring Circuit"], social: { twitter: "#", instagram: "#" } },
  { id: "plr-002", name: "Fatimah Al-Shehri", institutionId: "inst-003", sector: "School", discipline: "Phygital Racing",
    photo: "FS", stats: { matches: 9, wins: 6, placements: "1st x1" },
    achievements: ["Rookie of the Season"], social: { instagram: "#" } },
  { id: "plr-003", name: "Khalid Al-Mutairi", institutionId: "inst-002", sector: "Corporate", discipline: "Phygital Football",
    photo: "KM", stats: { matches: 20, wins: 15, placements: "1st x3" },
    achievements: ["National Deployment Ambassador", "SEF Arena Finalist"], social: { twitter: "#" } },
  { id: "plr-004", name: "Noura Al-Otaibi", institutionId: "inst-006", sector: "University", discipline: "Phygital Basketball",
    photo: "NO", stats: { matches: 11, wins: 7, placements: "2nd x2" },
    achievements: ["Top Scorer — Winter Cup"], social: { instagram: "#", twitter: "#" } },
  { id: "plr-005", name: "Saad Al-Ghamdi", institutionId: "inst-005", sector: "School", discipline: "Phygital Racing",
    photo: "SG", stats: { matches: 7, wins: 4, placements: "3rd x1" },
    achievements: [], social: {} },
  { id: "plr-006", name: "Hessa Al-Dosari", institutionId: "inst-001", sector: "University", discipline: "Phygital Basketball",
    photo: "HD", stats: { matches: 12, wins: 9, placements: "1st x1, 2nd x1" },
    achievements: ["Games of the Future Nominee"], social: { instagram: "#" } }
];

export const tournaments: Tournament[] = [
  { id: "trn-001", name: "SEF Arena Phygital Open", discipline: "Phygital Football", sector: "Corporate",
    dateStart: "2026-08-14", dateEnd: "2026-08-16", venue: "SEF Arena, Jeddah", status: "Upcoming",
    institutionIds: ["inst-002", "inst-004"], winnerId: null, winnerType: null,
    description: "The flagship hosting partnership between Phygital KSA and Al-Ittihad Al-Saudi." },
  { id: "trn-002", name: "National Universities Cup", discipline: "Phygital Basketball", sector: "University",
    dateStart: "2026-07-20", dateEnd: "2026-07-22", venue: "KSU Sports Complex, Riyadh", status: "Ongoing",
    institutionIds: ["inst-001", "inst-006"], winnerId: null, winnerType: null,
    description: "Inter-university phygital basketball championship under the national framework." },
  { id: "trn-003", name: "Schools Spring Circuit — Finals", discipline: "Phygital Racing", sector: "School",
    dateStart: "2026-05-02", dateEnd: "2026-05-03", venue: "Riyadh Youth Hall", status: "Completed",
    institutionIds: ["inst-003", "inst-005"], winnerId: "plr-002", winnerType: "player",
    description: "Season-closing finals for the schools phygital racing track." },
  { id: "trn-004", name: "Corporate League Kickoff", discipline: "Phygital Football", sector: "Corporate",
    dateStart: "2026-04-10", dateEnd: "2026-04-10", venue: "Al-Ittihad Academy, Jeddah", status: "Completed",
    institutionIds: ["inst-002"], winnerId: "plr-003", winnerType: "player",
    description: "First sanctioned corporate-track event ahead of the SEF Arena partnership." }
];

export const results: Result[] = [
  { id: "res-001", tournamentId: "trn-003", winnerId: "plr-002", winnerType: "player",
    runnerUpId: "inst-005", runnerUpType: "institution", notes: "Decided on final lap tiebreak.",
    date: "2026-05-03", photo: "RES1" },
  { id: "res-002", tournamentId: "trn-004", winnerId: "plr-003", winnerType: "player",
    runnerUpId: "inst-004", runnerUpType: "institution", notes: "3–1 aggregate across two legs.",
    date: "2026-04-10", photo: "RES2" }
];

export const rules: Rule[] = [
  { id: "rul-001", discipline: "Phygital Football", summary: "[PLACEHOLDER] Hybrid format combining a digital match segment with a physical 5-a-side segment; aggregate score determines the winner.",
    eligibility: "[PLACEHOLDER] Open to registered institution rosters, ages 15+.", rulebookLink: null },
  { id: "rul-002", discipline: "Phygital Racing", summary: "[PLACEHOLDER] Sim-racing qualifying followed by a physical go-kart or track final.",
    eligibility: "[PLACEHOLDER] Open to all sectors; school entrants require guardian consent form.", rulebookLink: null },
  { id: "rul-003", discipline: "Phygital Basketball", summary: "[PLACEHOLDER] Digital 3v3 segment plus a physical shootout segment, combined scoring.",
    eligibility: "[PLACEHOLDER] University and corporate sectors only for the 2026 season.", rulebookLink: null }
];

export const news: NewsItem[] = [
  { id: "news-001", title: "Phygital KSA Launches as the Kingdom's National Phygital Platform", tag: "Announcement",
    date: "2026-06-18", cover: "N1", tournamentId: null,
    body: "Phygital KSA has been confirmed as the national operator for phygital competition in Saudi Arabia, overseeing both the SEF Arena hosting partnership with Al-Ittihad Al-Saudi and the national schools, universities, and corporate deployment framework. [PLACEHOLDER — full announcement copy pending federation sign-off]." },
  { id: "news-002", title: "SEF Arena Partnership With Al-Ittihad Al-Saudi Confirmed", tag: "Partnership",
    date: "2026-06-10", cover: "N2", tournamentId: "trn-001",
    body: "Phygital KSA and Al-Ittihad Al-Saudi have finalized the hosting agreement for the SEF Arena Phygital Open, scheduled for August 2026 in Jeddah. [PLACEHOLDER — quote from club leadership]." },
  { id: "news-003", title: "Schools Spring Circuit Wraps With Racing Finals in Riyadh", tag: "Result",
    date: "2026-05-04", cover: "N3", tournamentId: "trn-003",
    body: "Fatimah Al-Shehri of Riyadh Schools Cluster 4 claimed the Spring Circuit racing title in a final-lap tiebreak. [PLACEHOLDER — recap and standings]." },
  { id: "news-004", title: "Creator Series: Inside the Phygital Format", tag: "Creator Content",
    date: "2026-04-28", cover: "N4", tournamentId: null,
    body: "A new creator content series explains how phygital competition blends digital and physical play for new audiences. [PLACEHOLDER — video embed / creator credits]." }
];

export const partners: Partner[] = [
  { id: "par-001", name: "Al-Ittihad Al-Saudi", tier: "Federation", logo: "[LOGO]", link: "#" },
  { id: "par-002", name: "Phygital International", tier: "International Body", logo: "[LOGO]", link: "#" },
  { id: "par-003", name: "Games of the Future", tier: "International Body", logo: "[LOGO]", link: "#" },
  { id: "par-004", name: "[Sponsor Name Pending]", tier: "Sponsor", logo: "[LOGO]", link: "#" }
];

/* ---------- National map: region metadata ---------- */
export interface RegionInfo {
  name: string;
  nameAr: string;
  cities: string[];
  capital: string;
  status: "Active" | "Onboarding" | "Not Yet Deployed";
}

export const regions: RegionInfo[] = [
  { name: "Riyadh", nameAr: "الرياض", cities: ["Riyadh"], capital: "Riyadh", status: "Active" },
  { name: "Makkah", nameAr: "مكة المكرمة", cities: ["Jeddah", "Makkah"], capital: "Jeddah", status: "Active" },
  { name: "Eastern Region", nameAr: "المنطقة الشرقية", cities: ["Dammam"], capital: "Dammam", status: "Active" },
  { name: "Tabuk", nameAr: "تبوك", cities: ["NEOM"], capital: "Tabuk", status: "Onboarding" },
  { name: "Madinah", nameAr: "المدينة المنورة", cities: [], capital: "Madinah", status: "Not Yet Deployed" },
  { name: "Qassim", nameAr: "القصيم", cities: [], capital: "Buraidah", status: "Not Yet Deployed" },
  { name: "Asir", nameAr: "عسير", cities: [], capital: "Abha", status: "Not Yet Deployed" },
  { name: "Hail", nameAr: "حائل", cities: [], capital: "Hail", status: "Not Yet Deployed" },
  { name: "Jizan", nameAr: "جازان", cities: [], capital: "Jizan", status: "Not Yet Deployed" },
  { name: "Najran", nameAr: "نجران", cities: [], capital: "Najran", status: "Not Yet Deployed" },
  { name: "Bahah", nameAr: "الباحة", cities: [], capital: "Al Bahah", status: "Not Yet Deployed" },
  { name: "Jawf", nameAr: "الجوف", cities: [], capital: "Sakakah", status: "Not Yet Deployed" },
  { name: "Northern Region", nameAr: "الحدود الشمالية", cities: [], capital: "Arar", status: "Not Yet Deployed" },
];

export const institutionsInRegion = (regionName: string) => {
  const region = regions.find((r) => r.name === regionName);
  if (!region) return [];
  return institutions.filter((i) => region.cities.includes(i.city));
};

export const playersInRegion = (regionName: string) => {
  const insts = institutionsInRegion(regionName).map((i) => i.id);
  return players.filter((p) => insts.includes(p.institutionId));
};


/* ---------- Saudi Legends: national phygital team ---------- */
export interface NationalTeamPlayer {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface NationalCompetition {
  name: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  status: "Qualified" | "Competing" | "Completed";
  description: string;
}

export const saudiLegendsRoster: NationalTeamPlayer[] = [
  { id: "nt-001", name: "Faris Al-Qahtani", role: "Captain · Phygital Football", photo: "FQ",
    bio: "Squad captain leading the digital-segment lineup, drawn from the national deployment framework's top performers." },
  { id: "nt-002", name: "Turki Al-Anazi", role: "Physical Segment Lead", photo: "TA",
    bio: "Anchors the physical 5-a-side segment, selected through the SEF Arena qualification pathway." },
  { id: "nt-003", name: "Yazan Al-Harbi", role: "Digital Segment Specialist", photo: "YH",
    bio: "Top-ranked digital segment performer from the national universities circuit." },
  { id: "nt-004", name: "Bandar Al-Otaibi", role: "Utility / Substitute", photo: "BO",
    bio: "Cross-trained across both segments, called up from the corporate league track." },
  { id: "nt-005", name: "Majed Al-Shammari", role: "Physical Segment", photo: "MS",
    bio: "Physical segment starter with a background in traditional football academies." },
  { id: "nt-006", name: "Rakan Al-Dosari", role: "Digital Segment", photo: "RD",
    bio: "Digital segment starter, part of the inaugural national team call-up class." },
];

export const gamesOfTheFuture2026: NationalCompetition = {
  name: "Games of the Future 2026",
  location: "Astana, Kazakhstan",
  dateStart: "2026-07-28",
  dateEnd: "2026-08-05",
  status: "Qualified",
  description:
    "Saudi Legends has qualified to represent the Kingdom in phygital football at the Games of the Future 2026, the flagship international phygital multi-sport event. [PLACEHOLDER — official squad announcement and match schedule pending federation confirmation].",
};

/* ---------- Shared lookup helpers ---------- */
export const getInstitution = (id?: string | null) => institutions.find(i => i.id === id) ?? null;
export const getPlayer = (id?: string | null) => players.find(p => p.id === id) ?? null;
export const getTournament = (id?: string | null) => tournaments.find(t => t.id === id) ?? null;

export const getWinnerName = (id: string | null, type: WinnerType | null): string => {
  if (!id) return "TBD";
  return type === "player" ? getPlayer(id)?.name ?? "TBD" : getInstitution(id)?.name ?? "TBD";
};

export const playersOf = (institutionId: string) => players.filter(p => p.institutionId === institutionId);
export const tournamentsOf = (institutionId: string) => tournaments.filter(t => t.institutionIds.includes(institutionId));

export const fmtDate = (d?: string | null): string => {
  if (!d) return "TBD";
  return new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

export const statusBadgeClass = (status: TournamentStatus): string => {
  if (status === "Upcoming") return "badge-upcoming";
  if (status === "Ongoing") return "badge-ongoing";
  return "badge-completed";
};