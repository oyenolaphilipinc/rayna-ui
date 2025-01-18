export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen bg-gradient-to-br from-[#E6F2FF] to-white pt-32">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <p className="mb-4 text-sm text-gray-600 flex items-center gap-2">
              empowering businesses, transforming the future
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M8 0L10.2947 5.57295L16 6.47552L12 10.8541L12.9389 16L8 13.5729L3.06107 16L4 10.8541L0 6.47552L5.70533 5.57295L8 0Z"
                  fill="#FFD700"
                />
              </svg>
            </p>
            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Transform your business with innovative IT solutions
              <span className="text-[#0066FF]">⚡</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-600 mb-8">
              Partner with us for digital transformation and scalable solutions that drive success.
            </p>
            <button className="h-12 rounded-md px-8 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90">Get Started Today</button>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <span className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </span>
              <span>Join 1000+ businesses thriving with Techbor's IT solutions.</span>
            </div>
          </div>
          <div className="">
            <div className="">
              <img
                src={`/man.svg?height=600&width=400`}
                alt="Success celebration"
                width={400}
                height={600}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

