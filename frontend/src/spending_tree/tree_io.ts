import type { RawNodeDatum } from "react-d3-tree/lib/types/common";

export const updateTree = (root: RawNodeDatum, addAfter: string, name: string): RawNodeDatum => {
    //find node to update
    const toExplore: RawNodeDatum[] = [root]
    let found

    while (toExplore.length) {
        const currNode = toExplore.pop() as RawNodeDatum
        if (currNode.name !== addAfter) {
            currNode.children?.forEach((v) => toExplore.push(v))
        } else {
            found = currNode
            break
        }
    }

    if (!found) {
        throw Error('tried to add child to nonexistant node')
    } else {
        found.children ? found.children.push({
            name,
            children: []
        }) : found.children = [{
            name,
            children: []
        }]
    }

    return { ...root } //return new object so that setstate updates
}