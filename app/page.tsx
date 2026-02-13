"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Aqib Gul</h1>
          <div className="space-x-6 text-sm">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="/resume.pdf" download className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Machine Learning Engineer (PhD)
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl">
          I build production-grade ML systems for non-stationary environments,
          combining deep learning, ensemble intelligence, and rigorous statistical validation.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="https://github.com/DeepStatistox"
             className="border border-slate-700 px-6 py-3 rounded-xl hover:border-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/aqibgul"
             className="border border-slate-700 px-6 py-3 rounded-xl hover:border-white">
            LinkedIn
          </a>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-t border-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">30%+</h3>
            <p className="text-slate-400">Forecast Error Reduction</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">Multi-Market</h3>
            <p className="text-slate-400">Time Series Modeling</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">Production</h3>
            <p className="text-slate-400">Deployed ML System</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-12">Selected Projects</h3>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-4">
              AI Market Intelligence Platform
            </h4>
            <p className="text-slate-400 mb-6">
              End-to-end forecasting system with SQL ingestion,
              LSTM models, ensemble stacking, FastAPI backend,
              and web-based monitoring.
            </p>
            <Link href="/projects/market-intelligence"
              className="text-indigo-500 hover:underline">
              View Case Study →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-4">
              Hybrid Ensemble Architecture
            </h4>
            <p className="text-slate-400 mb-6">
              Novel framework integrating bagging, boosting,
              dagging, stacking. Validated with DM Test and
              Model Confidence Set.
            </p>
            <Link href="/projects/ensemble-framework"
              className="text-indigo-500 hover:underline">
              View Case Study →
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="border-t border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10">
            System Architecture
          </h3>

          <img
            src="/architecture.png"
            alt="ML System Architecture"
            className="rounded-2xl border border-slate-800 shadow-xl"
          />

          <p className="text-slate-400 mt-6 max-w-3xl">
            SQL ingestion → preprocessing → model training pipeline →
            ensemble aggregation → statistical validation →
            REST API deployment → web monitoring dashboard.
          </p>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="border-t border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-8">
            Research & Innovation
          </h3>
          <ul className="text-slate-400 space-y-4">
            <li>Scientific Reports (Nature Portfolio) – Deep learning multi-market forecasting</li>
            <li>Computational Economics – Hybrid ensemble architecture</li>
            <li>Design Patents – AI-enabled crop assessment systems</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Aqib Gul — Machine Learning Engineer
      </footer>

    </main>
  );
}
