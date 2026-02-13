export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0b1120",
      color: "#e5e7eb",
      minHeight: "100vh",
      padding: "60px 20px",
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* HERO */}
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
          Aqib Gul
        </h1>

        <h2 style={{ fontWeight: 400, color: "#9ca3af", marginBottom: "30px" }}>
          Machine Learning Engineer (PhD) · Forecasting Systems · Deep Learning
        </h2>

        <p style={{ fontSize: "18px", color: "#cbd5e1", marginBottom: "40px" }}>
          I design and deploy production-grade machine learning systems for
          non-stationary, high-variance data environments. My work spans
          deep learning, ensemble intelligence, statistical validation, and
          real-time decision support architectures.
        </p>

        {/* FLAGSHIP SYSTEM */}
        <h3 style={{ marginBottom: "20px" }}>Production ML Systems</h3>

        <div style={{ marginBottom: "35px" }}>
          <h4>AI Market Intelligence & Forecasting Platform</h4>
          <p style={{ color: "#9ca3af" }}>
            Architected and deployed an end-to-end forecasting system integrating:
          </p>
          <ul style={{ color: "#9ca3af" }}>
            <li>Real-time SQL data ingestion pipelines</li>
            <li>LSTM & ensemble forecasting models</li>
            <li>Statistical validation (DM test, Model Confidence Set)</li>
            <li>REST APIs (FastAPI/Flask)</li>
            <li>Web-based monitoring interface for decision support</li>
          </ul>
          <p style={{ color: "#9ca3af" }}>
            Built for large-scale agricultural market intelligence under
            state-level development programs.
          </p>
        </div>

        {/* RESEARCH-DRIVEN ENGINEERING */}
        <h3 style={{ marginBottom: "20px" }}>Research-Driven ML Engineering</h3>

        <div style={{ marginBottom: "30px" }}>
          <h4>Hybrid Ensemble Architecture</h4>
          <p style={{ color: "#9ca3af" }}>
            Designed a novel ensemble framework combining bagging, boosting,
            dagging, and stacking strategies for robust time-series forecasting.
            Validated using rigorous statistical comparison methods.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h4>Deep Learning for Non-Stationary Time Series</h4>
          <p style={{ color: "#9ca3af" }}>
            Implemented LSTM-based architectures for multi-market forecasting,
            optimizing for generalization under regime shifts and seasonal drift.
          </p>
        </div>

        {/* PUBLICATIONS */}
        <h3 style={{ marginTop: "50px", marginBottom: "20px" }}>
          Selected Publications
        </h3>

        <ul style={{ color: "#9ca3af" }}>
          <li>Scientific Reports (Nature Portfolio) – Deep learning-enabled multi-market forecasting</li>
          <li>Computational Economics – Novel hybrid ensemble framework</li>
        </ul>

        {/* INNOVATION */}
        <h3 style={{ marginTop: "50px", marginBottom: "20px" }}>
          Innovation
        </h3>

        <ul style={{ color: "#9ca3af" }}>
          <li>Design Patent – AI-enabled crop quality assessment device</li>
          <li>Design Patent – Intelligent crop statistics computing system</li>
        </ul>

        {/* TECH STACK */}
        <h3 style={{ marginTop: "50px", marginBottom: "20px" }}>
          Technical Stack
        </h3>

        <p style={{ color: "#9ca3af" }}>
          Python · PyTorch · TensorFlow · scikit-learn · SQL · FastAPI ·
          ARIMA · LSTM · Ensemble Learning · Hadoop · Spark · Git · REST APIs
        </p>

        {/* LINKS */}
        <h3 style={{ marginTop: "50px", marginBottom: "20px" }}>
          Links
        </h3>

        <p style={{ color: "#9ca3af" }}>
          GitHub: https://github.com/DeepStatistox <br />
          LinkedIn: https://linkedin.com/in/aqibgul <br />
          ORCID: https://orcid.org/0009-0009-8770-6156
        </p>

      </div>
    </main>
  );
}
