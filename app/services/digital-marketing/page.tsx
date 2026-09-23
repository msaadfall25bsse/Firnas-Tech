import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["digital-marketing"].metaTitle,
  description: SERVICES_DATA["digital-marketing"].metaDescription,
};

export default function DigitalMarketingPage() {
  const service = SERVICES_DATA["digital-marketing"];
  return <ServiceDetailView service={service} />;
}
