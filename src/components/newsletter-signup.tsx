import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    console.log(setEmail)
  }

  return (
    <div className="bg-black text-white min-h-[500px] p-8 md:p-12 rounded-xl relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Stay in the{' '}
            <span className="text-[#FF5722]">creative loop!</span>
          </h2>
          
          <p className="text-gray-300 text-lg">
            Never miss a beat. Get a weekly dose of design inspiration, secrets, tips, trends, and banter in your inbox.
          </p>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {[1].map((i) => (
                <div
                  key={i}
                  className="rounded-full border-2 border-black overflow-hidden"
                >
                  <img
                    src={`/group.svg?height=40&width=40`}
                    alt={`Community member ${i}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              Join the <span className="font-bold">650+ people</span> who are ahead in the creative world
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <button 
              type="submit"
              className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white px-8 py-6 text-lg rounded-lg mt-20 mb-40"
            >
              Sign up to our Newsletter
            </button>
          </form>
        </div>

        <div className="hidden md:flex">
          <div className="absolute mt-16 top-0 right-0 w-full max-w-md">
            <img
              src="/frame.svg?height=600&width=400"
              alt="UI Preview"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="absolute mt-16 right-0 mr-10">
            <img
              src="/frame.svg?height=600&width=400"
              alt="UI Preview"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

