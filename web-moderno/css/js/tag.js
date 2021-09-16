const colors = {
    p: '#F44336',
    div: '#E91E63',
    span: '#9C27B0',
    section: '#673AB7',
    ul: '#5e35b1',
    ol: '#3f51d5',
    header: '#E91E20',
    nav: '#5ee5b1',
    main: '#5e35b1',
    footer: '#1f10c1',
    form: '#1e35c1',
    body: '#3e35b1',
    default: '#616161',
    get(tag) {
        return this[tag] || this.default;
    }

}

document.querySelectorAll('.tag').forEach( box => {
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor = colors.get(tagName)
    if (!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})