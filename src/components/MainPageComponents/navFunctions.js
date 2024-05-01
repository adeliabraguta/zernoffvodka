export const navigation = (dir,slider, sliderWidth, slideWidth) => {
    const distance = dir === "nextBtn" ? -slideWidth : slideWidth
    !slider.style.left && (slider.style.left = `0px`)

    const currentLeft = parseInt(slider.style.left)
    let newLeft = currentLeft + distance

    if (-newLeft > sliderWidth) {
        slider.style.left = `${-sliderWidth}px`
    } else if (newLeft > 0) {
        slider.style.left = '0px'
    } else {
        slider.style.left = `${newLeft}px`
    }
    if (dir === "nextBtn" && Math.abs(newLeft) >= sliderWidth) {
        slider.style.left = '0px'
    }
    if (dir === "backBtn" && newLeft > 0) {
        slider.style.left = `${-sliderWidth}px`
    }
}
