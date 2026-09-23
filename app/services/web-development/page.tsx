import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["web-development"].metaTitle,
  description: SERVICES_DATA["web-development"].metaDescription,
};

export default function WebDevelopmentPage() {
  const service = SERVICES_DATA["web-development"];
  return <ServiceDetailView service={service} />;
}
