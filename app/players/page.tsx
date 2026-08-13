import { getPhygitalData } from "@/services/phygital";
import PlayersClient from "@/components/PlayersClient";

export default async function PlayersPage() {
  const { players, institutions } = await getPhygitalData();
  return <PlayersClient players={players} institutions={institutions} />;
}
