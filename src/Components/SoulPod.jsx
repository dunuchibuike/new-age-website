import React from 'react';
import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
import { IoBatteryChargingOutline } from 'react-icons/io5';
import { RiColorFilterLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsUsbC } from 'react-icons/bs';
import '../CSS/SoulPod.css';

const SoulPod = () => {
  return (
    <div className="soulpodDetailPage">
      <nav className="breadcrumbNav">
        <span>Home</span> / <span>Shop Products</span> / <span>Audios</span> / <span className="activePage">SoulPod18</span>
      </nav>

      <div className="soulpodMainContainer">
        <div className="soulpodMediaGallery">
          <div className="mainPreviewWrapper">
            <button className="sliderNavBtn prevBtn">
              <FiChevronLeft />
            </button>
            <img 
              src="" 
              alt="SoulPod18 Main Display" 
              className="mainDisplayImage" 
            />
            <button className="sliderNavBtn nextBtn">
              <FiChevronRight />
            </button>
          </div>

          <div className="thumbnailStrip">
            <div className="thumbItem activeThumb">
              <img src="" alt="View 1" />
            </div>
            <div className="thumbItem">
              <img src="" alt="View 2" />
            </div>
            <div className="thumbItem">
              <img src="" alt="View 3" />
            </div>
            <div className="thumbItem">
              <img src="" alt="View 4" />
            </div>
            <div className="thumbItem">
              <img src="" alt="View 5" />
            </div>
          </div>
        </div>

        <div className="soulpodInfoPanel">
          <div className="metaRow">
            <span className="stockIndicatorBadge">In Stock</span>
            <button className="wishlistToggleBtn">
              <FiHeart />
            </button>
          </div>

          <h1 className="soulpodMainHeading">SoulPod18</h1>

          <div className="ratingsSummaryBar">
            <div className="starsRow">
              <FaStar className="starIconFilled" />
              <FaStar className="starIconFilled" />
              <FaStar className="starIconFilled" />
              <FaStar className="starIconFilled" />
              <FaStar className="starIconFilled" />
            </div>
            <span className="numericRatingScore">5.0</span>
            <span className="totalReviewsCount">(567)</span>
          </div>

          <div className="pricingTierRow">
            <span className="primaryDisplayPrice">&#8358;24,500</span>
            <span className="bulkInventoryNotice">Bulk Available</span>
          </div>

          <div className="specificationsListBlock">
            <h3 className="sectionLabelTitle">Specifications</h3>
            <ul className="specsBulletGroup">
              <li className="specItemRow">
                <span className="specIconWrapper">
                  <HiOutlineRefresh className="specCustomIcon" />
                </span>
                <span className="specRowValueText">Compatible with iPhone/ android/ tablet/ laptop</span>
              </li>
              <li className="specItemRow">
                <span className="specIconWrapper">
                  <IoBatteryChargingOutline className="specCustomIcon" />
                </span>
                <span className="specRowValueText">Battery life last up to 24 hours</span>
              </li>
              <li className="specItemRow">
                <span className="specIconWrapper">
                  <RiColorFilterLine className="specCustomIcon" />
                </span>
                <span className="specRowValueText">Colors available in white/ black/ blue/ pink</span>
              </li>
              <li className="specItemRow">
                <span className="specIconWrapper">
                  <AiOutlineThunderbolt className="specCustomIcon" />
                </span>
                <span className="specRowValueText">Fast charging</span>
              </li>
              <li className="specItemRow">
                <span className="specIconWrapper">
                  <BsUsbC className="specCustomIcon" />
                </span>
                <span className="specRowValueText">Type - C port</span>
              </li>
            </ul>
          </div>

          <div className="colorSelectionBlock">
            <div className="colorSelectionLabel">Color: <span className="selectedColorValueText">Black</span></div>
            <div className="swatchesPaletteRow">
              <button className="swatchOptionNode activeSwatchNode colorBlack"></button>
              <button className="swatchOptionNode colorWhite"></button>
              <button className="swatchOptionNode colorBlue"></button>
              <button className="swatchOptionNode colorLightBlue"></button>
              <button className="swatchOptionNode colorPink"></button>
            </div>
          </div>

          <div className="orderTypeTabsRow">
            <button className="orderTabToggleBtn activeOrderTabToggleBtn">Single Order</button>
            <button className="orderTabToggleBtn">Bulk Order</button>
          </div>

          <div className="cartActionsControlBar">
            <div className="quantityCounterWidget">
              <button className="counterAdjustBtn decrementControlBtn">-</button>
              <input type="text" className="counterDisplayValueField" value="1" readOnly />
              <button className="counterAdjustBtn incrementControlBtn">+</button>
            </div>

            <button className="secondaryCartActionBtn">Add to Cart</button>
            <button className="primaryCheckoutActionBtn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulPod;
