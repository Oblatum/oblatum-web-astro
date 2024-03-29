import React from "react";
import { createComponent } from "@lit/react";
import { MdIcon } from "@material/web/icon/icon"

const BaseIcon = createComponent({
  tagName: 'md-icon',
  elementClass: MdIcon,
  react: React,
});

interface IconProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const Icon = ({children, className, ...props }:IconProps) => (
  <BaseIcon className={`notranslate ${className}`} {...props} >{children}</BaseIcon>
);