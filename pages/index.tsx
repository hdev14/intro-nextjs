import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilsStyles from '../styles/utils.module.css';
import Date from '../components/date';

export default function Home({ allPostsData }) {
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
      </section>

      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilsStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
