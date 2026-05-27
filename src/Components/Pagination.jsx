import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../CSS/Pagination.css';

const Pagination = () => {
  return (
    <div className="paginationRowWrapper">
      <div className="paginationInfoText">Showing Total Pages of 18</div>
      
      <div className="paginationControlsBlock">
        <button className="navPageBtn disabledNavBtn">
          <FiChevronLeft /> Back
        </button>
        
        <button className="numberPageBtn activeNumBtn">1</button>
        <button className="numberPageBtn">2</button>
        <button className="numberPageBtn">3</button>
        <button className="numberPageBtn">4</button>
        <button className="numberPageBtn">5</button>
        <button className="numberPageBtn">6</button>
        <button className="numberPageBtn">7</button>
        <button className="numberPageBtn">8</button>
        
        <span className="ellipsisSpan">...</span>
        
        <button className="numberPageBtn">18</button>
        
        <button className="navPageBtn">
          Next <FiChevronRight />
        </button>
      </div>
      
    </div>
  );
};

export default Pagination;
