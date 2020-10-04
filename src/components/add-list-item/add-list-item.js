import React from 'react';
import './add-list-item.css'

const AddListItem = (props) => {
  return (
    <div className="add-business">
      <button type="button" className="add-busines-icon" onClick={() => props.onItemAdded(`hello world`)}>
        ADD NEW BUSINESS
      <i className="fa fa-plus-square"></i>
      </button>
    </div >
  );
};

export default AddListItem;