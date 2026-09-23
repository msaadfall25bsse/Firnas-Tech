import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["branding"].metaTitle,
  description: SERVICES_DATA["branding"].metaDescription,
};

export default function BrandingPage() {
  const service = SERVICES_DATA["branding"];
  return <ServiceDetailView service={service} />;
}
