"use client";

import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 bg-black/80 backdrop-blur border-b border-neutral-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold tracking-wide">Dr. Aqib Gul</h1>
          <nav className="space-x-8 text-sm text-neutral-300">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href={`${basePath}/resume.pdf`} download className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200">Resume</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Data Scientist & Machine Learning Engineer
        </h2>
        <p className="text-neutral-400 text-lg max-w-3xl leading-relaxed">
          I build end‑to‑end machine learning solutions — from raw data processing and feature engineering
          to model deployment and monitoring. My work focuses on practical predictive analytics, scalable
          pipelines, and interpretable models that support real decision‑making systems.
        </p>

        <div className="mt-10 flex gap-4">
          <a href="https://github.com/DeepStatistox" className="border border-neutral-700 px-6 py-3 rounded-xl hover:border-white">GitHub</a>
          <a href="https://linkedin.com/in/aqibgul" className="border border-neutral-700 px-6 py-3 rounded-xl hover:border-white">LinkedIn</a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-neutral-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Core Skills</h3>
          <div className="grid md:grid-cols-3 gap-10 text-neutral-400">
            <Skill title="Machine Learning">
              Supervised & unsupervised learning, forecasting, model evaluation, feature engineering
            </Skill>
            <Skill title="Programming">
              Python, R, SQL, NumPy, Pandas, Scikit‑learn
            </Skill>
            <Skill title="Deep Learning">
              TensorFlow, Keras, PyTorch, CNNs, sequence models, NLP pipelines
            </Skill>
            <Skill title="Deployment">
              FastAPI, Flask, REST APIs, CI/CD, reproducible pipelines
            </Skill>
            <Skill title="Data Engineering">
              Data cleaning, preprocessing automation, large dataset handling
            </Skill>
            <Skill title="Visualization">
              Matplotlib, Seaborn, Power BI dashboards
            </Skill>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-neutral-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Experience</h3>
          <div className="space-y-8 text-neutral-400 max-w-4xl">
            <p><strong>Data Science & Monitoring — SKUAST‑K</strong><br/>Built and deployed real‑time forecasting models, automated preprocessing pipelines, and production API endpoints used for large‑scale decision support.</p>
            <p><strong>Freelance Data Scientist</strong><br/>Delivered analytics solutions across healthcare and research datasets including regression, classification, and statistical validation workflows.</p>
            <p><strong>Machine Learning Engineer Intern</strong><br/>Developed computer vision models and implemented collaborative CI/CD workflows for model development and deployment.</p>
            <p><strong>Big Data & Data Analyst Internships</strong><br/>Worked with distributed data processing, dashboards, and real‑world business datasets.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-neutral-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Selected Work</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Project title="Forecasting Platform">
              End‑to‑end ML pipeline with ingestion, feature engineering, model training, validation and deployment via API endpoints.
            </Project>
            <Project title="Predictive Analytics Models">
              Built regression, classification and ensemble models across multiple datasets including healthcare and business analytics problems.
            </Project>
            <Project title="Computer Vision & NLP">
              Implemented image classification, transfer learning and text classification pipelines for practical applications.
            </Project>
            <Project title="Data Dashboards">
              Built Power BI dashboards and automated reporting workflows for monitoring real‑world systems.
            </Project>
          </div>

          <div className="rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl mt-16">
            <img src={`${basePath}/architecture.png`} alt="architecture" className="w-full" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 border-t border-neutral-800 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="text-neutral-400 mb-8">Open to Data Science & ML Engineering opportunities</p>
        <a href="mailto:maaqib90@gmail.com" className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-neutral-200">Email Me</a>
      </section>

      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Dr. Aqib Gul
      </footer>
    </main>
  );
}

function Skill({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Project({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-neutral-800 rounded-2xl p-6">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-neutral-400 text-sm leading-relaxed">{children}</p>
    </div>
  );
}