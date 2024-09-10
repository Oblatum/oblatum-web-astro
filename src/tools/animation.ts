/**
 * 动画函数接口
 */
interface AnimateFunction {
    (target: any, index: number): void
}

/**
 * 观察元素并为其子元素执行动画。
 *
 * @param {Element} element - 要观察的元素。
 * @param {NodeListOf<HTMLParagraphElement>} items - 要应用动画的子元素集合。
 * @param {(item: Element, index: number) => void} animateFn - 动画函数，接受子元素和索引作为参数。
 * @param {boolean} isOnce - 是否只执行一次动画。如果为 true，动画执行完毕后取消观察。
 */
export function observeAndAnimateForList(element: Element, items: NodeListOf<HTMLParagraphElement>, animateFn: AnimateFunction, isOnce: boolean) {
    if (element && items) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    items.forEach((item, index) => {
                        animateFn(item, index)
                    })
                    if (isOnce) {
                        // 取消对 element 的观察，确保动画只执行一次
                        observer.unobserve(element)
                    }
                }
            })
        })
        observer.observe(element)
    }
}
