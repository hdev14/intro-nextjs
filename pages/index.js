import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <p>
          Hello my nickname is Hdev, but my real name is <b>Hermerson.</b> That's my first website with Next.js! And you can find me on my{' '}
          <a href="https://github.com/hdev14">Github</a> 
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  )
}
