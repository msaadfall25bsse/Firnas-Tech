import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["ai-ml-genai-development"].metaTitle,
  description: SERVICES_DATA["ai-ml-genai-development"].metaDescription,
};

export default function AiMlGenAiPage() {
  const service = SERVICES_DATA["ai-ml-genai-development"];
  return <ServiceDetailView service={service} />;
}
