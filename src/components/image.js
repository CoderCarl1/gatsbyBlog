import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Image = ({
  ImageSrc = '../images/carl_pic.jpg',
  className,
  alt,
  width = 300,
  height = 300,
}) => {
  return (
    <GatsbyImage
      image={getImage(ImageSrc)}
      alt={alt}
      className={`${className} image`}
      height={height}
      width={width}
    />
  );
};

export default Image;
