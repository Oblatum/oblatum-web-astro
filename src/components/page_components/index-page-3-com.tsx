export default function Icons() {
    return (
        <div className="index_page_3-box absolute top-0 grid grid-cols-4 mx-auto h-240 w-full items-center justify-items-center gap-4 overflow-hidden md:grid-cols-6">
            {Array.from({ length: 48 }).map((_, index) => (
                <Icon key={index} />
            ))}
        </div>
    )
}

function Icon() {
    const randomColor = getRandomColor()
    const randomBorderRadius = getRandomBorderRadius()
    return (
        <div className="index_page_3-icon size-12 shadow-sm md:(size-18)" style={{ backgroundColor: randomColor, borderRadius: randomBorderRadius }}>
            <div className="size-full transform-origin-c scale-75 bg-white bg-op-20" style={{ borderRadius: randomBorderRadius }} />
        </div>
    )
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function getRandomBorderRadius() {
    return Math.random() > 0.5 ? '0.25rem' : '50%'
}
