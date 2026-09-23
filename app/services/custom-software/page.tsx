import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["custom-software-development"].metaTitle,
  description: SERVICES_DATA["custom-software-development"].metaDescription,
};

export default function CustomSoftwareAliasPage() {
  const service = SERVICES_DATA["custom-software-development"];
  return <ServiceDetailView service={service} />;
}
