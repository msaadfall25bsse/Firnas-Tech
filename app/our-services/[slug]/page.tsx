import React from "react";
import { notFound, redirect } from "next/navigation";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { SERVICES_DATA } from "@/lib/data/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Services | FIRNAS.TECH" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function OurServicesSlugPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Normalization mappings
  const normalizedSlug =
    slug === "custom-software"
      ? "custom-software-development"
      : slug === "mobile-application"
      ? "mobile-app-development"
      : slug;

  const service = SERVICES_DATA[normalizedSlug];
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
