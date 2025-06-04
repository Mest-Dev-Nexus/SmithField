import { Leaf, Warehouse, Truck, Cpu, ShieldCheck, Users, Globe, Smartphone, BarChart2, DollarSign, Sun, Target, Package, ArrowRightCircle, HeartHandshake, BookOpenText, Scale, Link2 } from 'lucide-react';

const About = () => {
  // Gallery image placeholder data
  const galleryImages = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    src: `/images/gallery/gallery-${i + 1}.jpg`,
    alt: `SmithField Agribusiness operation ${i + 1}`
  }));

  // Process steps data
  const processSteps = [
    { icon: <Users size={24} />, title: "Step 1", description: "Fresh Produce is aggregated from the Smallholder Farmer" },
    { icon: <Package size={24} />, title: "Step 2", description: "Sorting/Grading/Cleaning/Packaging" },
    { icon: <Truck size={24} />, title: "Step 3", description: "Consumer receives their ordered produce" },
    { icon: <DollarSign size={24} />, title: "Step 4", description: "Revenue Received" },
    { icon: <ArrowRightCircle size={24} />, title: "Step 5", description: "5% Premium from Profits" },
    { icon: <HeartHandshake size={24} />, title: "Step 6", description: "Smallholder Livelihood Fund" },
    { icon: <BookOpenText size={24} />, title: "Step 7", description: "Technical Support and Trainings" },
    { icon: <Scale size={24} />, title: "Step 8", description: "Repeat" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">About SmithField Agribusiness</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We transform agri-food supply chains through technology, connecting smallholder farmers directly to consumers.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="mb-16 bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Our Mission & Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Target className="text-green-600 mr-2" /> TRANSFORMING Agri-Food Supply Chains
            </h3>
            <p className="text-gray-700 mb-6">
              We leverage data and technology to optimize agricultural production, storage, and distribution across Ghana.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <BarChart2 className="text-green-600 mr-2" size={20} />
                <span className="font-medium">Impact-Driven</span>
              </div>
              <p className="text-sm text-gray-600">Measuring success by positive transformation</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Cpu className="text-green-600 mr-2" size={20} />
                <span className="font-medium">Innovation</span>
              </div>
              <p className="text-sm text-gray-600">Cutting-edge technology solutions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Leaf className="text-green-600 mr-2" size={20} />
                <span className="font-medium">Sustainability</span>
              </div>
              <p className="text-sm text-gray-600">Environmental responsibility first</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Scale className="text-green-600 mr-2" size={20} />
                <span className="font-medium">Integrity</span>
              </div>
              <p className="text-sm text-gray-600">Transparency in all dealings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Products & Services</h2>
        
        {/* Greenhouse Farming */}
        <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
          <div className="bg-green-100 p-4 flex items-center">
            <Sun className="text-green-700 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-green-800">Greenhouse Farming & Management</h3>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Greenhouse Procurement, Setup & Installation</h4>
              <p className="text-gray-700 text-sm">Customized structures tailored to crops and climate with proper site selection and optimization.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Training & Technical Support</h4>
              <p className="text-gray-700 text-sm">Hands-on training in climate control, irrigation, pest control, and high-yield crop selection.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Access to Inputs & Smart Farming</h4>
              <p className="text-gray-700 text-sm">High-quality seeds, fertilizers, irrigation systems, and precision farming tools.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Guaranteed Market Access</h4>
              <p className="text-gray-700 text-sm">Direct market linkages ensuring competitive prices for farmers.</p>
            </div>
          </div>
        </div>

        {/* Cold Storage Solutions */}
        <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
          <div className="bg-green-100 p-4 flex items-center">
            <Warehouse className="text-green-700 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-green-800">Cold Storage Solutions</h3>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Cold Room Procurement & Installation</h4>
              <p className="text-gray-700 text-sm">State-of-the-art units for fruits, vegetables, dairy, and meat storage.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Mobile Cold Storage Solutions</h4>
              <p className="text-gray-700 text-sm">Containerized and solar-powered solutions for remote areas.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Storage as a Service (SaaS)</h4>
              <p className="text-gray-700 text-sm">Affordable cold storage rental for smallholder farmers.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Training & Maintenance</h4>
              <p className="text-gray-700 text-sm">Technical training on proper usage and maintenance.</p>
            </div>
          </div>
        </div>

        {/* Postharvest Management */}
        <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
          <div className="bg-green-100 p-4 flex items-center">
            <Package className="text-green-700 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-green-800">Postharvest Management & Value Addition</h3>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Aggregation & Sorting</h4>
              <p className="text-gray-700 text-sm">Quality grading, sorting, and packaging to meet market demands.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Processing & Value Addition</h4>
              <p className="text-gray-700 text-sm">Converting raw produce into tomato paste, dried fruit, cassava flour.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Storage & Distribution</h4>
              <p className="text-gray-700 text-sm">Efficient supply chain for timely delivery.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Training on Postharvest Handling</h4>
              <p className="text-gray-700 text-sm">Proper drying, packaging, and preservation techniques.</p>
            </div>
          </div>
        </div>

        {/* Market Access */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
          <div className="bg-green-100 p-4 flex items-center">
            <Link2 className="text-green-700 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-green-800">Market Access & Consultancy</h3>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Simply Smart Mobile Technology</h4>
              <p className="text-gray-700 text-sm">USSD/SMS platform and mobile apps connecting farmers directly to buyers.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Market Linkages & Bulk Sales</h4>
              <p className="text-gray-700 text-sm">Connecting to exporters, processors, supermarkets, and restaurants.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Business Development</h4>
              <p className="text-gray-700 text-sm">Training on financial management and business strategy.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Supply Chain Optimization</h4>
              <p className="text-gray-700 text-sm">Data analytics and logistics management for efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="mb-16 bg-green-800 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-green-700 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-2">5,000+</div>
            <p>Smallholder farmers integrated into our value chain</p>
          </div>
          <div className="bg-green-700 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-2">20-40%</div>
            <p>Increase in farmer incomes</p>
          </div>
          <div className="bg-green-700 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-2">30-50%</div>
            <p>Reduction in postharvest losses</p>
          </div>
          <div className="bg-green-700 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-2">1,500+</div>
            <p>Youth and women trained in agribusiness</p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Our 8-Step Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-50">
              <div className="text-green-600 mb-2">{step.icon}</div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                {/* Replace with actual image */}
                <span className="text-gray-500">Image {image.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Join Our Transformation Journey</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We're building a more sustainable and equitable food system in Ghana. Partner with us today.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
          Contact Our Team
        </button>
      </section>
    </div>
  );
};

export default About;