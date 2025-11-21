"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import { CreditCard, Star } from "lucide-react";

export default function PricingPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your lifestyle. No hidden fees, no long-term commitments."
          tag="Pricing Plans"
          tagIcon={CreditCard}
          buttons={[
            { text: "Compare Plans", href: "https://app.carshare.com/pricing" }
          ]}
          plans={[
            {
              id: "basic",
              price: "Free",
              name: "Basic Plan",
              buttons: [
                { text: "Get Started", href: "https://app.carshare.com/signup" },
                { text: "Learn More", href: "https://app.carshare.com/basic" }
              ],
              features: [
                "Pay-per-use pricing",
                "Access to economy vehicles",
                "Basic support",
                "Standard insurance"
              ]
            },
            {
              id: "plus",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$29/month",
              name: "Plus Plan",
              buttons: [
                { text: "Choose Plus", href: "https://app.carshare.com/plus" },
                { text: "Free Trial", href: "https://app.carshare.com/trial" }
              ],
              features: [
                "15% discount on all rides",
                "Access to all vehicle types",
                "Priority booking",
                "Premium support",
                "Enhanced insurance"
              ]
            },
            {
              id: "business",
              price: "$99/month",
              name: "Business Plan",
              buttons: [
                { text: "Contact Sales", href: "https://app.carshare.com/business" },
                { text: "Enterprise Demo", href: "https://app.carshare.com/demo" }
              ],
              features: [
                "25% discount on all rides",
                "Team management dashboard",
                "Multiple user accounts",
                "Dedicated account manager",
                "Custom billing options"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
    </>
  );
}