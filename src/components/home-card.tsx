import { type ReactNode, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import AlipayImg from '../../public/icons/oblatum/alipay.png'
import { FilledButton, TextButton } from './ui/md-button'
import { Ripple } from './ui/md-ripple'

interface baseProps {
  className?: string
  children?: ReactNode
  title?: string
}

export function HomeCard({ className, children, title }: baseProps) {
  return (
    <div className={`${className} h-full w-full border-1 border-gray border-op-20 rounded-4 bg-[var(--md-sys-color-surface)] p-6 md:p-8 [&>h1]:(font-bold text-op-40 text-white text-sm)`}>
      {title && <h1 className="mb-4">{title}</h1>}
      {children}
    </div>
  )
}

export function NewVersonCard() {
  const [version, setVersion] = useState('0.0.0')
  const [whatsNew, setWhatsNew] = useState('')
  async function getVerson() {
    fetch('https://raw.oblatum.art/releases.json')
      .then(response => response.json())
      .then((data) => {
        setVersion(data[0].tag_name)
        setWhatsNew(data[0].body.split('## What\'s Changed\r\n')[1])
      })
      .catch((err) => {
        setWhatsNew('获取更新信息失败，请稍后再试')
        console.error('Fetch error:', err)
      })
    // //如果text[0]不存在，说明没有release，直接返回
    // if (!text[0]) {
    //     state.value += -90
    //     return
    // }
    // 截取versionName开头，换行符结尾的字符串
    // update_time.value = new Date(text[0].assets[0].updated_at).toLocaleString()
    // setDownload_url(text[0].assets[0].browser_download_url)
    // download_count.value = text[0].assets[0].download_count
    // state.value++
  }
  useEffect(() => {
    // 在组件创建时执行 getVerson 函数
    getVerson()
  }, [])
  return (
    <HomeCard className="col-span-full" title="新版本">
      <div className="flex flex-col gap-4 md:block" id="download">
        <h1 className="text-3xl font-bold md:mb-4">
          {version}
          <br className="md:hidden" />
          现已推送！
        </h1>
        <div className="rounded-2 bg-[var(--md-sys-color-on-secondary)] px-8 py-6 md:mb-4 [&>*]:(text-sm break-all text-[var(--md-sys-color-inverse-surface)])">
          <Markdown remarkPlugins={[remarkGfm]}>{whatsNew}</Markdown>
        </div>
        <div className="flex gap-4">
          <FilledButton onClick={() => { window.open('https://raw.oblatum.art/oblatum_iconpack_latest.apk') }}>下载APK</FilledButton>
          <TextButton onClick={() => { window.open('https://github.com/Oblatum/Oblatum-IconPack-Reborn/commit/master') }}>查看更新详情</TextButton>
        </div>
      </div>
    </HomeCard>
  )
}

export function DevoloperCard() {
  const devolopers = [
    {
      name: 'PzHown',
      avatar: 'https://avatars.githubusercontent.com/u/8296543?v=4',
      github: 'https://github.com/PzHown',
    },
    {
      name: '丁二',
      avatar: 'https://avatars.githubusercontent.com/u/22426749?v=4',
      github: 'https://github.com/Butanediol',
    },
    {
      name: 'opoet',
      avatar: 'https://avatars.githubusercontent.com/u/30021379?v=4',
      github: 'https://github.com/opoet',
    },
  ]
  return (
    <HomeCard title="开发者">
      <div className="grid grid-cols-3 gap-4">
        {devolopers.map(devoloper => (
          <div onClick={() => { window.open(devoloper.github) }} key={devoloper.name} className="relative flex flex-col cursor-pointer items-center gap-2 rounded-4 bg-[var(--md-sys-color-inverse-on-surface)] px-2 py-4">
            <Ripple />
            <img src={devoloper.avatar} alt={devoloper.name} className="size-12 rounded-full" />
            <h1 className="text-sm font-bold">{devoloper.name}</h1>
          </div>
        ))}
      </div>
      <TextButton className="mt-4">
        <a className="text-sm text-[var(--md-sys-color-primary)]">了解Oblatum团队</a>
      </TextButton>
    </HomeCard>
  )
}

export function PyCard() {
  return (
    <HomeCard title="PY小店">
      <div className="flex flex-col items-center gap-4">
        <img src={AlipayImg.src} alt="alipay" className="w-24" />
        <p>暂未开放，敬请期待...</p>
      </div>
    </HomeCard>
  )
}
