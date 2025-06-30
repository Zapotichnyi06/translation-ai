import React, {FC, memo} from "react";
import {Languages} from "lucide-react";
import { Button } from "@/src/main/utils";

interface TranslateButtonProps {
    onTranslate: () => void
    isTranslating: boolean
    hasText: boolean
}

export const TranslateButton: FC<TranslateButtonProps> = memo(({ onTranslate, isTranslating, hasText }: TranslateButtonProps) => {
    return (
        <Button
            onClick={onTranslate}
            disabled={!hasText || isTranslating}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            size="lg"
        >
            {isTranslating ? (
                <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"/>
                    Translating...
                </>
            ) : (
                <>
                    <Languages className="h-4 w-4 mr-2"/>
                    Translate (Ctrl+Enter)
                </>
            )}
        </Button>
    )
});

TranslateButton.displayName = "TranslateButton";
