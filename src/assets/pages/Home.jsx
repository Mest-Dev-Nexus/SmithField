import React, { useEffect, useRef, useState } from "react";
import "/src/index.css";
import {
  ChevronRight,
  Leaf,
  Award,
  Sun,
  Package,
  Link as LinkIcon,
  Snowflake,
  PackageCheck,
  BriefcaseBusiness,
  Sprout,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import bgpic from "../images/bgpic.jpg";
import coolr from "../images/coolr.png";
import llyodstunnels from "../images/llyodstunnels.png";
import mobilemakola from "../images/mobilemakola.png";
import youngfarmers from "../images/youngfarmers.png";
import grnhs3 from "../images/grnhs3.jpeg";
import img3 from "../images/img1.jpeg";

const Home = () => {
  const videoRef = useRef(null);

  return (
    <div className="font-nunito-sans min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={img3}
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/90 to-gray-900/20"></div>

        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming
              <span className="text-green-500">.</span>
              <span className="text-green-500 block mt-2">Agribusiness</span>
              in Africa
              <span className="text-green-500">.</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg font-light animate-fadeInUp delay-100">
              Empowering farmers with innovative solutions to boost
              productivity, enhance sustainability, and connect directly to
              profitable markets across the continent.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-200">
              <Link
                to="/shop"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                <Package size={20} />
                Shop Products
              </Link>

              <Link
                to="/services"
                className="bg-white/20 backdrop-blur-sm hover:bg-green-500/40 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                <Leaf size={20} />
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fadeIn">
            <span className="text-green-600 font-semibold mb-4 inline-block">
              WHO WE ARE
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cultivating Agricultural Excellence Across Africa
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              SmithField Agribusiness is at the forefront of Africa's
              agricultural revolution. We integrate cutting-edge technology with
              sustainable practices to create resilient food systems that
              benefit farmers, consumers, and ecosystems alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="bg-gradient-to-r from-green-100 to-green-50 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Leaf size={36} className="text-green-600" />
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

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Award size={36} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Farmer Empowerment
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive training programs and access to quality inputs
                transform smallholder farmers into agripreneurs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <LinkIcon size={36} className="text-green-600" />
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
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-green-600 font-semibold mb-4 inline-block">
              OUR SOLUTIONS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Agricultural Solutions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              We provide end-to-end solutions tailored to Africa's unique
              agricultural challenges
            </p>
          </div>

          {/* Featured Solution */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transition-all hover:shadow-xl animate-fadeInUp delay-100 border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gray-200 h-80 md:h-auto overflow-hidden relative">
                <img
                  src={grnhs3}
                  alt="Greenhouse Farming Solutions"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="text-white font-medium text-lg">
                    Greenhouse Technology
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center transform transition-all hover:rotate-6">
                    <Sun className="text-green-600" size={32} />
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
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                      <Check size={16} />
                    </span>
                    Custom designs for various crops and climates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                      <Check size={16} />
                    </span>
                    Integrated irrigation and fertigation systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                      <Check size={16} />
                    </span>
                    Ongoing agronomic support
                  </li>
                </ul>
                <Link
                  to="/services/greenhouses"
                  className="flex items-center text-green-600 font-medium hover:text-green-700 group text-lg transition-all"
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
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/services/cold-storage"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors">
                  <Snowflake size={28} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Cold Storage Solutions
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Extend shelf life and reduce post-harvest losses with our
                state-of-the-art cold storage units.
              </p>
              <div className="text-blue-600 font-medium flex items-center">
                Learn more <ChevronRight size={18} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/services/postharvest-management"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-50 transition-colors">
                  <PackageCheck size={28} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Postharvest Management
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive solutions to maintain quality and value from farm
                to market.
              </p>
              <div className="text-green-600 font-medium flex items-center">
                Learn more <ChevronRight size={18} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/services/consultancy"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-50 transition-colors">
                  <BriefcaseBusiness size={28} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Agribusiness Consultancy
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Expert guidance to optimize your agricultural operations and
                profitability.
              </p>
              <div className="text-purple-600 font-medium flex items-center">
                Learn more <ChevronRight size={18} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/services/inputs"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-50 transition-colors">
                  <Sprout size={28} className="text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Farm Inputs
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Premium quality seeds, fertilizers, and tools for optimal farm
                productivity.
              </p>
              <div className="text-orange-600 font-medium flex items-center">
                Learn more <ChevronRight size={18} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="relative py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={bgpic}
            alt="African agriculture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-300 font-semibold mb-4 inline-block">
              OUR IMPACT
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Transforming African Agriculture
            </h2>
            <div className="w-24 h-1.5 bg-white/50 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/90 leading-relaxed">
              We measure our success in thriving farming communities,
              sustainable ecosystems, and food-secure nations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-100 border border-white/20">
              <div className="text-5xl font-bold mb-3 text-green-300">10K+</div>
              <p className="text-white/90 font-medium">Farmers Empowered</p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-200 border border-white/20">
              <div className="text-5xl font-bold mb-3 text-green-300">30%</div>
              <p className="text-white/90 font-medium">
                Average Yield Increase
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-300 border border-white/20">
              <div className="text-5xl font-bold mb-3 text-green-300">50+</div>
              <p className="text-white/90 font-medium">Successful Projects</p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-center transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeInUp delay-400 border border-white/20">
              <div className="text-5xl font-bold mb-3 text-green-300">5+</div>
              <p className="text-white/90 font-medium">Regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-green-600 font-semibold mb-4 inline-block">
              OUR NETWORK
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted By Agricultural Leaders
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Collaborating with industry leaders to drive agricultural
              transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-32 h-32 p-6 flex items-center justify-center mb-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <img
                  src={youngfarmers}
                  alt="Young Farmers"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                Young Farmers
              </h3>
              <span className="text-sm text-gray-500 text-center mb-2">
                Cooperative Society
              </span>
              <div className="h-px w-16 bg-green-300 my-2"></div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-32 h-32 p-6 flex items-center justify-center mb-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <img
                  src={mobilemakola}
                  alt="Mobile Makola"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                Mobile Makola
              </h3>
              <span className="text-sm text-gray-500 text-center mb-2">
                Market Platform
              </span>
              <div className="h-px w-16 bg-green-300 my-2"></div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-32 h-32 p-6 flex items-center justify-center mb-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <img
                  src={llyodstunnels}
                  alt="Lloyds Tunnels and Farms"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                Lloyds Tunnels
              </h3>
              <span className="text-sm text-gray-500 text-center mb-2">
                Greenhouse Specialists
              </span>
              <div className="h-px w-16 bg-green-300 my-2"></div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-32 h-32 p-6 flex items-center justify-center mb-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <img
                  src={coolr}
                  alt="CoolR"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                CoolR
              </h3>
              <span className="text-sm text-gray-500 text-center mb-2">
                Cold Chain Solutions
              </span>
              <div className="h-px w-16 bg-green-300 my-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Farmers Join Society CTA */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative min-h-[500px]">
                <img
                  src={bgpic}
                  alt="Farmers working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-blue-800/90 p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center transform transition-all hover:rotate-6">
                      <Sprout size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white ml-4">
                      Join Our Farmer Network
                    </h2>
                  </div>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Become part of a growing community of progressive farmers
                    gaining access to premium markets, modern farming
                    techniques, and financial support.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-white/90">
                      <span className="bg-white/20 rounded-full p-1 mr-3">
                        <Check size={16} className="text-white" />
                      </span>
                      Collective bargaining power for better prices
                    </li>
                    <li className="flex items-center text-white/90">
                      <span className="bg-white/20 rounded-full p-1 mr-3">
                        <Check size={16} className="text-white" />
                      </span>
                      Access to subsidized inputs and equipment
                    </li>
                    <li className="flex items-center text-white/90">
                      <span className="bg-white/20 rounded-full p-1 mr-3">
                        <Check size={16} className="text-white" />
                      </span>
                      Regular training sessions from agricultural experts
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side with form */}
              <div className="lg:w-1/2 p-12 bg-white">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Are you a farmer looking to grow?
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Join SmithField Agribusiness today and take your farming
                  business to the next level with our support.
                </p>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="farmer-name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="farmer-name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="farmer-phone"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="farmer-phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+233 123456789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="farmer-location"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Farm Location
                    </label>
                    <input
                      type="text"
                      id="farmer-location"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Region/District"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="farmer-crops"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Main Crops/Livestock
                    </label>
                    <input
                      type="text"
                      id="farmer-crops"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="What do you farm?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-500 text-white py-4 rounded-lg font-bold hover:from-green-700 hover:to-blue-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    Join Our Network
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-green-600 font-semibold mb-4 inline-block">
              FARMER STORIES
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories From Our Farmers
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Hear directly from farmers who have transformed their operations
              with our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fadeInUp delay-100 border border-gray-100">
              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    Emmanuel Osei
                  </h3>
                  <p className="text-gray-600">Tomato Farmer, Ghana</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Before SmithField, I struggled with pests and low yields. Now
                with their greenhouse and training, I produce quality tomatoes
                year-round and sell directly to supermarkets."
              </p>
              <div className="mt-6 flex items-center"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fadeInUp delay-200 border border-gray-100">
              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    Amina Kofie
                  </h3>
                  <p className="text-gray-600">
                    Agribusiness Owner, Western Region
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "The cold storage units have been a game-changer for our
                business. We now export fresh produce all over Africa with
                confidence in quality and shelf life."
              </p>
              <div className="mt-6 flex items-center"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fadeInUp delay-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    Daniel Mensah
                  </h3>
                  <p className="text-gray-600">Yam Farmer, Savanna Region</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "SmithField's digital platform has given our farmers
                transparency and bargaining power. We now get fair prices
                without middlemen taking most of the profit."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-12 animate-fadeInUp border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  Join Our Agricultural Community
                </h3>
                <p className="text-gray-600 text-lg">
                  Subscribe to receive the latest insights, success stories, and
                  opportunities in African agriculture.
                </p>
                <div className="mt-8">
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="flex items-center justify-center flex-col gap-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <Link
                      to="https://www.instagram.com/smithfield_agribusiness/"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600  flex items-center justify-center text-white hover:shadow-lg transition-all "
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </Link>
                    <Link
                      to="https:gh.linkedin.com/company/smithfield-agribusiness"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white hover:shadow-lg transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
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
