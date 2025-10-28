import CommonHeading from "./Shard/comonHeading";

export const WhoWeAre = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonHeading>Who We Are</CommonHeading>

      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black font-roboto leading-relaxed max-w-5xl mx-auto">
        We are a technology-driven automotive data provider helping businesses
        launch their own branded vehicle history platforms in just 24 hours.
        With CARFAX integration, access to global vehicle databases, and
        white-label flexibility, we empower entrepreneurs and organizations to
        build trusted, revenue-generating VIN report services with ease.
      </p>
    </section>
  );
};