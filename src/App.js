import React from './react'

function Foo() {
    return <div>Foo</div>
}

export function App() {

    return <div style={{width: 50}}>
        <div>hello</div>
        <Foo/>
    </div>
}