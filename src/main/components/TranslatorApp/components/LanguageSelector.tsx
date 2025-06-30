import React, {FC, memo} from "react";
import {ArrowRightLeft} from "lucide-react";
import { languages } from "@/src/main/utils/languages"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Button } from "@/src/main/utils";

interface LanguageSelectorProps {
    sourceLang: string
    targetLang: string
    setSourceLang: (lang: string) => void
    setTargetLang: (lang: string) => void
    swapLanguages: () => void
}

export const LanguageSelector: FC<LanguageSelectorProps> = memo(({sourceLang,
                                                                     targetLang,
                                                                     setSourceLang,
                                                                     setTargetLang,
                                                                     swapLanguages}: LanguageSelectorProps) => {
    return (
        <div className="flex items-center gap-2">
            <Select value={sourceLang} onValueChange={setSourceLang}>
                <SelectTrigger className="flex-1">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                            {lang.name} {lang.nativeName !== lang.name && `(${lang.nativeName})`}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Button
                variant="outline"
                size="icon"
                onClick={swapLanguages}
                disabled={sourceLang === "auto"}
                className="shrink-0 bg-transparent"
            >
                <ArrowRightLeft className="h-4 w-4"/>
            </Button>

            <Select value={targetLang} onValueChange={setTargetLang}>
                <SelectTrigger className="flex-1">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    {languages
                        .filter((l) => l.code !== "auto")
                        .map((lang) => (
                            <SelectItem key={lang.code} value={lang.code}>
                                {lang.name} {lang.nativeName !== lang.name && `(${lang.nativeName})`}
                            </SelectItem>
                        ))}
                </SelectContent>
            </Select>
        </div>
    )
});

LanguageSelector.displayName = "LanguageSelector";
