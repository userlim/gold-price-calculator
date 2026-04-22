import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Gold Price Calculator (Free, 2026) – Calculate Gold Value by Weight',
  description: 'Calculate gold value by weight instantly. Free 2026 gold price calculator for 24K, 22K, 18K, 14K gold in grams, ounces, and troy ounces.',
  keywords: 'gold price today, gold price calculator, gold price per gram, gold value calculator, gold karat calculator, 14k gold price, 18k gold price, gold scrap calculator, gold melt value, how much is my gold worth, 24k gold price per ounce, gold investment calculator, gold price forecast 2026, gold spot price live, gold price chart',
  metadataBase: new URL('https://gold-price-today-calculator.vercel.app'),
  openGraph: {
    title: 'Gold Price Calculator (Free, 2026) – Calculate Gold Value by Weight',
    description: 'Calculate gold value by weight instantly. Free 2026 gold price calculator for 24K, 22K, 18K, 14K gold in grams, ounces, and troy ounces.',
    url: 'https://gold-price-today-calculator.vercel.app',
    siteName: 'Gold Price Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Price Calculator',
    description: 'Calculate gold value by weight instantly. Free 2026 gold price calculator for 24K, 22K, 18K, 14K gold in grams, ounces, and troy ounces.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://gold-price-today-calculator.vercel.app',
    languages: {
      'en': 'https://gold-price-today-calculator.vercel.app',
      'x-default': 'https://gold-price-today-calculator.vercel.app',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <meta name="theme-color" content="#7c5cbf" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gold-price-today-calculator.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Gold Price Calculator", "item": "https://gold-price-today-calculator.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Gold Price Calculator", "url": "https://gold-price-today-calculator.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://gold-price-today-calculator.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://gold-price-today-calculator.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body className="bg-bg text-text">
        <header className="border-b border-card-border bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-accent">
              ✨ Gold Price Calculator
            </h1>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>

        <footer className="border-t border-card-border bg-white mt-12 sm:mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-text mb-2">About</h3>
                <p className="text-sm text-text-muted">
                  Calculate gold value instantly with our free online calculator. Accurate
                  conversions for all major units and gold karats.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text mb-2">Disclaimer</h3>
                <p className="text-sm text-text-muted">
                  Prices are approximate and for reference only. Always verify with current
                  market rates before trading or investing.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[#4E5968] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://bitcoin-profit-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Crypto Profit Calculator</a>
                <a href="https://currency-exchange-calculator-wheat.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Currency Exchange Converter</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Inflation Rate Calculator</a>
                <a href="https://fuel-cost-calculator-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Fuel Cost Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="border-t border-card-border pt-6 text-center">
              <p className="text-sm text-text-muted">
                © 2026 Gold Price Calculator. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
