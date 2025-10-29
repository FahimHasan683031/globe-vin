import { Banner } from "@/components/bannar";
import { BannerBottom } from "@/components/BannerBottom";
import { DataSourch } from "@/components/dataSourch";
import { DataSourch2 } from "@/components/DataSourch2";
import { Hero } from "@/components/herro";
import { History } from "@/components/history";
import PricingSection from "@/components/Pricing";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { WhoWeAre } from "@/components/whoWeAre";
import { WhyChoseUs } from "@/components/whyChoseUs";

export default function Home() {
  const testimonials = [
    {
      rating: 4.9,
      quote:
        "The Japanese vehicle database is a goldmine. I focus exclusively on imported JDM cars and the data quality is incredible. My customers love getting authentic auction sheets and history from Japan.",
      name: "Mendela",
      imageSrc: "/testimonial-avarter.png",
    },
    {
      rating: 4.9,
      quote:
        "The Japanese vehicle database is a goldmine. I focus exclusively on imported JDM cars and the data quality is incredible. My customers love getting authentic auction sheets and history from Japan.",
      name: "Mendela",
      imageSrc: "/testimonial-avarter.png",
    },
    {
      rating: 4.9,
      quote:
        "The Japanese vehicle database is a goldmine. I focus exclusively on imported JDM cars and the data quality is incredible. My customers love getting authentic auction sheets and history from Japan.",
      name: "Mendela",
      imageSrc: "/testimonial-avarter.png",
    },
    {
      rating: 4.9,
      quote:
        "The Japanese vehicle database is a goldmine. I focus exclusively on imported JDM cars and the data quality is incredible. My customers love getting authentic auction sheets and history from Japan.",
      name: "Mendela",
      imageSrc: "/testimonial-avarter.png",
    },
    {
      rating: 4.9,
      quote:
        "The Japanese vehicle database is a goldmine. I focus exclusively on imported JDM cars and the data quality is incredible. My customers love getting authentic auction sheets and history from Japan.",
      name: "Mendela",
      imageSrc: "/testimonial-avarter.png",
    },
    {
      rating: 4.9,
      quote:
        "The Japanese vehicle database is a goldmine. I focus exclusively on imported JDM cars and the data quality is incredible. My customers love getting authentic auction sheets and history from Japan.",
      name: "Mendela",
      imageSrc: "/testimonial-avarter.png",
    },
  ];

  return (
    <div>
      <Hero />
      <Banner />
      <WhoWeAre /> 
      <DataSourch />
      <WhyChoseUs />
      <History />
      <DataSourch2 />

      <TestimonialCarousel testimonials={testimonials} />
      <PricingSection />
      <BannerBottom />
    </div>
  );
}
