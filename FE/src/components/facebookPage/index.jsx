import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";
IframeFB.propTypes = {};

function IframeFB(props) {
  const style = {
    border: "none",
    overflow: "hidden",
  };
  return (
    <Iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoneysavee&amp;tabs=timeline&amp;width=340&amp;height=70&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
      width="340"
      height="70"
      style={style}
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
}

export default IframeFB;
