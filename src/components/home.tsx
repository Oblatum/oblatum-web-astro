import { Ripple } from '~/components/ui/md-ripple'

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
    <div className="relative cursor-pointer select-none rounded-4 from-[rgba(41,170,224,0.1)] to-[rgba(108,128,208,0.2)] bg-gradient-to-rb p-4 shadow-sm">
      <Ripple />
      <div className="grid col-span-full grid-cols-3 size-full gap-6">
        {children}
      </div>
    </div>
  )
}
