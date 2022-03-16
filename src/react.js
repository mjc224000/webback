class ReactElement {
    type;
    props;
    children;
    father

    constructor({
                    type,
                    props,
                    children, father
                }) {
        this.type = type;
        this.props = props;
        this.children = children;
        this.father = father
    }
}

function createElement(tagName, props, ...children) {
    if (typeof tagName === "function") {
        
        return tagName();
    }

    if (typeof tagName === "string") {
        return new ReactElement({tagName, props, children})
    }
}

export default {
    createElement
}