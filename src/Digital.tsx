import Footer from './components/Footer'
import { Header } from './components/Navbar'
import { Button } from './components/ui/button'
import { Clock, Smartphone, Shield, BarChart } from 'lucide-react'

export default function DigitalPage() {
  return (
    <main className="min-h-screen">
      <Header button="Let's Talk" />
      {/* Software Development Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm">Services › Digital Transformation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Software Development</h2>
            <p className="text-gray-600 text-lg mb-8">
            Embrace innovation, streamline operations, and stay ahead in the digital era with Techbor's transformative solutions.
            </p>
            <Button size="lg" className='bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-full'>Get Started Today</Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/focus.svg"
              alt="Software Development"
              className="object-cover md:w-10/12 w-full rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Our Expertise Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our expertise in Digital Transformation</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Techbor specializes in reshaping businesses with advanced technologies. Our solutions focus on automation, AI integration, IoT systems, and more, enabling organizations to achieve efficiency, scalability, and innovation.
          </p>
        </div>
      </section>
      {/* Service Highlights */}
      <section className="bg-[#e6f2fe] px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Service Highlights</h2>

    {/* Custom Software Solutions Section */}
    <div className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div>
        <h1 className="text-3xl md:text-3xl font-bold mb-6">Business Process Automation</h1>
        <p className="text-gray-600 text-lg">
        Streamline your operations by automating repetitive and time-consuming tasks. At Techbor, we implement advanced tools that improve workflow efficiency, minimize errors, and reduce operational costs. This allows your team to focus on strategic initiatives that drive growth.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/gathering.svg"
          alt="Web Development"
          className="object-cover w-full md:w-10/12 rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-8">
  {/* Mobile App Development Section */}
  <div className="container mx-auto px-4 text-center">
  <div className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div className="order-last">
        <h1 className="text-3xl md:text-3xl font-bold mb-6">AI Integration</h1>
        <p className="text-gray-600 text-lg">
        Leverage the power of artificial intelligence to transform how your business operates. Our AI solutions enable smarter decision-making, advanced analytics, and personalized customer experiences. By integrating AI, you can gain predictive insights and unlock new opportunities for innovation.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/ai.svg"
          alt="Mobile App Development"
          className="object-cover w-full md:w-10/12 rounded-lg"
        />
      </div>
    </div>

    {/* Web Application Development Section */}
    <div className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div>
        <h1 className="text-3xl md:text-3xl font-bold mb-6">IoT Solutions</h1>
        <p className="text-gray-600 text-lg">
        Connect your devices and systems seamlessly with our IoT solutions. We provide tools that enable real-time monitoring, data collection, and process optimization, enhancing operational visibility and efficiency. IoT integration opens the door to innovative customer solutions and improved asset management.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/iot.svg"
          alt="Web Development"
          className="object-cover w-full md:w-10/12 rounded-lg"
        />
      </div>
    </div>
    </div>
</section>


      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enhanced Efficiency</h3>
              <p className="text-sm text-gray-500">Built to align with your business objectives.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-sm text-gray-500">Applications designed to perform seamlessly across devices.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalability</h3>
              <p className="text-sm text-gray-500">Robust infrastructure to protect your data and users.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cost Reduction</h3>
              <p className="text-sm text-gray-500">Solutions that grow with your business needs.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 text-center max-w-6xl mx-auto mb-12">
          At Techbor, we prioritize your business's success by offering tailored digital transformation solutions that drive measurable results. Our team combines deep expertise with a commitment to innovation, ensuring your organization stays ahead in an ever-evolving tech landscape. With a focus on collaboration, transparency, and measurable outcomes, we deliver solutions that streamline processes, enhance decision-making, and foster long-term growth.
          </p>
        <img
          src="/frame2.svg"
          alt="Mobile App Development"
          width={600}
          height={600}
          className="rounded-lg mx-auto"
        />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Business with Our Modern Digital Solutions?</h2>
          <p className="text-gray-600 mb-8">Unlock innovation and efficiency with our tailored digital solutions.</p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full">
            Book a Free Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

