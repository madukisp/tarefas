import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/header";
import { SessionProvider } from "next-auth/react";
import { Session } from 'next-auth';


export default function App({ Component, pageProps }: AppProps & { pageProps: { session: Session } }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
