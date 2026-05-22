import PricingPage from "./PricingPage";
import { FEATURES, INVOICE_ITEMS } from "../assets/assets.js";
import Navbar from "../component/Navbar.jsx";

export default function App() {
  return (
    <>
      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section>
        <div className="max-w-[1160px] mx-auto px-8 pt-20 pb-20 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-[72px] items-start">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-600 uppercase tracking-wider mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                AI-Powered Invoicing
              </div>
              <h1 className="font-bricolage font-bold text-[clamp(38px,5.5vw,58px)] leading-[1.06] tracking-[-2px] text-neutral-950">
                Create professional
                <br />
                invoices <span className="text-blue-600">in minutes.</span>
              </h1>
              <p className="mt-5 text-[17px] text-neutral-500 leading-[1.7] max-w-[440px]">
                Generate AI-powered invoices, automate tax calculations, track
                payments, manage clients, and export polished PDFs — all from
                one platform.
              </p>
              <div className="mt-9 flex flex-wrap gap-2.5">
                <a
                  href="/"
                  className="px-7 py-3 rounded-xl bg-neutral-950 text-white text-[15px] font-semibold hover:bg-neutral-800 no-underline tracking-tight"
                >
                  Create Invoice →
                </a>
              </div>
              <div className="mt-12 flex gap-10 flex-wrap pt-10 border-t border-neutral-200">
                {[
                  { num: "10K+", lbl: "Invoices Generated" },
                  { num: "5K+", lbl: "Happy Clients" },
                  { num: "99%", lbl: "Satisfaction Rate" },
                ].map(({ num, lbl }) => (
                  <div key={lbl}>
                    <div className="font-bricolage text-3xl font-bold text-neutral-950 tracking-tight">
                      {num}
                    </div>
                    <div className="text-[13px] text-neutral-400 mt-0.5">
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoice Preview Card */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.07)]">
              <div className="flex justify-between items-start pb-5 border-b border-neutral-200">
                <div>
                  <div className="font-bricolage text-xl font-bold text-neutral-950">
                    Invoice #1024
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 tracking-wide">
                    Issued · 19 May 2026
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  ✓ Paid
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                {INVOICE_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center px-3.5 py-2.5 rounded-lg bg-neutral-50 hover:bg-blue-50 hover:text-blue-600 text-sm text-neutral-800 cursor-default transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="font-bricolage font-semibold text-[15px]">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5 bg-neutral-50 rounded-xl p-4">
                {[
                  { lbl: "Client", val: "Acme Corporation", green: false },
                  { lbl: "Due Date", val: "25 May 2026", green: false },
                  { lbl: "Payment", val: "UPI / Card", green: false },
                  { lbl: "Status", val: "Completed", green: true },
                ].map(({ lbl, val, green }) => (
                  <div key={lbl}>
                    <div className="text-[11px] uppercase tracking-[0.06em] text-neutral-400 mb-0.5">
                      {lbl}
                    </div>
                    <div
                      className={`text-[13px] font-semibold ${green ? "text-green-600" : "text-neutral-950"}`}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-5 pt-[18px] border-t border-neutral-200">
                <span className="text-sm text-neutral-500 font-medium">
                  Total Amount
                </span>
                <span className="font-bricolage text-[28px] font-bold text-neutral-950 tracking-tight">
                  ₹18,500
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS BAR */}
      <div className="bg-neutral-50 border-t border-b border-neutral-200">
        <div className="max-w-[1160px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3">
          {[
            {
              label: "Total Revenue",
              value: "₹2.4L",
              sub: "↑ +18% this month",
              subClass: "text-green-600",
            },
            {
              label: "Pending Invoices",
              value: "48",
              sub: "12 awaiting payment",
              subClass: "text-amber-600",
            },
            {
              label: "AI Accuracy",
              value: "96%",
              sub: "Live model · Updated daily",
              subClass: "text-blue-600",
            },
          ].map(({ label, value, sub, subClass }) => (
            <div
              key={label}
              className="flex flex-col gap-1 py-8 pl-8 first:pl-0 border-r last:border-r-0 border-neutral-200 md:border-b-0 border-b last-of-type:border-b-0"
            >
              <div className="text-xs uppercase tracking-[0.06em] text-neutral-400 font-medium">
                {label}
              </div>
              <div className="font-bricolage text-4xl font-bold text-neutral-950 tracking-tight">
                {value}
              </div>
              <div className={`text-[13px] font-medium ${subClass}`}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features">
        <div className="max-w-[1160px] mx-auto px-8 py-[88px] sm:px-5">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium mb-3">
              Features
            </div>
            <h2 className="font-bricolage text-[clamp(28px,4vw,40px)] font-bold text-neutral-950 tracking-tight leading-[1.1]">
              Everything you need
              <br />
              to invoice professionally.
            </h2>
            <p className="mt-3 text-base text-neutral-500 max-w-[480px]">
              A complete suite of tools built for freelancers, agencies, and
              growing businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-neutral-200 rounded-[18px] overflow-hidden bg-neutral-200">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-white hover:bg-blue-50 hover:shadow-[inset_0_2px_8px_rgba(29,106,229,0.08)] px-[26px] py-7 flex flex-col gap-3 cursor-pointer select-none
                           transition-all duration-150 ease-out
                           active:scale-[0.97] active:shadow-[inset_0_3px_12px_rgba(0,0,0,0.1)] active:bg-neutral-100"
              >
                <div className="text-[22px] transition-transform duration-150 group-active:scale-90">
                  {f.icon}
                </div>
                <div className="font-bricolage text-base font-bold text-neutral-950 tracking-tight">
                  {f.title}
                </div>
                <div className="text-sm text-neutral-500 leading-[1.65]">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        className="bg-neutral-50 border-t border-neutral-200"
      >
        <PricingPage />
      </section>

      {/* CTA */}
      <div className="px-8 py-[88px] sm:px-5">
        <div className="max-w-[1160px] mx-auto bg-neutral-950 rounded-2xl px-16 py-[72px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.1em] text-white/40 mb-3.5">
              Get Started Today
            </div>
            <div className="font-bricolage text-[clamp(26px,4vw,40px)] font-bold text-white tracking-tight leading-[1.1]">
              Start generating invoices.
              <br />
              Get paid faster.
            </div>
            <div className="mt-3 text-base text-white/50 max-w-[400px]">
              Save time, look professional, and close payments without the
              back-and-forth.
            </div>
          </div>
          <a
            href="/"
            className="shrink-0 px-8 py-3.5 rounded-xl bg-white text-neutral-950 text-[15px] font-bold hover:bg-neutral-200 no-underline whitespace-nowrap tracking-tight font-instrument"
          >
            Start for Free →
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-neutral-200">
        <div className="max-w-[1160px] mx-auto px-8 py-7 flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-4">
          <span className="text-[13px] text-neutral-400">
            © 2026 InvoiceAI. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Support"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[13px] text-neutral-400 hover:text-neutral-950 no-underline"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
