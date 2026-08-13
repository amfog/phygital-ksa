import type { Institution, Player, RegionInfo, Partner } from "@/lib/data";

export interface PhygitalData {
  institutions: Institution[];
  players: Player[];
  regions: RegionInfo[];
  partners: Partner[];
}

export interface PhygitalRepository {
  getData(): Promise<PhygitalData>;
}
