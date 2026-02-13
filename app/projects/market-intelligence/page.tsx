export default function Page() {
  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          AI Market Intelligence Platform
        </h1>

        <h2 className="text-xl font-semibold mt-10 mb-4">Problem</h2>
        <p className="text-slate-400">
          Agricultural markets exhibit non-stationarity, seasonal volatility,
          and regime shifts.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Solution</h2>
        <p className="text-slate-400">
          Built LSTM + ensemble models integrated with SQL ingestion and API deployment.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Impact</h2>
        <ul className="text-slate-400 list-disc pl-6">
          <li>Improved forecasting accuracy by 30%+</li>
          <li>Deployed to production</li>
          <li>Real-world decision support</li>
        </ul>

      </div>
    </main>
  );
}
