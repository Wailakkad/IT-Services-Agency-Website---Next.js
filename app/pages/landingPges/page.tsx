"use client";

import Link from "next/link";
interface LandingPricingCardProps {
  color: "green" | "blue" | "purple";
  tier: string;
  subtitle?: string;
  price: string;
  deliveryTime: string;
  benefits: string[];
  idealFor: string;
  emoji: string;
  buttonText?: string;
}
const LandingPricingCard = ({ 
  color, 
  tier, 
  subtitle,
  price, 
  deliveryTime, 
  benefits, 
  idealFor,
  emoji,
  buttonText
} : LandingPricingCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border bg-background p-8 shadow-lg transition-all hover:shadow-xl`}>
      <div className={`absolute right-0 top-0 h-20 w-20 ${color === "green" ? "bg-green-500/20" : color === "blue" ? "bg-blue-500/20" : "bg-purple-500/20"} blur-2xl`}></div>
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <div>
            <h3 className={`text-xl font-bold ${color === "green" ? "text-green-500" : color === "blue" ? "text-blue-500" : "text-purple-500"}`}>
              {tier}
            </h3>
            {subtitle && <p className="text-sm italic text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-sm text-muted-foreground">Delivered in: {deliveryTime}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="mb-2 font-medium">What s Included:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg className={`mt-1 h-4 w-4 flex-shrink-0 ${color === "green" ? "text-green-500" : color === "blue" ? "text-blue-500" : "text-purple-500"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="mb-1 text-sm font-medium text-muted-foreground">Ideal For:</h4>
          <p className="text-sm">{idealFor}</p>
        </div>
        
        <Link href="/pages/contactPage">
            <button className={`w-full rounded-lg py-2 font-medium transition-colors ${
          color === "green" 
            ? "bg-green-500 text-white hover:bg-green-600" 
            : color === "blue" 
              ? "bg-blue-500 text-white hover:bg-blue-600" 
              : "bg-purple-500 text-white hover:bg-purple-600"
        }`}>
          {buttonText || "Get Started"}
        </button>
        </Link>
      </div>
    </div>
  );
};

const LandingPricingDemo = () => {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
         {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-purple-500 transition-transform duration-300 group-hover:-translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">Back to Home</span>
        </div>
      </Link>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-4">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            <span className="inline-block">🎯</span> Custom Landing Page Design Services
          </h2>
          <p className="text-center text-xl font-medium text-muted-foreground">
            Convert Visitors into Customers with High-Impact Landing Pages
          </p>
          <p className="mx-auto max-w-3xl text-center text-base text-muted-foreground md:text-lg">
            From simple one-screen pages to conversion-focused professional designs — we craft landing pages that <strong>perform</strong>, not just look good.
          </p>
        </div>

        <h3 className="mb-6 text-center text-2xl font-semibold">💼 Our Landing Page Packages</h3>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <LandingPricingCard
            color="green"
            emoji="🟢"
            tier="Simple Landing Page"
            subtitle="Clean & Effective"
            price="$99"
            deliveryTime="2–3 days"
            benefits={[
              "1 custom-designed section",
              "Clean layout with your branding",
              "Mobile responsive",
              "Basic on-page SEO",
              "Static HTML/CSS/JS"
            ]}
            idealFor="MVPs, early-stage startups, or quick promos"
            buttonText="Get Started →"
          />
          
          <LandingPricingCard
            color="blue"
            emoji="🔵"
            tier="Modern Landing Page"
            subtitle="Sleek & Engaging"
            price="$249"
            deliveryTime="3–5 days"
            benefits={[
              "Up to 5 well-structured sections (Hero, Features, About, CTA, Contact)",
              "Responsive, mobile-first design",
              "Scroll-based animations & transitions",
              "Lead capture form (Formspree or similar)",
              "Optimized for SEO and performance"
            ]}
            idealFor="Businesses that need to stand out and convert"
            buttonText="Choose This Plan →"
          />
          
          <LandingPricingCard
            color="purple"
            emoji="🟣"
            tier="Professional Landing Page"
            subtitle="Full Conversion Funnel"
            price="$499"
            deliveryTime="5–7 days"
            benefits={[
              "Up to 8 premium sections (Hero, Benefits, Features, Testimonials, Pricing, FAQs, CTA, Footer)",
              "Fully branded UI/UX",
              "High-converting structure based on proven strategies",
              "Advanced animations & interactivity",
              "Analytics integration (Google Analytics, Hotjar)",
              "Hosting setup (Netlify, Vercel, etc.)"
            ]}
            idealFor="Campaigns, products, or high-converting services"
            buttonText="Launch My Page →"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPricingDemo;