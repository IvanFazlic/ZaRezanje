import Link from 'next/link';
import Head from 'next/head'
import Script from 'next/script';
import Izgled from '../../components/izgled';
export default function PrvaObjava() {
  return (
    <>
    <Izgled>
      <Head>
        <title>Prva objava</title>
      </Head>
      <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`Skripta je ucitana`)
          }
        />
        <h1>Prva objava</h1>
        <h2>
          <Link href="/">
            Nazad na pocetnu stranicu
          </Link>
        </h2>
      </Izgled>
    </>
  );
}