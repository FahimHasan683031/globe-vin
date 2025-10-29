// app/components/TestimonialCard.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  rating: number;
  quote: string;
  name: string;
  imageSrc: string;
  role?: string;
  interactive?: boolean;
  className?: string;
  
};

export default function TestimonialCard({
  rating,
  quote,
  name,
  imageSrc,
  role = "Doctor",
  interactive = true,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[6px] md:rounded-xl max-w-[500px] p-3 md:p-10 min-h-[180px] md:min-h-[320px] shadow-lg transition-shadow duration-300",
        interactive && "hover:shadow-xl transform hover:-translate-y-2",
        className
      )}
    >
      <div className="flex items-left justify-between mb-4 text-left ">
        <div className="flex items-center">
          <Image
            src={imageSrc}
            alt={`${name}'s profile`}
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
        </div>
        <div className="text-yellow-500 flex items-center">
          {rating.toFixed(1)}★
        </div>
      </div>
      <p className="text-gray-600 text-[10px] md:text-base text-left leading-relaxed">{quote}</p>
         <div className="text-left mt-2">
            <p className="text-gray-900 font-medium text-base md:text-xl">{name}</p>
            {role && <p className="text-gray-500 text-sm">{role}</p>}
          </div>
    </div>
  );
}
