import { Ripple } from '~/components/ui/md-ripple'
import { SecondaryTab, Tabs } from '~/components/ui/md-tabs'

interface HomeProps {
  colors: string[]
  weatherIcons: string[]
}

export function Home({ colors, weatherIcons }: HomeProps) {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 mx-2 mb-4 mt-36 gap-8">
      <div className="contents">
        <div className="col-span-full">
          <h1 className="flex poster-h1 text-[rgba(var(--oblatum-color-primary))]">
            <span className="i-oblatum-blue mr1 inline-block self-center" />
            经典的
          </h1>
          <h1 className="poster-h1">不规则质感设计</h1>
          <p className="poster-p">
            基于Material Design，淡化了原有的质感，视感更加的和谐。
          </p>
        </div>
        <div
          className="relative grid col-span-full grid-cols-3 cursor-pointer gap-6 rounded-4 from-[rgba(41,170,224,0.1)] to-[rgba(108,128,208,0.2)] bg-gradient-to-rb p-4 shadow-sm"
        >
          <Ripple />
          {
            weatherIcons.map(i => (
              <div key={i} className="mx-auto size-16 select-none md:(size-24)">
                <img src={`/icons/${i}`} alt={i} className="size-full" loading="lazy" decoding="async" />
              </div>
            ))
          }
        </div>
      </div>

      <div className="contents">
        <div className="col-span-full flex flex-col items-start justify-end md:(col-span-1 col-start-3 items-end)">
          <h1 className="poster-h1">颜色优调</h1>
          <p className="poster-p">如糖果般甜</p>
        </div>
        <RandomColor colors={colors} />
      </div>

      <div className="contents">
        <div className="col-span-1 col-span-full flex flex-col md:(col-span-1 justify-end)">
          <h1
            className="poster-h1 text-[rgba(var(--oblatum-color-primary))]"
          >
            天气
          </h1>
          <h1 className="poster-h1">图标扩展</h1>
          <p className="poster-p">
            支持几何天气图标扩展和Chronus图标包。
          </p>
        </div>
        <div className="grid col-span-full grid-cols-3 my-4 justify-items-center gap-6 md:(col-span-2 mt-24)">
          {
            weatherIcons.map(i => (
              <div key={i} className="mx-auto size-16 select-none md:(size-24)">
                <img src={`/icons/${i}`} alt={i} className="size-full" loading="lazy" decoding="async" />
              </div>
            ))
          }
        </div>
        <div>
          <Tabs onClick={() => { }}>
            <SecondaryTab data-value={1} key="1">Secondary 1</SecondaryTab>
            <SecondaryTab data-value={2} key="2">Secondary 2</SecondaryTab>
            <SecondaryTab data-value={3} key="3">Secondary 3</SecondaryTab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

interface RandomColorProps {
  colors: string[]
}

export function RandomColor({ colors }: RandomColorProps) {
  return (
    <div
      className="grid col-span-full grid-cols-4 my-4 grow justify-items-center gap-8 md:(col-span-2 mt-24)"
    >
      {
        colors.map(c => (
          <span
            key={c}
            className="relative size-14 rounded-50 shadow-md md:(size-18)"
            style={{ backgroundColor: `#${c}` }}
          >
            <Ripple />
          </span>
        ))
      }
    </div>
  )
}

interface IconPreviewProps {
  children: React.ReactNode
}

export function IconPreview({ children }: IconPreviewProps) {
  return (
    <div className="relative grid col-span-full grid-cols-3 cursor-pointer gap-6 rounded-4 from-[rgba(41,170,224,0.1)] to-[rgba(108,128,208,0.2)] bg-gradient-to-rb p-4 shadow-sm">
      <Ripple />
      {children}
    </div>
  )
}
