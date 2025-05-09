import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import website from "@/assets/services/dev.jpg";
import uiux from "@/assets/services/uiux.jpg";
import landingPage from "@/assets/services/ui.jpg";
import seo from "@/assets/services/seo.jpg";
import branding from "@/assets/services/branding.jpg";
import maintenance from "@/assets/services/maintence.jpg";
import Image from "next/image";

function Feature() {
  const services = [
    {
      title: "Website Development",
      description: "Custom-built websites that are responsive, fast-loading, and optimized for conversion with cutting-edge technologies.",
      image: website,
      alt: "Website Development Service"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user experiences with beautiful interfaces that enhance brand perception and user satisfaction.",
      image: landingPage,
      alt: "UI/UX Design Service"
    },
    {
      title: "Landing Page Design",
      description: "High-converting landing pages focused on driving action, with strategic layouts and compelling visual elements.",
      image: uiux,
      alt: "Landing Page Design Service"
    },
    {
      title: "SEO Optimization",
      description: "Data-driven search engine optimization strategies to increase organic traffic and improve your digital visibility.",
      image: seo,
      alt: "SEO Optimization Service"
    },
    {
      title: "Branding & Identity",
      description: "Comprehensive branding solutions that communicate your unique story and resonate with your target audience.",
      image: branding,
      alt: "Branding and Identity Service"
    },
    {
      title: "Website Maintenance",
      description: "Proactive website maintenance services to ensure optimal performance, security, and up-to-date content.",
      image: maintenance,
      alt: "Website Maintenance Service"
    }
  ];

  return (
    <div className="w-full p-12 bg-gradient-to-br from-black via-violet-950 to-black">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex gap-4 flex-col items-center md:items-start">
            <div>
              <Badge className="bg-violet-500 hover:bg-violet-600 text-white">Services</Badge>
            </div>
            <div className="flex gap-3 flex-col text-center md:text-left">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-bold text-white">
                Elevate Your Digital Presence
              </h2>
              <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-violet-200">
                We deliver professional digital solutions tailored to your unique business needs and goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col gap-3 group">
                <div className="rounded-lg overflow-hidden aspect-video mb-2 relative">
                  <Image
                    src={service.image} 
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white">{service.title}</h3>
                <p className="text-violet-200 text-base flex-grow">
                  {service.description}
                </p>
                <Button className="mt-2 bg-white hover:bg-violet-100 text-violet-900 hover:text-violet-950 font-medium">
                  View Packages
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };