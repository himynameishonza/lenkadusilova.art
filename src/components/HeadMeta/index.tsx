
import Head from 'next/head'
import { useRouter } from 'next/router'

const defaultPageDescription = "Lenka Dusilová, devítinásobná držitelka výročních hudebních cen Anděl, není zvyklá stagnovat a opakovat se. Stal se z ní mimořádný úkaz české hudební scény, z pozice rockové a popové hvězdy putuje k osobnímu vyjádření, jež svobodně přijímá impulzy z nejrůznějších stylů a mimohudebních zážitků."

export type HeadMetaProps = {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
}

export const HeadMeta = ({ pageTitle, pageDescription, pageImage }: HeadMetaProps) => {
  const router = useRouter()

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>Lenka Dusilová {pageTitle && " - " + pageTitle}</title>
      <meta property="og:title" content={"Lenka Dusilová " + pageTitle && " - " + pageTitle} />
      <meta name="description" content={pageDescription ? pageDescription : defaultPageDescription} />
      <meta property="og:description" content={pageDescription ? pageDescription : defaultPageDescription} />
      <meta property="og:image" content={pageImage ? pageImage : '/static/images/og.jpg'} />
      <meta name="fb:app_id" content="47460271846" />
      <meta property="og:url" content={'https://lenkadusilova.art' + router.asPath} />
      <meta property="og:site_name" content="Lenka Dusilová" />
      <meta property="og:type" content="website" />
      <meta name="author" content="Lenka Dusilová" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta property="og:type" content="website" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#287a93" />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#222222" />
      <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
