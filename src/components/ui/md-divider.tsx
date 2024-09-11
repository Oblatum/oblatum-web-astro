import { createComponent } from '@lit/react'
import { MdDivider } from '@material/web/divider/divider'
import React from 'react'

export const Divider = createComponent({
  tagName: 'md-divider',
  elementClass: MdDivider,
  react: React,
})
