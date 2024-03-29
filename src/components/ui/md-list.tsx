import React from 'react';
import { createComponent } from "@lit/react";
import { MdList } from "@material/web/list/list";
import { MdListItem } from "@material/web/list/list-item";

export const List = createComponent({
    tagName: 'md-list',
    elementClass: MdList,
    react: React,
    events: {
      onClick: 'click',
    },
});

const BaseListItem = createComponent({
    tagName: 'md-list-item',
    elementClass: MdListItem,
    react: React,
    events: {
      onClick: 'click',
    },
});

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const ListItem = ({ children, className, ...props }:ListItemProps) => (
  <BaseListItem className={`rounded-4 ${className}`} {...props} >{children}</BaseListItem>
);
