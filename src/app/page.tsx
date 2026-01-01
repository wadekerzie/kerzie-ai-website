"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Network,
  Globe,
  DollarSign,
  BookOpen,
  Rocket,
  Sparkles,
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  Share2,
  MapPin,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// 54 Reasons data
const reasons54 = {
  newLead: {
    title: "New Lead Inquiries",
    count: 18,
    categories: [
      {
        name: "General Information",
        items: [
          "Business hours of operation",
          "Service area / geographic coverage",
          "General pricing / cost estimates",
          "Services offered / what you do",
          "Whether you service their specific need",
          "How quickly you can respond / availability",
          "Licensing, certifications, insurance verification",
          "Years in business / experience level",
        ],
      },
      {
        name: "Lead Qualification",
        items: [
          "Initial consultation / quote request",
          "Appointment scheduling / availability",
          "Emergency service availability",
          "Referral or recommendation questions",
          "Comparison shopping",
        ],
      },
      {
        name: "Contact & Next Steps",
        items: [
          "Website or location directions",
          "How to submit documentation",
          "Payment methods accepted",
          "Financing options available",
          "Timeline for project completion",
        ],
      },
    ],
  },
  existing: {
    title: "Existing Customer Questions",
    count: 16,
    categories: [
      {
        name: "Account & Appointment Management",
        items: [
          "Appointment confirmation / reminder response",
          "Appointment rescheduling",
          "Appointment cancellation",
          "Appointment status",
          "Account status / history lookup",
          "Payment history / invoice questions",
        ],
      },
      {
        name: "Service Details",
        items: [
          "Follow-up questions after service",
          "Additional service requests",
          "Warranty or guarantee questions",
          "Maintenance schedule inquiries",
          "Product/service upgrade options",
          "Referral program / loyalty benefits",
        ],
      },
      {
        name: "Documentation Requests",
        items: [
          "Receipt or invoice resend",
          "Service documentation or records",
          "Insurance claim documentation",
          "Warranty documentation",
        ],
      },
    ],
  },
  support: {
    title: "Support & Problem Resolution",
    count: 12,
    categories: [
      {
        name: "Issue Reporting",
        items: [
          "Problem with recent service",
          "Equipment malfunction or failure",
          "Billing dispute or question",
          "Service complaint or dissatisfaction",
          "Request for manager / escalation",
        ],
      },
      {
        name: "Technical Support",
        items: [
          "How-to questions about product/service",
          "Troubleshooting assistance",
          "Product care or maintenance guidance",
          "Return or exchange inquiry",
        ],
      },
      {
        name: "Follow-Up",
        items: [
          "Status update on open issue",
          "Callback request",
          "Second opinion request",
        ],
      },
    ],
  },
  urgent: {
    title: "Urgent / Time-Sensitive",
    count: 8,
    categories: [
      {
        name: "Emergencies",
        items: [
          "Emergency service needed",
          "Safety concern or hazard",
          "Immediate access needed",
          "Cancellation within 24 hours",
        ],
      },
      {
        name: "Time-Critical",
        items: [
          "Same-day appointment request",
          "Expedited service request",
          "Delivery tracking / order status",
          '"I\'m at your location" / access questions',
        ],
      },
    ],
  },
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Manually Responding to Every Call, Text, and Email
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Your customers choose how they reach you—call, text, email, or chatbot. You don&apos;t control that. But you CAN control whether they get instant, valuable answers every single time.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              One system does it for you—answering questions, providing pricing, scheduling appointments. Instantly. Professionally. In your voice. 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#what-you-get" className="btn btn-primary text-lg px-8 py-4">
                See What You Get
              </a>
              <Link href="/schedule" className="btn btn-secondary text-lg px-8 py-4">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="what-you-get" className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                One Knowledge Base
              </h3>
              <p className="text-gray-600">
                We build your single source of truth—fixed, consistent,
                deterministic.
              </p>
              <p className="text-gray-600 mt-2">
                AI retrieves the right answer every time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Your Customers Choose. You Deliver.
              </h3>
              <p className="text-gray-600 mb-3">
                They decide how to reach you:
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone call
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Chatbot on your website
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Text/SMS
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Social media
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Google Business
                </div>
              </div>
              <p className="text-gray-600 mt-4 font-medium">
                You deliver the same accurate, helpful answer—instantly. Every channel. Every time. 24/7.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Your Website Rebuilt (Free)
              </h3>
              <p className="text-gray-600">
                Rebuilt to match your knowledge base.
              </p>
              <p className="text-gray-600 mt-2">
                Hosted by us (free forever).
              </p>
              <p className="text-gray-600 mt-2">
                AI chatbot + voice assistant included.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Simple Pricing
              </h3>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                <div>$500 setup</div>
                <div>$500/month</div>
              </div>
              <p className="text-gray-600 mb-2">Everything included:</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Knowledge base</li>
                <li>• All communication methods</li>
                <li>• Website rebuild</li>
                <li>• Free hosting</li>
                <li>• 24/7 coverage</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/schedule" className="btn btn-accent text-lg px-8 py-4">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              The Problem: Fragmented Customer Communication
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Most small businesses can only handle customer inquiries consistently
              during business hours, through one or two methods.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Calls go to voicemail. Texts sit unread. Emails pile up. Website
              chats get generic bot responses.
            </p>
            <p className="text-lg text-gray-700 font-medium">
              The result? Inconsistent experiences. Lost leads. Frustrated
              customers. Revenue walking out the door.
            </p>
          </div>
        </div>
      </section>

      {/* 54 Reasons Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              There Are 54 Reasons Customers Contact Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Your current setup handles maybe 10-15 of these. We handle all 54.
            </p>

            {/* Category Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">18</div>
                <div className="text-gray-700 font-medium">New Lead Inquiries</div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">16</div>
                <div className="text-gray-700 font-medium">
                  Existing Customer Questions
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                <div className="text-gray-700 font-medium">
                  Support & Problem Resolution
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8</div>
                <div className="text-gray-700 font-medium">
                  Urgent / Time-Sensitive
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              You don&apos;t get to control WHICH reason they&apos;re contacting
              you about. And you don&apos;t get to control whether they call, text,
              email, or use your chatbot.
            </p>
            <p className="text-gray-900 font-semibold mb-4">
              But you CAN control whether they get real answers that solve their problem:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2 max-w-2xl mx-auto text-left">
              <li>• Directions to your facility—so they actually show up</li>
              <li>• Your delivery schedule—pulled from your CRM in real-time</li>
              <li>• Appointment availability—booked while you sleep</li>
              <li>• Pricing for their exact scenario—not &quot;call us for a quote&quot;</li>
            </ul>
            <p className="text-lg text-gray-900 font-semibold mb-8">
              That&apos;s not just an instant response. That&apos;s giving customers what they need AND giving you your time back.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-secondary"
            >
              See All 54 Reasons
            </button>
          </div>
        </div>
      </section>

      {/* 54 Reasons Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">
                The 54 Reasons Customers Contact Your Business
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid md:grid-cols-2 gap-8">
                {Object.values(reasons54).map((category) => (
                  <div key={category.title}>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      {category.title}
                      <span className="bg-blue-100 text-[#2563EB] px-2 py-0.5 rounded text-sm">
                        {category.count}
                      </span>
                    </h4>
                    {category.categories.map((sub) => (
                      <div key={sub.name} className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          {sub.name}
                        </h5>
                        <ul className="space-y-1">
                          {sub.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 text-sm flex items-start gap-2"
                            >
                              <span className="text-[#2563EB] mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t bg-gray-50">
              <p className="text-gray-700 text-center mb-4">
                Your current setup handles maybe 10-15 of these. We handle all 54.
                <br />
                Same professional response. Whether they call, text, email, or
                chat. 24/7.
              </p>
              <div className="text-center">
                <a
                  href="#how-it-works"
                  onClick={() => setModalOpen(false)}
                  className="btn btn-primary"
                >
                  See How We Do It
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold text-[#2563EB] mb-2">
                STEP 1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We Build Your Knowledge Base
              </h3>
              <p className="text-gray-600">
                We gather everything about your business—services, pricing,
                policies, FAQs, common scenarios.
              </p>
              <p className="text-gray-600 mt-2">
                This becomes your single source of truth. Fixed. Consistent.
                Deterministic.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold text-[#2563EB] mb-2">
                STEP 2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We Deploy Across Every Method
              </h3>
              <p className="text-gray-600 mb-3">
                Your knowledge base powers every customer interaction:
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Phone calls (voice AI)</li>
                <li>• Website chatbot</li>
                <li>• Email responses</li>
                <li>• Text/SMS</li>
                <li>• Social media messages</li>
                <li>• Google Business Profile</li>
              </ul>
              <p className="text-gray-600 mt-3 font-medium">
                Same intelligence. Same voice. Different method.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold text-[#2563EB] mb-2">
                STEP 3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customers Get Real Value. You Get Your Time Back.
              </h3>
              <p className="text-gray-600 mb-3">
                When a customer reaches out, AI delivers actual solutions from your knowledge base:
              </p>
              <ul className="text-gray-600 text-left space-y-1 mb-3 max-w-md mx-auto">
                <li>• Installation dates pulled from your scheduling system</li>
                <li>• Turn-by-turn directions to your location</li>
                <li>• Pricing for their specific project parameters</li>
                <li>• Appointment booking with calendar sync</li>
                <li>• Order status from your CRM</li>
              </ul>
              <p className="text-gray-600 mt-2">
                Not &quot;Thanks for contacting us.&quot; Real answers that move business forward—while you focus on the work that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Why We&apos;re the Only Ones Who Can Deliver This
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Digital marketing agencies handle chat and email. But they won&apos;t
              touch your phone because they don&apos;t understand telecom.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Phone systems handle calls. But they can&apos;t integrate with modern digital communication because they don&apos;t understand AI and automation.
            </p>
            <p className="text-lg text-gray-700 font-medium mb-10">
              We handle everything. Because we&apos;re experts in both telecom AND applied AI—not digital marketers dabbling in technology they don&apos;t understand.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="bg-blue-50 rounded-xl px-6 py-4 text-center">
                <div className="text-[#2563EB] font-bold">
                  Zapier Silver Solution Partner
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl px-6 py-4 text-center">
                <div className="text-gray-700 font-bold">
                  70+ Years Combined Telecom Expertise
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scout CTA Banner */}
      <section className="section bg-gradient-to-r from-[#2563EB] to-blue-700">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Looking for a career in Applied AI?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our Scout program and help small businesses solve their customer
            communication challenges. Earn 20-50% recurring commissions.
          </p>
          <Link
            href="/become-a-scout"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563EB] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Learn About Becoming a Scout
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
            Ready to Stop Juggling Customer Communications?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="btn btn-primary text-lg px-8 py-4">
              Schedule Your Discovery Call
            </Link>
            <Link
              href="/for-businesses"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              See Pricing Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
