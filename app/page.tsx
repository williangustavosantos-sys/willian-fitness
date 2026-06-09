"use client";

import { useLocale } from "@/lib/LocaleContext";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesSection from "@/components/home/ServicesSection";
import MethodSection from "@/components/home/MethodSection";
import WhyMeSection from "@/components/home/WhyMeSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import TransformationSection from "@/components/home/TransformationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TransformationSection />
      <StatsSection />
      <AboutTeaser />
      <ServicesSection />
      <MethodSection />
      <WhyMeSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
