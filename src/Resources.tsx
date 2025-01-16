// Resource card type
interface Resource {
  title: string
  description: string
  imageUrl: string
  link: string
}

// Resources data
const resources: Resource[] = [
  {
    title: "BatchStyler",
    description: "Need to change styles of multiple text and other kinds at once for both light and dark mode? With BatchStyler you can do it in seconds. Just select the elements you want to style and set all their styles at once. It's 20x less time, meaning you can focus on moving on to designing the other right to code pages!",
    imageUrl: "/okay.svg?height=200&width=400",
    link: "#"
  },
  {
    title: "Blush",
    description: "Create and customize illustrations to your designs with Blush. Just choose a style, mix and match different elements, and export your creation. You can play with the variations to be as random as needs something unique for the one brand.",
    imageUrl: "/preview.svg?height=200&width=400",
    link: "#"
  },
  {
    title: "Brand Fetch",
    description: "Regardless of what you need access to millions of logos, colors, fonts and brand assets, BrandFetch has got you covered. Just search for any brand and you'll quickly find everything you need to working on BrandFetch. The global brand platform.",
    imageUrl: "/sharp.svg?height=200&width=400",
    link: "#"
  },
  {
    title: "Breakpoints",
    description: "Prototype responsive layout inside a Figma frame and share artboards with your team. Works even without the expensive high artboard pro package in your team account! Work without the constant bugs for responsive design.",
    imageUrl: "/4.svg?height=200&width=400",
    link: "#"
  },
  {
    title: "Lorem Ipsum",
    description: "Generate \"Lorem Ipsum\" text for your designs with dynamic text. While Rayna advocates for filled your mockups now, sometimes you just need to explore generate some placeholder text.",
    imageUrl: "/5.svg?height=200&width=400",
    link: "#"
  },
  {
    title: "Random Name Generator",
    description: "Select how many and pick the style to generate them with random names, or add on the plugin and get a new text layer with a random name. Great for testing a profile and decide whether you want the random UI elements to be more realistic.",
    imageUrl: "/6.svg?height=200&width=400",
    link: "#"
  },
  {
    title: "Unsplash",
    description: "Access millions of high-quality images for your designs. Free to use under the Unsplash license.",
    imageUrl: "/op.svg?height=200&width=400",
    link: "#"
  }
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FFECE5] px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3 mb-6">
              Resources 💡
              </h1>
              <p className="text-gray-700 text-lg">
                We recommend that you try out these UI Figma plugins to design faster and smarter.
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

      {/* Resources Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={resource.imageUrl || "/placeholder.svg"}
                  alt={resource.title}
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
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
        </div>
      </footer>
    </main>
  )
}

