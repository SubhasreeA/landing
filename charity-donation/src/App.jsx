import { useState } from 'react'
import './App.css'

const causes = [
  {
    category: 'EDUCATION',
    title: 'A brighter start at school',
    description:
      'Help make learning essentials and welcoming classrooms easier to reach.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85',
    alt: 'Children learning together in a classroom',
  },
  {
    category: 'NUTRITION',
    title: 'Nourishment for growing minds',
    description:
      'Support community efforts that help children access nutritious food.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85',
    alt: 'A colorful selection of fresh vegetables and fruit',
  },
  {
    category: 'HEALTH',
    title: 'Care when it matters most',
    description:
      'Help bring essential care and wellbeing support closer to families.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
    alt: 'A healthcare professional speaking with a patient',
  },
]

const supportSteps = [
  {
    number: '01',
    title: 'Choose what matters to you',
    description:
      'Explore education, nutrition, and health initiatives in one place.',
  },
  {
    number: '02',
    title: 'Give in a way that feels right',
    description:
      'Choose a one-time gift or learn about ongoing child sponsorship.',
  },
  {
    number: '03',
    title: 'Be part of lasting change',
    description:
      'Small acts of care can help create more hopeful opportunities.',
  },
]

function App() {
  const [selectedAmount, setSelectedAmount] = useState(25)
  const amounts = [10, 25, 50, 100]

  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="logo" href="#" aria-label="HopeBridge home">
            <span className="logo-mark" aria-hidden="true">
              h
            </span>
            HopeBridge
          </a>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#causes">Our causes</a>
            <a href="#sponsorship">Sponsorship</a>
            <a href="#about">About us</a>
          </div>

          <a className="donate-btn nav-donate" href="#donate">
            Donate now <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> HOPE GROWS WHEN WE GIVE</p>
            <h1 id="hero-title">
              A little kindness can <span>change everything.</span>
            </h1>
            <p className="hero-description">
              Every child deserves the chance to learn, grow, and feel cared
              for. Together, we can help make that brighter future possible.
            </p>
            <div className="hero-actions">
              <a className="donate-btn hero-donate-btn" href="#donate">
                Make a donation <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#causes">
                Explore our causes <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-heart" aria-hidden="true">♥</span>
              <p>Small acts. <strong>Lasting hope.</strong></p>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=90"
              alt="A caring moment shared between a child and an adult"
            />
            <div className="hero-image-wash" />
            <div className="hero-photo-label">
              <span className="label-sparkle" aria-hidden="true">✳</span>
              <span>For every child, a brighter tomorrow</span>
            </div>
            <div className="hero-side-note">CARE · HOPE · OPPORTUNITY</div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to learn more">
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="intro-strip" id="about" aria-labelledby="intro-title">
          <div className="intro-heading">
            <p className="eyebrow">WHY HOPEBRIDGE</p>
            <h2 id="intro-title">A more caring world starts together.</h2>
          </div>
          <p className="intro-copy">
            We bring people and meaningful causes closer, so your generosity
            can become a step toward a healthier, more hopeful future for
            children and families.
          </p>
          <a className="inline-link" href="#how-it-works">
            Get to know us <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="causes-section" id="causes" aria-labelledby="causes-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHERE HOPE IS NEEDED</p>
              <h2 id="causes-title">Small gifts. Meaningful possibilities.</h2>
            </div>
            <p>
              Find a cause close to your heart and help create opportunities
              that can last.
            </p>
          </div>
          <div className="cause-grid">
            {causes.map((cause, index) => (
              <article className="cause-card" key={cause.category}>
                <div className={`cause-image cause-image-${index + 1}`}>
                  <img src={cause.image} alt={cause.alt} loading="lazy" />
                  <span className="cause-category">{cause.category}</span>
                </div>
                <div className="cause-content">
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <a className="inline-link" href="#donate">
                    Support this cause <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="sponsorship-section"
          id="sponsorship"
          aria-labelledby="sponsorship-title"
        >
          <div className="sponsorship-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1100&q=85"
              alt="Children taking part in a joyful outdoor activity"
              loading="lazy"
            />
            <div className="sponsorship-sticker">
              <span>♥</span>
              A connection<br />that keeps growing
            </div>
          </div>
          <div className="sponsorship-copy">
            <p className="eyebrow">MORE THAN A GIFT</p>
            <h2 id="sponsorship-title">
              Be there for a child, <span>every step of the way.</span>
            </h2>
            <p>
              Sponsorship is a thoughtful way to support a child’s journey over
              time. Your encouragement can help nurture the everyday essentials
              that make room for learning, wellbeing, and possibility.
            </p>
            <ul className="sponsorship-points">
              <li><span aria-hidden="true">✓</span> Support a child’s growing needs</li>
              <li><span aria-hidden="true">✓</span> Choose a level that feels comfortable</li>
              <li><span aria-hidden="true">✓</span> Make care part of their journey</li>
            </ul>
            <a className="donate-btn sponsorship-btn" href="#donate">
              Discover sponsorship <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="how-section" id="how-it-works" aria-labelledby="how-title">
          <div className="how-heading">
            <p className="eyebrow">GIVING, MADE MEANINGFUL</p>
            <h2 id="how-title">Your kindness has a place to go.</h2>
            <p>
              A simple way to turn the things you care about into thoughtful
              support.
            </p>
          </div>
          <div className="steps-grid">
            {supportSteps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="donation-section" id="donate" aria-labelledby="donate-title">
          <div className="donation-decoration donation-decoration-left" aria-hidden="true">✳</div>
          <div className="donation-decoration donation-decoration-right" aria-hidden="true">✳</div>
          <div className="donation-card">
            <p className="eyebrow">BE THE REASON SOMEONE SMILES</p>
            <h2 id="donate-title">Choose kindness. Start here.</h2>
            <p className="donation-description">
              Choose a sample amount to see how giving could work. Every gift
              begins with a caring choice.
            </p>
            <div className="amount-options" aria-label="Choose a demo donation amount">
              {amounts.map((amount) => (
                <button
                  className={`amount-option${selectedAmount === amount ? ' selected' : ''}`}
                  key={amount}
                  type="button"
                  aria-pressed={selectedAmount === amount}
                  onClick={() => setSelectedAmount(amount)}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <p className="demo-notice" role="status">
              Selected: ${selectedAmount}. This is a website preview; payment
              processing is not connected.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="logo footer-logo" href="#" aria-label="HopeBridge home">
              <span className="logo-mark" aria-hidden="true">h</span>
              HopeBridge
            </a>
            <p>
              A little kindness can open the door to a brighter tomorrow.
              Let’s make hope something we share.
            </p>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <a href="#causes">Our causes</a>
            <a href="#sponsorship">Sponsorship</a>
            <a href="#about">About us</a>
          </div>
          <div className="footer-column">
            <h2>Be part of it</h2>
            <a href="#donate">Make a donation</a>
            <a href="#how-it-works">How it works</a>
            <a href="#contact">Get in touch</a>
          </div>
          <div className="footer-note">
            <span aria-hidden="true">♥</span>
            <p>Hope grows when we give.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HopeBridge. Made with care · Subhasree · 2312109 · 7598257737</p>
          <p>Website preview · Donations are not processed</p>
        </div>
      </footer>
    </>
  )
}

export default App
