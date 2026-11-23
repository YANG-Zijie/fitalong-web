import type { SiteContent } from '../site.types'

const siteEnglish = {
  brand: 'FitAlong',
  navigationLabel: 'Primary navigation',
  languageSwitchLabel: '中文',
  nav: {
    home: 'Home',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  footer: 'General fitness guidance for adults. Not medical advice.',
  home: {
    eyebrow: 'Adaptive training, built around you',
    hero: 'A training plan that keeps moving with you.',
    intro:
      'FitAlong turns your goals, schedule, equipment, and feedback into a clear four-week plan—with safe on-device adjustments and an optional AI coach.',
    appStoreLabel: 'Download on the App Store',
    appStoreUrl: 'https://apps.apple.com/us/app/fitalong/id6793890300',
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
    preview: {
      label: 'Training plan preview',
      week: 'Week 2',
      adaptive: 'Adaptive',
      progress: 'workouts this week',
      next: 'NEXT',
      workout: 'Full Body Strength · 45 min',
      adjustment: 'Adjusted from this week’s feedback',
    },
  },
  support: {
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
  terms: {
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
      ['8. Contact', 'Questions about these terms may be sent to yangzijie2026@gmail.com.'],
    ],
  },
} as const satisfies SiteContent

export default siteEnglish
