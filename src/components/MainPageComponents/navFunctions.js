export const next = (el) => {
    if (el.scrollLeft >= (el.scrollWidth - el.clientWidth)) {
        el.scrollTo({
            left: 0,
            behavior: 'smooth'
        })
    } else {
        el.scrollBy({
            left: 200,
            behavior: 'smooth'
        })
    }
}

export const back = (el) => {
    if (el.scrollLeft <= 0) {
        el.scrollTo({
            left: el.scrollWidth - el.clientWidth,
            behavior: 'smooth'
        })
    } else {
        el.scrollBy({
            left: -200,
            behavior: 'smooth'
        })
    }
}