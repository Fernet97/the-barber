import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

import {motion} from "framer-motion";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
      <Component {...pageProps} />
  );
}
