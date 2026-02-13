export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">Aqib Gul</h1>
      <p className="text-xl text-gray-600 mb-6 text-center max-w-xl">
        PhD in Statistics | Machine Learning Systems | Generative & Predictive Modeling
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/deepstatistix"
          target="_blank"
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          GitHub
        </a>

        <a
          href="mailto:maaqib90@gmail.com"
          className="px-6 py-3 border border-black rounded-xl"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
