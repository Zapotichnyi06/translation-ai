import {Metadata} from "next";

export const metadata: Metadata = {
  title: "AI translation",
  description:
      "Powerful AI translator with support for 100+ languages, instant translation and transcription",
  creator: "Zapotichnyi Roman",
  openGraph: {
    title: "AI translation",
    description:
        "Powerful AI translator with support for 100+ languages, instant translation and transcription",
  },
  keywords: [
    "AI translation",
    "AI translator",
    "Zapotichnyi Roman",
    "online translator",
    "machine translation",
    "neural translation",
    "instant translation",
    "real-time translation",
    "text translation",
    "voice translation",
    "speech translation",
    "language detection",
    "language recognition",
    "100+ languages",
    "automatic translation",
    "multilingual support",
    "translation app",
    "transcription AI",
    "text to speech",
    "speech to text",
    "audio translation",
    "AI language tool",
    "universal translator",
    "translate everything",
    "translation software",
    "voice to text AI",
    "global communication",
    "smart translator",
    "language AI",
    "deep learning translation",
    "natural language processing",
    "multilingual AI",
    "language technology",
    "AI-powered translator",
    "intelligent translator",
    "online AI translator",
    "translation service",
    "real-time multilingual translation"
  ],
  authors: [
    {
      name: "Zapotichnyi Roman",
      url: "https://github.com/Zapotichnyi06",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
