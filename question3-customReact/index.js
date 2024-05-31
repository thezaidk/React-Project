const reactElement= {
    type: 'a',
    props: {
        href: "https://chat.openai.com/chat",
        target: "_blank",
        text: "Open in ChatGPT"
    }
}

function createHTML(reactElement) {
    if(reactElement.type === 'a'){
        const { href, target, text}= reactElement.props
        return `<a href="${href}" target="${target}"> ${text}</a>`
    }
    return ``
}

function customRender(reactElement, target) {
    const targetElement= document.querySelector(target)
    if(targetElement) {
        targetElement.innerHTML= createHTML(reactElement)
    }
}

customRender(reactElement, '#root')