import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Image = ({
  ImageSrc = '../images/carl_pic.jpg',
  className,
  alt,
  width,
  height,
}) => {
  return (
    <div
      className={`${className} image`}
      style={{ height: height, width: width }}
    >
      <GatsbyImage image={getImage(ImageSrc)} alt={`${alt}`} />
    </div>
  );
};

export default Image;
