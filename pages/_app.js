import React from "react";
import "../styles/globals.scss";
import Head from "next/head";
import StoreContext from "../store";

function MyApp({ Component, pageProps }) {
  const [house, setHouse] = React.useState(null);

  React.useEffect(() => {
    const house = localStorage.getItem("house") || "default";
    setHouse(house);
  }, []);

  const onHouseChange = (house) => {
    setHouse(house);
    localStorage.setItem("house", house);
  };

  React.useEffect(() => {
    const $html = document.querySelector("html");
    $html.classList.remove(...$html.classList);
    house && $html.classList.add(house);
  }, [house]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Sorting Hat</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${process.env.BASE_URL}`} />
        <meta name="twitter:title" content="Sorting Hat" />
        <meta
          name="twitter:description"
          content="A Next.js app which magically determines your house in Hogwarts."
        />
        <meta
          name="twitter:image"
          content={`${process.env.BASE_URL}/images/sorting-hat.jpg`}
        />
        <meta name="twitter:creator" content="@coskuncakir_" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sorting Hat" />
        <meta
          property="og:description"
          content="A Next.js app which magically determines your house in Hogwarts."
        />
        <meta property="og:site_name" content="Sorting Hat" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta
          property="og:image"
          content={`${process.env.BASE_URL}/images/sorting-hat.jpg`}
        />
      </Head>
      <StoreContext.Provider value={{ house, onHouseChange }}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </>
  );
}

export default MyApp;
