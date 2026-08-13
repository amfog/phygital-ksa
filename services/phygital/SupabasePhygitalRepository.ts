import { supabase } from "@/lib/supabase";
import type { Institution, Player, RegionInfo, Partner } from "@/lib/data";
import type { PhygitalRepository, PhygitalData } from "./PhygitalRepository";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

type RegionRow = {
  id: string;
  name: string;
  name_ar: string | null;
  capital: string | null;
  status: "active" | "onboarding" | "not_yet_deployed";
};

type InstitutionRow = {
  id: string;
  name: string;
  sector: "School" | "University" | "Corporate";
  city: string | null;
  region_id: string | null;
  status: "Active" | "Pending";
  logo_url: string | null;
  description: string | null;
  contact_name: string | null;
  contact_email: string | null;
  contact_phone: string | null;
};

type PlayerRow = {
  id: string;
  name: string;
  institution_id: string | null;
  sector: "School" | "University" | "Corporate" | null;
  discipline: string;
  photo_url: string | null;
  stats_matches: number;
  stats_wins: number;
  stats_placements: string | null;
  achievements: string[] | null;
  social_instagram: string | null;
  social_twitter: string | null;
  social_tiktok: string | null;
};

type PartnerRow = {
  id: string;
  name: string;
  tier: "Federation" | "International Body" | "Sponsor";
  logo_url: string | null;
  link: string | null;
};

function mapRegion(row: RegionRow): RegionInfo {
  const status =
    row.status === "active" ? "Active" : row.status === "onboarding" ? "Onboarding" : "Not Yet Deployed";
  return {
    id: row.id,
    name: row.name,
    nameAr: row.name_ar ?? "",
    cities: [],
    capital: row.capital ?? "",
    status,
  };
}

function mapInstitution(row: InstitutionRow): Institution {
  return {
    id: row.id,
    name: row.name,
    sector: row.sector,
    city: row.city ?? "",
    regionId: row.region_id ?? undefined,
    status: row.status,
    logo: initials(row.name),
    logoUrl: row.logo_url ?? undefined,
    description: row.description ?? "",
    contact: {
      name: row.contact_name ?? "",
      email: row.contact_email ?? "",
      phone: row.contact_phone ?? "",
    },
  };
}

function mapPlayer(row: PlayerRow): Player {
  const social: Record<string, string> = {};
  if (row.social_instagram) social.instagram = row.social_instagram;
  if (row.social_twitter) social.twitter = row.social_twitter;
  if (row.social_tiktok) social.tiktok = row.social_tiktok;

  return {
    id: row.id,
    name: row.name,
    institutionId: row.institution_id ?? "",
    sector: row.sector ?? "School",
    discipline: row.discipline,
    photo: initials(row.name),
    photoUrl: row.photo_url ?? undefined,
    stats: {
      matches: row.stats_matches,
      wins: row.stats_wins,
      placements: row.stats_placements ?? "",
    },
    achievements: row.achievements ?? [],
    social,
  };
}

function mapPartner(row: PartnerRow): Partner {
  return {
    id: row.id,
    name: row.name,
    tier: row.tier,
    logo: "[LOGO]",
    logoUrl: row.logo_url ?? undefined,
    link: row.link ?? "#",
  };
}

/**
 * Reads the same Supabase project Vicious OS's Phygital Hub writes to:
 * regions, institutions, phygital_players, phygital_partners.
 */
export class SupabasePhygitalRepository implements PhygitalRepository {
  async getData(): Promise<PhygitalData> {
    if (!supabase) {
      return { institutions: [], players: [], regions: [], partners: [] };
    }

    const [regionsRes, institutionsRes, playersRes, partnersRes] = await Promise.all([
      supabase.from("regions").select("*"),
      supabase.from("institutions").select("*"),
      supabase.from("phygital_players").select("*"),
      supabase.from("phygital_partners").select("*").order("sort_order", { ascending: true }),
    ]);

    const firstError =
      regionsRes.error ?? institutionsRes.error ?? playersRes.error ?? partnersRes.error;
    if (firstError) throw firstError;

    return {
      regions: ((regionsRes.data ?? []) as RegionRow[]).map(mapRegion),
      institutions: ((institutionsRes.data ?? []) as InstitutionRow[]).map(mapInstitution),
      players: ((playersRes.data ?? []) as PlayerRow[]).map(mapPlayer),
      partners: ((partnersRes.data ?? []) as PartnerRow[]).map(mapPartner),
    };
  }
}
