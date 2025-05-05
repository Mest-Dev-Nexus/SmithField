import React, { useState } from "react";
import {
  Sun,
  Tent,
  Warehouse,
  Package,
  Users,
  ChevronRight,
  ChevronDown,
  Phone,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import your images - replace these with your actual imports
const greenhouseImage = "/api/placeholder/800/600";
const coldStorageImage = "/api/placeholder/800/600";
const postharvestImage = "/api/placeholder/800/600";
const consultancyImage = "/api/placeholder/800/600";

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const serviceDetails = [
    {
      id: "greenhouse",
      title: "Greenhouse Solutions",
      icon: Sun,
      color: "green",
      image: greenhouseImage,
      imageAlt: "Greenhouse Farming Solutions",
      imageLabel: "Greenhouse Technology",
      description:
        "Our turnkey greenhouse packages include design, installation, and comprehensive training on controlled environment agriculture. Farmers achieve 3-5x higher yields with 70% less water usage.",
      features: [
        "Custom designs for various crops and climates",
        "Integrated irrigation and fertigation systems",
        "Ongoing agronomic support",
      ],
      details:
        "Our greenhouse solutions are designed to optimize growing conditions for any crop type. We provide custom-built greenhouses with automated climate control systems that regulate temperature, humidity, and ventilation. Our team handles everything from site assessment and construction to systems integration and staff training. We specialize in hydroponic, aquaponic, and soil-based growing systems that maximize space utilization and resource efficiency while minimizing environmental impact.",
      galleryImages: [
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
      ],
      link: "/services",
      linkText: "Explore greenhouse solutions",
    },
    {
      id: "storage",
      title: "Cold Storage Solutions",
      icon: Warehouse,
      color: "blue",
      image: coldStorageImage,
      imageAlt: "Cold Storage Solutions",
      imageLabel: "Cold Storage Technology",
      description:
        "Our state-of-the-art cold storage facilities preserve freshness and extend shelf life of produce. Our solutions reduce post-harvest losses by up to 40% while maintaining nutritional quality.",
      features: [
        "Temperature-controlled environments for various commodities",
        "Solar-powered options for energy efficiency",
        "Digital monitoring and inventory management",
      ],
      details:
        "Our cold storage solutions preserve the freshness, quality, and nutritional value of your produce. We offer customizable temperature and humidity settings for different commodity types, from fruits and vegetables to dairy and meat products. Our energy-efficient designs include backup power systems to prevent losses during outages. For areas with unreliable electricity, we provide solar-powered options and thermal storage technologies that maintain cooling for up to 72 hours without power.",
      galleryImages: [
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
      ],
      link: "/services/cold-storage",
      linkText: "Explore cold storage options",
    },
    {
      id: "postharvest",
      title: "Postharvest Management",
      icon: Package,
      color: "yellow",
      image: postharvestImage,
      imageAlt: "Postharvest Management Solutions",
      imageLabel: "Postharvest Technology",
      description:
        "We provide comprehensive postharvest handling systems that maintain quality from farm to market. Our solutions ensure premium pricing through better presentation and longer shelf life.",
      features: [
        "Washing, sorting, and grading equipment",
        "Value-addition processing technology",
        "Quality packaging and branding solutions",
      ],
      details:
        "Our postharvest management systems help you maintain product quality and reduce losses after harvesting. We provide equipment and training for proper handling, cleaning, sorting, and packaging of produce. Our solutions include washing lines, drying facilities, sorting tables, and packaging stations tailored to your specific crops. We also offer value-addition technologies that can transform your raw produce into shelf-stable products with higher market value, including juice extraction, pulping, drying, and packaging equipment.",
      galleryImages: [
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
      ],
      link: "/services",
      linkText: "Discover postharvest solutions",
    },
    {
      id: "consultancy",
      title: "Agribusiness Consultancy",
      icon: Users,
      color: "purple",
      image: consultancyImage,
      imageAlt: "Agribusiness Consultancy Services",
      imageLabel: "Expert Consultancy",
      description:
        "Our expert team provides data-driven guidance to optimize your agribusiness operations. We help you access premium markets, secure financing, and implement sustainable farming practices.",
      features: [
        "Market analysis and business planning",
        "Digital platforms for direct market access",
        "Financial management and funding support",
      ],
      details:
        "Our agribusiness consultancy services offer expert guidance to help your operation thrive. We conduct thorough assessments of your current operations and develop tailored strategies for growth. Our digital market platforms connect you directly with buyers, eliminating middlemen and increasing your profits. We provide financial management training, business planning support, and assistance with accessing credit and investment. Our data-driven approach to supply chain optimization reduces costs and improves reliability through route optimization and inventory management.",
      galleryImages: [
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
        "/api/placeholder/500/300",
      ],
      link: "/services",
      linkText: "Explore consultancy services",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 font-nunito-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services <span className="text-green-600"></span>
          </h1>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to maximize
            productivity, sustainability, and profitability for farmers and
            agribusinesses
          </p>
        </div>

        {/* Services Cards */}
        {serviceDetails.map((service, index) => (
          <div key={service.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all hover:shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-gray-200 h-80 md:h-auto overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span className="text-white font-medium">
                      {service.imageLabel}
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-r from-${service.color}-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center transform transition-all hover:rotate-12`}
                    >
                      <service.icon
                        className={`text-${service.color}-700`}
                        size={32}
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span
                          className={`bg-${service.color}-100 text-${service.color}-700 rounded-full p-1 mr-3`}
                        >
                          <ChevronRight size={16} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => toggleDropdown(service.id)}
                    className={`flex items-center text-${service.color}-700 font-medium hover:text-${service.color}-800 group text-lg transition-all`}
                  >
                    {openDropdown === service.id
                      ? "Hide details"
                      : service.linkText}
                    <ChevronDown
                      size={20}
                      className={`ml-2 transition-transform duration-300 ${
                        openDropdown === service.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Dropdown Section */}
              {openDropdown === service.id && (
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 animate-slideDown">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Detailed Information
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.details}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {service.galleryImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg overflow-hidden shadow"
                        >
                          <img
                            src={img}
                            alt={`${service.title} image ${idx + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href="tel:+123456789"
                      className="inline-flex items-center bg-white border border-blue-300 text-blue-700 hover:bg-blue-500 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call us now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to transform your agricultural operations?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the right
            solutions for your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
