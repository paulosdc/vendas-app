import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'componentes'


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Vendas APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  )
}

export default Home
