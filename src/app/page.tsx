"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Car, Zap, CreditCard, TrendingUp, Users, MessageSquare, Shield, BookOpen, Mail, Smartphone, DollarSign, Star } from 'lucide-react';

export default function CarSharePage() {
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
              imageAlt: "Economy compact car",
              onProductClick: () => window.open('https://app.carshare.com/book/economy', '_blank')
            },
            {
              id: "comfort",
              name: "Comfort Sedan",
              price: "From $12/hr",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Comfort sedan car",
              onProductClick: () => window.open('https://app.carshare.com/book/comfort', '_blank')
            },
            {
              id: "premium",
              name: "Premium Luxury",
              price: "From $25/hr",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Premium luxury car",
              onProductClick: () => window.open('https://app.carshare.com/book/premium', '_blank')
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
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
              icon: MessageSquare
            },
            {
              id: "satisfaction",
              value: "98%",
              title: "Satisfaction",
              description: "Customer happiness rate",
              icon: Star
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate innovators behind the future of urban mobility and shared transportation."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "sarah",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              description: "Former mobility executive with 15 years experience transforming urban transportation.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Sarah Johnson, CEO",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarahjohnson" },
                { icon: "Twitter", url: "https://twitter.com/sarahjohnson" }
              ]
            },
            {
              id: "michael",
              name: "Michael Chen",
              role: "CTO",
              description: "Tech visionary who's built scalable platforms for millions of users worldwide.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Michael Chen, CTO",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/michaelchen" },
                { icon: "Github", url: "https://github.com/michaelchen" }
              ]
            },
            {
              id: "emma",
              name: "Emma Rodriguez",
              role: "Head of Operations",
              description: "Operations expert ensuring seamless service delivery across all markets.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Emma Rodriguez, Head of Operations",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/emmarodriguez" }
              ]
            },
            {
              id: "david",
              name: "David Kim",
              role: "VP of Marketing",
              description: "Growth strategist who's helped scale multiple successful mobility startups.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "David Kim, VP Marketing",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/davidkim" },
                { icon: "Twitter", url: "https://twitter.com/davidkim" }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Users Say"
          description="Real stories from real people who've transformed their daily commute with CarShare."
          tag="Customer Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "alex",
              name: "Alex Thompson",
              role: "Software Engineer",
              testimonial: "CarShare completely changed how I get around the city. The convenience and cost savings are incredible!",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Alex Thompson testimonial"
            },
            {
              id: "lisa",
              name: "Lisa Martinez",
              role: "Marketing Manager",
              testimonial: "Perfect for weekend trips and daily errands. The app is intuitive and the cars are always clean and reliable.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Lisa Martinez testimonial"
            },
            {
              id: "james",
              name: "James Wilson",
              role: "Consultant",
              testimonial: "As someone who travels for work, having instant access to quality vehicles in any city is a game changer.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "James Wilson testimonial"
            },
            {
              id: "maria",
              name: "Maria Garcia",
              role: "Designer",
              testimonial: "The variety of vehicles means I can choose exactly what I need for each trip. Eco-friendly options are a huge plus!",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Maria Garcia testimonial"
            },
            {
              id: "john",
              name: "John Davis",
              role: "Sales Director",
              testimonial: "Outstanding service and fair pricing. The customer support team is responsive and helpful whenever needed.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "John Davis testimonial"
            },
            {
              id: "anna",
              name: "Anna Zhang",
              role: "Product Manager",
              testimonial: "CarShare fits perfectly into my urban lifestyle. No parking hassles, no maintenance worries, just pure convenience.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Anna Zhang testimonial"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Industry Partners"
          description="Join the mobility revolution alongside leading transportation and technology companies."
          tag="Partners"
          tagIcon={Shield}
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          textboxLayout="default"
          speed={45}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about CarShare and how it works."
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How do I book a car?",
              content: "Simply download our app, create an account, and browse available vehicles near you. Tap to reserve, and unlock with your phone!"
            },
            {
              id: "2",
              title: "What's included in the price?",
              content: "All bookings include insurance, fuel/charging, and maintenance. You only pay for the time you use the vehicle."
            },
            {
              id: "3",
              title: "Do I need my own insurance?",
              content: "No! Every trip is covered by our comprehensive insurance policy. You're protected from the moment you unlock the car."
            },
            {
              id: "4",
              title: "What if I have an issue during my trip?",
              content: "Our 24/7 support team is always ready to help. Contact us through the app or call our emergency line for immediate assistance."
            },
            {
              id: "5",
              title: "Can I extend my reservation?",
              content: "Yes! You can extend your trip directly from the app, subject to availability. We'll notify you of any conflicts with upcoming bookings."
            }
          ]}
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Latest Insights"
          description="Tips, guides, and news about car sharing, urban mobility, and sustainable transportation."
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "tips",
              tags: ["Tips", "Beginner"],
              title: "Car Sharing 101: A Complete Guide",
              excerpt: "Everything you need to know to get started with car sharing and make the most of your urban mobility.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Car sharing tips and guide",
              authorName: "Sarah Johnson",
              date: "15 Jan 2025",
              onBlogClick: () => window.open('https://blog.carshare.com/guide', '_blank')
            },
            {
              id: "guide",
              tags: ["Guide", "Safety"],
              title: "Safety First: Your Car Sharing Checklist",
              excerpt: "Essential safety tips and pre-trip inspections to ensure every journey is secure and worry-free.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Car sharing safety guide",
              authorName: "Michael Chen",
              date: "12 Jan 2025",
              onBlogClick: () => window.open('https://blog.carshare.com/safety', '_blank')
            },
            {
              id: "future",
              tags: ["Future", "Technology", "Electric"],
              title: "The Future is Electric: Sustainable Mobility",
              excerpt: "How electric vehicles and smart technology are shaping the future of urban transportation and reducing our carbon footprint.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Future of car sharing technology",
              authorName: "Emma Rodriguez",
              date: "08 Jan 2025",
              onBlogClick: () => window.open('https://blog.carshare.com/electric-future', '_blank')
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Commute?"
          description="Join thousands of smart commuters who've already discovered the freedom of shared mobility. Start your journey today."
          inputPlaceholder="Enter your email address"
          buttonText="Join CarShare"
          termsText="By joining CarShare, you agree to our Terms of Service and Privacy Policy. No spam, ever."
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="CarShare vehicles ready for booking"
          mediaPosition="right"
          onSubmit={(email) => console.log('New signup:', email)}
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
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </>
  );
}