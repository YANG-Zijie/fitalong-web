import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import privacyEnglish from './content/privacy.en.md?raw'
import privacyChinese from './content/privacy.zh-Hans.md?raw'

type Language = 'en' | 'zh'
type Page = 'home' | 'privacy' | 'support' | 'terms'

const copy = {
  en: {
    brand: 'FitAlong',
    eyebrow: 'Adaptive training, built around you',
    hero: 'A training plan that keeps moving with you.',
    intro:
      'FitAlong turns your goals, schedule, equipment, and feedback into a clear four-week plan—with safe on-device adjustments and an optional AI coach.',
    availability: 'Coming soon on the App Store',
    featuresTitle: 'Everything you need to keep going',
    features: [
      ['Plan with clarity', 'A structured four-week plan for your goals, experience, location, and available equipment.'],
      ['Adapt without starting over', 'Missed sessions, fatigue, and body feedback inform practical next steps without erasing your progress.'],
      ['See the whole picture', 'Track planned and independent workouts, weight trends, consistency, and training load in one place.'],
      ['Ask your FitAlong Coach', 'Pro members can discuss their current plan, recovery, and general training questions by text or natural voice.'],
    ],
    privacyLead: 'Your core training data stays on your iPhone by default.',
    privacyBody:
      'Local rules remain responsible for plan safety. AI features are optional, require separate consent, and use only the limited information needed for the current request.',
    learnPrivacy: 'Read the Privacy Policy',
    nav: { home: 'Home', support: 'Support', privacy: 'Privacy', terms: 'Terms' },
    footer: 'General fitness guidance for adults. Not medical advice.',
  },
  zh: {
    brand: '练搭',
    eyebrow: '因你而变的自适应训练',
    hero: '一套能跟着你继续走的训练计划。',
    intro:
      '练搭会结合你的目标、时间、器械和训练反馈，生成清晰的四周计划；本地规则负责安全调整，AI 教练则由你选择是否启用。',
    availability: '即将上线 App Store',
    featuresTitle: '让坚持训练变得更清楚',
    features: [
      ['清晰制定计划', '根据目标、经验、训练地点和可用器械，生成结构明确的四周训练计划。'],
      ['中断后继续前进', '漏练、疲劳和身体反馈会转化为可执行的后续安排，不必推倒重来。'],
      ['看见完整进步', '统一查看计划训练、自主训练、体重趋势、连续活动和训练负荷。'],
      ['随时询问练搭教练', 'Pro 用户可通过文字或自然语音，讨论当前计划、恢复和一般训练问题。'],
    ],
    privacyLead: '核心训练数据默认保存在你的 iPhone。',
    privacyBody:
      '训练安全由本地规则负责。AI 功能完全可选，需要单独同意，并且只处理完成当前请求所需的有限信息。',
    learnPrivacy: '查看隐私政策',
    nav: { home: '首页', support: '技术支持', privacy: '隐私政策', terms: '服务条款' },
    footer: '面向成年人的一般健身训练辅助，不构成医疗建议。',
  },
} as const

const supportCopy = {
  en: {
    title: 'FitAlong Support',
    intro: 'Find answers to common questions or contact us directly.',
    contactTitle: 'Contact support',
    contactBody: 'For product, subscription, privacy, or accessibility questions, email:',
    response: 'Please include your iOS version and FitAlong version. Do not include health details you do not want to share.',
    faqTitle: 'Common questions',
    faqs: [
      ['How do I restore Pro?', 'Open Settings in FitAlong, select FitAlong Pro, then choose Restore Purchases. Use the same Apple Account that made the purchase.'],
      ['How do I cancel a subscription?', 'Subscriptions are managed by Apple. Open iPhone Settings, tap your name, choose Subscriptions, then select FitAlong Pro.'],
      ['How do I delete my data?', 'Open FitAlong Settings and choose Delete All FitAlong Data. The app explains which local, cloud, and Apple Health records it can remove before you confirm.'],
      ['Why is an AI feature unavailable?', 'Confirm that Pro is active, AI processing consent is enabled, and the iPhone has a working internet connection. Core plans and local adjustments remain available without AI.'],
      ['Is FitAlong medical advice?', 'No. FitAlong provides general fitness guidance for adults and does not diagnose or treat medical conditions. Stop training and seek qualified help for urgent or worsening symptoms.'],
    ],
  },
  zh: {
    title: '练搭技术支持',
    intro: '查看常见问题，或直接联系我们。',
    contactTitle: '联系技术支持',
    contactBody: '如有产品、订阅、隐私或无障碍使用问题，请发送邮件至：',
    response: '建议附上 iOS 版本和练搭版本；请勿发送你不希望分享的健康细节。',
    faqTitle: '常见问题',
    faqs: [
      ['如何恢复 Pro 权益？', '打开练搭“设置”，进入 FitAlong Pro，然后选择“恢复购买”。请使用最初购买订阅的同一个 Apple 账户。'],
      ['如何取消订阅？', '订阅由 Apple 管理。打开 iPhone“设置”，轻点你的姓名，选择“订阅”，然后进入 FitAlong Pro。'],
      ['如何删除我的数据？', '打开练搭“设置”，选择“删除全部练搭数据”。确认前，App 会说明可以删除的本地、云端及 Apple 健康记录范围。'],
      ['为什么 AI 功能暂时不可用？', '请确认 Pro 权益有效、已同意 AI 数据处理，并且 iPhone 网络正常。基础训练计划和本地调整不依赖 AI。'],
      ['练搭是否提供医疗建议？', '不提供。练搭面向成年人提供一般健身训练辅助，不诊断或治疗疾病。如出现紧急或持续加重的不适，请停止训练并及时寻求专业帮助。'],
    ],
  },
} as const

const termsCopy = {
  en: {
    title: 'FitAlong Terms of Use',
    updated: 'Last updated: July 28, 2026',
    sections: [
      ['1. About FitAlong', 'FitAlong provides general fitness planning, workout guidance, progress tracking, and optional AI-enhanced coaching for adults. It is not a medical service and does not provide diagnosis, treatment, rehabilitation, or emergency assistance.'],
      ['2. Safe use', 'You are responsible for choosing whether an exercise is appropriate for you. Complete the in-app screening honestly, follow stop guidance, use suitable equipment and surroundings, and seek qualified professional advice when needed.'],
      ['3. Subscriptions', 'FitAlong Pro is an auto-renewable subscription sold and managed by Apple. Pricing, billing, renewal, cancellation, refunds, and purchase restoration follow the terms shown by Apple and the App Store storefront you use.'],
      ['4. AI features', 'AI features are optional and require separate consent. Responses may be incomplete or inaccurate. On-device safety rules remain responsible for bounded plan adjustments, and you must confirm an AI-proposed adjustment before it is applied.'],
      ['5. Your content and acceptable use', 'You retain responsibility for information you enter. Do not submit unlawful content, secrets, unrelated personal information, or content that infringes another person’s rights. Do not attempt to disrupt, reverse engineer, or abuse the service.'],
      ['6. Availability and changes', 'Features may change as the product improves. Internet, Apple, device, regional, or third-party service availability may affect some functions. Core local features may remain available when online services are unavailable.'],
      ['7. Privacy', 'Our Privacy Policy explains what information FitAlong processes, where it is stored, and how you can exercise deletion and consent choices.'],
      ['8. Contact', 'Questions about these terms may be sent to support@fitalong.com.'],
    ],
  },
  zh: {
    title: '练搭服务条款',
    updated: '最后更新：2026 年 7 月 28 日',
    sections: [
      ['一、关于练搭', '练搭面向成年人提供一般健身计划、训练指导、进度记录和可选的 AI 增强教练功能。练搭不是医疗服务，不提供诊断、治疗、康复或紧急救助。'],
      ['二、安全使用', '你需要自行判断某项训练是否适合自己，如实完成 App 内筛查，遵循停止训练提示，并确保器械和训练环境适当；必要时应寻求具备资格的专业人士意见。'],
      ['三、订阅', 'FitAlong Pro 是由 Apple 销售和管理的自动续期订阅。价格、扣款、续订、取消、退款及恢复购买，以 Apple 和你所使用 App Store 地区展示的条款为准。'],
      ['四、AI 功能', 'AI 功能完全可选，并需要你单独同意。AI 回复可能不完整或存在错误；受限计划调整仍由设备本地安全规则复核，并且只有在你确认后才会应用。'],
      ['五、你的内容与可接受使用', '你需要对主动填写的信息负责。请勿提交违法内容、密钥、与训练无关的个人信息或侵犯他人权利的内容，也不得尝试破坏、逆向分析或滥用服务。'],
      ['六、可用性与变更', '产品功能可能随改进而调整。网络、Apple、设备、地区或第三方服务状态可能影响部分功能；在线服务不可用时，部分本地核心功能仍可继续使用。'],
      ['七、隐私', '隐私政策说明练搭处理哪些信息、信息保存位置，以及你可以如何删除数据和管理同意。'],
      ['八、联系方式', '如对本条款有疑问，请发送邮件至 support@fitalong.com。'],
    ],
  },
} as const

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
  const text = copy[language]
  const alternate: Language = language === 'en' ? 'zh' : 'en'

  return (
    <header className="site-header">
      <a className="brand" href={route(language, 'home')} aria-label={text.nav.home}>
        <span className="brand-mark" aria-hidden="true">F</span>
        <span>{text.brand}</span>
      </a>
      <nav aria-label={language === 'zh' ? '主导航' : 'Primary navigation'}>
        {(['home', 'support', 'privacy', 'terms'] as Page[]).map((item) => (
          <a key={item} className={page === item ? 'active' : ''} href={route(language, item)}>
            {text.nav[item]}
          </a>
        ))}
      </nav>
      <a className="language-switch" href={route(alternate, page)} lang={alternate === 'zh' ? 'zh-Hans' : 'en'}>
        {language === 'zh' ? 'EN' : '中文'}
      </a>
    </header>
  )
}

function Home({ language }: { language: Language }) {
  const text = copy[language]
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.hero}</h1>
          <p className="hero-intro">{text.intro}</p>
          <div className="hero-actions">
            <span className="availability">{text.availability}</span>
            <a className="text-link" href={route(language, 'support')}>{text.nav.support} <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="plan-preview" aria-label={language === 'zh' ? '训练计划示意' : 'Training plan preview'}>
          <div className="preview-top">
            <span>{language === 'zh' ? '第 2 周' : 'Week 2'}</span>
            <span className="preview-pill">{language === 'zh' ? '自适应' : 'Adaptive'}</span>
          </div>
          <div className="preview-score">3 <small>/ 4</small></div>
          <p>{language === 'zh' ? '本周训练进度' : 'workouts this week'}</p>
          <div className="progress-track"><span /></div>
          <div className="next-session">
            <span className="session-day">{language === 'zh' ? '下一练' : 'NEXT'}</span>
            <strong>{language === 'zh' ? '全身力量 · 45 分钟' : 'Full Body Strength · 45 min'}</strong>
            <span>{language === 'zh' ? '根据本周反馈调整' : 'Adjusted from this week’s feedback'}</span>
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
  const text = supportCopy[language]
  return (
    <div className="content-page">
      <div className="page-heading">
        <p className="eyebrow">{copy[language].nav.support}</p>
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
          <a className="email-link" href="mailto:support@fitalong.com">support@fitalong.com</a>
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
  const text = termsCopy[language]
  return (
    <article className="legal-page">
      <header className="page-heading">
        <p className="eyebrow">{copy[language].nav.terms}</p>
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
        <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">F</span><span>{copy[language].brand}</span></div>
        <p>{copy[language].footer}</p>
        <p>© 2026 Zijie Yang</p>
      </footer>
    </div>
  )
}
