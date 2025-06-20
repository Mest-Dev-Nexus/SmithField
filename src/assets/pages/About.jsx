import {
  Leaf,
  Warehouse,
  Truck,
  Cpu,
  ShieldCheck,
  Users,
  Globe,
  Smartphone,
  BarChart2,
  DollarSign,
  Sun,
  Target,
  Package,
  ArrowRightCircle,
  HeartHandshake,
  BookOpenText,
  Scale,
  Link2,
} from "lucide-react";
import img3 from "../images/img3.jpeg";
import bgpic from "../images/bgpic.jpg";

const About = () => {
  // Gallery image placeholder data
  const galleryImages = Array(15)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      src: `/images/gallery/gallery-${i + 1}.jpg`,
      alt: `SmithField Agribusiness operation ${i + 1}`,
    }));

  // Process steps data
  const processSteps = [
    {
      icon: <Users size={24} />,
      title: "Step 1",
      description: "Fresh Produce is aggregated from the Smallholder Farmer",
    },
    {
      icon: <Package size={24} />,
      title: "Step 2",
      description: "Sorting/Grading/Cleaning/Packaging",
    },
    {
      icon: <Truck size={24} />,
      title: "Step 3",
      description: "Consumer receives their ordered produce",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Step 4",
      description: "Revenue Received",
    },
    {
      icon: <ArrowRightCircle size={24} />,
      title: "Step 5",
      description: "5% Premium from Profits",
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Step 6",
      description: "Smallholder Livelihood Fund",
    },
    {
      icon: <BookOpenText size={24} />,
      title: "Step 7",
      description: "Technical Support and Trainings",
    },
    { icon: <Scale size={24} />, title: "Step 8", description: "Repeat" },
  ];

  return (
    <div className="font-nunito-sans min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center mb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img3}
            alt="Agribusiness background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            About <span className="text-green-300">SmithField</span>{" "}
            Agribusiness
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            We transform agri-food supply chains through technology, connecting
            smallholder farmers directly to consumers.Welcome to SmithField,
            where we're on a mission to feed a hungry world. As the population
            grows, we need to produce 50% more food over the next 40 years.
            That's where we come in. We're a team of young, passionate
            professionals working to make food accessible, affordable,
            appropriate, and healthy for all Ghanaians and Africans, no matter
            their income levels. We're all about utilizing the latest research
            and technology to bring you the freshest, most delicious fruits,
            vegetables, and meats from around the country and beyond. In fact,
            we source a whopping 80% of our foods from within Ghana and the
            surrounding West African region. We believe in supporting local
            farmers and bringing you the best of what our region has to offer.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mission & Values
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-50">
            <div className="flex items-center mb-6">
              <Target className="text-green-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800">
                TRANSFORMING Agri-Food Supply Chains
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We leverage data and technology to optimize agricultural
              production, storage, and distribution across Ghana, creating
              sustainable value chains that benefit farmers and consumers alike.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Our Vision</h4>
              <p className="text-gray-700">
                To become Africa's leading agri-tech company transforming
                smallholder farming into profitable, sustainable businesses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: <BarChart2 size={24} />,
                title: "Impact-Driven",
                desc: "Measuring success by positive transformation",
              },
              {
                icon: <Cpu size={24} />,
                title: "Innovation",
                desc: "Cutting-edge technology solutions",
              },
              {
                icon: <Leaf size={24} />,
                title: "Sustainability",
                desc: "Environmental responsibility first",
              },
              {
                icon: <Scale size={24} />,
                title: "Integrity",
                desc: "Transparency in all dealings",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all hover:shadow-md"
              >
                <div className="text-green-600 mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Products & Services
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Greenhouse Farming */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 transition-all hover:shadow-xl">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 flex items-center">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Sun className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Greenhouse Farming & Management
            </h3>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {[
              "Greenhouse Procurement, Setup & Installation",
              "Training & Technical Support",
              "Access to Inputs & Smart Farming",
              "Guaranteed Market Access",
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">{item}</h4>
                  <p className="text-gray-600 text-sm">
                    {index === 0 &&
                      "Customized structures tailored to crops and climate with proper site selection and optimization."}
                    {index === 1 &&
                      "Hands-on training in climate control, irrigation, pest control, and high-yield crop selection."}
                    {index === 2 &&
                      "High-quality seeds, fertilizers, irrigation systems, and precision farming tools."}
                    {index === 3 &&
                      "Direct market linkages ensuring competitive prices for farmers."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cold Storage Solutions */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 transition-all hover:shadow-xl">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 flex items-center">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Warehouse className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Cold Storage Solutions
            </h3>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {[
              "Cold Room Procurement & Installation",
              "Mobile Cold Storage Solutions",
              "Storage as a Service (SaaS)",
              "Training & Maintenance",
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">{item}</h4>
                  <p className="text-gray-600 text-sm">
                    {index === 0 &&
                      "State-of-the-art units for fruits, vegetables, dairy, and meat storage."}
                    {index === 1 &&
                      "Containerized and solar-powered solutions for remote areas."}
                    {index === 2 &&
                      "Affordable cold storage rental for smallholder farmers."}
                    {index === 3 &&
                      "Technical training on proper usage and maintenance."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Postharvest Management */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 transition-all hover:shadow-xl">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 flex items-center">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Package className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Postharvest Management & Value Addition
            </h3>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {[
              "Aggregation & Sorting",
              "Processing & Value Addition",
              "Storage & Distribution",
              "Training on Postharvest Handling",
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">{item}</h4>
                  <p className="text-gray-600 text-sm">
                    {index === 0 &&
                      "Quality grading, sorting, and packaging to meet market demands."}
                    {index === 1 &&
                      "Converting raw produce into tomato paste, dried fruit, cassava flour."}
                    {index === 2 &&
                      "Efficient supply chain for timely delivery."}
                    {index === 3 &&
                      "Proper drying, packaging, and preservation techniques."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Access */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 transition-all hover:shadow-xl">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 flex items-center">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Link2 className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Market Access & Consultancy
            </h3>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {[
              "Simply Smart Mobile Technology",
              "Market Linkages & Bulk Sales",
              "Business Development",
              "Supply Chain Optimization",
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">{item}</h4>
                  <p className="text-gray-600 text-sm">
                    {index === 0 &&
                      "USSD/SMS platform and mobile apps connecting farmers directly to buyers."}
                    {index === 1 &&
                      "Connecting to exporters, processors, supermarkets, and restaurants."}
                    {index === 2 &&
                      "Training on financial management and business strategy."}
                    {index === 3 &&
                      "Data analytics and logistics management for efficiency."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact - Redesigned */}
      <section className="relative py-20 text-white mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={bgpic}
            alt="African agriculture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-green-200 bg-green-900/30 rounded-full mb-4">
              Making a Difference
            </span>
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-green-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "70+",
                text: "Smallholder farmers integrated into our value chain",
              },
              { number: "20-40%", text: "Increase in farmer incomes" },
              { number: "30-50%", text: "Reduction in postharvest losses" },
              {
                number: "1,500+",
                text: "Youth and women trained in agribusiness",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/15 backdrop-blur-sm transition-all"
              >
                <div className="text-4xl font-bold mb-3 text-white">
                  {item.number}
                </div>
                <p className="text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            How We Work
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our 8-Step Process
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all hover:shadow-md group"
            >
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            In Action
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-xl shadow-md relative group"
            >
              <div className="bg-gray-200 w-full h-full flex items-center justify-center transition-all duration-500 group-hover:opacity-90">
                <span className="text-gray-500">Image {image.id}</span>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <button className="bg-white text-green-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={bgpic}
            alt="Agriculture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Transformation Journey
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              We're building a more sustainable and equitable food system in
              Ghana. Partner with us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-green-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
