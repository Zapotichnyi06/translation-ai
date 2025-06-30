import { createGroq } from "@ai-sdk/groq"
import { generateText } from "ai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { text, sourceLang, targetLang } = await req.json()

    if (!text || !targetLang) {
      return NextResponse.json({ error: "Text and target language are required" }, { status: 400 })
    }

    const groq = createGroq({
      apiKey: process.env.GROQ_API_KEY!,
    })

    let detectedLang = sourceLang
    if (!sourceLang) {
      const detectionPrompt = `Detect the language of the following text and respond with only the ISO 639-1 language code (e.g., "en", "ru", "es", etc.):

"${text}"`

      const detectionResult = await generateText({
        model: groq("llama-3.3-70b-versatile"),
        prompt: detectionPrompt,
        maxTokens: 10,
      })

      detectedLang = detectionResult.text.trim().toLowerCase()
    }


    const translationPrompt = `Translate the following text from ${getLanguageName(detectedLang)} to ${getLanguageName(targetLang)}. 
Provide only the translation without any additional text, explanations, or formatting:

"${text}"`

    const translationResult = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: translationPrompt,
      maxTokens: 1000,
    })

    const transcriptionPrompt = `Create a phonetic transcription of the following ${getLanguageName(targetLang)} text using ${getLanguageName(detectedLang)} letters and pronunciation patterns. Show how a ${getLanguageName(detectedLang)} speaker would read/pronounce the ${getLanguageName(targetLang)} text. Provide only the transcription without explanations:

"${translationResult.text.trim()}"`

    const transcriptionResult = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: transcriptionPrompt,
      maxTokens: 500,
    })

    return NextResponse.json({
      translatedText: translationResult.text.trim(),
      transcription: transcriptionResult.text.trim(),
      detectedLang: detectedLang,
    })
  } catch (error) {
    console.error("Translation error:", error)
    return NextResponse.json({ error: "Translation failed" }, { status: 500 })
  }
}

function getLanguageName(code: string): string {
  const languageNames: Record<string, string> = {
    en: "English",
    ru: "Russian",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    pt: "Portuguese",
    zh: "Chinese",
    ja: "Japanese",
    ko: "Korean",
    ar: "Arabic",
    hi: "Hindi",
    th: "Thai",
    vi: "Vietnamese",
    tr: "Turkish",
    pl: "Polish",
    nl: "Dutch",
    sv: "Swedish",
    da: "Danish",
    no: "Norwegian",
    fi: "Finnish",
    cs: "Czech",
    sk: "Slovak",
    hu: "Hungarian",
    ro: "Romanian",
    bg: "Bulgarian",
    hr: "Croatian",
    sr: "Serbian",
    sl: "Slovenian",
    et: "Estonian",
    lv: "Latvian",
    lt: "Lithuanian",
    uk: "Ukrainian",
    be: "Belarusian",
    ka: "Georgian",
    am: "Amharic",
    he: "Hebrew",
    fa: "Persian",
    ur: "Urdu",
    bn: "Bengali",
    ta: "Tamil",
    te: "Telugu",
    ml: "Malayalam",
    kn: "Kannada",
    gu: "Gujarati",
    pa: "Punjabi",
    mr: "Marathi",
    ne: "Nepali",
    si: "Sinhala",
    my: "Myanmar",
    km: "Khmer",
    lo: "Lao",
    az: "Azerbaijani",
    kk: "Kazakh",
    ky: "Kyrgyz",
    uz: "Uzbek",
    tg: "Tajik",
    mn: "Mongolian",
    id: "Indonesian",
    ms: "Malay",
    tl: "Filipino",
    sw: "Swahili",
    zu: "Zulu",
    af: "Afrikaans",
    sq: "Albanian",
    eu: "Basque",
    ca: "Catalan",
    gl: "Galician",
    is: "Icelandic",
    ga: "Irish",
    mt: "Maltese",
    cy: "Welsh",
  }

  return languageNames[code] || code
}
