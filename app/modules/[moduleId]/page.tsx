import { notFound } from "next/navigation";
import { getModuleData } from "@/data/modules";
import ModuleContent from "@/components/ModuleContent";

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const module = getModuleData(params.moduleId);
  
  if (!module) {
    notFound();
  }

  return <ModuleContent module={module} />;
}

