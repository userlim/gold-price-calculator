import type { Metadata } from 'next';
import './globals.css';

const metadataBase = new URL('https://gold-price-calculator.vercel.app');

export const metadata: Metadata = {
  metadataBase,
  title: 'Gold Price Calculator – Calculate Gold Value by Weight',
  description: 'Free online gold price calculator. Calculate the value of gold by weight in grams, ounces, and troy ounces. Supports 24K, 22K, 18K, 14K, and 10K gold.',
  keywords: [
    'gold price calculator',
    'gold value calculator',
    'gold weight calculator',
    'gold per gram',
    'gold price per ounce',
    'troy ounce gold',
    'karat calculator',
  ],
  authors: [{ name: 'Gold Price Calculator' }],
  creator: 'Gold Price Calculator',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: metadataBase,
    siteName: 'Gold Price Calculator',
    title: 'Gold Price Calculator – Calculate Gold Value by Weight',
    description:
      'Free online gold price calculator. Calculate the value of gold by weight in grams, ounces, and troy ounces.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gold Price Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Price Calculator',
    description: 'Calculate gold value by weight instantly',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: metadataBase.toString(),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
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
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
        <meta name="theme-color" content="#7c5cbf" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH');
            `,
          }}
        />
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
