import  { useState } from 'react'

const PricingPage = () => {


const PLANS = [
  {
    name: "Starter",
    price: { monthly: "₹0", yearly: "₹0" },
    desc: "Perfect for freelancers just getting started.",
    badge: null,
    cta: "Get Started Free",
    highlight: false,
    features: [
      "Up to 5 invoices/month",
      "PDF export",
      "1 client profile",
      "Basic templates",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: { monthly: "₹999", yearly: "₹799" },
    desc: "For growing freelancers and small teams.",
    badge: "Most Popular",
    cta: "Start Pro Trial",
    highlight: true,
    features: [
      "Unlimited invoices",
      "PDF & custom branding",
      "Unlimited clients",
      "Payment tracking",
      "Analytics dashboard",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: { monthly: "₹2,499", yearly: "₹1,999" },
    desc: "For agencies and scaling businesses.",
    badge: null,
    cta: "Contact Sales",
    highlight: false,
    features: [
      "Everything in Pro",
      "Team collaboration (5 seats)",
      "Custom invoice domains",
      "API access",
      "Advanced analytics",
      "Dedicated account manager",
    ],
  },
];


  const [billingCycle, setBillingCycle] = useState("monthly");



  return (
    <div className="max-w-[1160px] mx-auto px-8 py-[88px] sm:px-5">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium mb-3">Pricing</div>
            <h2 className="font-bricolage text-[clamp(28px,4vw,40px)] font-bold text-neutral-950 tracking-tight leading-[1.1]">
              Simple, transparent pricing.
            </h2>
            <p className="mt-3 text-base text-neutral-500 max-w-[420px] mx-auto">
              Choose the plan that fits your workflow. Upgrade or downgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center mt-8 bg-white border border-neutral-200 rounded-xl p-1 gap-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border-none font-instrument ${
                  billingCycle === "monthly"
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-transparent text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border-none font-instrument flex items-center gap-2 ${
                  billingCycle === "yearly"
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-transparent text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Yearly
                <span className="px-1.5 py-0.5 rounded-md bg-green-100 text-green-700 text-[10px] font-semibold uppercase tracking-wide">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col gap-6 transition-all duration-200 ease-out cursor-pointer ${
                  plan.highlight
                    ? "bg-neutral-950 text-white shadow-[0_8px_40px_rgba(0,0,0,0.18)] scale-[1.02] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.30)]"
                    : "bg-white border border-neutral-200 hover:-translate-y-2 hover:border-neutral-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name + desc */}
                <div>
                  <div className={`font-bricolage text-lg font-bold tracking-tight ${plan.highlight ? "text-white" : "text-neutral-950"}`}>
                    {plan.name}
                  </div>
                  <div className={`text-sm mt-1 leading-relaxed ${plan.highlight ? "text-white/60" : "text-neutral-500"}`}>
                    {plan.desc}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-end gap-1">
                    <span className={`font-bricolage text-[42px] font-bold leading-none tracking-tight ${plan.highlight ? "text-white" : "text-neutral-950"}`}>
                      {plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] !== "₹0" && (
                      <span className={`text-sm mb-2 ${plan.highlight ? "text-white/50" : "text-neutral-400"}`}>
                        / mo
                      </span>
                    )}
                  </div>
                  {billingCycle === "yearly" && plan.price.yearly !== "₹0" && (
                    <div className={`text-xs mt-1 ${plan.highlight ? "text-white/50" : "text-neutral-400"}`}>
                      Billed annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 list-none flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        plan.highlight ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-600"
                      }`}>
                        ✓
                      </span>
                      <span className={`text-sm leading-snug ${plan.highlight ? "text-white/80" : "text-neutral-600"}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl text-[15px] font-semibold tracking-tight cursor-pointer border-none font-instrument transition-all ${
                    plan.highlight
                      ? "bg-white text-neutral-950 hover:bg-neutral-100"
                      : "bg-neutral-950 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-neutral-400 mt-10">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
  )
}

export default PricingPage
