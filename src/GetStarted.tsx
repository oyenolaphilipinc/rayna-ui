import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import ConsultationForm from './components/consultation-form';
import { ArrowRight } from 'lucide-react';
import { Header } from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header button="Book Consultation" />
      
      {/* Hero Section */}
      <section className="bg-[#e6f2fe] px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left mt-16">
              <p className="text-xs text-gray-600 border bg-gray-300 w-11/12 rounded-full py-1">
                empowering businesses, transforming the future ⚡
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transform your business with innovative{' '}
                <span className="text-blue-600">IT solutions</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Partner with us for digital transformation and scalable solutions that drive success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button size="lg" className="rounded-full bg-[#0066FF] hover:bg-[#0066FF]/90">
                  Get Started Today
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1].map((i) => (
                    <img src='/iconify.svg' key={i} width={100} height={100} alt='Hello' />
                  ))}
                </div>
                <p>Join 1000+ businesses thriving with Techbor's IT solutions.</p>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex justify-center">
              <img
                src="/group1.svg"
                alt="Business professionals"
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Driving Your Business with IT Solutions
            </h2>
            <p className="text-gray-600">
              Explore a range of IT solutions designed to streamline operations, drive growth, and empower your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Software Development',
                description: 'Delivering innovative software solutions that leverage the latest technologies to drive innovation.',
                image: '/computer-lab.svg',
              },
              {
                title: 'Digital Transformation',
                description: 'Driving digital transformation for businesses through innovative technology.',
                image: '/digital-time.svg',
              },
              {
                title: 'Business Solution',
                description: 'Achieve Operational Efficiency and Eliminate Deficiency through our innovative IT solutions.',
                image: '/open-solution.svg',
              },
              {
                title: 'Training',
                description: 'BOR training program helps individuals and organizations to up-skill and do more with IT.',
                image: '/closed-solution.svg',
              },
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="object-cover w-full"
                  />
                </div>
                <div className="p-4 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-[#0066FF]">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                We deliver tailored technology solutions that boost efficiency and productivity. Our expert team provides cutting-edge IT services to help your business thrive in the digital landscape.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] flex justify-center">
              <img
                src="/about.svg"
                alt="Team meeting"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#e6f2fe] px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: 'Consultancy' },
              { number: '25+', label: 'Total Cases' },
              { number: '100+', label: 'Members' },
              { number: '100+', label: 'Satisfied Clients' },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-center text-gray-600 mb-8 sm:mb-12">
            Trusted by world's top leading organizations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { name: 'Zoho', height: 40 },
              { name: 'AWS', height: 35 },
              { name: 'Salesforce', height: 40 },
              { name: 'Microsoft', height: 40 },
              { name: 'Wise', height: 40 },
            ].map((brand, i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-gray-800">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-white px-4 md:px-0 sm:px-6 py-8">
        <div className="max-w-2xl md:max-w-full mx-auto">
          <ConsultationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
