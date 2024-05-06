import React from 'react';

const Cylinder = ({ value }) => {
  const layers = 10; // Number of layers in the cylinder
  const layerHeight = 100 / layers; // Calculate the height of each layer

  return (
    <div className="cylinder w-8 h-28 relative">
      {[...Array(layers)].map((_, index) => {
        // Determine if the layer should be filled or not based on the value
        const filled = layers - index <= value;

        return (
          <div
            key={index}
            className={` w-8 ${filled ? 'bg-yellow-500' : 'bg-gray-300'}`}
            style={{ height: `${layerHeight}%` }}
          ></div>
        );
      })}
    </div>
  );
};

export default Cylinder;
