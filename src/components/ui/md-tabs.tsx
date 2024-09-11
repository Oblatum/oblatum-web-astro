import { createComponent } from '@lit/react'
import { MdPrimaryTab } from '@material/web/tabs/primary-tab'
import { MdSecondaryTab } from '@material/web/tabs/secondary-tab'
import { MdTabs } from '@material/web/tabs/tabs'
import React from 'react'

export const Tabs = createComponent({
  tagName: 'md-tabs',
  elementClass: MdTabs,
  react: React,
  events: {
    onClick: 'click',
  },
})

export const PrimaryTab = createComponent({
  tagName: 'md-primary-tab',
  elementClass: MdPrimaryTab,
  react: React,
})

export const SecondaryTab = createComponent({
  tagName: 'md-secondary-tab',
  elementClass: MdSecondaryTab,
  react: React,
})
