import Navbar from "@/components/Navbar";
import DigiCloudHero from "@/components/digicloud/DigiCloudHero";
import DigiCloudOffers from "@/components/digicloud/DigiCloudOffers";
import ProductShowcase from "@/components/digicloud/ProductShowcase";
import WhyDigiCloud from "@/components/digicloud/WhyDigiCloud";
import OpenPositions from "@/components/digicloud/OpenPositions";
import DigiCloudCTA from "@/components/digicloud/DigiCloudCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DigiCloud Tech Services — HR Labs",
  description:
    "DigiCloud is HR Labs' digital and technology arm — SaaS products, software marketplace, and tech services for modern Indian businesses.",
};

export default function DigiCloudPage() {
  return (
    <>
      <Navbar />
      <main>
        <DigiCloudHero />
        <DigiCloudOffers />
        <ProductShowcase
          eyebrow="OurDept.in"
          headline="The Marketplace for All Your Company Software Needs"
          features={[
            {
              title: "Extensive Selection",
              body: "Browse HR, finance, and ops software in one place.",
            },
            {
              title: "Competitive Pricing",
              body: "Get the best deals — no vendor negotiation needed.",
            },
            {
              title: "Simplified Procurement",
              body: "One platform, one invoice, zero procurement headaches.",
            },
          ]}
          ctaText="Visit OurDept.in"
          ctaHref="https://ourdept.in"
          imageLeft={false}
          background="white"
          productName="OurDept.in"
          productAccent="#6C47FF"
        />
        <ProductShowcase
          eyebrow="myHRdept.in"
          headline="Complete HRMS for Enhanced Employee Management"
          features={[
            {
              title: "Streamlined HR Processes",
              body: "Automate onboarding, attendance, and performance management.",
            },
            {
              title: "Enhanced Employee Engagement",
              body: "Feedback, recognition, and professional development tools built in.",
            },
            {
              title: "Data-Driven Insights",
              body: "Detailed analytics and reporting for informed workforce decisions.",
            },
          ]}
          ctaText="Visit myHRdept.in"
          ctaHref="https://myhrdept.in"
          imageLeft={true}
          background="tint"
          productName="myHRdept.in"
          productAccent="#1B4FD8"
        />
        <ProductShowcase
          eyebrow="Propalz.com"
          headline="Revolutionizing Recruitment for Consultancies & Companies"
          features={[
            {
              title: "Efficient Candidate Sourcing",
              body: "Find the right talent fast with advanced search and filters.",
            },
            {
              title: "Collaborative Hiring",
              body: "Team-based evaluations and streamlined decision-making.",
            },
            {
              title: "Seamless Integration",
              body: "Connects with your existing HR systems and workflows.",
            },
          ]}
          ctaText="Visit Propalz.com"
          ctaHref="https://propalz.com"
          imageLeft={false}
          background="white"
          productName="Propalz.com"
          productAccent="#0F9D58"
        />
        <WhyDigiCloud />
        <OpenPositions />
        <DigiCloudCTA />
      </main>
      <Footer />
    </>
  );
}
