import React, { useEffect, useRef, useState } from "react";
import "/src/index.css";
import {
  ChevronRight,
  ChevronLeft,
  Leaf,
  Award,
  Sun,
  ThermometerSnowflake,
  Package,
  Link as LinkIcon,
  Play,
  Pause,
} from "lucide-react";
import { Link } from "react-router-dom";
import checkplant from "../images/checkplant.jpg";
import bgvid from "../images/bgvid.mp4";
import bgpic from "../images/bgpic.jpg";
import coolr from "../images/coolr.png";
import honcho from "../images/honcho.png";
import llyodstunnels from "../images/llyodstunnels.png";
import mobilemakola from "../images/mobilemakola.png";
import youngfarmers from "../images/youngfarmers.png";

const Home = () => {
  const videoRef = useRef(null);
  const [activePartner, setActivePartner] = useState(0);
  const partners = [
    {
      name: "Young Farmers' Corps Ghana",
      logo: youngfarmers,
      testimonial:
        "Collaborating with SmithField has empowered our members with modern farming techniques.",
    },
    {
      name: "Mobile Makola",
      logo: mobilemakola,
      testimonial:
        "Their digital solutions have revolutionized how we connect farmers to urban markets.",
    },
    {
      name: "Lloyds Tunnels and Farms",
      logo: llyodstunnels,
      testimonial:
        "The greenhouse technology has increased our yields by over 150%.",
    },
    {
      name: "90s Honcho",
      logo: honcho,
      testimonial:
        "Their cold chain solutions have preserved our produce quality remarkably.",
    },
    {
      name: "CoolR",
      logo: coolr,
      testimonial:
        "Partnering with SmithField has expanded our reach in the agricultural sector.",
    },
  ];

  const nextPartner = () => {
    setActivePartner((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setActivePartner((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <div className="font-nunito-sans min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={bgpic}
          src={bgvid}
          type="video/mp4"
        >
          <source src={bgvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/90 to-gray-900/20"></div>

        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-xl animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming
              <span className="text-green-500">.</span>
              <span className="text-green-500 block mt-2">Africa's</span>
              Agriculture
              <span className="text-green-500">.</span>
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-lg font-light animate-fadeInUp delay-100">
              Empowering farmers with innovative solutions to boost
              productivity, enhance sustainability, and connect directly to
              profitable markets across the continent.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-200">
              <Link
                to="/services"
                className="bg-white/20 backdrop-blur-sm hover:bg-green-500/40 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Solutions
              </Link>

              <Link
                to="/about"
                className="bg-white/20 backdrop-blur-sm hover:bg-green-500/40 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More
              </Link>
              <Link
                to="/shop"
                className="bg-white/20 backdrop-blur-sm hover:bg-green-500/40 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Cultivating Agricultural Excellence
            </h2>
            <div className="w-24 h-1 bg-gray-800 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              SmithField Agribusiness is at the forefront of Africa's
              agricultural revolution. We integrate cutting-edge technology with
              sustainable practices to create resilient food systems that
              benefit farmers, consumers, and ecosystems alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="bg-gradient-to-r from-green-100 to-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Leaf size={36} className="text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Sustainable Innovation
              </h3>
              <p className="text-gray-600 text-center">
                We develop and implement agricultural technologies that increase
                productivity while preserving natural resources for future
                generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Award size={36} className="text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Farmer Empowerment
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive training programs and access to quality inputs
                transform smallholder farmers into agripreneurs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <LinkIcon size={36} className="text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Market Integration
              </h3>
              <p className="text-gray-600 text-center">
                Our digital platforms create transparent, efficient connections
                between producers and markets across Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 animate-fadeIn">
            Our Agricultural Solutions
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-16"></div>

          {/* Featured Solution */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 transition-all hover:shadow-xl animate-fadeInUp delay-100 border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gray-200 h-80 md:h-auto overflow-hidden relative">
                <img
                  src={checkplant}
                  alt="Greenhouse Farming Solutions"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="text-white font-medium">
                    Greenhouse Technology
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center transform transition-all hover:rotate-12">
                    <Sun className="text-green-700" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 ml-4">
                    Greenhouse Solutions
                  </h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Our turnkey greenhouse packages include design, installation,
                  and comprehensive training on controlled environment
                  agriculture. Farmers achieve 3-5x higher yields with 70% less
                  water usage.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <ChevronRight size={16} />
                    </span>
                    Custom designs for various crops and climates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <ChevronRight size={16} />
                    </span>
                    Integrated irrigation and fertigation systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <ChevronRight size={16} />
                    </span>
                    Ongoing agronomic support
                  </li>
                </ul>
                <Link
                  to="/services/greenhouses"
                  className="flex items-center text-green-700 font-medium hover:text-green-800 group text-lg transition-all"
                >
                  Explore greenhouse solutions
                  <ChevronRight
                    size={20}
                    className="ml-2 group-hover:ml-3 transition-all"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Solutions */}

          <div className="text-center mt-12 animate-fadeIn">
            <Link
              to="/services"
              className="inline-block bg-white border-2 border-green-600 text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors shadow-sm hover:shadow transform hover:-translate-y-1"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="relative py-20 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={bgpic}
            alt="African agriculture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-6 animate-fadeIn">
            Transforming African Agriculture
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-16"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-100 border border-white/20">
              <div className="text-5xl font-bold mb-3">10K+</div>
              <p className="text-white/90 font-medium">Farmers Empowered</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-200 border border-white/20">
              <div className="text-5xl font-bold mb-3">30%</div>
              <p className="text-white/90 font-medium">
                Average Yield Increase
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-300 border border-white/20">
              <div className="text-5xl font-bold mb-3">50+</div>
              <p className="text-white/90 font-medium">Successful Projects</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-400 border border-white/20">
              <div className="text-5xl font-bold mb-3">5+</div>
              <p className="text-white/90 font-medium">Regions</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <p className="text-lg text-white/90 leading-relaxed">
              Our impact extends beyond numbers. We measure success in thriving
              farming communities, sustainable ecosystems, and food-secure
              nations.
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 animate-fadeIn">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
                Our Trusted Partners
              </h2>
              <p className="text-gray-600 max-w-xl">
                Collaborating with industry leaders to drive agricultural
                transformation
              </p>
            </div>
            <div className="flex mt-6 md:mt-0">
              <button
                onClick={prevPartner}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 mr-2 transition-colors"
                aria-label="Previous partner"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPartner}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                aria-label="Next partner"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm p-8 mb-12 animate-fadeInUp border border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center">
                <img
                  src={partners[activePartner].logo}
                  alt={partners[activePartner].name}
                  className="h-24 object-contain"
                />
              </div>

              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-center text-xl font-bold text-gray-800 mb-2">
                  {partners[activePartner].name}
                </h3>
                <p className="text-center italic text-gray-600 mb-6">
                  "{partners[activePartner].testimonial}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePartner(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activePartner ? "bg-green-600" : "bg-gray-300"
                }`}
                aria-label={`Go to partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Farmer Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our solutions are transforming lives and businesses
              across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-100 border border-gray-100">
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  src={checkplant}
                  alt="Kenya Greenhouse"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">
                    Greenhouse Success
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Leaf size={20} className="text-green-700" />
                  </div>
                  <span className="text-sm text-gray-500">
                    Greenhouse Technology
                  </span>
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">
                  From Subsistence to Commercial Farming
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a smallholder farmer in Kenya increased tomato yields by
                  200% and expanded to export markets using our greenhouse
                  solutions.
                </p>
                <Link
                  to="/success-stories/greenhouse-kenya"
                  className="inline-flex items-center text-green-600 font-medium group transition-all"
                >
                  Read full story
                  <ChevronRight
                    size={18}
                    className="ml-2 group-hover:ml-3 transition-all"
                  />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-200 border border-gray-100">
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  src={checkplant}
                  alt="Nigeria Cold Storage"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">
                    Cold Chain Solution
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ThermometerSnowflake size={20} className="text-blue-700" />
                  </div>
                  <span className="text-sm text-gray-500">Cold Storage</span>
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">
                  Preserving Prosperity
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A fruit farmers' cooperative in Nigeria reduced post-harvest
                  losses from 40% to under 5% with our solar-powered cold
                  storage units.
                </p>
                <Link
                  to="/success-stories/cold-storage-nigeria"
                  className="inline-flex items-center text-blue-600 font-medium group transition-all"
                >
                  Read full story
                  <ChevronRight
                    size={18}
                    className="ml-2 group-hover:ml-3 transition-all"
                  />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-300 border border-gray-100">
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  src={checkplant}
                  alt="Ghana Digital Market"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">
                    Digital Marketplace
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <LinkIcon size={20} className="text-green-700" />
                  </div>
                  <span className="text-sm text-gray-500">
                    Digital Solutions
                  </span>
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">
                  Connecting to Prosperity
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How our digital platform helped Ghanaian farmers increase
                  income by 45% through direct market access and transparent
                  pricing.
                </p>
                <Link
                  to="/success-stories/digital-ghana"
                  className="inline-flex items-center text-green-600 font-medium group transition-all"
                >
                  Read full story
                  <ChevronRight
                    size={18}
                    className="ml-2 group-hover:ml-3 transition-all"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col md:flex-row rounded-lg overflow-hidden">
            <div className="absolute inset-0 left-0 md:w-1/2 z-0">
              <img
                src={bgpic}
                alt="African agriculture background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/90 to-blue-700/90"></div>
            </div>

            <div className="md:w-1/2 p-12 text-white relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Agricultural Business?
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Our team of agricultural experts is ready to help you implement
                solutions that increase productivity, reduce losses, and connect
                you to profitable markets.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium">Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium">Customized solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium">Ongoing support</span>
                </div>
              </div>
            </div>

            {/* Right form section with white background */}
            <div className="md:w-1/2 p-12 bg-white relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Schedule a Consultation
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-gray-700 mb-2"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="greenhouse">Greenhouse Farming</option>
                    <option value="cold-storage">Cold Storage Solutions</option>
                    <option value="digital">Digital Market Access</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-500 text-white py-4 rounded-lg font-bold hover:from-green-700 hover:to-blue-600 transition-colors shadow-md hover:shadow-lg"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 animate-fadeIn">
            Voices From the Field
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp delay-100 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4 shadow-sm">
                  <img
                    src={checkplant}
                    alt="Emmanuel Osei"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    Emmanuel Osei
                  </h3>
                  <p className="text-gray-600">Tomato Farmer, Ghana</p>
                  Eastern Region
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "Before SmithField, I struggled with pests and low yields. Now
                with their greenhouse and training, I produce quality tomatoes
                year-round and sell directly to supermarkets."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp delay-200 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4 shadow-sm">
                  <img
                    src={checkplant}
                    alt="Amina Kofi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    Amina Kofie
                  </h3>
                  <p className="text-gray-600">
                    Agribusiness Owner, Western Region
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "The cold storage units have been a game-changer for our
                business. We now export fresh produce to Europe with confidence
                in quality and shelf life."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp delay-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4 shadow-sm">
                  <img
                    src={checkplant}
                    alt="Daniel Mensah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    Daniel Mensah
                  </h3>
                  <p className="text-gray-600">Yam Farmer, Savanna Region</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "SmithField's digital platform has given our farmers
                transparency and bargaining power. We now get fair prices
                without middlemen taking most of the profit."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-sm p-8 md:p-12 animate-fadeInUp border border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Join Our Agricultural Community
                </h3>
                <p className="text-gray-600 text-lg">
                  Subscribe to receive the latest insights, success stories, and
                  opportunities in African agriculture. Get updates on:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <ChevronRight size={16} />
                    </span>
                    Innovative farming techniques
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <ChevronRight size={16} />
                    </span>
                    Market trends and opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <ChevronRight size={16} />
                    </span>
                    Training programs and events
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 w-full">
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-4 rounded-lg mb-3 border border-gray-300 w-full focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium shadow-sm hover:shadow transition-all">
                    Subscribe
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
