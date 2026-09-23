import React from "react";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

export const metadata = {
  title: SERVICES_DATA["staff-augmentation"].metaTitle,
  description: SERVICES_DATA["staff-augmentation"].metaDescription,
};

export default function StaffAugmentationPage() {
  const service = SERVICES_DATA["staff-augmentation"];
  return <ServiceDetailView service={service} />;
}
