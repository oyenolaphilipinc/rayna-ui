import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import ConsultationForm from './components/consultation-form'
import { ArrowRight } from 'lucide-react'
import { Header } from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header button='Book Consultation' />
      {/* Hero Section */}
      <section className="bg-[#e6f2fe] px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm text-gray-600">empowering businesses, transforming the future ⚡</p>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Transform your business with innovative{' '}
                <span className="text-blue-600">IT solutions</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Partner with us for digital transformation and scalable solutions that drive success.
              </p>
              <Button size="lg" className="rounded-full bg-[#0066FF] hover:bg-[#0066FF]/90">
                Get Started Today
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                </div>
                <p>Join 1000+ businesses thriving with Techbor's IT solutions.</p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <img
                src="/group1.svg"
                alt="Business professionals"
                width={550}
                height={550}
                className="object-contain mt-24 ml-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Driving Your Business with IT Solutions
            </h2>
            <p className="text-gray-600">
              Explore a range of IT solutions designed to streamline operations, drive growth, and empower your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Software Development',
                description: 'Delivering innovative software solutions that leverage the latest technologies to drive innovation.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-2025-01-18-14-24-00-sQlaKReBCxtdrx4NguHSRJAKGe4UxI.png'
              },
              {
                title: 'Digital Transformation',
                description: 'Driving digital transformation for businesses through innovative technology.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-2025-01-18-14-24-00-sQlaKReBCxtdrx4NguHSRJAKGe4UxI.png'
              },
              {
                title: 'Business Solution',
                description: 'Achieve Operational Efficiency and Eliminate Deficiency through our innovative IT solutions.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-2025-01-18-14-24-00-sQlaKReBCxtdrx4NguHSRJAKGe4UxI.png'
              },
              {
                title: 'Training',
                description: 'BOR training program helps individuals and organizations to up-skill and do more with IT.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-2025-01-18-14-24-00-sQlaKReBCxtdrx4NguHSRJAKGe4UxI.png'
              }
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600">
                We deliver tailored technology solutions that boost efficiency and productivity. Our expert team provides cutting-edge IT services to help your business thrive in the digital landscape.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/about.svg"
                alt="Team meeting"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#e6f2fe] px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Consultancy' },
              { number: '25+', label: 'Total Cases' },
              { number: '100+', label: 'Members' },
              { number: '100+', label: 'Satisfied Clients' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl text-center text-gray-600 mb-12">
            Trusted by world's top leading organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { name: 'Zoho', height: 40 },
              { name: 'AWS', height: 35 },
              { name: 'Salesforce', height: 40 },
              { name: 'Microsoft', height: 40 },
              { name: 'Wise', height: 40 },
            ].map((brand, i) => (
              <div key={i} className="h-12 relative w-32">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-800">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-white py-8">
        <div className="mx-auto">
          <ConsultationForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
