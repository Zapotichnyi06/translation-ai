import { languages } from "@/src/main/utils/languages"

interface UseLanguageUtilsProps {
    sourceLang: string
    targetLang: string
    sourceText: string
    translatedText: string
    setSourceLang: (lang: string) => void
    setTargetLang: (lang: string) => void
    setSourceText: (text: string) => void
    setTranslatedText: (text: string) => void
    setTranscription: (text: string) => void
    setDetectedLang: (lang: string) => void
}

export function useLanguageUtils({
                                     sourceLang,
                                     targetLang,
                                     sourceText,
                                     translatedText,
                                     setSourceLang,
                                     setTargetLang,
                                     setSourceText,
                                     setTranslatedText,
                                     setTranscription,
                                     setDetectedLang
                                 }: UseLanguageUtilsProps) {
    const swapLanguages = () => {
        if (sourceLang === "auto") return

        const tempLang = sourceLang
        setSourceLang(targetLang)
        setTargetLang(tempLang)

        const tempText = sourceText
        setSourceText(translatedText)
        setTranslatedText(tempText)

        setTranscription("")
        setDetectedLang("")
    }

    const getLanguageName = (code: string) => {
        const lang = languages.find((l) => l.code === code)
        return lang ? lang.name : code
    }

    return { swapLanguages, getLanguageName }
}
