# Gold Price Calculator

A fast, accurate, and SEO-optimized gold price calculator built with Next.js 14. Calculate the value of gold based on weight, purity, and current spot prices.

## Features

✨ **Fast & Accurate Calculations**
- Real-time gold price calculations
- Support for multiple weight units (grams, ounces, troy ounces, kg, tola, baht)
- All major gold karats (24K, 22K, 18K, 14K, 10K)

🌍 **Global Support**
- 8 major currencies (USD, EUR, GBP, KRW, JPY, INR, CNY, AED, SAR)
- 20 languages support (English, Korean, Japanese, Chinese, Spanish, French, German, Portuguese, Russian, Arabic, Hindi, Italian, Dutch, Polish, Turkish, Vietnamese, Thai, Swedish, Danish, Norwegian)

🔒 **Privacy First**
- All calculations performed locally in the browser
- No data sent to external servers
- localStorage persistence for user preferences

📱 **Mobile Responsive**
- Beautiful, responsive design
- Works seamlessly on phones, tablets, and desktops
- Touch-friendly interface

🎯 **SEO Optimized**
- Structured data (JSON-LD) for search engines
- Comprehensive FAQ schema
- Meta tags for social sharing
- AdSense-ready

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gold-price-calculator

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
gold-price-calculator/
├── src/
│   └── app/
│       ├── layout.tsx           # Root layout with metadata
│       ├── page.tsx             # Home page with content
│       ├── calculator.tsx       # Calculator component (client)
│       ├── globals.css          # Global styles
│       ├── sitemap.ts           # SEO sitemap
│       └── robots.ts            # robots.txt
├── public/
│   └── favicon.svg              # Gold bar icon
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## Usage

1. **Enter Weight**: Input the amount of gold you want to calculate
2. **Select Unit**: Choose from grams, ounces, troy ounces, kg, tola, or baht
3. **Choose Karat**: Select the purity level of your gold (24K, 22K, 18K, 14K, or 10K)
4. **Set Spot Price**: Enter the current gold spot price per troy ounce
5. **Choose Currency**: Select your preferred currency for results
6. **Calculate**: Click the calculate button to see the total value and price breakdowns

## Gold Karat Purities

- **24K**: 99.9% pure gold
- **22K**: 91.7% pure gold
- **18K**: 75.0% pure gold
- **14K**: 58.3% pure gold
- **10K**: 41.7% pure gold

## Supported Currencies

- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- KRW (Korean Won)
- JPY (Japanese Yen)
- INR (Indian Rupee)
- CNY (Chinese Yuan)
- AED (UAE Dirham)
- SAR (Saudi Riyal)

## Supported Languages

English, Korean, Japanese, Chinese (Simplified), Spanish, French, German, Portuguese, Russian, Arabic, Hindi, Italian, Dutch, Polish, Turkish, Vietnamese, Thai, Swedish, Danish, Norwegian

## Technology Stack

- **Next.js 14**: Modern React framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **postcss**: CSS processing

## Disclaimer

This calculator provides estimates for informational purposes only. Gold prices are approximate and fluctuate constantly. This is not financial advice. For actual buying, selling, or investment decisions, consult with a certified professional or local gold dealer. We are not responsible for any financial decisions made using this calculator.

## License

MIT License - feel free to use this for commercial or personal projects.

## Author

Gold Price Calculator Team
