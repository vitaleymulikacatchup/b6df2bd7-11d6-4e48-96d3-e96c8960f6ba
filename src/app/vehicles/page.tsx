"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { Car } from "lucide-react";

export default function VehiclesPage() {
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

      <div id="vehicles" data-section="vehicles">
        <ProductCardOne
          title="Choose Your Ride"
          description="From efficient city cars to spacious SUVs, find the perfect vehicle for every journey in our diverse fleet."
          tag="Vehicle Fleet"
          tagIcon={Car}
          buttons={[
            { text: "View All Vehicles", href: "https://app.carshare.com/vehicles" }
          ]}
          products={[
            {
              id: "economy",
              name: "Economy Compact",
              price: "From $8/hr",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Economy compact car"
            },
            {
              id: "comfort",
              name: "Comfort Sedan",
              price: "From $12/hr",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Comfort sedan car"
            },
            {
              id: "premium",
              name: "Premium Luxury",
              price: "From $25/hr",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Premium luxury car"
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