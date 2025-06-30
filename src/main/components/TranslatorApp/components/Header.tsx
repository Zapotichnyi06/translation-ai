import React, {FC, memo} from "react";
import {Globe, Languages, Moon, Sun, Volume2, Zap} from "lucide-react";
import {Badge, Button} from "@/src/main/utils";
import {toast} from "@/src/main/hooks/use-toast";

interface HeaderProps {
    theme: string | undefined
    setTheme: (theme: string) => void
}

export const Header: FC<HeaderProps> = memo(({ theme, setTheme }: HeaderProps) => {
    return (
        <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Languages className="h-8 w-8 text-white"/>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI translation
                </h1>
                {theme && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                            const newTheme = theme === "dark" ? "light" : "dark"
                            setTheme(newTheme)
                            toast({
                                title: "Тема изменена",
                                description: `Переключено на ${newTheme === "dark" ? "темную" : "светлую"} тему`,
                            })
                        }}
                        className="ml-4"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
                    </Button>
                )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Powerful AI translator with support for 100+ languages, instant translation, and transcription
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                    <Globe className="h-3 w-3"/>
                    100+ languages
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                    <Zap className="h-3 w-3"/>
                    Instant
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                    <Volume2 className="h-3 w-3"/>
                    Transcription
                </Badge>
            </div>
        </div>
    )
});

Header.displayName = "Header";
