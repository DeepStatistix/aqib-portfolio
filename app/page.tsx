export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      
      {/* HERO SECTION */}
      <h1 style={{ fontSize: "40px", marginBottom: "5px" }}>Dr. Aqib Gul</h1>
      <h3 style={{ fontWeight: "normal", color: "#444" }}>
        PhD in Statistics | AI Forecasting Systems | Machine Learning & Deep Learning
      </h3>

      <p style={{ marginTop: "20px" }}>
        I specialize in artificial intelligence–driven forecasting systems, hybrid ensemble learning, 
        and predictive modeling under non-stationary and high-variance time series environments. 
        My work integrates strong statistical foundations with deployable AI architectures 
        for real-world decision intelligence.
      </p>

      <p>
        <strong>Focus Areas:</strong> Time Series Learning · Ensemble Intelligence · Deep Learning · 
        Market Intelligence Systems · Applied AI Deployment
      </p>

      <hr style={{ margin: "40px 0" }} />

      {/* RESEARCH SECTION */}
      <h2>Research & Core Contributions</h2>

      <h3>Hybrid Ensemble Intelligence for Forecasting</h3>
      <p>
        Developed a novel ensemble framework combining bagging, boosting, dagging, 
        and stacking strategies for robust stock and commodity price prediction. 
        Validated using Diebold–Mariano tests and Model Confidence Set procedures 
        for statistically rigorous model comparison.
      </p>

      <h3>Deep Learning–Enabled Multi-Market Forecasting</h3>
      <p>
        Designed and evaluated LSTM and hybrid forecasting architectures for 
        agricultural price systems across multi-market supply chains. 
        Published in peer-reviewed indexed journals, demonstrating superior 
        performance under noisy and seasonal dynamics.
      </p>

      <h3>Machine Learning for Non-Stationary Time Series</h3>
      <p>
        Conducted systematic comparison of ARIMA, SVR, Random Forest, 
        Gradient Boosting, and RNN/LSTM models under varying temporal granularities. 
        Emphasis on model generalization, stability, and deployment-readiness.
      </p>

      <hr style={{ margin: "40px 0" }} />

      {/* AI SYSTEMS SECTION */}
      <h2>AI Systems & Deployment Experience</h2>

      <h3>AI-Enabled Market Intelligence Platform</h3>
      <p>
        Architected and deployed an end-to-end forecasting system integrating 
        real-time SQL data ingestion, ML/DL forecasting pipelines, 
        REST API endpoints (FastAPI/Flask), and web-based monitoring interfaces 
        for state-level agricultural programs.
      </p>

      <h3>Machine Learning Forecasting Pipelines</h3>
      <p>
        Built reproducible forecasting workflows including preprocessing, 
        feature engineering, model validation (MSE, MAE, RMSE, MAPE), 
        statistical testing (ADF, KPSS, Diebold–Mariano), 
        and uncertainty assessment frameworks.
      </p>

      <h3>Applied AI Systems</h3>
      <p>
        Developed predictive and classification systems across agriculture, 
        finance, image-based diagnostics, NLP, and decision-support applications, 
        emphasizing interpretability, scalability, and production integration.
      </p>

      <hr style={{ margin: "40px 0" }} />

      {/* PUBLICATIONS */}
      <h2>Selected Publications</h2>

      <ul>
        <li>
          Deep learning-enabled multi-market price forecasting (Scientific Reports, 2025)
        </li>
        <li>
          Hybrid ensemble framework for stock price prediction (Computational Economics, 2025)
        </li>
        <li>
          Temporal granularity effects on ML forecasting models (In Press)
        </li>
        <li>
          Regression modeling for forestry volume prediction (Journal of ISAS)
        </li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* INTELLECTUAL PROPERTY */}
      <h2>Patents & Intellectual Property</h2>

      <ul>
        <li>Crop Quality Assessing AI Device – Design Registration (India)</li>
        <li>Crop Statistics Analyzing Computing Pad – Design Registration (India)</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* TECH STACK */}
      <h2>Technical Expertise</h2>

      <p><strong>Programming:</strong> Python, R, SQL</p>
      <p><strong>Machine Learning:</strong> scikit-learn, Ensemble Methods, SVR, Random Forest, Gradient Boosting</p>
      <p><strong>Deep Learning:</strong> LSTM, RNN, TensorFlow/Keras, PyTorch (working knowledge)</p>
      <p><strong>Time Series:</strong> ARIMA, Hybrid Models, ADF/KPSS Testing, DM Test, Model Confidence Set</p>
      <p><strong>Deployment:</strong> FastAPI, Flask, REST APIs, SQL Databases, Git/GitHub</p>
      <p><strong>Big Data Exposure:</strong> Hadoop, Apache Spark</p>

      <hr style={{ margin: "40px 0" }} />

      {/* TEACHING & LEADERSHIP */}
      <h2>Academic Leadership & Teaching</h2>

      <p>
        Teaching Assistant and Co-Instructor for undergraduate and postgraduate 
        courses in Statistics and Data Analysis. Delivered invited lectures on 
        AI-driven forecasting, time series modeling, and smart agricultural systems 
        under national capacity-building programs.
      </p>

      <hr style={{ margin: "40px 0" }} />

      {/* CONTACT */}
      <h2>Contact</h2>

      <p>Email: maaqib90@gmail.com</p>
      <p>GitHub: https://github.com/DeepStatistox</p>
      <p>LinkedIn: https://www.linkedin.com/in/aqibgul/</p>
      <p>ORCID: https://orcid.org/0009-0009-8770-6156</p>

    </main>
  );
}
