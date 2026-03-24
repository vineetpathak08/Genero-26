"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Trigger animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample past sponsors data (replace with your actual data)
  const pastSponsors = [
    { name: "Realme", logo: "/realme.jpg" },
    { name: "Amarujala", logo: "/amarujala.jpg" },
    { name: "Appwars", logo: "/appwars.webp" },
    { name: "lensflix", logo: "/lensfilx.png" },
    { name: "grog", logo: "/grog1.jpeg" },
    { name: "Ktm", logo: "/ktm.png" },
    { name: "Jodo", logo: "/jodo.jpg" },
    { name: "Bingo", logo: "/bingo.jpg" },
    { name: "Decathlon", logo: "/decathlon.png" },
  ];

  const sponsorshipTiers = [
    {
      title: "Title Sponsor",
      perks: [
        "Top branding on all event materials",
        "Main stage mentions",
        "Social media promotions",
        "Exclusive networking access",
      ],
    },
    {
      title: "Gold Sponsor",
      perks: [
        "Logo on banners and website",
        "Social media mentions",
        "Event promotion",
      ],
    },
    {
      title: "Silver Sponsor",
      perks: ["Website and event recognition", "Social media shoutouts"],
    },
  ];

  const sponsorTestimonials = [
    {
      quote:
        "Partnering with Genero helped us connect with talented students and innovators.",
      author: "Previous Sponsor",
    },
    {
      quote:
        "Great platform to showcase our brand and support young entrepreneurs.",
      author: "Sponsor Partner",
    },
  ];

  const marqueeSponsors = [...pastSponsors, ...pastSponsors];
  const currentSponsors = [
    { name: "Sponsor IMG 5400", logo: "/currentSponsers/IMG_5400.PNG" },
    { name: "Sponsor IMG 5401", logo: "/currentSponsers/IMG_5401.PNG" },
    { name: "Sponsor IMG 5403", logo: "/currentSponsers/IMG_5403.JPG.jpeg" },
    { name: "Sponsor IMG 5409", logo: "/currentSponsers/IMG_5409.PNG" },
    { name: "Sponsor IMG 5411", logo: "/currentSponsers/IMG_5411.WEBP" },
    { name: "Sponsor IMG 5413", logo: "/currentSponsers/IMG_5413.JPG.jpeg" },
    { name: "Sponsor IMG 5416", logo: "/currentSponsers/IMG_5416.PNG" },
    { name: "Sponsor IMG 5417", logo: "/currentSponsers/IMG_5417.PNG" },
    { name: "Sponsor IMG 5418", logo: "/currentSponsers/IMG_5418.PNG" },
    { name: "New Max", logo: "/currentSponsers/new-max-logo-90x40.svg" },
    { name: "Orbit", logo: "/currentSponsers/orbit-logo.svg" },
    { name: "Paytm", logo: "/currentSponsers/paytm-icon.svg" },
  ];
  const marqueeCurrentSponsors = [...currentSponsors, ...currentSponsors];

  const whySponsorReasons = [
    {
      title: "Reach the Right Audience",
      description:
        "Connect with hundreds of ambitious students, startups, and young professionals.",
    },
    {
      title: "Strong Brand Visibility",
      description:
        "Your brand will be promoted through event banners, social media campaigns, and digital platforms.",
    },
    {
      title: "Community Impact",
      description:
        "Support innovation, entrepreneurship, and talent development.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Interact with founders, mentors, investors, and industry professionals.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Head>
        <title>Sponsorship - EventX</title>
        <meta
          name="description"
          content="Join our event as a sponsor and gain visibility!"
        />
      </Head>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        {/* hero section  */}
        <section
          className={`relative mb-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 md:px-12 md:py-14 shadow-2xl transition-transform duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-16 -left-10 h-56 w-56 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-fuchsia-600 blur-[140px]" />
          </div>

          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text drop-shadow-[0_10px_40px_rgba(255,196,0,0.25)]">
                Partner With Us as a Sponsor
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl self-center md:self-start">
                Genero is a platform that connects innovation, creativity, and
                opportunities. Our events bring together talented students,
                entrepreneurs, and industry leaders. By sponsoring Genero, your
                brand gets direct visibility among future innovators and
                decision-makers.
              </p>
              <p className="text-base md:text-lg font-semibold text-white/80">
                Support innovation. Build brand visibility. Grow with the next
                generation.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <button
                type="button"
                onClick={() => scrollToSection("sponsorship-inquiry")}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-base font-bold text-black shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 focus:outline-none"
              >
                Become a Sponsor
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact-section")}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-300 focus:outline-none"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 uppercase mb-10">
            Why Sponsor Genero?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {whySponsorReasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/15 bg-black/30 p-5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Sponsors Section */}
        <section
          className={`mb-16 transition-transform duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-6 animate-slideIn">
            Current Sponsors
          </h2>
          <p className="text-center text-lg text-white/80 max-w-3xl mx-auto mb-10">
            We&apos;re proud to collaborate with forward-looking brands who believe in
            the Genero vision.
          </p>
          <div className="space-y-6">
            {[0, 1].map((row) => (
              <div key={`current-row-${row}`} className="relative overflow-hidden">
                <div className={`marquee-track ${row === 1 ? "reverse" : ""}`}>
                  {marqueeCurrentSponsors.map((sponsor, index) => (
                    <div
                      key={`${sponsor.name}-current-${row}-${index}`}
                      className="mx-4 flex h-28 w-44 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                    >
                      <div className="relative h-16 w-full">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Opportunities */}
        <section
          className={`mb-16 transition-transform duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-10 animate-slideIn">
            Sponsorship Opportunities
          </h2>
          <p className="text-center text-lg text-white max-w-3xl mx-auto mb-12">
            We offer flexible sponsorship options engineered to maximize your
            brand exposure while aligning with your business goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={tier.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">
                  {tier.title}
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-white/90">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsor Testimonials */}
        <section
          className={`mb-16 transition-transform duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-10 animate-slideIn">
            What Sponsors Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsorTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.author + index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="text-lg italic text-white/90 mb-6">
                  "{testimonial.quote}"
                </p>
                <p className="text-right text-yellow-300 font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Past Sponsors Section */}
        <section
          className={`mb-16 transition-transform duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-10">
            Our Past Sponsors
          </h2>
          <div className="space-y-6">
            {[0, 1].map((row) => (
              <div key={row} className="relative overflow-hidden">
                <div className={`marquee-track ${row === 1 ? "reverse" : ""}`}>
                  {marqueeSponsors.map((sponsor, index) => (
                    <div
                      key={`${sponsor.name}-${row}-${index}`}
                      className="mx-4 flex h-32 w-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                    >
                      <div className="relative h-20 w-full">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

       
        <section
          id="sponsorship-inquiry"
          className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-300 mb-3">
              Sponsorship Inquiry
            </p>
            <h2 className="text-4xl font-semibold text-white mb-4">
              Interested in sponsoring Genero? Let&apos;s connect.
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Share a few details about your organization and the type of
              partnership you are exploring. Our partnerships team will reach
              out with a tailored sponsorship kit and next steps.
            </p>
          </div>
          <form
            className="rounded-[32px] border border-white/20 bg-gradient-to-br from-gray-900/70 via-black/70 to-gray-900/70 p-8 backdrop-blur-lg shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            action="https://docs.google.com/forms/d/e/1FAIpQLScmteVUyzIhIqwunK4o-K2x6qTDd4b9S1I3-LnhleHWDnVcZA/formResponse"
            method="POST"
            target="_blank"
          >
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white/80">
                  Full Name
                </label>
                <input
                  className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
                  type="text"
                  name="entry.191833475"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white/80">
                  Company Name
                </label>
                <input
                  className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
                  type="text"
                  name="entry.634623831"
                  placeholder="Organization or brand"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/80">
                    Email Address
                  </label>
                  <input
                    className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    type="email"
                    name="entry.1117646522"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/80">
                    Phone Number
                  </label>
                  <input
                    className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    type="tel"
                    name="entry.1129541448"
                    placeholder="Include country code"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white/80">
                  Sponsorship Interest
                </label>
                <select
                  className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
                  name="entry.872694018"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a tier or idea
                  </option>
                  <option value="Title Sponsor">Title Sponsor</option>
                  <option value="Gold Sponsor">Gold Sponsor</option>
                  <option value="Silver Sponsor">Silver Sponsor</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white/80">
                  Message / Collaboration Idea
                </label>
                <textarea
                  className="min-h-[120px] rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
                  name="entry.672165861"
                  placeholder="Tell us more about how you would like to partner"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-0.5"
            >
              Submit Inquiry
            </button>
          </form>
        </section>
        <section
          id="contact-section"
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300 mb-4">
            Contact
          </p>
          <h3 className="text-3xl font-semibold text-white mb-3">
            For partnership opportunities, reach out to us.
          </h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-6">
            Email or call our partnership desk for quick assistance or fill out
            the inquiry form above and we&apos;ll circle back right away.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-medium text-white">
            <span>📧 Email: genero_s2026@abes.ac.in</span>
            <span>📞 Ashish Thakur: +91 79052 92308</span>
          </div>
        </section>
      </main>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 25s linear infinite;
        }
        .marquee-track.reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}
