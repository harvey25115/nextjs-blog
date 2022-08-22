import "../styles/global.css"; // You cannot import global CSS anywhere else other than _app.js

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
