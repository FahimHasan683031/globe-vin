// app/pricing/page.tsx
import { Layers } from "lucide-react";
import PricingCard from "./pricing-card";
import CommonHeading from "./Shard/comonHeading";
import { div } from "framer-motion/client";

const plans = [
  {
    name: "Per-Report Sales",
    price: 24.99,
    icon: <Layers className="w-6 h-6" />,
    featured: false,
    features: [
      "Vehicle history reports",
      "You set your retail price",
      "Instant digital delivery",
      "75% profit margin typical",
    ],
  },
  {
    name: "Dealer Packages",
    price: 24.99,
    icon: <Layers className="w-6 h-6" />,
    featured: false,
    features: [
      "Monthly subscriptions",
      "Bulk report credits",
      "Recurring revenue",
      "Customer retention",
    ],
  },
  {
    name: "API Access",
    price: 24.99,
    icon: <Layers className="w-6 h-6" />,
    featured: true,
    features: [
      "Per API call pricing",
      "Serve car listing sites",
      "Integrate dealer tools",
      "Scale volume business",
    ],
  },
  {
    name: "White Label Resale",
    price: 24.99,
    icon: <Layers className="w-6 h-6" />,
    featured: false,
    features: [
      "Resell to other B2B",
      "Create subfranchisees",
      "Enterprise partnerships",
      "Compound income",
    ],
  },
];

export default function PricingSection() {
  return (
    <div>
      <div className="text-center mb-15">
        <CommonHeading>Pricing List</CommonHeading>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 pb-16 sm:pb-20 md:pb-24">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
