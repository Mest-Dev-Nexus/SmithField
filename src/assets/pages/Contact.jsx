import { MapPin, Mail, Phone, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Contact SmithField Agribusiness</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team for partnerships, farmer support, or general inquiries.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-green-100 hover:shadow-lg transition duration-200">
          <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <MapPin className="text-green-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our Location</h3>
          <p className="text-gray-700">
            Agribusiness Plaza<br />
            123 Agric Street, East Legon<br />
            Accra, Ghana
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-green-100 hover:shadow-lg transition duration-200">
          <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Mail className="text-green-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Email Us</h3>
          <p className="text-gray-700">
            General Inquiries: <a href="mailto:info@smithfieldagro.com" className="text-green-600 hover:underline">info@smithfieldagro.com</a><br />
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-green-100 hover:shadow-lg transition duration-200">
          <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Phone className="text-green-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Call Us</h3>
          <p className="text-gray-700">
            Main Office: +233 123 456 789<br />
            Emergency: +233 987 654 321
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-16 bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Send Us a Message</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <select
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center"
            >
              <MessageSquare className="mr-2" size={20} />
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left font-medium text-green-800 hover:text-green-600 focus:outline-none"
              >
                <span className="text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform duration-200 ${activeFaq === index ? 'transform rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 mt-2' : 'max-h-0'}`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto flex items-center justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center justify-center">
          <Clock className="mr-2 text-green-600" size={24} />
          Business Hours
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex items-center justify-center">
          <div>
            <h4 className="font-medium text-gray-800">Main Office</h4>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
      
        </div>
      </section>
    </div>
  );
};

export default Contact;