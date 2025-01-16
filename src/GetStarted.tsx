export default function GetStartedPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FFECE5] px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Getting Started 🏁
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to Rayna UI, we're absolutely pumped that you're joining us! 
                Here's some key info to kickstart your journey. 🚀
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

      <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">How to use Rayna UI as a library in Figma 🎯</h2>
          <p className="text-gray-600 mb-8">
          In Figma, you have the ability to share all the components and styles within a file by publishing them. This essentially transforms your file into a library, enabling you to use instances of these components in various files and projects. Keep in mind that you have the freedom to use Rayna UI in as many projects as you'd like!
          </p>
          <p className="text-gray-600">
          If you make updates to the design of your components within the library, you can easily publish these changes and propagate them to other projects where instances of your components are in use. It's up to you (or your team) to decide whether to accept these updates or stick with an older version. Essentially, your library serves as the ultimate reference point for consistency across all your designs.

          With that being said (written😂), here are the 3 steps you need to setup Rayna UI for your design project(s).
          </p>
        </section>
        {/* Library Usage Section */}
        <section className="mb-16">
          <p className="text-gray-600 mb-8">
            If you make updates to the design of your components within the library, you can easily publish these changes and propagate them 
            to other projects where instances of your components are in use. It's up to you (or your team) to decide whether to accept these 
            updates or stick with an older version. Essentially, your library serves as the ultimate reference point for consistency across all your 
            designs.
          </p>
          
          <p className="text-gray-600 mb-8">
            With that being said (written😊), here are the 3 steps you need to setup Rayna UI for your design project(s):
          </p>

          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-500 rounded-full p-2 text-white">
                  <span className="font-bold">01</span>
                </div>
                <h2 className="text-2xl font-bold">Publish your library</h2>
              </div>
              <p className="text-gray-600 pl-14 pb-4">
                Publish the design system (this Figma file) from the Team Library in top-left Assets Panel and then press the Book icon, alternatively, ⌘Option + 3 on mac, or Alt + 3 as a shortcut. All of the main components and styles in this document will then become available to use in other documents.
              </p>
              <div className="w-11/12 bg-gray-300 mx-auto pt-2 pb-2">
                <img src="/45.svg" alt="done" width={400} height={400} className="flex justify-center mx-auto" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 rounded-full p-2 text-white">
                  <span className="font-bold">02</span>
                </div>
                <h2 className="text-2xl font-bold">Enable your library in other projects</h2>
              </div>
              <p className="text-gray-600 pl-14">
                Publish the design system (this Figma file) from the Team Library in top-left Assets Panel and then press the Book icon, alternatively, ⌘Option + 3 on mac, or Alt + 3 as a shortcut. All of the main components and styles in this document will then become available to use in other documents.
              </p>
              <div className="w-11/12 bg-gray-300 mx-auto pt-2 pb-2">
                <img src="/47.svg" alt="done" width={400} height={400} className="flex justify-center mx-auto" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 rounded-full p-2 text-white">
                  <span className="font-bold">03</span>
                </div>
                <h2 className="text-2xl font-bold">You're all set!</h2>
              </div>
              <p className="text-gray-600 pl-14">
                Once your library is added to the file you are designing on, you'll instantly see all the assets from your library in the assets panel. 
                If and when changes are made to the library, you'll be prompted to update the library to get it back in sync.
              </p>
              <div className="w-11/12 bg-gray-300 mx-auto pt-2 pb-2">
                <img src="/46.svg" alt="done" width={400} height={400} className="flex justify-center mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold">Feedback, Help & Support</h2>
            <span>💭</span>
          </div>
          <p className="text-gray-600 mb-4">
            We would love to hear from you, so if you find an issue with Rayna UI, have a question, or want to provide feedback, do not hesitate 
            to reach out to us via <a href="mailto:collaboratoryd@rayna.ui.com" className="text-blue-600 hover:underline">collaboratoryd@rayna.ui.com</a>.
          </p>
          <p className="text-gray-600">
            Alternatively, you can also shoot us a DM on{' '}
            <a href="#" className="text-blue-600 hover:underline">Twitter</a> or{' '}
            <a href="#" className="text-blue-600 hover:underline">Instagram</a>. 
            We post cool stuff on{' '}
            <a href="#" className="text-blue-600 hover:underline">Dribbble</a> too 😊
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

