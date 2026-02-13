"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">Dr. Aqib Gul</h1>

          <div className="space-x-6 text-sm">
            <a href="#system" className="hover:text-white">System</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="/resume.pdf" download className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Machine Learning Systems Engineer
        </h2>

        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
          I design and deploy end-to-end forecasting systems for non-stationary environments,
          combining statistical inference, ensemble learning, and deep temporal models.
          My work focuses on reliability — models that generalize across markets,
          survive drift, and operate in production decision systems.
        </p>

        <div className="mt-10 flex gap-4">
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

      {/* AUTHORITY METRICS */}
      <section className="border-t border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-bold text-indigo-500">Real-Time</h3>
            <p className="text-slate-400">Forecast API Deployment</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-indigo-500">Hybrid</h3>
            <p className="text-slate-400">Stat + ML + Deep Learning</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-indigo-500">Multi-Market</h3>
            <p className="text-slate-400">Non-Stationary Time Series</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-indigo-500">Production</h3>
            <p className="text-slate-400">Decision Support Platform</p>
          </div>

        </div>
      </section>

      {/* CORE SYSTEM */}
      <section id="system" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-3xl font-semibold mb-8">
            Forecasting Intelligence System
          </h3>

          <p className="text-slate-400 max-w-3xl mb-12">
            A deployed decision-support forecasting platform integrating data ingestion,
            feature engineering, ensemble learning and statistical validation.
            Designed for noisy real-world markets where traditional models fail due to regime shifts.
          </p>

          <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <img src="/architecture.png" alt="architecture" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-14">

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Model Stack</h4>
              <ul className="text-slate-400 space-y-2">
                <li>ARIMA baselines for statistical grounding</li>
                <li>Tree ensembles for nonlinear tabular patterns</li>
                <li>LSTM sequence models for temporal dependency</li>
                <li>Stacked meta-learner for bias correction</li>
                <li>Weighted ensemble aggregation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Validation & Reliability</h4>
              <ul className="text-slate-400 space-y-2">
                <li>Rolling-origin cross-validation</li>
                <li>Diebold–Mariano significance testing</li>
                <li>Model Confidence Set selection</li>
                <li>Drift monitoring & retraining pipeline</li>
                <li>REST inference endpoints</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10">Industry Experience</h3>

          <div className="space-y-8 text-slate-400 max-w-4xl">

            <p>
              Built and deployed a real-time agricultural market forecasting platform used for
              large-scale decision support under a government development programme.
            </p>

            <p>
              Implemented full ML lifecycle: ingestion → preprocessing → training →
              evaluation → API serving → monitoring.
            </p>

            <p>
              Delivered predictive analytics and statistical modeling across healthcare,
              agriculture and economic datasets with reproducible workflows.
            </p>

          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-3xl font-semibold mb-10">Research Contributions</h3>

          <ul className="text-slate-400 space-y-5 max-w-4xl">
            <li>Hybrid ensemble forecasting for non-stationary markets</li>
            <li>Deep learning multi-market supply chain prediction</li>
            <li>Statistical + ML reliability evaluation frameworks</li>
            <li>Applied AI decision systems across real datasets</li>
          </ul>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Dr. Aqib Gul — ML Systems Engineer
      </footer>

    </main>
  );
}
