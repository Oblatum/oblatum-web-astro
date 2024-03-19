import React from "react";
import {createComponent} from "@lit/react";
import {MdElevatedButton} from "@material/web/button/elevated-button";

export default createComponent({
  tagName: 'md-elevated-button',
  elementClass: MdElevatedButton,
  react: React,
  events: {
    onClick: 'click',
  },
});
