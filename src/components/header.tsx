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
    return (
        <>
            <List className="absolute left-0 top-0 w-full border-b-1 border-b-[var(--md-sys-color-surface-variant)] px-8 pb-8 pt-4rem shadow-xl md:hidden">
                {
                    HeaderMenuConfig.map((item) => (
                        <ListItem type="button">
                            {item.name}
                            <Icon slot="start">{item.icon}</Icon>
                        </ListItem>
                    ))
                }
                
            </List>

            <IconButton className="md:hidden">
                <Icon>menu</Icon>
            </IconButton>

            <div className="hidden md:flex items-center gap-4">
                {
                    HeaderMenuConfig.map((item) => (
                        <TextButton key={item.name} has-icon="true" className="before:(content-[''] absolute top-0 left-0 w-full h-full block) overflow-hidden active:before(bg-[var(--md-ripple-hover-color)] opacity-[var(--md-ripple-hover-opacity)])">
                            <Icon slot="icon">{item.icon}</Icon>
                            {item.name}
                        </TextButton>
                    ))
                }
            </div>
        </>
    )
}
