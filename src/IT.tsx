import Footer from './components/Footer'
import { Header } from './components/Navbar'
import { Button } from './components/ui/button'
import { Clock, Smartphone, Shield, BarChart } from 'lucide-react'

export default function ITPage() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">IT Training</h2>
            <p className="text-gray-600 text-lg mb-8">
            Equip your workforce with cutting-edge knowledge to drive innovation and efficiency.
            </p>
            <Button size="lg" className='bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-full'>Get Started Today</Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/frame3.svg"
              alt="Software Development"
              className="object-cover md:w-10/12 w-full rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Our Expertise Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Building Skills for a Future-Ready Workforce</h2>
          <p className="text-gray-600 max-w-6xl mx-auto">
          At Techbor, we specialize in delivering high-impact IT training programs designed to meet the needs of modern businesses. Our expert instructors and practical approach ensure your team gains the skills to stay competitive in an ever-evolving tech landscape. Whether you're looking to upskill in data analysis, business intelligence, or project management, we offer training that aligns with your goals.
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
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Data Analysis / Business Intelligence Analysis</h1>
        <p className="text-gray-600 text-lg">
        Develop skills to gather, analyze, and interpret data effectively, transforming complex datasets into actionable insights that drive strategic decision-making. This training empowers teams to build a data-driven culture, optimize operations, and stay ahead in competitive markets.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/analytics.svg"
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
        <h1 className="text-3xl md:text-3xl font-bold mb-6">Project Management</h1>
        <p className="text-gray-600 text-lg">
        Learn to effectively plan, manage, and execute projects while balancing resources, timelines, and potential risks. This training equips professionals with tools to enhance team collaboration, streamline workflows, and consistently achieve successful project outcomes.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/project.svg"
          alt="Mobile App Development"
          className="object-cover w-full md:w-10/12 rounded-lg"
        />
      </div>
    </div>

    {/* Web Application Development Section */}
    <div className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div>
        <h1 className="text-3xl md:text-3xl font-bold mb-6">Business Analysis</h1>
        <p className="text-gray-600 text-lg">
        Acquire expertise in bridging the gap between business objectives and technical solutions through requirements gathering, process modeling, and solution validation. This training enhances problem-solving abilities, stakeholder communication, and strategic alignment to deliver impactful results.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/analysis.svg"
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
          Techbor stands apart by offering customized IT training solutions designed to meet the unique needs of your organization. Our experienced trainers, practical learning modules, and focus on measurable outcomes ensure your team gains the skills needed to excel in today's competitive environment.
          </p>
        <img
          src="/frame4.svg"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Custom Software?</h2>
          <p className="text-gray-600 mb-8">Explore how our training programs can elevate your workforce.</p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full">
            Book a Free Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

