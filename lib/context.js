import React, { createContext, useContext, useState } from "react";
const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Usestates
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("createdAt:desc");
  const [viewArtists, setViewArtists] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  // Increase product qty
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Decrease product qty
  const DecreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  // Add products to cart
  const onAdd = (product, quantity) => {
    // Increase total price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);
    // Increase total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);
    // Check if the product is already to the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  // Remove Product
  const onRemove = (product) => {
    // Decrease total price
    setTotalPrice((prevTotal) => prevTotal - product.price);
    // Decrease total quantity
    setTotalQuantities((prevTotal) => prevTotal - 1);
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  // Generate Youtube video from link
  const ytVideoGen = (video) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    //Match the url with the regex
    const match = video.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      console.log("err");
    }
  };

  const handleSearch = (e) => {
    setSearch(e);
    setViewArtists(false);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const convertDate = (date) => {
    const dateInitial = date.split("-").join("");
    const year = +dateInitial.substring(0, 4);
    const month = +dateInitial.substring(4, 6);
    const day = +dateInitial.substring(6, 8);

    const dateFinal = new Date(year, month - 1, day).toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return dateFinal;
  };

  return (
    <ShopContext.Provider
      value={{
        //UseStates
        showCart,
        setShowCart,
        cartItems,
        qty,
        setQty,
        totalQuantities,
        totalPrice,
        showVideo,
        setShowVideo,
        currentVideo,
        setCurrentVideo,
        search,
        setSearch,
        sort,
        setSort,
        viewArtists,
        setViewArtists,
        imageHover,
        setImageHover,
        // Functions
        increaseQty,
        DecreaseQty,
        onAdd,
        onRemove,
        ytVideoGen,
        handleSearch,
        handleSort,
        convertDate,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
