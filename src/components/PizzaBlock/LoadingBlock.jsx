import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="270" rx="10" ry="10" width="280" height="24" />
      <rect x="0" y="305" rx="10" ry="10" width="280" height="84" />
      <rect x="0" y="410" rx="10" ry="10" width="94" height="26" />
      <rect x="130" y="400" rx="30" ry="30" width="150" height="44" />
      <circle cx="140" cy="130" r="130" />
    </ContentLoader>
  );
}

export default LoadingBlock;
