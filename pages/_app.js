import '../styles/globals.css'
import {Provider} from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
      // e do so, to make the access to all the logins
      <Provider>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
