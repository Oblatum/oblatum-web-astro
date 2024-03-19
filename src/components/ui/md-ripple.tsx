import React from "react";
import {createComponent} from "@lit/react";
import {MdRipple} from "@material/web/ripple/ripple";

export default createComponent({
  tagName: 'md-ripple',
  elementClass: MdRipple,
  react: React,
  events: {
    onClick: 'click',
  },
});
