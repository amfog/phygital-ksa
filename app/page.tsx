import { getPhygitalData } from "@/services/phygital";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const { institutions, players } = await getPhygitalData();
  return <HomeClient institutionsCount={institutions.length} playersCount={players.length} />;
}
