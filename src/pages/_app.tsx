import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import ButtonWrapper from "@/components/ButtonWrapper";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ButtonWrapper/>
            <Component {...pageProps} />
        </>
    )
}
