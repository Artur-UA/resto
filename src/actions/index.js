const menuLoaded = (newMenu) => {
    return{
        type:'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return{
        type:'MENU_REQUESTED'
    }
}

const menuError = () => {
    return{
        type:'MENU_ERROR'
    }
}

const onDelete = () => {
    return{
        type:'ON_DELETE'
    }
}

const addCart = (id) => {
    return{
        type:'ADD_CART',
        payload: id //id передается как параметр, по этому id мы будем знать что нужно добавить
    }
}
export {
    menuLoaded,
    menuRequested,
    menuError,
    onDelete,
    addCart
}