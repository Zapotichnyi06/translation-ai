import React, {FC} from 'react';
import Link from "next/link";
import "app/globals.css"
import {HomePanel} from "@/src/routes";

const Custom404: FC = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-gray-800 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
                <h2 className="text-4xl font-bold mt-4 mb-8">Page not found</h2>
                <Link
                    href={HomePanel.Home}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Return to the main page
                </Link>
            </div>
        </div>
    )
};

export default Custom404;
