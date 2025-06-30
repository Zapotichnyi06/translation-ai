import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/reducers/reducers';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';
import ErrorBoundary from '@/app/ErrorBoundary';
import { App } from '@/app/App';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>AI translation</title>
                <meta name="description"
                      content="Powerful AI translator with support for 100+ languages, instant translation and transcription"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo.png" sizes="any"/>
            </Head>
            <ErrorBoundary>
                <Provider store={store}>
                    <App Component={Component} pageProps={pageProps} />
                </Provider>
            </ErrorBoundary>
        </>
    );
}

export default MyApp;
