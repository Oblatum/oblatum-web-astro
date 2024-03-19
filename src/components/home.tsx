import MdRipple from '~/components/ui/md-ripple'

export function Home () {
  const colors = [
    "ff6002",
    "32adfe",
    "b693fd",
    "00c562",
    "f04e42",
    "7dbdbc",
    "ff4455",
    "fc7694",
    "ffd705",
    "c11d22",
  ];

  // 在 colors 中随机不连续的取出 8 个颜色，每次取到的都不同
  const randomColors = colors.sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <div className=" grid grid-flow-row-dense grid-cols-3 mx-2 mb-4 mt-36 gap-8">
      <div className="contents">
        <div className="col-span-full">
          <h1 className="text-[rgba(var(--oblatum-color-primary))] poster-h1">
            <span className="i-oblatum-blue inline-block"/>经典的
          </h1>
          <h1 className='poster-h1'>不规则质感设计</h1>
          <p className='poster-p'>
            基于Material Design，淡化了原有的质感，视感更加的和谐。
          </p>
        </div>
        <div
          className="relative grid col-span-full grid-cols-3 cursor-pointer gap-6 rounded-4 from-[rgba(41,170,224,0.1)] to-[rgba(108,128,208,0.2)] bg-gradient-to-rb p-4 shadow-sm md:(grid-cols-6)"
        ><MdRipple />
          {
            ['weather_1.png','weather_12.png','weather_19.png','weather_34.png','weather_37.png','weather_44.png'].map((i)=>(
              <div className="mx-auto size-16 md:(size-24)">
                <img src={`/icons/${i}`} alt={i} className='size-full' loading={"lazy"} decoding={"async"}/>
              </div>
            ))
          }
        </div>
      </div>

      <div className="contents">
        <div className="col-span-full flex flex-col items-start justify-end md:(col-span-1 col-start-3 items-end)">
          <h1 className='poster-h1'>颜色优调</h1>
          <p className='poster-p'>如糖果般甜</p>
        </div>

        <div
          className="grid col-span-full grid-cols-4 my-4 grow justify-items-center gap-8 md:(col-span-2 mt-24)"
        >
          {
            randomColors.map((color) => (
              <div
                className={`size-14 md:(size-18) rounded-50 shadow-md relative`}
                style={{ "backgroundColor": `#${color}` }}
              >
                <MdRipple />
              </div>
            ))
          }
        </div>
      </div>

      <div className="contents">
        <div className="col-span-1 col-span-full flex flex-col md:(col-span-1 justify-end)">
          <h1
            className="text-[rgba(var(--oblatum-color-primary))] poster-h1"
          >
            天气
          </h1>
          <h1 className='poster-h1'>图标扩展</h1>
          <p className='poster-p'>
            支持几何天气图标扩展和Chronus图标包。
          </p>
        </div>
        <div className="grid col-span-full grid-cols-3 my-4 justify-items-center gap-6 md:(col-span-2 mt-24)">
          {
            ['weather_1.png','weather_12.png','weather_19.png','weather_34.png','weather_37.png','weather_44.png'].map((i)=>(
              <div className="mx-auto size-16 md:(size-24)">
                <img src={`/icons/${i}`} alt={i} className='size-full' loading={"lazy"} decoding={"async"}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}