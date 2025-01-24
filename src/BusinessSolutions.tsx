import Footer from "./components/Footer";
import { Header } from "./components/Navbar";
import { Button } from "./components/ui/button";
import { Clock, Smartphone, Shield, BarChart} from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header button="Book Consultation" />
      {/* Software Development Section */}
      <section className="container mx-auto px-8 sm:px-12 lg:px-24 py-24">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
          <span className="text-sm">Services › Business Solutions</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Business Solutions
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Empowering businesses with innovative technology solutions.
              Streamline operations, enhance efficiency, and achieve your goals.
            </p>
            <Button
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-full w-48 "
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>

          {/* Image Column */}
          <div className="flex items-center justify-center h-full">
            <img
              src="/company.svg"
              alt="Software Development"
              className="object-contain w-full h-[400px]"
            />
          </div>
        </div>
      </section>
      {/* Our Expertise Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-8 sm:px-12 lg:px-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Expertise in Business Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Techbor, we specialize in delivering cutting-edge software
            solutions tailored to your business needs. From enhancing customer
            experiences with mobile apps to creating robust web applications,
            our goal is to empower businesses through innovative technologies.
          </p>
        </div>
      </section>
      {/* Service Highlights */}
      <section className="bg-[#e6f2fe] py-16 md:py-24">
        <div className="container mx-auto px-8 sm:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-6">
            Service Highlights
          </h2>

          {/* Business Setup Services - Text left, Image right */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Business Setup Services
              </h1>
              <p className="text-gray-600 text-lg">
                Launching a business can be complex, but we make it seamless.
                From company registration and legal compliance to organizational
                setup, our expertise ensures you start on the right foundation,
                saving time and avoiding costly mistakes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/setup-time.svg"
                alt="Web Development"
                className="object-contain w-full h-[400px] max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        {/* Website Design - Image left, Text right */}
        <div className="container mx-auto px-8 sm:px-12 lg:px-24 text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="flex items-center justify-center">
              <img
                src="/develop.svg"
                alt="Mobile App Development"
                className="object-contain w-full h-[400px] max-w-[500px]"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Website Design & Development
              </h1>
              <p className="text-gray-600 text-lg">
                We create professional websites tailored to showcase your brand
                and drive engagement. Whether you need a sleek corporate site or
                a robust e-commerce platform, our designs prioritize
                functionality, user experience, and business growth.
              </p>
            </div>
          </div>

          {/* CRM/ERP Solutions - Text left, Image right */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                CRM/ERP Solutions
              </h1>
              <p className="text-gray-600 text-lg">
                Optimize your business operations with our Customer Relationship
                Management (CRM) and Enterprise Resource Planning (ERP)
                solutions. These tools help manage customer interactions, track
                data, automate processes, and streamline your business for
                better decision-making and efficiency.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/smarter.svg"
                alt="Web Development"
                className="object-contain w-full h-[400px] max-w-[500px]"
              />
            </div>
          </div>

          {/* Cloud Solutions - Image left, Text right */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="flex items-center justify-center">
              <img
                src="/cloud.svg"
                alt="Web Development"
                className="object-contain w-full h-[400px] max-w-[500px]"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Cloud Solutions
              </h1>
              <p className="text-gray-600 text-lg">
                Our cloud services provide secure, scalable, and cost-effective
                solutions for hosting, migration, and data management. Enhance
                flexibility and business continuity with seamless access to your
                systems, anytime and anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration - Text left, Image right */}
      <section className="bg-[#e6f2fe] py-8">
        <div className="container mx-auto px-8 sm:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                API Integration
              </h1>
              <p className="text-gray-600 text-lg">
                We design and implement custom Application Programming Interface
                (API) integrations to connect your systems, automate workflows,
                and enhance functionality. These solutions enable efficient data
                sharing and seamless communication between software
                applications, boosting productivity.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/api.svg"
                alt="Web Development"
                className="object-contain w-full h-[400px] max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-8 sm:px-12 lg:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Streamlined Operations
              </h3>
              <p className="text-sm text-gray-500">
                Improve efficiency with tailored solutions.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Enhanced Decision-Making
              </h3>
              <p className="text-sm text-gray-500">
                {" "}
                Leverage data for smarter strategies.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalability</h3>
              <p className="text-sm text-gray-500">
                Tools that grow with your business.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Customer Focus
              </h3>
              <p className="text-sm text-gray-500">
                Solutions to elevate client satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-8 sm:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-center max-w-6xl mx-auto mb-12">
            Techbor empowers businesses with tailored solutions that streamline
            operations, enhance collaboration, and drive growth. With innovative
            tools like scalable CRM/ERP systems and seamless API integrations,
            we focus on delivering measurable results. Partner with us for
            efficient, scalable, and impactful business processes. By choosing
            us, you gain a partner committed to innovation, transparency, and
            your long-term success. Let us transform your business processes
            into a seamless, productive, and scalable operation.
          </p>
          <img
            src="/puzzle.svg"
            alt="Mobile App Development"
            width={600}
            height={600}
            className="rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-8 sm:px-12 lg:px-24 py-16">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with Smart Solutions?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch to discuss your development needs
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 rounded-full"

          >
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
