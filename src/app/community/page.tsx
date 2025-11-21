"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Users, MessageSquare, Shield, BookOpen, Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function CommunityPage() {
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
      showBlurBottom={true}
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
                { icon: Linkedin, url: "https://linkedin.com/in/sarahjohnson" },
                { icon: Twitter, url: "https://twitter.com/sarahjohnson" }
              ]
            },
            {
              id: "michael",
              name: "Michael Chen",
              role: "CTO",
              description: "Tech visionary who has built scalable platforms for millions of users worldwide.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Michael Chen, CTO",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michaelchen" },
                { icon: Github, url: "https://github.com/michaelchen" }
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
                { icon: Linkedin, url: "https://linkedin.com/in/emmarodriguez" }
              ]
            },
            {
              id: "david",
              name: "David Kim",
              role: "VP of Marketing",
              description: "Growth strategist who has helped scale multiple successful mobility startups.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "David Kim, VP Marketing",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/davidkim" },
                { icon: Twitter, url: "https://twitter.com/davidkim" }
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
          description="Real stories from real people who have transformed their daily commute with CarShare."
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
              content: "No! Every trip is covered by our comprehensive insurance policy. You are protected from the moment you unlock the car."
            },
            {
              id: "4",
              title: "What if I have an issue during my trip?",
              content: "Our 24/7 support team is always ready to help. Contact us through the app or call our emergency line for immediate assistance."
            },
            {
              id: "5",
              title: "Can I extend my reservation?",
              content: "Yes! You can extend your trip directly from the app, subject to availability. We will notify you of any conflicts with upcoming bookings."
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
              date: "15 Jan 2025"
            },
            {
              id: "guide",
              tags: ["Guide", "Safety"],
              title: "Safety First: Your Car Sharing Checklist",
              excerpt: "Essential safety tips and pre-trip inspections to ensure every journey is secure and worry-free.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Car sharing safety guide",
              authorName: "Michael Chen",
              date: "12 Jan 2025"
            },
            {
              id: "future",
              tags: ["Future", "Technology", "Electric"],
              title: "The Future is Electric: Sustainable Mobility",
              excerpt: "How electric vehicles and smart technology are shaping the future of urban transportation and reducing our carbon footprint.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Future of car sharing technology",
              authorName: "Emma Rodriguez",
              date: "08 Jan 2025"
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
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}