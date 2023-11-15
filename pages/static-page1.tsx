import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Page(props: any) {
  const router = useRouter()
  return (
    <>
      <Head>
      <title>isr on, fallback: false, next 13.5.6</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.description}>
          <p>Static page</p>
          <p>Router is fallback: {router.isFallback}</p>
          <p>Router path: {router.asPath}</p>
          <p>Data: {JSON.stringify(props)}</p>
        </div>
      </main>
    </>
  )
}

function delay(time: any) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export async function getStaticProps() {
  await delay(5000);
  return {
    props: {
      generatedAt: new Date().toString(),
    },
    revalidate: 60
  }
}