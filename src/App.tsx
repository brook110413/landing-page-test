import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      console.log('Email submitted:', email)
    }
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo" data-testid="logo">MyProduct</div>
          <div className="nav-links">
            <a href="#features" data-testid="nav-features">功能</a>
            <a href="#pricing" data-testid="nav-pricing">價格</a>
            <a href="#contact" data-testid="nav-contact">聯絡</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 data-testid="hero-title">打造你的夢想產品</h1>
          <p className="hero-subtitle" data-testid="hero-subtitle">
            簡單、快速、高效的解決方案，幫助你實現目標
          </p>
          <button className="cta-button" data-testid="cta-button">
            立即開始
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 data-testid="features-title">核心功能</h2>
        <div className="features-grid">
          <div className="feature-card" data-testid="feature-1">
            <div className="feature-icon">⚡</div>
            <h3>快速部署</h3>
            <p>5分鐘內完成設定，立即上線</p>
          </div>
          <div className="feature-card" data-testid="feature-2">
            <div className="feature-icon">🔒</div>
            <h3>安全可靠</h3>
            <p>企業級安全保護，資料加密傳輸</p>
          </div>
          <div className="feature-card" data-testid="feature-3">
            <div className="feature-icon">📊</div>
            <h3>數據分析</h3>
            <p>即時數據追蹤，深入洞察分析</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2 data-testid="newsletter-title">訂閱最新消息</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="newsletter-form" data-testid="newsletter-form">
            <input
              type="email"
              placeholder="輸入你的 Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email-input"
              required
            />
            <button type="submit" data-testid="submit-button">
              訂閱
            </button>
          </form>
        ) : (
          <div className="success-message" data-testid="success-message">
            ✓ 訂閱成功！感謝你的支持
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p data-testid="footer-text">&copy; 2024 MyProduct. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
