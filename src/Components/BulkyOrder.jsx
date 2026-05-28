import React from 'react';
import warrantyBadge from '../assets/warranty.png';
import '../CSS/BulkOrder.css';

const BulkOrder = () => {
  return (
    <section className="bulkOrderSection">
      
      <div className="tableContainer">
        <h2 className="tableMainTitle">Bulk Order Price List</h2>
        
        <table className="priceListTable">
          <thead>
            <tr>
              <th className="columnLeft">Quantity</th>
              <th className="columnCenter">Price per unit</th>
              <th className="columnRight">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="columnLeft">50 pcs</td>
              <td className="columnCenter">&#8358;22,000</td>
              <td className="columnRight">&#8358;1,100,000</td>
            </tr>
            <tr>
              <td className="columnLeft">150 pcs</td>
              <td className="columnCenter">&#8358;20,500</td>
              <td className="columnRight">&#8358;3,075,000</td>
            </tr>
            <tr>
              <td className="columnLeft">180 pcs</td>
              <td className="columnCenter">&#8358;18,000</td>
              <td className="columnRight">&#8358;3,240,000</td>
            </tr>
            <tr>
              <td className="columnLeft">350 pcs</td>
              <td className="columnCenter">&#8358;15,000</td>
              <td className="columnRight">&#8358;5,250,000</td>
            </tr>
            <tr>
              <td className="columnLeft">500 pcs</td>
              <td className="columnCenter">&#8358;12,000</td>
              <td className="columnRight">&#8358;6,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="protectedWarrantyContent">
        <h2 className="protectedWarrantyTitle">Protected with Warranty</h2>
        <p className="protectedWarrantyDesc">
          This product is backed by our warranty, covering manufacturing defects<br />
          and performance issues for your peace of mind.
        </p>
        <div className="protectedBadgeWrapper">
          <img 
            src={warrantyBadge} 
            alt="12 Month Warranty Seal" 
            className="protectedBadgeImage" 
          />
        </div>
      </div>

    </section>
  );
};

export default BulkOrder;
