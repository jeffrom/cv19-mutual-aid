import Head from 'next/head'
import Link from 'next/link'

import { Footer } from '../components/Footer'

import regions from './region/all.yml'
import generalResources from './general-resources.yml'

const SubRegionLinks = ({subregions}) => {
  return subregions.map(({name}) => {
    const hrefSuffix = name.toLowerCase().replace(/ +/g, '-')
    const href = `/region/${hrefSuffix}`
    return (
      <Link href={href}>
        <a>{name}</a>
      </Link>
    )
  })
}

const RegionLinks = () => {
  const states = Object.keys(regions)
  states.sort()

  return states.map((state) => (
    <>
      <h3>{state}</h3>
      <SubRegionLinks subregions={regions[state]} />
    </>
  ))
}

const Home = () => (
  <div className="container">
    <Head>
      <title>CV19 Mutual Aid Resource Directory</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        COVID-19 Mutual Aid
      </h1>

      <p className="description">
        Find resources in your area below.
      </p>

      <RegionLinks />

      <h2>general resources</h2>

      {generalResources.resources.map(({name, href}) => (
        <a href={href}>{name}</a>
      ))}
    </main>

    <Footer />

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
