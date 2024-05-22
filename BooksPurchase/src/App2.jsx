import React, { useState } from "react";
import Navbar from "./components/01_Navbar";
import Navbar2 from "./components/02_Navbar2";
import Sidebar from "./components/03_Sidebar";
import BooksCard from "./components/04_BookCards";
import Book_1 from "./images/Books_1.png";
import Book_2 from "./images/Books_2.png";
import Book_3 from "./images/Books_3.png";
import Book_4 from "./images/Books_4.png";
import Book_5 from "./images/Books_5.png";
import Book_6 from "./images/Books_6.png";
import Book_7 from "./images/Books_7.png";
import Book_8 from "./images/Books_8.png";
import Book_9 from "./images/Books_9.png";
import Book_10 from "./images/Books_10.png";
import Book_11 from "./images/Books_11.png";
import Book_12 from "./images/Books_12.png";
import CartInterface from "./components/05_CartInterface"; // Import CartInterface component

function App() {
  const booksData = [
    {
      imgBook: Book_1,
      titleBook: "Kinsella",
      authorBook: "Richardson",
      binding: "Softback",
      Language: "French",
      publication: "Rich Publications",
      bookCondition: "Average",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 1234567,
      initPrice: "450",
      finPrice: "360",
      discount: "20",
    },
    
    {
      imgBook: Book_2,
      titleBook: "Soul",
      authorBook: "Richardson",
      binding: "Paperback",
      Language: "Spanish",
      publication: "Rich Publications",
      bookCondition: "Brand New",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 2345678,
      initPrice: "400",
      finPrice: "320",
      discount: "20",
    },
    {
      imgBook: Book_3,
      titleBook: "Memory",
      authorBook: "Anthony",
      binding: "Softback",
      Language: "German",
      publication: "Ant Publications",
      bookCondition: "Very Good",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 3456789,
      initPrice: "450",
      finPrice: "360",
      discount: "20",
    },
    {
      imgBook: Book_4,
      titleBook: "Pencil",
      authorBook: "Anthony",
      binding: "Paperback",
      Language: "Russian",
      publication: "Ant Publications",
      bookCondition: "Good",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 4567890,
      initPrice: "400",
      finPrice: "320",
      discount: "20",
    },
    {
      imgBook: Book_5,
      titleBook: "Sword",
      authorBook: "Tommy",
      binding: "Softback",
      Language: "Hindi",
      publication: "Tom Publications",
      bookCondition: "Below Average",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 5678901,
      initPrice: "450",
      finPrice: "360",
      discount: "20",
    },
    {
      imgBook: Book_6,
      titleBook: "Garden",
      authorBook: "Tommy",
      binding: "Paperback",
      Language: "English",
      publication: "Tom Publications",
      bookCondition: "Brand New",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 6789012,
      initPrice: "400",
      finPrice: "320",
      discount: "20",
    },
    {
      imgBook: Book_7,
      titleBook: "Roman",
      authorBook: "Lanny",
      binding: "Softback",
      Language: "French",
      publication: "Lan Publications",
      bookCondition: "Average",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 7890123,
      initPrice: "450",
      finPrice: "360",
      discount: "20",
    },
    {
      imgBook: Book_8,
      titleBook: "Tampler",
      authorBook: "Lanny",
      binding: "Paperback",
      Language: "Spanish",
      publication: "Lan Publications",
      bookCondition: "Very Good",
      bookPrice: "Under 99",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 8901234,
      initPrice: "90",
      finPrice: "72",
      discount: "20",
    },
    {
      imgBook: Book_9,
      titleBook: "Assarwal",
      authorBook: "Micheal",
      binding: "Softback",
      Language: "German",
      publication: "Mica Publications",
      bookCondition: "Good",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 9012345,
      initPrice: "450",
      finPrice: "360",
      discount: "20",
    },
    {
      imgBook: Book_10,
      titleBook: "The Time",
      authorBook: "Micheal",
      binding: "Paperback",
      Language: "Russian",
      publication: "Mica Publications",
      bookCondition: "Below Average",
      bookPrice: "Under 99",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 9123456,
      initPrice: "90",
      finPrice: "72",
      discount: "20",
    },
    {
      imgBook: Book_11,
      titleBook: "Heist",
      authorBook: "Hercules",
      binding: "Softback",
      Language: "Hindi",
      publication: "Hercules Publications",
      bookCondition: "Brand New",
      bookPrice: "Under 499",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 9876543,
      initPrice: "450",
      finPrice: "360",
      discount: "20",
    },
    {
      imgBook: Book_12,
      titleBook: "Psycho",
      authorBook: "Hercules",
      binding: "Paperback",
      Language: "English",
      publication: "Hercules Publications",
      bookCondition: "Average",
      bookPrice: "Under 99",
      ageGroup: "3-5 years",
      wishlist: false,
      isbn: 8765432,
      initPrice: "90",
      finPrice: "72",
      discount: "20",
    }
  ];

  const [booksKaData] = useState(booksData);  
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedBindings, setSelectedBindings] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedPublications, setSelectedPublications] = useState([]);
  const [selectedBookConditions, setSelectedBookConditions] = useState([]);
  const [selectedBookPrices, setSelectedBookPrices] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0); // -->Wishlist Count
  const [Quantity, setCartValue] = useState(0);  // --> Cart Quantity
  const [totalPrice, setTotalPrice] = useState(0);  // -->Cart Total Price
  const [cartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);  // State to manage cart visibility

  const incrementCart = (price) => {
    setCartValue((prevValue) => prevValue + 1);
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const decrementCart = (price) => {
    if (Quantity > 0) {
      setCartValue((prevValue) => prevValue - 1);
      setTotalPrice((prevPrice) => prevPrice - price);
    }
  };
  
  // const addToCart = (book) => {
  //   setCartItems((prevCartItems) => [...prevCartItems, book]);
  //   if(!isNaN(parseInt(book.finPrice))){
  //     setTotalPrice((prevPrice) => prevPrice + parseInt(book.finPrice));
  //   }
  // };

  const filterBooks = (books) => {
    return books.filter((book) => {  
      const authorMatch = selectedAuthors.length === 0 || selectedAuthors.includes(book.authorBook);
      const bindingMatch = selectedBindings.length === 0 || selectedBindings.includes(book.binding);
      const languageMatch = selectedLanguages.length === 0 || selectedLanguages.includes(book.Language);
      const ageGroupMatch = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(book.ageGroup.toString());
      const publicationMatch = selectedPublications.length === 0 || selectedPublications.includes(book.publication);
      const bookConditionMatch = selectedBookConditions.length === 0 || selectedBookConditions.includes(book.bookCondition);
      const bookPriceMatch = selectedBookPrices.length === 0 || selectedBookPrices.some((price) => { 
        if (price === "Less than Rs 99") {
          return book.bookPrice === "Under 99";
        } else if (price === "Less than Rs 599") {
          return book.bookPrice === "Under 499";
        }
        return false;
      });

      return (
        authorMatch &&
        bindingMatch &&
        languageMatch &&
        ageGroupMatch &&
        publicationMatch &&
        bookConditionMatch &&
        bookPriceMatch
      );
    });
  };

  const filteredBooks = filterBooks(booksKaData);

  const handleWishlist = (book) => {
    const isInWishlist = wishlistItems.some((item) => item.isbn === book.isbn);
    if (isInWishlist) {
      setWishlistItems(wishlistItems.filter((item) => item.isbn !== book.isbn));
      setWishlistCount(wishlistCount - 1); // Decrement Wishlist count
    } else {
      setWishlistItems([...wishlistItems, book]);
      setWishlistCount(wishlistCount + 1); // Increment Wishlist count
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <React.Fragment>
      <div className="h-auto w-auto bg-gradient-to-r from-slate-950 to-fuchsia-950">
        <div className="fixed w-full z-10">
          <Navbar
            Quantity={Quantity}
            totalPrice={totalPrice}
            wishlistCount={wishlistCount}
            wishlistItems={wishlistItems}
            toggleCart={toggleCart} // Pass toggleCart function to Navbar
          />
        </div>
        <div className="overflow-y-auto pt-16">
          <Navbar2 />
        </div>
        <div className="flex flex-row">
          <Sidebar
            selectedAuthors={selectedAuthors}
            setSelectedAuthors={setSelectedAuthors}
            selectedBindings={selectedBindings}
            setSelectedBindings={setSelectedBindings}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            selectedAgeGroups={selectedAgeGroups}
            setSelectedAgeGroups={setSelectedAgeGroups}
            selectedPublications={selectedPublications}
            setSelectedPublications={setSelectedPublications}
            selectedBookConditions={selectedBookConditions}
            setSelectedBookConditions={setSelectedBookConditions}
            selectedBookPrices={selectedBookPrices}
            setSelectedBookPrices={setSelectedBookPrices}
          />
          <div className="bg-purple-950 m-5 h-fit w-fit">
            <div className="flex flex-wrap justify-between">
              {filteredBooks.map((item, index) => (
                <BooksCard
                  key={index}
                  bookValues={item}
                  incrementCart={() => incrementCart(parseInt(item.finPrice))}
                  decrementCart={() => decrementCart(parseInt(item.finPrice))}
                  handleWishlist={() => handleWishlist(item)}
                  wishlistItems={wishlistItems}
                />
              ))}
            </div>
          </div>
        </div>
        {isCartOpen && (
          <CartInterface
            cartItems={cartItems}
            totalPrice={totalPrice}
            closeCart={toggleCart}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
