import { useState } from "react";
import { Header } from "./Navbar";
import Footer from "./Footer";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    time: "",
    serviceOfInterest: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative">
        <Header />
        {/* Background Color Overlay */}
        <div className="absolute inset-0 bg-[#e6f2fe] opacity-50" />

        {/* Background Image */}
        <div
          className="absolute inset-0 mt-24"
          style={{
            backgroundImage: "url('/load.gif')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "400px 400px",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 py-40 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12 sm:mb-24 mt-12 sm:mt-24">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                We&apos;re Here to Help - Let&apos;s Connect!
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600">
                Reach out for inquiries, support, or to start your next project.
                <br />
                We&apos;re just a message away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content without background */}
      <div>
        {/* Address and Map Section */}
        <section className="py-16 bg-[#e6f2fe]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Office Address
              </h2>
              <p className="text-base text-gray-600">
                Level One, Basecamp Liverpool,
                <br />
                49 Jamaica Street
              </p>
            </div>

            {/* Map */}
            <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.4!2d-2.9814!3d53.4008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b213027714007%3A0xefb2fafe7aec3c6c!2sJamaica%20St%2C%20Liverpool!5e0!3m2!1sen!2suk!4v1672764800000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <div className="grid gap-8 sm:grid-cols-3 text-center mt-12">
          <div>
            <h2 className="text-lg font-semibold mb-2">Email us</h2>
            <a
              href="mailto:info@techbor.co.uk"
              className="text-gray-600 hover:text-gray-900"
            >
              info@techbor.co.uk
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Call us</h2>
            <a
              href="tel:+447723674001"
              className="text-gray-600 hover:text-gray-900"
            >
              +44 7723 674001
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <div className="flex justify-center gap-4 py-1">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <section className="bg-gray-100 w-full px-4 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Form Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Book Consultation
                </h2>
                <p className="text-gray-600">
                  For more information about Techbor, our services, or to
                  explore how we can assist you, please fill out the form. Our
                  team will get in touch with you promptly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  name="serviceOfInterest"
                  value={formData.serviceOfInterest}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Service of Interest
                  </option>
                  <option value="Custom Software Solutions">
                    Custom Software Solutions
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Web Application Development">
                    Web Application Development
                  </option>
                  <option value="Business Setup Services">
                    Business Setup Services
                  </option>
                  <option value="Website Design & Development">
                    Website Design & Development
                  </option>
                  <option value="CRM/ERP Solutions">CRM/ERP Solutions</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="API Integration">API Integration</option>
                  <option value=" Business Process Automation">
                    Business Process Automation
                  </option>
                  <option value="IoT Solutions">IoT Solutions</option>
                  <option value="Data Analysis / Business Intelligence Analysis">
                    Data Analysis / Business Intelligence Analysis
                  </option>
                  <option value="Project Management">Project Management</option>
                  <option value="Business Analysis">Business Analysis</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
