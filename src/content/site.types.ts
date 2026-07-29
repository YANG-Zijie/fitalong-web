export type SitePage = 'home' | 'privacy' | 'support' | 'terms'

type CopyPairs = ReadonlyArray<readonly [title: string, body: string]>

export interface SiteContent {
  brand: string
  navigationLabel: string
  languageSwitchLabel: string
  nav: Record<SitePage, string>
  footer: string
  home: {
    eyebrow: string
    hero: string
    intro: string
    availability: string
    featuresTitle: string
    features: CopyPairs
    privacyLead: string
    privacyBody: string
    learnPrivacy: string
    preview: {
      label: string
      week: string
      adaptive: string
      progress: string
      next: string
      workout: string
      adjustment: string
    }
  }
  support: {
    title: string
    intro: string
    contactTitle: string
    contactBody: string
    response: string
    faqTitle: string
    faqs: CopyPairs
  }
  terms: {
    title: string
    updated: string
    sections: CopyPairs
  }
}
