const initialState = {//изначальный staste
    menu: [],
    loading: true,
    error: false,
    items: [
        {
			"title": "Cesar salad",
			"price": 112,
			"url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
			"category": "salads",
			"id": 1
		},
		{
			"title": "Pizza Margherita",
			"price": 10,
			"url": "https://image.freepik.com/free-photo/large-margherita-pizza-on-wooden-chopping-board_23-2147926084.jpg",
			"category": "pizza",
			"id": 2
		}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED'://  LOADED(CONFIRMED)- успех, что-то типа загрузили  \если будет в action файл, в котором будет action.type =MENU_LOADED то тогда мы перепишем наш state, вместо menu: [] мы запишем в него то что было в этом action в пункте payload(тоесть данные которые пришли с сервера)  actions это наша функция menuLoaded из 'actions/index' 
            return{
                ...state, //сначала возвращает предыдущий state, а уже потом отдельно пишем то, что мы изменяем. 
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':   // REQUESTED - обычно запрос к серверной части. 
            return{
                ...state,
                menu: state.menu, //если убрать вообще, то мы menu удалим вовсе. а так мы загружаем что есть в initial state 
                loading: true,
                error: false
        };
        case 'MENU_ERROR':   // ERROR - ошибка 
            return{
                ...state,
                menu: state.menu, //если убрать вообще, то мы menu удалим вовсе. а так мы загружаем что есть в initial state 
                loading: false,
                error: true
    };
        default: 
            return state;
    }
}

export default reducer;