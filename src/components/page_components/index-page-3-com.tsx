export default function Icons() {
    return (
        <div className="absolute top-0 grid grid-cols-4 md:grid-cols-6 mx-auto gap-4 h-240 overflow-hidden w-full justify-items-center items-center">
            {Array.from({ length: 48 }).map((_, index) => (
                <Icon key={index} />
            ))}
        </div>
    )
}

function Icon() {
    const randomColor = getRandomColor();
    const randomBorderRadius = getRandomBorderRadius();
    return (
        <div className="size-12 shadow-md" style={{ backgroundColor: randomColor, borderRadius: randomBorderRadius }}>
            <div className="size-full  bg-white bg-op-20 scale-75 transform-origin-c" style={{ borderRadius: randomBorderRadius }} />
        </div>
    );
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomBorderRadius() {
    return Math.random() > 0.5 ? '0.25rem' : '50%';
}
