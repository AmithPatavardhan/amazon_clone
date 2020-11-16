import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
          <img 
          className="home_banner"
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Unrec_PC_Hero_2X_ENGLISH._CB416349557_.jpg" 
          alt="" />
        <div className="home_row">
            <Product
                 id="2"
                title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)  animal"
                price={1000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71dujTTJDZL._SL1500_.jpg"
            />
            <Product
                 id="3"
                title="Dell Vostro 3401 14inch FHD AG 2 Side Narrow Border Display Laptop (10th gen i3-1005G1 / 4GB / 1TB / Integrated Graphics/ Win 10 + MS Office H&S 2019 / Black) D552124WIN9BE"
                price={1000}
                rating={4}
                image="https://m.media-amazon.com/images/I/8147cwFm2PL._AC_UY327_FMwebp_QL65_.jpg"
            />
        </div>

        <div className="home_row">
            <Product
                 id="4"
                title="
                OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                price={30}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg"
            />
            <Product
                id="5"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={30}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />
        </div>

        <div className="home_row">
            <Product
                id="12345"
                title="Kitchen Stand full stainless"
                price={45}
                rating={4}
                image="https://m.media-amazon.com/images/I/61Nii21Mf8L._AC_UL480_FMwebp_QL65_.jpg"
            />
         </div>

         <div className="home_row">
            <Product
                id="6"
                title="
                OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                price={30}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg"
            />
            <Product
                 id="7"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={30}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />

            <Product
                id="8"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={30}
                rating={2}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />

            <Product
                 id="9"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={320}
                rating={3}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />
             <Product
                 id="10"
                title="cello Pens"
                price={300}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />
             <Product 
                 id="1"
                title="cello pens in bundle of 20" 
                price={305}
                rating={2}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />

        </div>
        </div>
    )
}

export default Home
