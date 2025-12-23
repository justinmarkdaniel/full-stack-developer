// Real client logos with aspect ratio info for proper sizing
// invert: true for dark logos that need to be lightened on dark background
const baseUrl = import.meta.env.BASE_URL;
const brands = [
  { name: "Ray White", logo: `${baseUrl}client-badges/rwlogo-grey-475.webp`, width: "w-28", invert: false },
  { name: "Hype DC", logo: `${baseUrl}client-badges/hypedc-black.webp`, width: "w-32", invert: true },
  { name: "Camilla", logo: `${baseUrl}client-badges/Camilla-logo-600.png`, width: "w-28", invert: false },
  { name: "Business Events Sydney", logo: `${baseUrl}client-badges/besydney-blue-logo-rgb.png`, width: "w-24", invert: true },
  { name: "Propstore", logo: `${baseUrl}client-badges/Propstore_Logo.jpg`, width: "w-28", invert: true },  // 4.3:1 aspect after crop
  { name: "ChemDry", logo: `${baseUrl}client-badges/chemdry-1-logo-png-transparent.png`, width: "w-28", invert: false, bright: true }, // 3.1:1 aspect after crop
];

// Placeholder logos (commented out for reference)
// const placeholderBrands = [
//   { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
//   { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
//   { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
//   { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" },
//   { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" },
//   { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
//   { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" },
//   { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
// ];

const LogoSet = ({ id }: { id: string }) => (
  <div className="flex shrink-0 gap-6 md:gap-16" aria-hidden={id !== "primary"}>
    {brands.map((brand, index) => (
      <div
        key={`${id}-${brand.name}-${index}`}
        className="flex-shrink-0 flex items-center justify-center h-10 md:h-16"
      >
        <img
          src={brand.logo}
          alt={id === "primary" ? brand.name : ""}
          className={`w-16 md:w-28 max-h-5 md:max-h-10 object-contain grayscale ${brand.bright ? 'opacity-90' : 'opacity-70'} ${brand.invert ? 'invert' : ''}`}
          loading="eager"
        />
      </div>
    ))}
  </div>
);

const BrandCarousel = () => {
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

          {/* Scrolling track - 2 identical sets for seamless loop */}
          <div className="flex gap-6 md:gap-16 animate-scroll-infinite will-change-transform" style={{ width: 'max-content' }}>
            <LogoSet id="primary" />
            <LogoSet id="duplicate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
