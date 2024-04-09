import { useState } from "react";
import { IconButton,TextButton } from "~/components/ui/md-button"
import { Icon } from "~/components/ui/md-icon"
import { List,ListItem } from "~/components/ui/md-list";

const HeaderMenuConfig = [
    {
        name: "首页",
        icon: "home"
    },
    {
        name: "下载",
        icon: "download"
    },
    {
        name: "申请",
        icon: "markunread_mailbox"
    }
]



export function HeaderMenu() {
    // 折叠菜单状态
    const [headerFoldMenuState,setHeaderFoldMenuState] = useState(false)

    // 折叠菜单按钮点击事件
    const HeaderFoldMenuOnClick = () => {
        setHeaderFoldMenuState(!headerFoldMenuState)
    }

    //活动菜单
    const [activeMenu,setActiveMenu] = useState(HeaderMenuConfig[0].name)


    return (
        <>
            {/* 移动端菜单 */}
            <List className={`absolute left-0 top-0 w-full border-b-1 translate-y-[-115%] transition-transform transition-duration-500 transition-delay-150 transition-ease-out border-b-[var(--md-sys-color-surface-variant)] px-8 pb-8 pt-4rem shadow-xl md:hidden ${headerFoldMenuState ? 'translate-y-0':''}`}>
                {
                    HeaderMenuConfig.map((item) => (
                        <ListItem key={item.name} type="button" className={`transition-all transition-duration-300 ${activeMenu===item.name ? 'bg-[var(--md-sys-color-primary-container)]':''}`}
                        onClick={()=>{
                            setActiveMenu(item.name)
                            HeaderFoldMenuOnClick()
                            }}>
                            {item.name}
                            <Icon slot="start">{item.icon}</Icon>
                        </ListItem>
                    ))
                }
                
            </List>

            {/* 折叠菜单按钮 */}
            <IconButton className="md:hidden" onClick={()=>{HeaderFoldMenuOnClick()}}>
                <Icon>menu</Icon>
            </IconButton>

            {/* PC端菜单 */}
            <div className="hidden md:flex items-center gap-4">
                {
                    HeaderMenuConfig.map((item) => (
                        <TextButton key={item.name} has-icon="true" className={`before:(content-[''] absolute top-0 left-0 w-full h-full block transition-all transition-duration-300) overflow-hidden 
                        ${activeMenu===item.name ? 'before:(bg-[var(--md-sys-color-primary-container)])':''}
                        `} 
                        onClick={()=>{setActiveMenu(item.name)}}>
                            <Icon slot="icon">{item.icon}</Icon>
                            {item.name}
                        </TextButton>
                    ))
                }
            </div>
        </>
    )
}
