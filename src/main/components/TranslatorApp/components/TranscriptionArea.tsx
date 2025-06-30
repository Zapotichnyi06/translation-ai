import React, {FC, memo} from "react";
import { toast } from "@/src/main/hooks/use-toast";
import {Copy} from "lucide-react";
import { Button } from "@/src/main/utils";

interface TranscriptionAreaProps {
    transcription: string
    sourceLang: string
    targetLang: string
    detectedLang: string
    getLanguageName: (code: string) => string
}

export const TranscriptionArea: FC<TranscriptionAreaProps> = memo(({
                                                                      transcription,
                                                                      sourceLang,
                                                                      targetLang,
                                                                      detectedLang,
                                                                      getLanguageName
                                                                  }: TranscriptionAreaProps) => {

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

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">
                Transcription of translation ({getLanguageName(targetLang)} →{" "}
                {sourceLang === "auto" ? getLanguageName(detectedLang) : getLanguageName(sourceLang)} by letters)
            </label>
            <div className="relative">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-mono">{transcription}</p>
                </div>
                <div className="absolute top-2 right-2">
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(transcription)}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
});

TranscriptionArea.displayName = "TranscriptionArea";
