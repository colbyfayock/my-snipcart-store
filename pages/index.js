import Head from 'next/head'
import styles from '../styles/Home.module.css'

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Space Jelly Store
        </h1>

        <p className={styles.description}>
          <button className="snipcart-checkout">Click here to checkout</button>
          <br />
          # of Items: <span className="snipcart-items-count"></span>
          <br />
          Total Cost: <span className="snipcart-total-price"></span>
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            const { id, title, description, price, image } = product;
            return (
              <a key={id} href="#" className={styles.card}>
                <img src={image} alt={title} />
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p>${ price.toFixed(2) }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={id}
                    data-item-price={price}
                    data-item-url="/"
                    data-item-description={description}
                    data-item-image={image}
                    data-item-name={title}>
                      Add to Cart
                  </button>
                </p>
              </a>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
s
      <script async src="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key="ZWUzMjE1NTMtYWNkMi00Y2UyLWI1OTQtMjRlZTI1MzgwN2IxNjM3NDE1ODg5MTI1NjEwODc0"></div>
    </div>
  )
}
