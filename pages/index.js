import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import {getSession} from "next-auth/client";
import Login from "../components/Login";

export default function Home({ session }) {
  // console.log(session)
  if(!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Rookas Facebook App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.facebook.com/images/fb_icon_325x325.png" />
      </Head>

        <Header />
        <main>
        {/*    Sidebar */}
        {/*    Feed*/}
        {/*    Widgets*/}
        </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  // server side rendering shit goes in here
  const session = await getSession(context);

  // passing back the detials about the login
  return {
    props: {
      session: session,
    }
  }
}