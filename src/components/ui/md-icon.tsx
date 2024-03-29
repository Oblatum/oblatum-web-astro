import React from "react";
import { createComponent } from "@lit/react";
import { MdIcon } from "@material/web/icon/icon"

const BaseIcon = createComponent({
  tagName: 'md-icon',
  elementClass: MdIcon,
  react: React,
});

export const Icon = ({ className = '', ...props }) => (
  <BaseIcon className={`notranslate ${className}`} {...props} />
);