const brands = [
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
  { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
];

const BrandCarousel = () => {
  // Triple the brands for seamless loop
  const triplebrands = [...brands, ...brands, ...brands];

  return (
    <div className="py-16 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary font-mono text-sm">// Trusted By</span>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-muted-foreground">
            Brands I have worked with over the years
          </h3>
        </div>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - uses inline style for precise width control */}
          <div
            className="flex animate-scroll-infinite"
            style={{
              width: `calc(${brands.length} * 192px * 3)`, // 192px = w-32 (128px) + mx-8 (64px)
            }}
          >
            {triplebrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 mx-8 flex items-center justify-center h-16"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 max-w-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
