import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const { useState, useEffect } = React;
import { useWindowDimensions } from '../utils/useWindowDimensions';

export const ImageHeader = ({ headerImageSrc, headerClassName, headerAlt }) => {
  const { width } = useWindowDimensions();
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (width > 1600) {
      setImageWidth(1600);
    } else {
      setImageWidth(width);
    }
  }, [width]);

  return (
    <div
      className="banner-image"
      style={{
        // backgroundImage: getImage(headerImageSrc),
        width: imageWidth,
        height: 300,
      }}
    >
      <GatsbyImage
        image={getImage(headerImageSrc)}
        alt={`${headerAlt}`}
        className={`${headerClassName}`}
        // layout={'fullwidth'}
        // height={300}
      />
    </div>
  );
};

export default ImageHeader;
