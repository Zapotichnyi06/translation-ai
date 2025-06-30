import React, {FC, memo} from "react";
import {toast} from "@/src/main/hooks/use-toast";
import {Copy, Volume2} from "lucide-react";
import {Badge, Button, Textarea} from "@/src/main/utils";

interface TranslationAreaProps {
    type: "source" | "target"
    text: string
    setText?: (text: string) => void
    lang: string
    isSourceArea: boolean
    detectedLang?: string
    getLanguageName: (code: string) => string
    onTranslate?: () => void
}

export const TranslationArea: FC<TranslationAreaProps> = memo(({type,
                                                                    text,
                                                                    setText,
                                                                    lang,
                                                                    isSourceArea,
                                                                    detectedLang,
                                                                    getLanguageName,
                                                                    onTranslate}: TranslationAreaProps) => {
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            toast({
                title: "Copied",
                description: "Text copied to clipboard",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to copy text",
                variant: "destructive",
            })
        }
    }

    const speakText = (text: string, lang: string) => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text)
            utterance.lang = lang
            speechSynthesis.speak(utterance)
        } else {
            toast({
                title: "Not Supported",
                description: "Your browser does not support speech synthesis",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                    {isSourceArea && type === "source" && lang === "auto"
                        ? "Original text"
                        : getLanguageName(lang)}
                </label>
                {detectedLang && isSourceArea && type === "source" && lang === "auto" && (
                    <Badge variant="outline" className="text-xs">
                        Detected: {getLanguageName(detectedLang)}
                    </Badge>
                )}
            </div>
            <div className="relative">
                <Textarea
                    placeholder={isSourceArea ? "Введите текст для перевода..." : "Перевод появится здесь..."}
                    value={text}
                    onChange={setText ? (e) => setText(e.target.value) : undefined}
                    className={`min-h-[200px] resize-none ${!isSourceArea ? "bg-gray-50 dark:bg-gray-700" : ""}`}
                    readOnly={!isSourceArea}
                    onKeyDown={isSourceArea && onTranslate ? (e) => {
                        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                            onTranslate()
                        }
                    } : undefined}
                />
                <div className="absolute bottom-2 right-2 flex gap-1">
                    {text && (
                        <>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => speakText(text, lang)}
                            >
                                <Volume2 className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => copyToClipboard(text)}>
                                <Copy className="h-4 w-4" />
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
});

TranslationArea.displayName = "TranslationArea";
