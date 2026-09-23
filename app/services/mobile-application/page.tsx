import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["mobile-app-development"].metaTitle,
  description: SERVICES_DATA["mobile-app-development"].metaDescription,
};

export default function MobileApplicationAliasPage() {
  const service = SERVICES_DATA["mobile-app-development"];
  return <ServiceDetailView service={service} />;
}
