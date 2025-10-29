import CommonHeading from "./Shard/comonHeading";

export const WhoWeAre = () => {
  return (
    <section
      className="
        flex flex-col items-center justify-center text-center
        w-full max-w-[1920px] mx-auto
        px-4 sm:px-6 md:px-[100px] lg:px-[100px] 
        py-12 sm:py-16 lg:py-[100px]
        transition-all duration-300
      "
    >
      <CommonHeading>Who We Are</CommonHeading>

      <p
        className="
          mt-6 text-black font-roboto text-[14px] sm:text-lg md:text-xl lg:text-2xl
          font-[400] lg:font-[500] 
          leading-[180%] 
          max-w-[1550px] mx-auto
        "
      >
        We are a technology-driven automotive data provider helping businesses
        launch their own branded vehicle history platforms in just 24 hours.
        With CARFAX integration, access to global vehicle databases, and
        white-label flexibility, we empower entrepreneurs and organizations to
        build trusted, revenue-generating VIN report services with ease.
      </p>
    </section>
  );
};
