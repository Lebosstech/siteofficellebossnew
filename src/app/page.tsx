import React from 'react';
import type { Metadata } from 'next';
import { IntroSequence } from '@/components/motion/intro-sequence';
import { HeroInteractiveScene } from '@/components/home/hero-interactive-scene';
import { ManifestoSection } from '@/components/home/manifesto-section';
import { ExpertiseInteractive } from '@/components/home/expertise-interactive';
import { SelectedWorkSection } from '@/components/home/selected-work-section';
import { MethodologySection } from '@/components/home/methodology-section';
import { StudioAboutSection } from '@/components/home/studio-about-section';
import { ContactSection } from '@/components/home/contact-section';

export const metadata: Metadata = {
  title: 'LEBOSS TECH — Studio Technologique & Ingénierie Créative à Abidjan',
  description:
    'Studio technologique d’ingénierie logicielle, d’architectures distribuées et d’infrastructures informatiques critiques basé à Abidjan, Côte d’Ivoire. Nous imaginons, concevons et développons des solutions d’exception.',
};

export default function HomePage() {
  return (
    <>
      {/* Chapter 01: Luminous Signature Intro Sequence */}
      <IntroSequence />

      <div className="relative flex flex-col">
        {/* Chapter 02: Immersive Hero with Tilted Architectural Glass Viewport */}
        <HeroInteractiveScene />

        {/* Chapter 03: Typographic Manifesto & Philosophy */}
        <ManifestoSection />

        {/* Chapter 04: Interactive Disciplines Explorer */}
        <ExpertiseInteractive />

        {/* Chapter 05: Selected Work & Genuine Case Studies */}
        <SelectedWorkSection />

        {/* Chapter 06: From Complexity to Clarity Methodology */}
        <MethodologySection />

        {/* Chapter 07: The Studio, Culture & Abidjan Implantation */}
        <StudioAboutSection />

        {/* Chapter 08: Direct Architectural Consultation & Closure */}
        <ContactSection />
      </div>
    </>
  );
}
