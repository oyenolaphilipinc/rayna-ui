import { Lightbulb, Trophy, Shield, Users } from "lucide-react";
import { Header } from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "We create solutions that drive progress.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We deliver quality that exceeds expectations.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Integrity",
      description: "We value honesty, trust, and transparency.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      description: "We believe success comes from teamwork.",
    },
  ];
  const stats = [
    { number: "200+", label: "Consultancy" },
    { number: "25+", label: "Team Leads" },
    { number: "100+", label: "Members" },
    { number: "100+", label: "Satisfied Clients" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative">
        <Header button="Book Consultation" />
        {/* Background Color Overlay */}
        <div className="absolute inset-0 bg-[#e6f2fe] opacity-50" />

        {/* Background Image */}
        <div
          className="absolute inset-0"
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
        <div className="relative z-10 py-60">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-8">
                We create solutions that drive innovation, scalability, and
                success.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content without background */}
      <div>
        <section className="py-16 bg-[#e6f2fe]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What We Do</h2>
                <p className="text-gray-600">
                  We deliver tailored IT solutions to drive business success.
                  From software development and digital transformation to
                  process automation and training, our services streamline
                  operations, boost efficiency, and empower businesses to excel
                  in the digital age.
                </p>
              </div>
              <div>
                <img
                  src="/laptop.svg"
                  alt="Team working together"
                  className="rounded-lg w-full md:w-8/12 shadow-lg md:ml-24"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/different.svg"
                  alt="Business meeting"
                  className="rounded-lg w-full md:w-10/12 shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why We Are Different
                </h2>
                <p className="text-gray-600">
                  We prioritize understanding your unique challenges, delivering
                  scalable and innovative solutions that align with your goals.
                  With a focus on quality, transparency, and customer
                  satisfaction, we leverage cutting-edge technology and industry
                  expertise to help your business grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#e6f2fe]">
          <div className="container">
            <div className="max-w-3xl mb-12 md:ml-12 ml-6">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">
                At Techbor, our values shape everything we do. They are the
                foundation of our commitment to clients and guide how we
                approach every project.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#f4f8fc] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((values, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#e6f2fe] text-gray-600 rounded-full text-2xl">
                    {values.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-600">
                      {values.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {values.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/culture.svg"
                  alt="Team collaboration"
                  className="rounded-lg w-full md:w-10/12 shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
                <p className="text-gray-600 mb-8">
                  At Techbor, our culture drives how we work, innovate, and
                  collaborate to achieve meaningful results. We value teamwork,
                  creative innovation, a growth mindset, and a client-first
                  approach to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-2 pb-8 bg-[#e6f2fe]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
