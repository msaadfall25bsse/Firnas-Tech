import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["ui-ux"].metaTitle,
  description: SERVICES_DATA["ui-ux"].metaDescription,
};

export default function UiUxPage() {
  const service = SERVICES_DATA["ui-ux"];
  return <ServiceDetailView service={service} />;
}
