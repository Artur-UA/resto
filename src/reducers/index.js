const initialState = {//изначальный staste
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED'://  LOADED(CONFIRMED)- успех, что-то типа загрузили  \если будет в action файл, в котором будет action.type =MENU_LOADED то тогда мы перепишем наш state, вместо menu: [] мы запишем в него то что было в этом action в пункте payload(тоесть данные которые пришли с сервера)  actions это наша функция menuLoaded из 'actions/index' 
            return{
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':   // REQUESTED - обычно запрос к серверной части. 
            return{
                menu: state.menu, //если убрать вообще, то мы menu удалим вовсе. а так мы загружаем что есть в initial state 
                loading: true,
                error: false
        };
        case 'MENU_ERROR':   // ERROR - ошибка 
        return{
            menu: state.menu, //если убрать вообще, то мы menu удалим вовсе. а так мы загружаем что есть в initial state 
            loading: false,
            error: true
    };
        default: 
            return state;
    }
}

export default reducer;