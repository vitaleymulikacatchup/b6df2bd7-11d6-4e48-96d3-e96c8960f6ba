"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import { Car, Smartphone, DollarSign, Star, TrendingUp, Users, MapPin, Heart } from "lucide-react";

export default function OverviewPage() {
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="CarShare"
          description="Discover the freedom of shared mobility. Access premium vehicles whenever you need them, wherever you are."
          buttons={[
            { text: "Start Sharing", href: "https://app.carshare.com" },
            { text: "Learn More", href: "about" }
          ]}
          slides={[
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Modern electric car sharing" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Compact car sharing in city" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Luxury car sharing service" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "SUV car sharing for families" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Eco-friendly electric vehicles" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Revolutionizing Urban Mobility"
          description="CarShare transforms the way you move through the city. Our innovative platform connects you with a diverse fleet of vehicles, from eco-friendly electrics to luxury rides, all available at your fingertips."
          tag="About CarShare"
          tagIcon={Car}
          buttons={[
            { text: "Join Now", href: "https://app.carshare.com" },
            { text: "Learn More", href: "features" }
          ]}
          bulletPoints={[
            {
              title: "Instant Access",
              description: "Book and unlock vehicles instantly through our mobile app. No waiting, no hassle.",
              icon: Smartphone
            },
            {
              title: "Flexible Pricing",
              description: "Pay only for what you use with transparent, competitive rates and no hidden fees.",
              icon: DollarSign
            },
            {
              title: "Premium Fleet",
              description: "Choose from economy cars to luxury vehicles, all maintained to the highest standards.",
              icon: Star
            }
          ]}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Car sharing app interface"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by Thousands"
          description="Join a growing community of smart commuters who have discovered the convenience of shared mobility."
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "users",
              value: "50K+",
              title: "Active Users",
              description: "Happy members across the city",
              icon: Users
            },
            {
              id: "vehicles",
              value: "500+",
              title: "Vehicles",
              description: "Premium cars ready to roll",
              icon: Car
            },
            {
              id: "trips",
              value: "1M+",
              title: "Trips Completed",
              description: "Safe journeys and counting",
              icon: MapPin
            },
            {
              id: "satisfaction",
              value: "98%",
              title: "Satisfaction",
              description: "Customer happiness rate",
              icon: Heart
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
    </>
  );
}