import React from 'react';

const Master = ({ items, onSelect }) => {
  return (
    <div className="list-group">
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className="list-group-item list-group-item-action"
          onClick={() => onSelect(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Master;
