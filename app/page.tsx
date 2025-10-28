import { Banner } from "@/components/bannar";
import { DataSourch } from "@/components/dataSourch";
import { DataSourch2 } from "@/components/DataSourch2";
import { Hero } from "@/components/herro";
import { History } from "@/components/history";
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
      <History/>
      <DataSourch2/>
    </div>
  );
}
