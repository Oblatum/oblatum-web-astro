import { useState } from 'react'
import { IconButton, TextButton } from '~/components/ui/md-button'
import { Icon } from '~/components/ui/md-icon'
import { List, ListItem } from '~/components/ui/md-list'
import { HeaderMenuConfig } from '~/components/states/router'

interface HeaderMenuProps {
  active: number
}

export function HeaderMenu(props: HeaderMenuProps) {
  const { active } = props

  // 折叠菜单状态
  const [headerFoldMenuState, setHeaderFoldMenuState] = useState(false)

  // 折叠菜单按钮点击事件
  const HeaderFoldMenuOnClick = () => {
    setHeaderFoldMenuState(!headerFoldMenuState)
  }

  // 活动菜单
  const [activeMenu, setActiveMenu] = useState(HeaderMenuConfig[active].name)

  return (
    <>
      {/* 移动端菜单 */}
      <List className={`absolute left-0 top-0 w-full border-b-1 translate-y-[-115%] transition-transform transition-duration-500 transition-delay-150 transition-ease-out border-b-[var(--md-sys-color-surface-variant)] px-8 pb-8 pt-4rem shadow-xl md:hidden ${headerFoldMenuState ? 'translate-y-0' : ''}`}>
        {
          HeaderMenuConfig.map((item: any) => (
            <a key={item.name} href={`${item.path}`}>
              <ListItem
                type="button"
                className={`transition-all transition-duration-300 ${activeMenu === item.name ? 'bg-[var(--md-sys-color-primary-container)]' : ''}`}
                onClick={() => {
                  setActiveMenu(item.name)
                  HeaderFoldMenuOnClick()
                }}
              >
                {item.name}
                <Icon slot="start">{item.icon}</Icon>
              </ListItem>
            </a>
          ))
        }

      </List>

      {/* 折叠菜单按钮 */}
      <IconButton className="md:hidden" onClick={() => { HeaderFoldMenuOnClick() }}>
        <Icon>menu</Icon>
      </IconButton>

      {/* PC端菜单 */}
      <div className="hidden items-center gap-4 md:flex">
        {
          HeaderMenuConfig.map(item => (
            <a key={item.name} href={`${item.path}`}>
              <TextButton
                has-icon="true"
                className={`before:(content-[''] absolute top-0 left-0 w-full h-full block transition-all transition-duration-300) overflow-hidden 
                            ${activeMenu === item.name ? 'before:(bg-[var(--md-sys-color-primary-container)])' : ''}
                            `}
                onClick={() => { setActiveMenu(item.name) }}
              >
                <Icon slot="icon">{item.icon}</Icon>
                {item.name}
              </TextButton>
            </a>
          ))
        }
      </div>
    </>
  )
}
