const initialState = {//изначальный staste
    menu: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED'://если будет в action файл, в котором будет action.type =MENU_LOADED то тогда мы перепишем наш state, вместо menu: [] мы запишем в него то что было в этом action в пункте payload(тоесть данные которые пришли с сервера)  actions это наша функция menuLoaded из 'actions/index'
            return{
                menu: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;