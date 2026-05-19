export default function AIInvoiceGeneratorHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md">
              I
            </div>
            <h1 className="text-2xl font-bold tracking-tight">AI Invoice Generator</h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#features" className="transition hover:text-blue-600">
              Features
            </a>
            <a href="#how" className="transition hover:text-blue-600">
              How It Works
            </a>
            <a href="#pricing" className="transition hover:text-blue-600">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
            >
              Login
            </a>
            <a
              href="/"
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Fast & Professional Invoice Generator
            </span>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
              Create Smart Invoices in Minutes.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Generate AI-powered invoices, automate calculations, track payments, manage clients, monitor analytics, and export professional PDFs instantly from one smart platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/"
                className="rounded-2xl bg-blue-600 px-7 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Create Invoice
              </a>

              <button
                className="rounded-2xl border border-gray-300 bg-white px-7 py-4 text-lg font-semibold transition hover:bg-gray-100"
              >
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-10 text-sm text-gray-600">
              <div>
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <span>Invoices Generated</span>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">5K+</p>
                <span>Happy Clients</span>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">99%</p>
                <span>Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Invoice Preview Card */}
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
              <div className="flex items-center justify-between border-b pb-5">
                <div>
                  <h3 className="text-2xl font-bold">Invoice #1024</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Issued on May 19, 2026
                  </p>
                </div>

                <div className="rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Paid
                </div>
              </div>

              <div className="mt-6 space-y-4 relative z-10">
                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span>Website Design</span>
                  <span className="font-semibold">₹12,000</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span>Hosting</span>
                  <span className="font-semibold">₹2,500</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span>Maintenance</span>
                  <span className="font-semibold">₹4,000</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-5">
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <h4 className="mt-1 font-semibold">Acme Corporation</h4>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Due Date</p>
                  <h4 className="mt-1 font-semibold">25 May 2026</h4>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <h4 className="mt-1 font-semibold">UPI / Card</h4>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Invoice Status</p>
                  <h4 className="mt-1 font-semibold text-green-600">Completed</h4>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t pt-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-3xl font-bold text-blue-600">
                  ₹18,500
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="mt-3 text-4xl font-bold">₹2.4L</h3>
            <p className="mt-2 text-green-600">+18% this month</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-sm text-gray-500">Pending Invoices</p>
            <h3 className="mt-3 text-4xl font-bold">48</h3>
            <p className="mt-2 text-yellow-600">12 awaiting payment</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-sm text-gray-500">AI Suggestions</p>
            <h3 className="mt-3 text-4xl font-bold">96%</h3>
            <p className="mt-2 text-blue-600">Accuracy rate</p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <h3 className="text-4xl font-bold">Everything You Need</h3>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to manage invoices professionally.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Instant PDF Export",
              desc: "Download and share invoices as professional PDFs instantly.",
            },
            {
              title: "Client Management",
              desc: "Store and manage client information securely.",
            },
            {
              title: "Payment Tracking",
              desc: "Track paid, pending, and overdue invoices easily.",
            },
            {
              title: "Custom Branding",
              desc: "Add your company logo and brand colors.",
            },
            {
              title: "Cloud Storage",
              desc: "Access invoices anytime from anywhere.",
            },
            {
              title: "Analytics Dashboard",
              desc: "Monitor revenue and invoice performance visually.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600">
                {index + 1}
              </div>

              <h4 className="mt-6 text-2xl font-bold">{item.title}</h4>
              <p className="mt-3 leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-6 rounded-[40px] bg-blue-600 px-8 py-20 text-center text-white lg:mx-10">
        <h3 className="text-4xl font-bold lg:text-5xl">
          Start Generating Invoices Today
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
          Save time, look professional, and get paid faster with AI Invoice Generator.
        </p>

        <a
          href="/"
          className="mt-10 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition hover:scale-105"
        >
          Get Started Free
        </a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mt-20 border-t border-gray-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center text-sm text-gray-500 lg:flex-row lg:px-10">
          <p>© 2026 AI Invoice Generator. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );}


