import { MapPin, Mail, Phone, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import bgpic from "../images/bgpic.jpg";


const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I partner with SmithField Agribusiness?",
      answer: "We welcome partnerships with farmers, agribusinesses, and investors. Please contact our partnerships team through the form above or email partnerships@smithfieldagro.com"
    },
    {
      question: "What areas do you currently operate in?",
      answer: "We currently operate across Ghana with our headquarters in Accra. Our cold storage and distribution network covers major agricultural regions including Ashanti, Brong-Ahafo, and Northern regions."
    },
    {
      question: "How do farmers join your network?",
      answer: "Farmers can register through our mobile USSD platform (*700#), visit any of our regional offices, or contact our farmer support line at +233 123 456 789."
    },
    {
      question: "What are your business hours?",
      answer: "Our offices are open Monday-Friday from 8:00 AM to 5:00 PM. Cold storage facilities operate 24/7 with security personnel always available."
    },
    {
      question: "Do you provide training for new farmers?",
      answer: "Yes! We offer comprehensive training programs in greenhouse farming, postharvest management, and agribusiness fundamentals. Check our website's Training section for upcoming programs."
    },
    {
      question: "How do I access your cold storage services?",
      answer: "You can book cold storage space through our mobile app, by calling our storage hotline, or visiting any of our storage facilities. We offer both short-term and long-term storage options."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Background Image */}
  <section className="relative h-[70vh] flex items-center justify-center mb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bgpic} 
            alt="Agribusiness background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact SmithField Agribusiness</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get in touch with our team for partnerships, farmer support, or general inquiries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="pb-12">
        {/* Contact Cards */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MapPin className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Our Location</h3>
            <p className="text-gray-700">
              SmithField Agribusiness LLC<br />
              P.O.Box CO 1445<br />
              Tema, Ghana
            </p>
            
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Mail className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Email Us</h3>
            <p className="text-gray-700 mb-2">
              General Inquiries:
            </p>
            <a href="mailto:smithfieldagribusiness@gmail.com" className="text-green-600 hover:underline font-medium flex items-center">
              smithfieldagribusiness@gmail.com
            </a>
          
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Phone className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Call Us</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Main Office:</span>+233 20 800 0035
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Farmer Support:</span>+233 20 316 1111
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Emergency:</span>+233 24 756 4347
            </p>
            <a 
              href="tel:+233 24 756 4347" 
              className="inline-block mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition duration-200 font-medium"
            >
              Call Now
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-inner">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              >
                <option value="">Select a subject</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="farmer-support">Farmer Support</option>
                <option value="cold-storage">Cold Storage Inquiry</option>
                <option value="training">Training Programs</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageSquare className="mr-2" size={20} />
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left p-6 font-medium text-green-800 hover:text-green-600 focus:outline-none"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`transition-transform duration-200 ${activeFaq === index ? 'transform rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Hours */}
        <section className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock className="text-green-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-green-800">Business Hours</h3>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-medium text-gray-800">Main Office</h4>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;