import React, {FC, memo, useCallback, useEffect, useState} from "react";
import {Languages} from "lucide-react";
import {
    Header,
    LanguageSelector,
    TranscriptionArea,
    TranslateButton,
    TranslationArea,
    useLanguageUtils,
    useTranslation
} from ".";
import {Card, CardContent, CardHeader, CardTitle} from "@/src/main/utils";
import {useAppDispatch, useAppSelector} from "@/src/reducers/reducers";
import {selectTheme, setTheme} from "@/src/reducers/app.reducer";
import { Analytics } from "@vercel/analytics/next"

export const TranslatorApp: FC = memo(() => {
    const [sourceText, setSourceText] = useState("")
    const [translatedText, setTranslatedText] = useState("")
    const [transcription, setTranscription] = useState("")
    const [sourceLang, setSourceLang] = useState("auto")
    const [targetLang, setTargetLang] = useState("en")
    const [isTranslating, setIsTranslating] = useState(false)
    const [detectedLang, setDetectedLang] = useState<string>("")
    const {translateText} = useTranslation({
        sourceText,
        sourceLang,
        targetLang,
        setTranslatedText,
        setTranscription,
        setDetectedLang,
        setIsTranslating
    })
    const {swapLanguages, getLanguageName} = useLanguageUtils({
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
    })
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "light";
        dispatch(setTheme(savedTheme));
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, [dispatch]);

    const toggleDarkMode = useCallback(() => {
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch(setTheme(newTheme));
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    }, [theme, dispatch]);

    return (
        <>
            <Analytics />

            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors">
                <div className="container mx-auto px-4 py-8">
                    <Header theme={theme} setTheme={toggleDarkMode}/>

                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Languages className="h-5 w-5"/>
                                    Translator
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <LanguageSelector
                                    sourceLang={sourceLang}
                                    targetLang={targetLang}
                                    setSourceLang={setSourceLang}
                                    setTargetLang={setTargetLang}
                                    swapLanguages={swapLanguages}
                                />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <TranslationArea
                                        type="source"
                                        text={sourceText}
                                        setText={setSourceText}
                                        lang={sourceLang}
                                        isSourceArea={true}
                                        detectedLang={detectedLang}
                                        getLanguageName={getLanguageName}
                                        onTranslate={translateText}
                                    />

                                    <TranslationArea
                                        type="target"
                                        text={translatedText}
                                        lang={targetLang}
                                        isSourceArea={false}
                                        getLanguageName={getLanguageName}
                                    />
                                </div>

                                {transcription && (
                                    <TranscriptionArea
                                        transcription={transcription}
                                        sourceLang={sourceLang}
                                        targetLang={targetLang}
                                        detectedLang={detectedLang}
                                        getLanguageName={getLanguageName}
                                    />
                                )}

                                <TranslateButton
                                    onTranslate={translateText}
                                    isTranslating={isTranslating}
                                    hasText={!!sourceText.trim()}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
});

TranslatorApp.displayName = "TranslatorApp";
