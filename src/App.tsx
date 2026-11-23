import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import privacyEnglish from './content/en/privacy.md?raw'
import siteEnglish from './content/en/site'
import type { SiteContent, SitePage } from './content/site.types'
import privacyChinese from './content/zh/privacy.md?raw'
import siteChinese from './content/zh/site'

type Language = 'en' | 'zh'
type Page = SitePage

const siteContent: Record<Language, SiteContent> = {
  en: siteEnglish,
  zh: siteChinese,
}

function resolveRoute(): { language: Language; page: Page } {
  const parts = window.location.pathname.split('/').filter(Boolean)
  const language: Language = parts[0] === 'en' ? 'en' : parts[0] === 'zh' ? 'zh' : navigator.language.startsWith('zh') ? 'zh' : 'en'
  const localizedPage = ['privacy', 'support', 'terms'].includes(parts[1]) ? parts[1] : undefined
  const rootPage = ['privacy', 'support', 'terms'].includes(parts[0]) ? parts[0] : undefined
  const page = (localizedPage ?? rootPage ?? 'home') as Page
  return { language, page }
}

function route(language: Language, page: Page) {
  return page === 'home' ? `/${language}/` : `/${language}/${page}/`
}

function Header({ language, page }: { language: Language; page: Page }) {
  const text = siteContent[language]
  const alternate: Language = language === 'en' ? 'zh' : 'en'

  return (
    <header className="site-header">
      <a className="brand" href={route(language, 'home')} aria-label={text.nav.home}>
        <img className="brand-mark" src="/fitalong-app-icon.svg" alt="" aria-hidden="true" />
        <span>{text.brand}</span>
      </a>
      <nav aria-label={text.navigationLabel}>
        {(['home', 'support', 'privacy', 'terms'] as Page[]).map((item) => (
          <a key={item} className={page === item ? 'active' : ''} href={route(language, item)}>
            {text.nav[item]}
          </a>
        ))}
      </nav>
      <a className="language-switch" href={route(alternate, page)} lang={alternate === 'zh' ? 'zh-Hans' : 'en'}>
        {text.languageSwitchLabel}
      </a>
    </header>
  )
}

function Home({ language }: { language: Language }) {
  const site = siteContent[language]
  const text = site.home
  const preview = text.preview
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.hero}</h1>
          <p className="hero-intro">{text.intro}</p>
          <div className="hero-actions">
            <a className="app-store-link" href={text.appStoreUrl}>{text.appStoreLabel}</a>
            <a className="text-link" href={route(language, 'support')}>{site.nav.support} <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="plan-preview" aria-label={preview.label}>
          <div className="preview-top">
            <span>{preview.week}</span>
            <span className="preview-pill">{preview.adaptive}</span>
          </div>
          <div className="preview-score">3 <small>/ 4</small></div>
          <p>{preview.progress}</p>
          <div className="progress-track"><span /></div>
          <div className="next-session">
            <span className="session-day">{preview.next}</span>
            <strong>{preview.workout}</strong>
            <span>{preview.adjustment}</span>
          </div>
        </div>
      </section>

      <section className="features section">
        <p className="section-kicker">01</p>
        <h2>{text.featuresTitle}</h2>
        <div className="feature-grid">
          {text.features.map(([title, body], index) => (
            <article key={title}>
              <span className="feature-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-callout section">
        <div>
          <p className="section-kicker">02</p>
          <h2>{text.privacyLead}</h2>
        </div>
        <div>
          <p>{text.privacyBody}</p>
          <a className="primary-link" href={route(language, 'privacy')}>{text.learnPrivacy} <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  )
}

function Support({ language }: { language: Language }) {
  const site = siteContent[language]
  const text = site.support
  return (
    <div className="content-page">
      <div className="page-heading">
        <p className="eyebrow">{site.nav.support}</p>
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
      </div>
      <section className="contact-card">
        <div>
          <p className="section-kicker">01</p>
          <h2>{text.contactTitle}</h2>
          <p>{text.contactBody}</p>
        </div>
        <div>
          <a className="email-link" href="mailto:yangzijie2026@gmail.com">yangzijie2026@gmail.com</a>
          <p className="contact-note">{text.response}</p>
        </div>
      </section>
      <section className="faq-section">
        <p className="section-kicker">02</p>
        <h2>{text.faqTitle}</h2>
        <div className="faq-list">
          {text.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

function Terms({ language }: { language: Language }) {
  const site = siteContent[language]
  const text = site.terms
  return (
    <article className="legal-page">
      <header className="page-heading">
        <p className="eyebrow">{site.nav.terms}</p>
        <h1>{text.title}</h1>
        <p>{text.updated}</p>
      </header>
      <div className="legal-sections">
        {text.sections.map(([title, body]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
    </article>
  )
}

function Privacy({ language }: { language: Language }) {
  return (
    <article className="legal-page markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {language === 'zh' ? privacyChinese : privacyEnglish}
      </ReactMarkdown>
    </article>
  )
}

export default function App() {
  const { language, page } = resolveRoute()
  const site = siteContent[language]
  const content = page === 'privacy'
    ? <Privacy language={language} />
    : page === 'support'
      ? <Support language={language} />
      : page === 'terms'
        ? <Terms language={language} />
        : <Home language={language} />

  return (
    <div className="site-shell" lang={language === 'zh' ? 'zh-Hans' : 'en'}>
      <Header language={language} page={page} />
      <main>{content}</main>
      <footer>
        <div className="brand footer-brand"><img className="brand-mark" src="/fitalong-app-icon.svg" alt="" aria-hidden="true" /><span>{site.brand}</span></div>
        <p>{site.footer}</p>
        <p>© 2026 Zijie Yang</p>
      </footer>
    </div>
  )
}
