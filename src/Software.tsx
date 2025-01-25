import Footer from "./components/Footer";
import { Header } from "./components/Navbar";
import { Button } from "./components/ui/button";
import { Clock, Smartphone, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import DocumentHead from "./components/DocumentHead";

export default function SoftwarePage() {
  return (
    <main className="min-h-screen">
      <DocumentHead
        title="Software Development"
        description="Custom software solutions tailored to your business needs. From web applications to mobile apps, we deliver innovative software that drives growth."
        keywords="software development, custom software, web applications, mobile apps, enterprise software"
      />
      <Header button="Book Consultation" />
      {/* Software Development Section */}
      <section className="container mx-auto px-8 sm:px-12 lg:px-24 py-24">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
          <span className="text-sm">Services › Software Development</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Software Development
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Empowering your business with tailored, secure, and scalable
              software applications designed to enhance efficiency and customer
              engagement.
            </p>
            <Button
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-full w-48 "
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/code.svg"
              alt="Software Development"
              className="object-contain w-full h-[400px]"
            />
          </div>
        </div>
      </section>
      {/* Our Expertise Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our expertise in Software Development
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
      <section className="">
        {/* Custom Software Solutions - Text left, Image right */}
        <div className="bg-[#e6f2fe] py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-6">
            Service Highlights
          </h2>
          <div className="container mx-auto px-8 sm:px-12 lg:px-24">
            <div className="grid md:grid-cols-2 gap-12 items-center py-12">
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                  Custom Software Solutions
                </h1>
                <p className="text-gray-600 text-lg">
                  We create tailor-made applications designed to address the
                  unique challenges of your business. By aligning technology
                  with your goals, our custom solutions enhance operational
                  efficiency, improve workflows, and support your growth.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/cool.png"
                  alt="Custom Software"
                  className="object-contain w-full h-[400px] max-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Development - Image left, Text right */}
        <div className="bg-gray-50">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24">
            <div className="grid md:grid-cols-2 gap-12 items-center py-12">
              <div className="flex items-center justify-center">
                <img
                  src="/mobile.png"
                  alt="Mobile Development"
                  className="object-contain w-full h-[400px] max-w-[500px]"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                  Mobile App Development
                </h1>
                <p className="text-gray-600 text-lg">
                  Reach your customers wherever they are with innovative mobile
                  applications for Android and iOS. Our apps are designed for
                  seamless user experiences, helping businesses increase
                  customer engagement, drive sales, and foster brand loyalty in
                  an increasingly mobile world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Web Application Development - Text left, Image right */}
        <div className="bg-gray-50">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24">
            <div className="grid md:grid-cols-2 gap-12 items-center py-12">
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                  Web Application Development
                </h1>
                <p className="text-gray-600 text-lg">
                  Empower your business with scalable and secure web
                  applications that grow with you. From e-commerce platforms to
                  enterprise-level web solutions, we build intuitive
                  applications designed to elevate your online presence and
                  streamline operations.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/web.png"
                  alt="Web Development"
                  className="object-contain w-full h-[400px] max-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
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
                Tailored Solutions
              </h3>
              <p className="text-sm text-gray-500">
                Built to align with your business objectives.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Cross-Platform Compatibility
              </h3>
              <p className="text-sm text-gray-500">
                Applications designed to perform seamlessly across devices.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced Security
              </h3>
              <p className="text-sm text-gray-500">
                Robust infrastructure to protect your data and users.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalability</h3>
              <p className="text-sm text-gray-500">
                Solutions that grow with your business needs.
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
            At Techbor, we combine technical expertise with a deep understanding
            of your business needs to create software that delivers measurable
            results. Our team ensures timely delivery, cost-effective solutions,
            and a customer-focused approach to every project.
          </p>
          <img
            src="/brainstorm.png"
            alt="Mobile App Development"
            width={600}
            height={600}
            className="rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-8 sm:px-12 lg:px-24">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with Custom Software?
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
