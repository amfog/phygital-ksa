import { getPhygitalData } from "@/services/phygital";
import InstitutionsDirectoryClient from "@/components/InstitutionsDirectoryClient";

export default async function InstitutionsDirectoryPage() {
  const { institutions } = await getPhygitalData();
  return <InstitutionsDirectoryClient institutions={institutions} />;
}
