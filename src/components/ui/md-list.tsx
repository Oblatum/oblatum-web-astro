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
export const ListItem = ({ className = '', ...props }) => (
    <BaseListItem className={`rounded-4 ${className}`} {...props} />
);
