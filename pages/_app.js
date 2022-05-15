import '../styles/globals.css'
import Layout from '../components/en/layout'
import Head from 'next/head'
import SimpleReactLightbox from 'simple-react-lightbox'


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Saliba Douaihy</title>
            </Head>
            
            <SimpleReactLightbox>
            <Component {...pageProps}/>
            </SimpleReactLightbox>

        </>
    )
}

export default MyApp
