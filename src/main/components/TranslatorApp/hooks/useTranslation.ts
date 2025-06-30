import { toast } from "@/src/main/hooks/use-toast"

interface UseTranslationProps {
    sourceText: string
    sourceLang: string
    targetLang: string
    setTranslatedText: (text: string) => void
    setTranscription: (text: string) => void
    setDetectedLang: (lang: string) => void
    setIsTranslating: (isTranslating: boolean) => void
}

export function useTranslation({
                                   sourceText,
                                   sourceLang,
                                   targetLang,
                                   setTranslatedText,
                                   setTranscription,
                                   setDetectedLang,
                                   setIsTranslating
                               }: UseTranslationProps) {
    const translateText = async () => {
        if (!sourceText.trim()) return

        setIsTranslating(true)
        try {
            const response = await fetch("/api/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: sourceText,
                    sourceLang: sourceLang === "auto" ? undefined : sourceLang,
                    targetLang,
                }),
            })

            if (!response.ok) {
               console.log("Translation failed")
            }

            const data = await response.json()
            setTranslatedText(data.translatedText)
            setTranscription(data.transcription || "")
            setDetectedLang(data.detectedLang || sourceLang)

            toast({
                title: "Translation Completed",
                description: "Text successfully translated",
            })
        } catch (error) {
            toast({
                title: "Translation Error",
                description: "Failed to perform translation. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsTranslating(false)
        }
    }

    return { translateText }
}
