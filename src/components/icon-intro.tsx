import { For } from "solid-js";

export default function IconIntro() {
  return (
    <>
    <div class="mt-36 mb-4 mx-2 poster grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="md:col-span-3">
      <h1 class="text-[rgba(var(--oblatum-color-primary))]">经典的</h1>
      <h1>不规则质感设计</h1>
      <p>基于Material Design，淡化了原有的质感，视感更加的和谐。</p>
    </div>
    <div
      class="grid grid-cols-4 lg:grid-cols-6 gap-6 p-4 md:col-span-3 bg-gradient-to-rb from-[rgba(41,170,224,0.1)] to-[rgba(108,128,208,0.2)] rounded-4 shadow-sm cursor-pointer"
    >
    </div>

    <Colors />
    
    <div class="block md:flex flex-col justify-end">
      <h1 class="text-[rgba(var(--oblatum-color-primary))]">天气</h1>
      <h1>图标扩展</h1>
      <p>支持几何天气图标扩展和Chronus图标包。</p>
    Colors</div>
    <div class="md:col-span-2 grid grid-cols-3 gap-6 my-4 md:mt-24">
      
    </div>
    <div class="md:col-span-3 md:mt-24">
      <h1>主题</h1>
    </div>
  </div>
    </>
  );
}

function Colors() {
  const colors = ["ff6002","32adfe","b693fd","00c562","f04e42","7dbdbc","ff4455","fc7694","ffd705","c11d22"]

  // 在 colors 中随机取出 8 个颜色，每次取到的都不同
  const colorShow = colors.sort(() => Math.random() - 0.5).slice(0, 8)

  return (
    <>
      <div class="col-span-full flex flex-col md:flex-row-reverse my-4 md:mt-24 gap-4">
        <div class="block md:flex flex-col justify-end items-end md:w-1/3">
          <h1>颜色优调</h1>
          <p>如糖果般甜</p>
        </div>
        <div class="grow md:col-span-2 grid grid-cols-4 gap-8 justify-items-center">
          <For each={colorShow}>
            {(color) => (
              <div class={`size-16 rounded-50 shadow-md`} style={{"background-color": `#${color}`}}></div>
            )}
          </For>
        </div>
      </div>
    </>
  )
}
