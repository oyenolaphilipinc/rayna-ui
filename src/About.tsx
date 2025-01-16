export default function AboutPage() {
  return (
    <main className="min-h-screen md:w-full">
      {/* Hero Section */}
      <section className="bg-[#FFECE5] px-4 py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3 mb-6">
              About ⚜️
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Rayna UI is more than just a toolkit; it's your gateway to an elevated design journey.
                Discover the story behind its creation and how it can empower your creative endeavors.
                Join us in reshaping the landscape of digital design.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="/vector.svg"
                alt="Rayna UI Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Version Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Rayna V1.0</h2>
          <p className="text-lg mb-6">Welcome to Rayna UI, where design meets innovation.</p>
          <p className="text-gray-600 mb-8">
            Our story is a testament to our passion for empowering designers like you to create exceptional user interfaces that captivate and 
            delight users. Rayna UI is a powerful UI/UX design kit meticulously crafted with components that will streamline your 
            design workflow and help you create stunning user interfaces with ease.
          </p>
          <p className="text-gray-600">
            At Rayna UI, our mission is simple: we're passionate about making your design journey as seamless and inspiring as possible. That's 
            why we've poured our creativity and expertise into crafting this exceptional design kit.
          </p>
        </section>

        {/* Why Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Why we built Rayna</h2>
          <p className="text-gray-600">
            We understand the challenges that designers, developers or product owners like you face daily. From tight deadlines to the need for 
            consistent and beautiful design elements, we've been there. That's why we built Rayna UI - to provide you with a powerful toolkit 
            that not only simplifies your design process but also sparks your creativity.
          </p>
        </section>

        {/* How Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            How Rayna can help you <span className="text-2xl">👋</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Rayna UI is your partner in design, whether you're a seasoned professional or just starting your creative journey.
            Here's how it can transform your design experience:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl mb-2">⚡ Efficiency</h3>
              <p className="text-gray-600">Speed up your workflow with ready-to-use UI components and styles, so you can focus on the creative aspects of your project.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🎯 Consistency</h3>
              <p className="text-gray-600">Maintain a consistent design language across your projects effortlessly, ensuring a polished and professional look.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">💡 Inspiration</h3>
              <p className="text-gray-600">Unlock your creative potential with an array of meticulously designed elements that can serve as a springboard for your imagination.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🤝 Collaboration</h3>
              <p className="text-gray-600">Seamlessly collaborate with your team by using Rayna UI as the central source of truth for your design assets.</p>
            </div>
          </div>
        </section>

        {/* Not Just a Design Kit Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Rayna UI isn't just a design kit...</h2>
          <p className="text-gray-600 mb-6">...it's a creative playground that empowers you to bring your ideas to life.</p>
          <p className="text-gray-600 mb-6">
            We believe that exceptional design should be accessible to all, whether you're a novice or a seasoned pro. Rayna UI is here to 
            embolden your creativity and transform your design process.
          </p>
          <p className="text-gray-600">
            Join us on this exciting journey, where innovation meets imagination, and let's create magic together ✨
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Website</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Dribbble</a>
            </div>
            <div>
              <img
                src="/rayna.svg"
                alt="Rayna UI Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            © 2023 . Powered by Rayelon. All Rights Reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}

