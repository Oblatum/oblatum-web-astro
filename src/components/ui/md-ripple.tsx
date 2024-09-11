import { createComponent } from '@lit/react'
import { MdRipple } from '@material/web/ripple/ripple'
import React from 'react'

export const Ripple = createComponent({
  tagName: 'md-ripple',
  elementClass: MdRipple,
  react: React,
  events: {
    onClick: 'click',
  },
})
