import React, { useRef } from 'react'
import type { RawNodeDatum } from 'react-d3-tree/lib/types/common'

export const NodeEditMenu = ({ node, addNode }: { node: RawNodeDatum | null, addNode: (arg0: string) => void }): JSX.Element => {
    const textRef = useRef<HTMLInputElement | null>(null)


    const confirmNodeAdd = () => {
        if (textRef.current !== null) {
            addNode(textRef.current.value)
            textRef.current.value = ""
        }
    }

    return <div className="node_edit_menu">
        <button>Save tree</button>
        <button>Get most recent tree</button>
        {node !== null &&
            <div>
                <hr />
                EDIT NODE <b>{node.name}</b>
                {(node.children ?? []).map((child) => {
                    <div className="subsection">
                        {child.name}
                        <hr />
                        <button>DELETE ME</button>
                    </div>
                })}
                <br />
                <input ref={textRef} type="text" placeholder="add child"></input>
                <button onClick={confirmNodeAdd}>add child</button>
            </div>
        }
    </div >
}