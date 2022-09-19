import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import { StateContext } from "../lib/context";
import SortArea from "../components/SortArea";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps, router }) {
  const router2 = useRouter();
  return (
    <StateContext>
      <Provider value={client}>
        <Toaster />
        <Nav />
        {router2.asPath == "/" && <SortArea />}
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.75 }}
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
        <Footer />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
