import { useState, useEffect, useRef } from 'react'
import {
  siteConfig, nav, hero, about, services,
  ceremonies, blog, testimonials, contact, footer
} from './data.js'

// ─── Utility: useScrollReveal ────────────────────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// ─── WhatsApp float ──────────────────────────────────────────
function WhatsAppFloat() {
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
  return (
    <div className="wa-float">
      <div className="wa-float__tooltip">¿Tienes dudas? Escríbeme</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="wa-float__btn" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

// ─── NAVBAR ──────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="navbar__logo" onClick={e => handleLink(e, '#inicio')}>
        <span className="navbar__logo-name">{siteConfig.brand}</span>
        <span className="navbar__logo-sub">{siteConfig.tagline}</span>
      </a>

      <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {nav.links.map(l => (
          <a key={l.href} href={l.href} className="navbar__link"
            onClick={e => handleLink(e, l.href)}>{l.label}</a>
        ))}
        <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer"
          className="navbar__cta">{nav.ctaLabel}</a>
      </div>

      <button
        className="navbar__toggle"
        aria-label="Menú"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
      </button>
    </nav>
  )
}

// ─── HERO ────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div className="hero__star" />
        <div className="hero__star" />
        <div className="hero__star" />
        <div className="hero__grain" />
        <div className="hero__mesh" />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__headline">
          {hero.headline.split('\n').map((line, i) =>
            i === 1 ? <><br /><em key={i}>{line}</em></> : line
          )}
        </h1>
        <p className="hero__sub">{hero.subheadline}</p>
        <div className="hero__actions">
          <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn--primary">{hero.ctaPrimary.label} →</a>
          <a href={hero.ctaSecondary.href} className="btn btn--outline"
            onClick={e => { e.preventDefault(); document.querySelector(hero.ctaSecondary.href)?.scrollIntoView({ behavior: 'smooth' }) }}>
            {hero.ctaSecondary.label}
          </a>
        </div>
        <div className="hero__stats">
          {hero.stats.map(s => (
            <div key={s.label}>
              <div className="hero__stat-value">{s.value}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ───────────────────────────────────────────────────
function About() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="about" id="sobre-mi" ref={ref}>
      <div className="about__inner">
        <div className={`about__left ${visible ? 'animate-fade-up' : ''}`}>
          <span className="section-eyebrow">{about.eyebrow}</span>
          <h2 className="section-headline" style={{ marginBottom: '2rem' }}>{about.headline}</h2>
          <div className="about__story">
            {about.story.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className={`about__right ${visible ? 'animate-fade-up delay-2' : ''}`}>
          <div className="about__portrait">
            <div className="about__portrait-placeholder">
              <div className="about__portrait-symbol">♡</div>
              <div className="about__portrait-note">Foto de mamá</div>
              <div style={{ fontSize: '0.62rem', color: 'rgba(184,146,58,0.25)', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                Reemplazar con foto real
              </div>
            </div>
          </div>
          <h3 className="about__credentials-title">Formación y especialidades</h3>
          {about.credentials.map((c, i) => (
            <div key={i} className="about__credential">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES ────────────────────────────────────────────────
function Services() {
  const [ref, visible] = useScrollReveal()
  const s = services
  return (
    <section className="services" id="servicios" ref={ref}>
      <div className="services__bg-pattern" />
      <div className="services__inner">
        <div className={`services__header ${visible ? 'animate-fade-up' : ''}`}>
          <span className="section-eyebrow">{s.eyebrow}</span>
          <h2 className="section-headline section-headline--light" style={{ marginBottom: '1rem' }}>{s.headline}</h2>
          <p className="section-intro section-intro--light">{s.intro}</p>
        </div>

        {/* Featured card */}
        <div className={`services__featured ${visible ? 'animate-fade-up delay-2' : ''}`}>
          <div>
            <span className="services__featured-tag">{s.featured.tag}</span>
            <h3 className="services__featured-name">{s.featured.name}</h3>
            <p className="services__featured-meta">{s.featured.duration} · Sesión individual · Videollamada</p>
            <p className="services__featured-desc">{s.featured.description}</p>
            <div className="services__featured-includes">
              {s.featured.includes.map((inc, i) => (
                <div key={i} className="services__featured-include">{inc}</div>
              ))}
            </div>
          </div>
          <div className="services__featured-price">
            <div>
              <div className="services__featured-amount">{s.featured.price}</div>
              <div className="services__featured-dur">{s.featured.duration}</div>
            </div>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn--primary">{s.featured.ctaLabel} →</a>
          </div>
        </div>

        {/* Disciplines grid */}
        <div className={`services__disciplines ${visible ? 'animate-fade-up delay-3' : ''}`}>
          {s.disciplines.map((d, i) => (
            <div key={i} className="discipline-card">
              <span className="discipline-card__icon">{d.icon}</span>
              <h3 className="discipline-card__name">{d.name}</h3>
              <p className="discipline-card__tagline">{d.tagline}</p>
              <p className="discipline-card__desc">{d.description}</p>
              {d.bullets.map((b, j) => (
                <div key={j} className="discipline-card__bullet">{b}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CEREMONIES ──────────────────────────────────────────────
function Ceremonies() {
  const [ref, visible] = useScrollReveal()
  const c = ceremonies
  return (
    <section className="ceremonies" id="ceremonias" ref={ref}>
      <div className="ceremonies__inner">
        <div className={`ceremonies__header ${visible ? 'animate-fade-up' : ''}`}>
          <span className="section-eyebrow">{c.eyebrow}</span>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>{c.headline}</h2>
          <p className="section-intro">{c.intro}</p>
        </div>

        <div className={`ceremonies__grid ${visible ? 'animate-fade-up delay-2' : ''}`}>
          {c.items.map((item, i) => (
            <div key={i} className="ceremony-card">
              <div className="ceremony-card__banner">
                <span className="ceremony-card__banner-symbol">{i === 0 ? '火' : '◎'}</span>
                <span className="ceremony-card__type">{item.type}</span>
              </div>
              <div className="ceremony-card__body">
                <h3 className="ceremony-card__name">{item.name}</h3>
                <p className="ceremony-card__desc">{item.description}</p>
                <div className="ceremony-card__details">
                  {item.details.map((d, j) => (
                    <div key={j} className="ceremony-card__detail">{d}</div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola Irene, quiero información sobre: ${item.name}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn--outline-dark"
                >{item.cta}</a>
              </div>
            </div>
          ))}
        </div>

        <p className={`ceremonies__cta-note ${visible ? 'animate-fade-up delay-3' : ''}`}>
          {c.ctaNote}
        </p>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────
function Testimonials() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials__bg" />
      <div className="testimonials__inner">
        <div className={`testimonials__header ${visible ? 'animate-fade-up' : ''}`}>
          <span className="section-eyebrow">{testimonials.eyebrow}</span>
          <h2 className="section-headline section-headline--light">{testimonials.headline}</h2>
        </div>
        <div className={`testimonials__grid ${visible ? 'animate-fade-up delay-2' : ''}`}>
          {testimonials.items.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">{t.author}</div>
              <div className="testimonial-card__meta">{t.location} · {t.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BLOG ────────────────────────────────────────────────────
const blogSymbols = ['♡', '◈', '⊕', '❋', '◎', '◆']

function Blog() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="blog" id="blog" ref={ref}>
      <div className="blog__inner">
        <div className={`blog__header ${visible ? 'animate-fade-up' : ''}`}>
          <div>
            <span className="section-eyebrow">{blog.eyebrow}</span>
            <h2 className="section-headline">{blog.headline}</h2>
          </div>
          <p className="section-intro" style={{ maxWidth: 380, fontSize: '0.9rem' }}>{blog.intro}</p>
        </div>
        <div className={`blog__grid ${visible ? 'animate-fade-up delay-2' : ''}`}>
          {blog.posts.map((post, i) => (
            <article key={i} className="blog-card">
              <div className="blog-card__thumb">
                <span className="blog-card__thumb-symbol">{blogSymbols[i % blogSymbols.length]}</span>
              </div>
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">{post.readTime}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────
function Contact() {
  const [ref, visible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hola Irene, mi nombre es ${form.name}. Me interesa: ${form.service}. ${form.message} (Correo: ${form.email})`
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    setStatus('success')
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section className="contact" id="contacto" ref={ref}>
      <div className="contact__bg" />
      <div className="contact__inner">
        <div className={`contact__left ${visible ? 'animate-fade-up' : ''}`}>
          <div className="contact__header">
            <span className="section-eyebrow">{contact.eyebrow}</span>
            <h2 className="section-headline section-headline--light" style={{ marginBottom: '1rem' }}>{contact.headline}</h2>
            <p className="section-intro section-intro--light" style={{ fontSize: '0.92rem' }}>{contact.intro}</p>
          </div>
          <div className="contact__info-blocks">
            {contact.infoBlocks.map((b, i) => (
              <div key={i} className="contact__info-block">
                <div className="contact__info-label">{b.label}</div>
                <div className="contact__info-value">{b.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`contact__right ${visible ? 'animate-fade-up delay-2' : ''}`}>
          {/* Booking via Calendly */}
          <div className="contact__booking-cta">
            <h3 className="contact__booking-title">Agenda directamente</h3>
            <p className="contact__booking-sub">
              Elige tu fecha y horario. Paga en línea y recibe el enlace de la videollamada de forma automática.
            </p>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn--primary" style={{ justifyContent: 'center', width: '100%' }}>
              Ver disponibilidad y reservar →
            </a>
          </div>

          <div className="contact__or">o escríbeme directamente</div>

          {/* Contact Form */}
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--gold-light)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>
              Mensaje enviado. Irene te responderá en menos de 24 horas.
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                type="text" name="name" required
                placeholder={contact.form.namePlaceholder}
                value={form.name} onChange={handleChange}
              />
              <input
                type="email" name="email" required
                placeholder={contact.form.emailPlaceholder}
                value={form.email} onChange={handleChange}
              />
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">{contact.form.servicePlaceholder}</option>
                {contact.serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              <textarea
                name="message"
                placeholder={contact.form.messagePlaceholder}
                value={form.message} onChange={handleChange}
              />
              <button type="submit" className="btn btn--primary" style={{ justifyContent: 'center' }}>
                {contact.form.submitLabel} →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer() {
  const handleLink = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <div className="footer__brand-name">{siteConfig.brand}</div>
            <div className="footer__brand-tag">{footer.tagline}</div>
            <p className="footer__brand-desc">{footer.legalNote}</p>
            <div className="footer__social" style={{ marginTop: '1.25rem' }}>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
                className="footer__social-link" aria-label="Instagram">IG</a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer"
                className="footer__social-link" aria-label="Facebook">FB</a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="footer__social-link" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Navegación</div>
            <div className="footer__col-links">
              {nav.links.map(l => (
                <a key={l.href} href={l.href} className="footer__col-link"
                  onClick={e => handleLink(e, l.href)}>{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Servicios</div>
            <div className="footer__col-links">
              {services.disciplines.map(d => (
                <a key={d.name} href="#servicios" className="footer__col-link"
                  onClick={e => handleLink(e, '#servicios')}>{d.name}</a>
              ))}
              <a href="#ceremonias" className="footer__col-link"
                onClick={e => handleLink(e, '#ceremonias')}>Ceremonias de Fuego</a>
              <a href="#ceremonias" className="footer__col-link"
                onClick={e => handleLink(e, '#ceremonias')}>Retiros</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            <div className="footer__copy">{footer.copy}</div>
          </div>
          <a href={footer.developerUrl} target="_blank" rel="noopener noreferrer"
            className="footer__dev">{footer.developerCredit}</a>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ROOT ────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Ceremonies />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
