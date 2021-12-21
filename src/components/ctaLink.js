import * as React from 'react';

export const CtaLink = (props) => {
  console.log('props are: ', JSON.stringify(props, null, 2));
  return (
    <aside>
      <h2>Check out my latest Blog!</h2>
      <a href="#" className="btn">
        NAMEHERE
      </a>
    </aside>
  );
};

export default CtaLink;
