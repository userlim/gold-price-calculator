'use client';

import { useEffect, useState } from 'react';

type Language = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'fr' | 'de' | 'pt' | 'ru' | 'ar' | 'hi' | 'it' | 'nl' | 'pl' | 'tr' | 'vi' | 'th' | 'sv' | 'da' | 'no';

type Currency = 'USD' | 'EUR' | 'GBP' | 'KRW' | 'JPY' | 'INR' | 'CNY' | 'AED' | 'SAR';

interface Translations {
  [key: string]: { [K in Language]: string };
}

const translations: Translations = {
  weight: {
    en: 'Weight',
    ko: '무게',
    ja: '重さ',
    zh: '重量',
    es: 'Peso',
    fr: 'Poids',
    de: 'Gewicht',
    pt: 'Peso',
    ru: 'Вес',
    ar: 'الوزن',
    hi: 'वजन',
    it: 'Peso',
    nl: 'Gewicht',
    pl: 'Waga',
    tr: 'Ağırlık',
    vi: 'Cân nặng',
    th: 'น้ำหนัก',
    sv: 'Vikt',
    da: 'Vægt',
    no: 'Vekt',
  },
  unit: {
    en: 'Unit',
    ko: '단위',
    ja: '単位',
    zh: '单位',
    es: 'Unidad',
    fr: 'Unité',
    de: 'Einheit',
    pt: 'Unidade',
    ru: 'Единица',
    ar: 'وحدة',
    hi: 'इकाई',
    it: 'Unità',
    nl: 'Eenheid',
    pl: 'Jednostka',
    tr: 'Birim',
    vi: 'Đơn vị',
    th: 'หน่วย',
    sv: 'Enhet',
    da: 'Enhed',
    no: 'Enhet',
  },
  karat: {
    en: 'Karat',
    ko: '캐럿',
    ja: 'カラット',
    zh: '克拉',
    es: 'Quilate',
    fr: 'Carat',
    de: 'Karat',
    pt: 'Quilate',
    ru: 'Карат',
    ar: 'قيراط',
    hi: 'कैरेट',
    it: 'Carato',
    nl: 'Karaat',
    pl: 'Karat',
    tr: 'Karat',
    vi: 'Carat',
    th: 'กะรัต',
    sv: 'Karat',
    da: 'Karat',
    no: 'Karat',
  },
  spotPrice: {
    en: 'Gold Spot Price (per troy oz)',
    ko: '금 현물가격 (트로이 온스당)',
    ja: '金現物価格 (トロイオンス当たり)',
    zh: '黄金现货价格(每盎司)',
    es: 'Precio al contado del oro (por onza troy)',
    fr: 'Prix au comptant de l\'or (par once troy)',
    de: 'Goldspotpreis (pro Feinunze)',
    pt: 'Preço spot do ouro (por onça troy)',
    ru: 'Спотовая цена золота (за тройскую унцию)',
    ar: 'سعر الذهب الفوري (لكل أوقية)',
    hi: 'सोने की स्पॉट कीमत (प्रति ट्रॉय औंस)',
    it: 'Prezzo spot dell\'oro (per oncia troy)',
    nl: 'Goudspotprijs (per troy ounce)',
    pl: 'Cena spot złota (za uncję troy)',
    tr: 'Altın spot fiyatı (troy ons başına)',
    vi: 'Giá vàng ghi (mỗi ounce troy)',
    th: 'ราคาทองคำสปอต (ต่อ troy ounce)',
    sv: 'Guldspotpris (per troy uns)',
    da: 'Guldspotpris (pr. troy ounce)',
    no: 'Gullspotpris (per troy unse)',
  },
  currency: {
    en: 'Currency',
    ko: '통화',
    ja: '通貨',
    zh: '货币',
    es: 'Moneda',
    fr: 'Devise',
    de: 'Währung',
    pt: 'Moeda',
    ru: 'Валюта',
    ar: 'العملة',
    hi: 'मुद्रा',
    it: 'Valuta',
    nl: 'Valuta',
    pl: 'Waluta',
    tr: 'Para Birimi',
    vi: 'Tiền tệ',
    th: 'สกุลเงิน',
    sv: 'Valuta',
    da: 'Valuta',
    no: 'Valuta',
  },
  calculate: {
    en: 'Calculate',
    ko: '계산',
    ja: '計算',
    zh: '计算',
    es: 'Calcular',
    fr: 'Calculer',
    de: 'Berechnen',
    pt: 'Calcular',
    ru: 'Рассчитать',
    ar: 'احسب',
    hi: 'गणना करें',
    it: 'Calcola',
    nl: 'Berekenen',
    pl: 'Oblicz',
    tr: 'Hesapla',
    vi: 'Tính toán',
    th: 'คำนวณ',
    sv: 'Beräkna',
    da: 'Beregn',
    no: 'Beregn',
  },
  totalValue: {
    en: 'Total Gold Value',
    ko: '총 금 가치',
    ja: '総金値',
    zh: '总金值',
    es: 'Valor total del oro',
    fr: 'Valeur totale de l\'or',
    de: 'Gesamtwert des Goldes',
    pt: 'Valor total do ouro',
    ru: 'Общая стоимость золота',
    ar: 'إجمالي قيمة الذهب',
    hi: 'कुल सोने का मूल्य',
    it: 'Valore totale dell\'oro',
    nl: 'Totale goudwaarde',
    pl: 'Całkowita wartość złota',
    tr: 'Toplam altın değeri',
    vi: 'Tổng giá trị vàng',
    th: 'มูลค่ารวมของทองคำ',
    sv: 'Totalt guldvärde',
    da: 'Samlet guldværdi',
    no: 'Samlet gullverdi',
  },
  perGram: {
    en: 'Price per gram',
    ko: '그램당 가격',
    ja: 'グラムあたりの価格',
    zh: '每克价格',
    es: 'Precio por gramo',
    fr: 'Prix par gramme',
    de: 'Preis pro Gramm',
    pt: 'Preço por grama',
    ru: 'Цена за грамм',
    ar: 'السعر لكل جرام',
    hi: 'प्रति ग्राम मूल्य',
    it: 'Prezzo per grammo',
    nl: 'Prijs per gram',
    pl: 'Cena za gram',
    tr: 'Gram başına fiyat',
    vi: 'Giá mỗi gram',
    th: 'ราคาต่อกรัม',
    sv: 'Pris per gram',
    da: 'Pris pr. gram',
    no: 'Pris per gram',
  },
  perOunce: {
    en: 'Price per troy oz',
    ko: '트로이 온스당 가격',
    ja: 'トロイオンスあたりの価格',
    zh: '每盎司价格',
    es: 'Precio por onza troy',
    fr: 'Prix par once troy',
    de: 'Preis pro Feinunze',
    pt: 'Preço por onça troy',
    ru: 'Цена за тройскую унцию',
    ar: 'السعر لكل أوقية',
    hi: 'प्रति ट्रॉय औंस मूल्य',
    it: 'Prezzo per oncia troy',
    nl: 'Prijs per troy ounce',
    pl: 'Cena za uncję troy',
    tr: 'Troy ons başına fiyat',
    vi: 'Giá mỗi troy ounce',
    th: 'ราคาต่อ troy ounce',
    sv: 'Pris per troy uns',
    da: 'Pris pr. troy ounce',
    no: 'Pris per troy unse',
  },
  purityInfo: {
    en: 'Gold Purity Information',
    ko: '금 순도 정보',
    ja: '金の純度情報',
    zh: '黄金纯度信息',
    es: 'Información de pureza del oro',
    fr: 'Informations sur la pureté de l\'or',
    de: 'Goldreininformationen',
    pt: 'Informações de pureza do ouro',
    ru: 'Информация о чистоте золота',
    ar: 'معلومات نقاء الذهب',
    hi: 'सोने की शुद्धता की जानकारी',
    it: 'Informazioni sulla purezza dell\'oro',
    nl: 'Goudpuriteitsinformatie',
    pl: 'Informacja o czystości złota',
    tr: 'Altın saflığı bilgisi',
    vi: 'Thông tin độ tinh khiết vàng',
    th: 'ข้อมูลความบริสุทธิ์ของทองคำ',
    sv: 'Information om guldrenlighet',
    da: 'Oplysninger om guldrenhed',
    no: 'Informasjon om gullrenhet',
  },
  karatPurity: {
    en: 'Purity',
    ko: '순도',
    ja: '純度',
    zh: '纯度',
    es: 'Pureza',
    fr: 'Pureté',
    de: 'Reinheit',
    pt: 'Pureza',
    ru: 'Чистота',
    ar: 'النقاء',
    hi: 'शुद्धता',
    it: 'Purezza',
    nl: 'Zuiverheid',
    pl: 'Czystość',
    tr: 'Saflık',
    vi: 'Độ tinh khiết',
    th: 'ความบริสุทธิ์',
    sv: 'Renhet',
    da: 'Renhed',
    no: 'Renhet',
  },
  language: {
    en: 'Language',
    ko: '언어',
    ja: '言語',
    zh: '语言',
    es: 'Idioma',
    fr: 'Langue',
    de: 'Sprache',
    pt: 'Idioma',
    ru: 'Язык',
    ar: 'اللغة',
    hi: 'भाषा',
    it: 'Lingua',
    nl: 'Taal',
    pl: 'Język',
    tr: 'Dil',
    vi: 'Ngôn ngữ',
    th: 'ภาษา',
    sv: 'Språk',
    da: 'Sprog',
    no: 'Språk',
  },
};

const UNITS = {
  grams: { name: 'Grams (g)', toTroyOz: 0.03215 },
  ounces: { name: 'Ounces (oz)', toTroyOz: 0.911458 },
  troyOunces: { name: 'Troy Ounces (tr oz)', toTroyOz: 1 },
  kilograms: { name: 'Kilograms (kg)', toTroyOz: 32.15 },
  tola: { name: 'Tola', toTroyOz: 0.375 },
  baht: { name: 'Baht', toTroyOz: 0.06197 },
};

const KARATS = {
  24: { purity: 99.9, name: '24K (Pure Gold)' },
  22: { purity: 91.7, name: '22K (22 Carat)' },
  18: { purity: 75.0, name: '18K (18 Carat)' },
  14: { purity: 58.3, name: '14K (14 Carat)' },
  10: { purity: 41.7, name: '10K (10 Carat)' },
};

const CURRENCIES = {
  USD: { symbol: '$', name: 'USD (US Dollar)' },
  EUR: { symbol: '€', name: 'EUR (Euro)' },
  GBP: { symbol: '£', name: 'GBP (British Pound)' },
  KRW: { symbol: '₩', name: 'KRW (Korean Won)' },
  JPY: { symbol: '¥', name: 'JPY (Japanese Yen)' },
  INR: { symbol: '₹', name: 'INR (Indian Rupee)' },
  CNY: { symbol: '¥', name: 'CNY (Chinese Yuan)' },
  AED: { symbol: 'د.إ', name: 'AED (UAE Dirham)' },
  SAR: { symbol: 'ر.س', name: 'SAR (Saudi Riyal)' },
};

const LANGUAGE_NAMES: { [K in Language]: string } = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский',
  ar: 'العربية',
  hi: 'हिन्दी',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  sv: 'Svenska',
  da: 'Dansk',
  no: 'Norsk',
};

export default function Calculator() {
  const [weight, setWeight] = useState<string>('10');
  const [unit, setUnit] = useState<keyof typeof UNITS>('grams');
  const [karat, setKarat] = useState<24 | 22 | 18 | 14 | 10>(24);
  const [spotPrice, setSpotPrice] = useState<string>('2960');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [language, setLanguage] = useState<Language>('en');
  const [result, setResult] = useState<string | null>(null);
  const [pricePerGram, setPricePerGram] = useState<string | null>(null);
  const [pricePerOz, setPricePerOz] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('goldCalc');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setWeight(data.weight || '10');
        setUnit(data.unit || 'grams');
        setKarat(data.karat || 24);
        setSpotPrice(data.spotPrice || '2960');
        setCurrency(data.currency || 'USD');
        setLanguage(data.language || 'en');
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(
      'goldCalc',
      JSON.stringify({ weight, unit, karat, spotPrice, currency, language })
    );
  }, [weight, unit, karat, spotPrice, currency, language, mounted]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const s = parseFloat(spotPrice);

    if (!w || !s || w <= 0 || s <= 0) {
      setResult(null);
      setPricePerGram(null);
      setPricePerOz(null);
      return;
    }

    const troyOz = w * UNITS[unit].toTroyOz;
    const purityFactor = KARATS[karat].purity / 100;
    const totalValue = troyOz * s * purityFactor;

    const gramsTotal = w * (UNITS[unit].toTroyOz * 31.1035);
    const priceGram = (s * purityFactor) / 31.1035;
    const priceOz = s * purityFactor;

    const currencySymbol = CURRENCIES[currency].symbol;

    // Simple currency conversion approximations
    const conversionRates: { [K in Currency]: number } = {
      USD: 1,
      EUR: 0.92,
      GBP: 0.79,
      KRW: 1300,
      JPY: 154,
      INR: 83,
      CNY: 7.2,
      AED: 3.67,
      SAR: 3.75,
    };

    const rate = conversionRates[currency];
    const convertedTotal = (totalValue * rate).toFixed(2);
    const convertedGram = (priceGram * rate).toFixed(2);
    const convertedOz = (priceOz * rate).toFixed(2);

    setResult(`${currencySymbol}${convertedTotal}`);
    setPricePerGram(`${currencySymbol}${convertedGram}`);
    setPricePerOz(`${currencySymbol}${convertedOz}`);
  };

  if (!mounted) {
    return <div className="text-center py-12">{t('calculate')}</div>;
  }

  return (
    <div className="space-y-8">
      {/* Language Selector */}
      <div className="flex justify-end">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="tool-input max-w-xs"
        >
          {(Object.keys(LANGUAGE_NAMES) as Language[]).map((lang) => (
            <option key={lang} value={lang}>
              {LANGUAGE_NAMES[lang]}
            </option>
          ))}
        </select>
      </div>

      {/* Main Calculator Card */}
      <div className="card space-y-6">
        {/* Weight Input */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-text">
            {t('weight')} <span className="text-accent">*</span>
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="10"
            className="tool-input"
            min="0"
            step="0.1"
          />
        </div>

        {/* Unit Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-text">
            {t('unit')} <span className="text-accent">*</span>
          </label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as keyof typeof UNITS)}
            className="tool-input"
          >
            {(Object.entries(UNITS) as [keyof typeof UNITS, typeof UNITS[keyof typeof UNITS]][]).map(
              ([key, val]) => (
                <option key={key} value={key}>
                  {val.name}
                </option>
              )
            )}
          </select>
        </div>

        {/* Karat Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-text">
            {t('karat')} <span className="text-accent">*</span>
          </label>
          <select
            value={karat}
            onChange={(e) => setKarat(parseInt(e.target.value) as 24 | 22 | 18 | 14 | 10)}
            className="tool-input"
          >
            {(Object.entries(KARATS) as unknown as [string, { purity: number; name: string }][]).map(
              ([key, val]) => (
                <option key={key} value={key}>
                  {val.name} ({val.purity}%)
                </option>
              )
            )}
          </select>
        </div>

        {/* Spot Price Input */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-text">
            {t('spotPrice')} <span className="text-accent">*</span>
          </label>
          <input
            type="number"
            value={spotPrice}
            onChange={(e) => setSpotPrice(e.target.value)}
            placeholder="2960"
            className="tool-input"
            min="0"
            step="1"
          />
          <p className="text-xs text-text-muted">
            (Current approximate: $2,960 USD per troy ounce)
          </p>
        </div>

        {/* Currency Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-text">
            {t('currency')} <span className="text-accent">*</span>
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="tool-input"
          >
            {(Object.entries(CURRENCIES) as [Currency, typeof CURRENCIES[Currency]][]).map(
              ([key, val]) => (
                <option key={key} value={key}>
                  {val.name}
                </option>
              )
            )}
          </select>
        </div>

        {/* Calculate Button */}
        <button onClick={handleCalculate} className="btn-primary w-full text-lg">
          {t('calculate')}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="card space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-text-muted mb-1">{t('totalValue')}</p>
              <p className="tool-result">{result}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-muted mb-1">{t('perGram')}</p>
                <p className="text-2xl font-bold text-accent">{pricePerGram}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">{t('perOunce')}</p>
                <p className="text-2xl font-bold text-accent">{pricePerOz}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Purity Table */}
      <div className="card space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-text">{t('purityInfo')}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 font-semibold text-text">{t('karat')}</th>
                <th className="text-left py-2 font-semibold text-text">{t('karatPurity')}</th>
              </tr>
            </thead>
            <tbody>
              {(Object.entries(KARATS) as unknown as [string, { purity: number; name: string }][]).map(
                ([key, val]) => (
                  <tr
                    key={key}
                    className="border-b border-card-border hover:bg-white/[0.02] transition"
                  >
                    <td className="py-2 text-text">{val.name}</td>
                    <td className="py-2 text-accent font-semibold">{val.purity}%</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Section */}
      <div className="card space-y-4 bg-gradient-to-br from-accent-light/10 to-accent/5">
        <h2 className="text-lg font-semibold text-text">About Gold Calculation</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li>✓ Prices are approximate and for reference only</li>
          <li>✓ Always verify with current market rates</li>
          <li>✓ Pure gold (24K) is 99.9% pure</li>
          <li>✓ 22K gold contains about 91.7% pure gold</li>
          <li>✓ 18K gold contains about 75% pure gold</li>
          <li>✓ 1 Troy Ounce = 31.1035 grams</li>
          <li>✓ Results are estimates based on spot price</li>
        </ul>
      </div>
    </div>
  );
}
