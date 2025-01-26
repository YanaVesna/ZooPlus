import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MyIcon } from "../assets/images/iconNew.svg";
import { ReactComponent as MyLoginIcon } from "../assets/images/iconLogin.svg";
import { ReactComponent as MyListIcon } from "../assets/images/iconList.svg";
import SmallLogo from "./SmallLgo.jsx";
import productsList from "../assets/products.json";

function Header() {
  /*  const [categories, setCategories] = useState([]); */
  /* const [activeCategory, setActiveCategory] = useState(null); */

  console.log(productsList, 66);

  const uniqueCategories = productsList.filter(
    (item, index, self) =>
      index === self.findIndex((cat) => cat.category === item.category)
  );

  console.log(uniqueCategories, 77);

  return (
    <div className="header">
      <div className="header_top">
        <div className="container">
          <div className="header_box">
            <Link to="/NotFound" className="header_link">
              <p>Versandkostenfrei ab 29€</p>
            </Link>
            <div className="header_titles">
              <div className="header_title1">
                <Link to="/NotFound" className="header_link">
                  <p>Kontaktieren Sie ins</p>
                </Link>
              </div>
              <div className="header_title2">
                <button>
                  Wiederbestellen
                  <MyIcon />
                </button>
              </div>
              <div className="header_title3">
                <MyLoginIcon />
                <div className="header_list">
                  <p>Mein Zooplus</p>
                  <MyListIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_down">
        <div className="container">
          <div className="header_logo">
            <SmallLogo />
            <div className="header_search-block">
              <form
                className="header_search-form"
                /*  {
                value === "active" ? "search-form__active" : "search-form"
              } */
              >
                <input
                  className="header_search"
                  /* ref={inputRef}
              onClick={goToMenu}
              onChange={onChangeInput}
              value={value1} */
                  type="search"
                  name=""
                  placeholder="Wunschprodukte suchen"
                ></input>
              </form>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                className="Icon-module_iconPrimary__cvtkN"
                aria-labelledby="search_query_field-label-desktop"
                data-pp-icon="Search"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 11C3 6.58173 6.58173 3 11 3C15.4183 3 19 6.58173 19 11C19 12.9387 18.3096 14.7174 17.1624 16.1017L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L16.1017 17.1624C14.7174 18.3096 12.9387 19 11 19C6.58173 19 3 15.4183 3 11ZM11 4.5C7.41015 4.5 4.5 7.41015 4.5 11C4.5 14.5899 7.41015 17.5 11 17.5C12.7951 17.5 14.4191 16.7733 15.5962 15.5962C16.7733 14.4191 17.5 12.7951 17.5 11C17.5 7.41015 14.5899 4.5 11 4.5Z"
                ></path>
              </svg>
            </div>
            <div className="header_button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                data-pp-icon="CartFilled"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 2.75C1 2.33579 1.33579 2 1.75 2H2.27029C3.34283 2 4.26626 2.75703 4.4766 3.80874L4.71485 5H20.2676C21.3791 5 22.209 6.02281 21.98 7.11052L20.5682 13.8165C20.3003 15.0891 19.1777 16 17.8772 16H7.63961C6.32874 16 5.20009 15.0747 4.94301 13.7893L3.00573 4.10291C2.93562 3.75234 2.6278 3.5 2.27029 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75ZM6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21C6.89543 21 6 20.1046 6 19ZM15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19Z"
                ></path>
              </svg>
              <p>Warenkorb</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header_menu">
        <div className="container">
          <div className="header_nav-box">
            <nav className="header_nav">
              {uniqueCategories.map((cat) => (
                <div key={cat.id} className="header_button">
                  {cat.category}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
