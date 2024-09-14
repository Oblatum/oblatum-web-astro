import type { ReactNode } from 'react'
import { FilledButton, TextButton } from './ui/md-button'

interface baseProps {
  className?: string
  children?: ReactNode
  title?: string
}

export function HomeCard({ className, children, title }: baseProps) {
  return (
    <div className={`${className} h-full w-full border-1 border-gray border-op-40 rounded-4 bg-white bg-op-05 p-6 md:p-8 [&>h1]:(font-bold text-op-40 text-white text-sm)`}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}

export function NewVersonCard() {
  return (
    <HomeCard className="col-span-full" title="新版本">
      <div className="mt-8 flex flex-col gap-4 md:block" id="download">
        <h1 className="text-3xl font-bold md:mb-4">
          V3.0.24.8.28
          <br className="md:hidden" />
          现已推送！
        </h1>
        <div className="rounded-2 bg-[var(--md-sys-color-on-secondary)] p-4 md:mb-4 [&>p]:(text-sm)">
          <p>1、适配和更新：阿里云盘、迷你键盘</p>
          <p className="">2、修复：appfilter未带包名</p>
        </div>
        <div className="flex gap-4">
          <FilledButton onClick={() => { window.open('/apks/com.oblatum.iconpack.apk') }}>下载APK</FilledButton>
          <TextButton onClick={() => { window.open('https://github.com/Oblatum/Oblatum-IconPack-Reborn/commit/913d6274902b260dd3c353d4b6fac1365f65c6d4') }}>查看更新详情</TextButton>
        </div>
      </div>
    </HomeCard>
  )
}
