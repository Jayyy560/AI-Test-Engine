const navTabs = [
  { label: "Admin Dashboard", active: true },
  { label: "Developer View", active: false },
  { label: "Test Generation", active: false },
];

const kpiCards = [
  { label: "System Health", value: "98.5%", meta: "Stable", tone: "success" },
  { label: "Tests Passed", value: "1,247", meta: "+12% from last week" },
  { label: "Failures", value: "23", meta: "-5% from last week", tone: "warning" },
  { label: "Avg Duration", value: "2.3m", meta: "Per test execution" },
];

const coverageMetrics = [
  { label: "Code Coverage", value: 87, tone: "blue" },
  { label: "Endpoint Coverage", value: 92, tone: "purple" },
  { label: "UI Component Coverage", value: 78, tone: "green" },
];

const failureStats = [
  { label: "Timeout Errors", value: 8, tone: "red" },
  { label: "Assertion Failures", value: 7, tone: "amber" },
  { label: "Network Issues", value: 5, tone: "violet" },
  { label: "UI Rendering", value: 3, tone: "teal" },
];

const capabilities = [
  "Configure test depth and risk thresholds",
  "Manage compute budget",
  "Approve auto-generated tests",
  "Manage alert routing",
];

const timelineBars = [60, 80, 50, 70, 65, 90, 75];

export default function Home() {
  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <div className="app-shell">
        <header className="app-header">
          <div className="brand-block">
            <p className="eyebrow">Autonomous AI Test Engineer</p>
            <h1>End-to-end autonomous testing system</h1>
            <div className="tab-group" role="tablist">
              {navTabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`tab ${tab.active ? "active" : ""}`}
                  role="tab"
                  aria-selected={tab.active}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <button className="configure-btn">Configure</button>
        </header>

        <main className="dashboard">
          <section className="intro">
            <p className="eyebrow">Admin / Core Team Dashboard</p>
            <p className="subtitle">
              Centralized control over the autonomous testing system
            </p>
          </section>

          <section className="kpi-grid" aria-label="KPI overview">
            {kpiCards.map((card) => (
              <article className="kpi-card" key={card.label}>
                <div className="kpi-label">{card.label}</div>
                <div className="kpi-value">{card.value}</div>
                <div className={`kpi-meta ${card.tone ?? ""}`}>{card.meta}</div>
              </article>
            ))}
          </section>

          <section className="panel-grid" aria-label="Coverage and failures">
            <article className="panel">
              <header>
                <h2>Coverage Metrics</h2>
              </header>
              {coverageMetrics.map((metric) => (
                <div className="metric-row" key={metric.label}>
                  <div>
                    <p>{metric.label}</p>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="progress" role="presentation">
                    <div
                      className={`progress-bar ${metric.tone}`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </article>

            <article className="panel">
              <header>
                <h2>Failure Statistics</h2>
              </header>
              <ul className="failure-list">
                {failureStats.map((item) => (
                  <li key={item.label}>
                    <span>
                      <span className={`dot ${item.tone}`} />
                      {item.label}
                    </span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="panel-grid" aria-label="Durations and actions">
            <article className="panel">
              <header>
                <h2>Duration Timeline</h2>
              </header>
              <p className="muted">
                Average test execution time over the last 7 days
              </p>
              <div className="timeline" role="img" aria-label="Execution time spark bars">
                {timelineBars.map((height, index) => (
                  <div
                    key={index}
                    className="timeline-bar"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </article>

            <article className="panel">
              <header>
                <h2>Admin Capabilities</h2>
              </header>
              <div className="capability-list">
                {capabilities.map((capability) => (
                  <button key={capability}>{capability}</button>
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
