import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="132" r="120" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="347" rx="10" ry="10" width="280" height="88" />
    <rect x="12" y="458" rx="10" ry="10" width="95" height="30" />
    <rect x="130" y="453" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
