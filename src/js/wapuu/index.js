import $ from 'jquery';

export const createWapuu = (className, href) => {
    const wapuu = $('<a />', {
        class: className,
        href: href,
    })

    return {
        getWapuuEl: wapuu,
        attachTo: el => $(el).append(wapuu),
        show: () => wapuu.addClass('visible'),
        hide: () => wapuu.removeClass('visible'),
    }
}