import { Banner } from "@/components/bannar";
import { DataSourch } from "@/components/dataSourch";
import { Hero } from "@/components/herro";
import { WhoWeAre } from "@/components/whoWeAre";
import { WhyChoseUs } from "@/components/whyChoseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <WhoWeAre />
      <DataSourch />
      <WhyChoseUs />
    </div>
  );
}
