import { institutions, players, regions, partners } from "@/lib/data";
import type { PhygitalRepository, PhygitalData } from "./PhygitalRepository";

export class MockPhygitalRepository implements PhygitalRepository {
  async getData(): Promise<PhygitalData> {
    return { institutions, players, regions, partners };
  }
}
