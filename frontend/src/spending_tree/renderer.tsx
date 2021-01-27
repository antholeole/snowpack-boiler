import React, { SyntheticEvent, useRef, useState } from 'react'
import Tree from 'react-d3-tree'
import type { RawNodeDatum } from 'react-d3-tree/lib/types/common'
import { updateTree } from './tree_io'
import { NodeEditMenu } from './node_edit_menu'
import './tree_styles.scss'

interface INodeClick {
    node: RawNodeDatum,
    location: [number, number]
}

export const TreeEditor = (): JSX.Element => {
    let treeRef = useRef<Tree | null>(null)
    const [treeState, setTreeState] = useState<RawNodeDatum>({ name: "ROOT", })
    const [clickedOnNode, setClickedOnNode] = useState<RawNodeDatum | null>(null)

    const addNode = (name: string) => {
        setTreeState(updateTree(treeState, clickedOnNode?.name ?? "", name))
    }


    return <>
        <div id="treeWrapper">
            <Tree
                ref={treeRef}
                translate={{ x: 50, y: window.screen.height / 3 }}
                data={treeState}
                onNodeClick={setClickedOnNode}
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
            />
        </div>
        <NodeEditMenu node={clickedOnNode} addNode={addNode} />
    </>
}

function makeid(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}