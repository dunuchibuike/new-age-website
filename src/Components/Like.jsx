import React, { useState } from 'react';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { FiRepeat } from "react-icons/fi";
import { RiWhatsappLine } from 'react-icons/ri';
import '../CSS/Like.css';

const Like = () => {
  const [likedCards, setLikedCards] = useState({});
  const [comparedCards, setComparedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompare = (id) => {
    setComparedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="likeSection">
      <h2 className="likeMainTitle">You May Also Like</h2>
      
      <div className="likeProductsGrid">
        
        <article className="productCard">
          <div className="cardMediaHeader">
            <button className="cardWishlistBtn" onClick={() => toggleLike(1)}>
              {likedCards[1] ? <FaHeart className="heartFilledIcon" /> : <FaRegHeart />}
            </button>
            <div className="cardImgBox">
              <img src="" alt="Jazzy PD Charger" />
            </div>
          </div>
          
          <div className="cardContentBody">
            <h3 className="cardProductTitle">Jazzy PD Charger</h3>
            <div className="cardRatingRow">
              <div className="cardStarsGroup">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="cardRatingScore">5.0</span>
              <span className="cardReviewCount">(567)</span>
            </div>
            <div className="cardCompatibilityBlock">
              <span className="compLabel">Compatible with:</span>
              <div className="compTagsGroup">
                <span>iPhone</span><span>Android</span><span>Tablet</span>
              </div>
            </div>
            <div className="cardPriceRow">
              <span className="cardPriceVal">&#8358;13,200</span>
              <span className="cardBulkBadge">Bulk Available</span>
            </div>
            <div className="cardActionButtonsBar">
              <button className="cardAddToCartBtn"><IoCartOutline /> Add to Cart</button>
              <button 
                className={`cardSecondaryIconBtn ${comparedCards[1] ? 'compareActive' : ''}`}
                onClick={() => toggleCompare(1)}
              >
                <FiRepeat/>
              </button>
              <button className="cardWhatsappBtn"><RiWhatsappLine /></button>
            </div>
          </div>
        </article>

        <article className="productCard">
          <div className="cardMediaHeader">
            <span className="productStatusTag textOrange">Best Sellers</span>
            <button className="cardWishlistBtn" onClick={() => toggleLike(2)}>
              {likedCards[2] ? <FaHeart className="heartFilledIcon" /> : <FaRegHeart />}
            </button>
            <div className="cardImgBox">
              <img src="" alt="N-Watch 3 Smartwatch" />
            </div>
          </div>
          
          <div className="cardContentBody">
            <h3 className="cardProductTitle">N-Watch 3 Smartwatch</h3>
            <div className="cardRatingRow">
              <div className="cardStarsGroup">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="cardRatingScore">5.0</span>
              <span className="cardReviewCount">(567)</span>
            </div>
            <div className="cardCompatibilityBlock">
              <span className="compLabel">Compatible with:</span>
              <div className="compTagsGroup">
                <span>iPhone</span><span>Android</span>
              </div>
            </div>
            <div className="cardPriceRow">
              <span className="cardPriceVal">&#8358;13,200</span>
              <span className="cardBulkBadge">Bulk Available</span>
            </div>
            <div className="cardActionButtonsBar">
              <button className="cardAddToCartBtn"><IoCartOutline /> Add to Cart</button>
              <button 
                className={`cardSecondaryIconBtn ${comparedCards[2] ? 'compareActive' : ''}`}
                onClick={() => toggleCompare(2)}
              >
                <FiRepeat />
              </button>
              <button className="cardWhatsappBtn"><RiWhatsappLine /></button>
            </div>
          </div>
        </article>

        <article className="productCard">
          <div className="cardMediaHeader">
            <button className="cardWishlistBtn" onClick={() => toggleLike(3)}>
              {likedCards[3] ? <FaHeart className="heartFilledIcon" /> : <FaRegHeart />}
            </button>
            <div className="cardImgBox">
              <img src="" alt="Iron Man Mini" />
            </div>
          </div>
          
          <div className="cardContentBody">
            <h3 className="cardProductTitle">Iron Man Mini</h3>
            <div className="cardRatingRow">
              <div className="cardStarsGroup">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="cardRatingScore">5.0</span>
              <span className="cardReviewCount">(567)</span>
            </div>
            <div className="cardCompatibilityBlock">
              <span className="compLabel">Compatible with:</span>
              <div className="compTagsGroup">
                <span>iPhone</span><span>Android</span><span>Tablet</span><span>Laptop</span>
              </div>
            </div>
            <div className="cardPriceRow">
              <span className="cardPriceVal">&#8358;13,200</span>
              <span className="cardBulkBadge">Bulk Available</span>
            </div>
            <div className="cardActionButtonsBar">
              <button className="cardAddToCartBtn"><IoCartOutline /> Add to Cart</button>
              <button 
                className={`cardSecondaryIconBtn ${comparedCards[3] ? 'compareActive' : ''}`}
                onClick={() => toggleCompare(3)}
              >
                <FiRepeat/>
              </button>
              <button className="cardWhatsappBtn"><RiWhatsappLine /></button>
            </div>
          </div>
        </article>

        <article className="productCard">
          <div className="cardMediaHeader">
            <span className="productStatusTag textOrange">Best Sellers</span>
            <button className="cardWishlistBtn" onClick={() => toggleLike(4)}>
              {likedCards[4] ? <FaHeart className="heartFilledIcon" /> : <FaRegHeart />}
            </button>
            <div className="cardImgBox">
              <img src="" alt="SoulPod 12" />
            </div>
          </div>
          
          <div className="cardContentBody">
            <h3 className="cardProductTitle">SoulPod 12</h3>
            <div className="cardRatingRow">
              <div className="cardStarsGroup">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="cardRatingScore">5.0</span>
              <span className="cardReviewCount">(567)</span>
            </div>
            <div className="cardCompatibilityBlock">
              <span className="compLabel">Compatible with:</span>
              <div className="compTagsGroup">
                <span>iPhone</span><span>Android</span><span>Tablet</span><span>Laptop</span>
              </div>
            </div>
            <div className="cardPriceRow">
              <span className="cardPriceVal">&#8358;13,200</span>
              <span className="cardBulkBadge">Bulk Available</span>
            </div>
            <div className="cardActionButtonsBar">
              <button className="cardAddToCartBtn"><IoCartOutline /> Add to Cart</button>
              <button 
                className={`cardSecondaryIconBtn ${comparedCards[4] ? 'compareActive' : ''}`}
                onClick={() => toggleCompare(4)}
              >
                <FiRepeat/>
              </button>
              <button className="cardWhatsappBtn"><RiWhatsappLine /></button>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Like;
