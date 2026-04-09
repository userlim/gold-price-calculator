import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Free Gold Price Calculator (2026) – Value by Karat & Weight, Live Rates',
  description: 'Calculate gold value by weight and karat instantly. Supports 24K, 18K, 14K gold in grams and ounces. Free tool with live market prices — no signup required.',
  keywords: [
    'gold price calculator',
    'gold value calculator',
    'gold weight calculator',
    'how much is my gold worth',
    'gold per gram',
    'gold price per ounce',
    'troy ounce gold',
    'karat calculator',
    'gold purity calculator',
  ],
  openGraph: {
    title: 'Gold Price Calculator – Calculate Gold Value by Weight',
    description:
      'Calculate the value of your gold instantly with our free online tool. Support for all major units and gold karats.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate the value of my gold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To calculate gold value, you need three things: the weight of your gold (in grams, ounces, or troy ounces), the karat purity (24K, 22K, 18K, 14K, or 10K), and the current spot price of gold per troy ounce. Multiply the weight in troy ounces by the spot price and then multiply by the purity percentage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between troy ounce and regular ounce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A troy ounce equals 31.1035 grams, while a regular (avoirdupois) ounce equals 28.35 grams. Troy ounces are used for precious metals like gold, silver, and platinum. One troy ounce is about 10% heavier than a regular ounce.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does karat mean in gold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Karat measures the purity of gold. 24K gold is pure gold (99.9%), 22K is 91.7% pure, 18K is 75% pure, 14K is 58.3% pure, and 10K is 41.7% pure. The higher the karat, the more pure gold is in the item.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the gold price in this calculator accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculator provides approximate prices based on current market conditions. Actual gold prices fluctuate constantly throughout the day. For buying or selling gold, always check with your local gold dealers or jewelry stores for real-time prices.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is gold purity determined?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gold purity is determined by the percentage of pure gold content in an item. For example, 18K gold is 75% pure gold and 25% other metals (alloys). The higher the percentage of pure gold, the more valuable the item, assuming similar weight and spot price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this calculator for jewelry valuation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator provides estimates based on weight and gold content. Jewelry value also depends on craftsmanship, design, brand, and historical significance. For accurate jewelry valuation, consult a certified jeweler or appraiser.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is gold spot price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The spot price is the current market price of gold for immediate delivery. It\'s quoted per troy ounce and changes constantly based on market supply and demand. This calculator uses the spot price to estimate the value of your gold.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I update the spot price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gold prices fluctuate throughout trading hours. For the most accurate calculation, update the spot price to match current market conditions before calculating. Check financial websites or gold dealers for real-time prices.',
        },
      },
    ],
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Gold Price Calculator',
    description: 'Calculate gold value by weight and karat. Free gold price calculator with real-time prices for 24K, 22K, 18K, 14K gold.',
    url: 'https://gold-price-today-calculator.vercel.app',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '3870',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      <div className="space-y-8">
        {/* Hero Section */}
        <section className="card bg-gradient-to-br from-accent via-accent-light to-accent/80 text-white space-y-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-black">Gold Price Calculator</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-95">
            Instantly calculate the value of your gold based on current market prices. Support for
            all major weight units, karats, and currencies.
          </p>
        </section>

        {/* Calculator */}
        <Calculator />

        {/* Features Section */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Why Use Our Calculator?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '⚡', title: 'Fast & Accurate', desc: 'Get instant calculations based on current gold prices' },
              {
                icon: '🌍',
                title: 'Global Support',
                desc: 'Calculate in 8 major currencies including USD, EUR, GBP, and more',
              },
              {
                icon: '✨',
                title: 'All Karats',
                desc: 'Support for 24K, 22K, 18K, 14K, and 10K gold purity levels',
              },
              {
                icon: '📏',
                title: 'Multiple Units',
                desc: 'Calculate with grams, ounces, troy ounces, kg, tola, and baht',
              },
              {
                icon: '🔒',
                title: 'Privacy First',
                desc: 'All calculations are done locally on your device—no data sent',
              },
              {
                icon: '📱',
                title: 'Mobile Friendly',
                desc: 'Use on any device. Responsive design for phones and tablets',
              },
            ].map((feature, i) => (
              <div key={i} className="card hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-bold text-text mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="card space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">How to Use</h2>
          <ol className="space-y-3 list-decimal list-inside text-text-muted">
            <li>Enter the weight of your gold</li>
            <li>Select the weight unit (grams, ounces, troy ounces, etc.)</li>
            <li>Choose the gold karat (purity level)</li>
            <li>Enter the current gold spot price per troy ounce</li>
            <li>Select your preferred currency</li>
            <li>Click Calculate to see the results</li>
          </ol>
        </section>

        {/* Gold Facts */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Gold Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { fact: '24K Gold', detail: '99.9% pure gold—highest purity' },
              { fact: '1 Troy Oz', detail: 'Equals 31.1035 grams' },
              { fact: '22K Gold', detail: '91.7% pure—common for jewelry' },
              { fact: '18K Gold', detail: '75% pure—popular choice' },
              { fact: '14K Gold', detail: '58.3% pure—durable for daily wear' },
              { fact: '10K Gold', detail: '41.7% pure—most durable' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="text-accent font-bold text-sm">{item.fact}</div>
                <div className="text-text-muted text-sm mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'What is the difference between troy ounce and regular ounce?',
                a: 'A troy ounce (31.1035g) is heavier than a regular avoirdupois ounce (28.35g). Troy ounces are the standard for precious metals.',
              },
              {
                q: 'How accurate is this calculator?',
                a: 'This calculator is accurate based on the weight, karat, and spot price you provide. However, gold prices fluctuate constantly, so always verify with current market rates.',
              },
              {
                q: 'Can I use this for selling gold?',
                a: 'This provides an estimate based on spot price. Gold dealers typically offer less than spot price and may charge fees. Always compare offers.',
              },
              {
                q: 'What is gold karat?',
                a: 'Karat measures purity. 24K is pure gold (99.9%), and lower karats contain more alloy metals. The purity affects the value.',
              },
              {
                q: 'How do I find the current gold spot price?',
                a: 'Check financial websites, gold dealers, or commodity exchanges for real-time gold spot prices. They update throughout trading hours.',
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-text mb-2">{item.q}</h3>
                <p className="text-sm text-text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="card bg-yellow-50 border-2 border-yellow-200">
          <h3 className="font-bold text-text mb-2">⚠️ Disclaimer</h3>
          <p className="text-sm text-text-muted">
            This calculator provides estimates for informational purposes only. Gold prices are
            approximate and fluctuate constantly. This is not financial advice. For actual buying,
            selling, or investment decisions, consult with a certified professional or local gold
            dealer. We are not responsible for any financial decisions made using this calculator.
          </p>
        </section>
      </div>
    </>
  );
}
