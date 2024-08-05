import React from 'react';

const Detail = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem ? (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
        </div>
      ) : (
        <p>Select an element from the list.</p>
      )}
    </div>
  );
};

export default Detail;
