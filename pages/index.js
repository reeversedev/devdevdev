import Layout from "../components/layout";
import Category from "./category/[slug]";
import { CartContext } from "../utils/CartContext";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState(false);
  return (
    <CartContext.Provider value={true}>
      <Layout>
        <Category />
      </Layout>
    </CartContext.Provider>
  );
};

export default Home;
