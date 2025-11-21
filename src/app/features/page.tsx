"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import { Zap } from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Vehicles", id: "vehicles" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CarShare"
          button={{
            text: "Get Started",
            href: "https://app.carshare.com"
          }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Smart Features for Modern Living"
          description="Experience the future of car sharing with our cutting-edge technology and user-centric features designed for today's urban lifestyle."
          tag="Features"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Features", href: "vehicles" }
          ]}
          features={[
            {
              id: "01",
              title: "Smart Booking",
              description: "Reserve your perfect vehicle in seconds with our intelligent matching system that considers your preferences and location.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Smart booking interface"
            },
            {
              id: "02",
              title: "Keyless Entry",
              description: "Unlock and start any vehicle using just your smartphone. No physical keys needed, just seamless digital access.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Keyless entry system"
            },
            {
              id: "03",
              title: "Full Coverage",
              description: "Drive with confidence knowing you're protected by comprehensive insurance coverage included in every trip.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Insurance coverage protection"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
    </>
  );
}