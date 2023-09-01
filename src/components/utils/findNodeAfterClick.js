export const findParentNodeAfterClick = (element, desireElement) => {
    if(element.tagName === desireElement) {
        return element
    }
    if(element.tagName === 'BODY') {
        return null
    }
    return findParentNodeAfterClick(element.parentNode, desireElement)
}