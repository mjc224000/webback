function handleStyle(dom, styleProps) {
    if (styleProps)
        for (let key in styleProps) {
            if (typeof styleProps[key] === "number")
                styleProps[key] += 'px'
            dom.style[key] = styleProps[key];
        }
}

function genDom(reactElement) {
    if (typeof reactElement === "string") {
        return document.createTextNode(reactElement);
    }
    const {type, children, props} = reactElement;
    let dom = document.createElement(type);
    if (props) {
        const {style} = props;
        handleStyle(dom, style);
    }
    children.forEach(function (item) {
        dom.appendChild(genDom(item));
    });

    return dom
}

function render(reactElement, src) {
    console.log(reactElement);
    let dom = genDom(reactElement);
    src.appendChild(dom);


}

export default {
    render
}