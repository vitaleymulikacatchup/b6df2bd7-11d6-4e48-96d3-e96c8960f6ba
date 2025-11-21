"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Car, Smartphone, CreditCard, Shield, MapPin, Clock, CheckCircle, Star } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
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
        <HeroBillboard
          title="Smart Urban Mobility"
          description="Transform your daily commute with instant access to premium vehicles. No ownership hassles, just pure convenience."
          tag="New Era of Transportation"
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="CarShare app dashboard"
          frameStyle="browser"
          buttons={[
            { text: "Start Sharing", href: "https://app.carshare.com" },
            { text: "Learn More", href: "features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose CarShare"
          description="Experience the freedom of urban mobility with our comprehensive car sharing platform"
          tag="Features"
          tagIcon={Car}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Instant Booking",
              description: "Book any vehicle instantly through our mobile app. Cars are available 24/7 across the city.",
              icon: Smartphone
            },
            {
              title: "Flexible Pricing",
              description: "Pay only for what you use. Hourly, daily, or monthly options to fit your lifestyle.",
              icon: CreditCard
            },
            {
              title: "Full Insurance",
              description: "Comprehensive insurance coverage included in every trip. Drive with complete peace of mind.",
              icon: Shield
            },
            {
              title: "City-Wide Access",
              description: "Pick up and drop off at hundreds of locations throughout the metropolitan area.",
              icon: MapPin
            }
          ]}
        />
      </div>

      <div id="vehicles" data-section="vehicles">
        <ProductCardOne
          title="Our Vehicle Fleet"
          description="Choose from our diverse range of premium vehicles, perfect for any journey"
          tag="Fleet"
          tagIcon={Car}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          products={[
            {
              id: "compact-1",
              name: "City Compact",
              price: "$8/hour",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Compact city car"
            },
            {
              id: "suv-1",
              name: "Urban SUV",
              price: "$12/hour",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Urban SUV"
            },
            {
              id: "electric-1",
              name: "Electric Sedan",
              price: "$10/hour",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Electric sedan"
            },
            {
              id: "luxury-1",
              name: "Premium Luxury",
              price: "$18/hour",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Luxury vehicle"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that works best for your lifestyle and budget"
          tag="Pricing"
          tagIcon={CreditCard}
          animationType="slide-up"
          textboxLayout="default"
          plans={[
            {
              id: "basic",
              badge: "Pay As You Go",
              badgeIcon: Clock,
              price: "$0.50/min",
              subtitle: "Perfect for occasional users",
              features: [
                "No monthly commitment",
                "Access to all vehicles",
                "Insurance included",
                "24/7 customer support"
              ],
              buttons: [
                { text: "Start Now", href: "https://app.carshare.com" },
                { text: "Learn More", href: "contact" }
              ]
            },
            {
              id: "monthly",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$49/month",
              subtitle: "Best value for regular commuters",
              features: [
                "20 hours included monthly",
                "$0.30/min additional time",
                "Priority vehicle access",
                "Premium vehicle upgrades",
                "Dedicated support line"
              ],
              buttons: [
                { text: "Subscribe", href: "https://app.carshare.com" },
                { text: "Contact Sales", href: "contact" }
              ]
            },
            {
              id: "business",
              badge: "Business",
              badgeIcon: CheckCircle,
              price: "$199/month",
              subtitle: "Designed for businesses and teams",
              features: [
                "100 hours included monthly",
                "$0.25/min additional time",
                "Team management dashboard",
                "Expense reporting tools",
                "Volume discounts available"
              ],
              buttons: [
                { text: "Get Started", href: "https://app.carshare.com" },
                { text: "Schedule Demo", href: "contact" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Users Say"
          description="Real stories from real people who have transformed their daily commute with CarShare"
          tag="Reviews"
          tagIcon={Star}
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "alex",
              name: "Alex Thompson",
              role: "Software Engineer",
              testimonial: "CarShare completely changed how I get around the city. The convenience and cost savings are incredible! No more car payments or parking hassles."
            },
            {
              id: "lisa",
              name: "Lisa Martinez",
              role: "Marketing Manager",
              testimonial: "Perfect for weekend trips and daily errands. The app is intuitive and the cars are always clean and reliable. Highly recommended!"
            },
            {
              id: "james",
              name: "James Wilson",
              role: "Consultant",
              testimonial: "As someone who travels for work, having instant access to quality vehicles in any city is a game changer. The service is outstanding."
            },
            {
              id: "maria",
              name: "Maria Garcia",
              role: "Designer",
              testimonial: "The variety of vehicles means I can choose exactly what I need for each trip. Eco-friendly options are a huge plus for the environment!"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Commute?"
          description="Join thousands of smart commuters who have already discovered the freedom of shared mobility. Start your journey today."
          inputPlaceholder="Enter your email address"
          buttonText="Join CarShare"
          termsText="By joining CarShare, you agree to our Terms of Service and Privacy Policy. No spam, ever."
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="CarShare vehicles ready for booking"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CarShare"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "How It Works", href: "features" },
                { label: "Safety", href: "https://carshare.com/safety" }
              ]
            },
            {
              items: [
                { label: "Vehicles", href: "vehicles" },
                { label: "Pricing", href: "pricing" },
                { label: "Locations", href: "https://carshare.com/locations" }
              ]
            },
            {
              items: [
                { label: "Support", href: "https://help.carshare.com" },
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "https://carshare.com/faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}