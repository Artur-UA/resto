import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'//это компонент высшего порядка. он нам нужен только для того, чтобы не писать везде Consumer, это нужно чтбы передавать везде state где нужно        MenuList получает из констекста доступ к сервису 
import {menuLoaded, menuRequested, menuError} from '../../actions'

import './menu-list.scss';
import Spinner from '../spinner/spinner';
import Error from '../error'

class MenuList extends Component {
    
    componentDidMount(){
        this.props.menuRequested();//перед тем как компонент будет загржен, появится этот action 
        const {RestServ} = this.props; //приходит из WithRestoService, а туда они приходит аж из app.js, а туда приходит из папки services/resto-service

        RestServ.getMenuItem() //экземпляр уже создан ранее в app.js. ПО этому можно сразу идти к getMenuItem. там мы получаем promise/ и сейчас его нужно обработать
        .then(res => this.props.menuLoaded(res))
        .catch(error => this.props.menuError())

    }

   /*  componentDidCatch() { ошибка обработана в .error 
        this.props.menuError()
    } */

    render() {
        console.log(this.props);
        const {menuItems,loading, error } = this.props; //вытягиваем из props и сразу деструктурируем 

        if (error) {
            return <Error/>
        }
        if(loading){
            return <Spinner/>
        }

        return (
            <ul className="menu__list">

                {
                    menuItems.map(menuItem => {//приходит массив, который перебираем и потом данные по каждому пункту меню(ресторанное) передаем в menu-list-item b там каждое по отдельности рендерим 
                        return <MenuListItem 
                                    key={menuItem.id} 
                                    menuItem={menuItem}/>//на основании єтих данніх будет построена карточка
                    }) 
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        menuItems: state.menu, //state.menu это то что мы создали в index.js, главный state.  Это записывается в menuItems, он вытягивается в render (в этом же файле) и тут же вытягивается, а потом он разбирается методом map b отправляется поштучно в MenuListItem, где уже подставляется в нужные места 
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => { //menuLoaded это функция, которая в этом файле при вызове componentDidMount получает в себя данные из сервера. потом она эти данные при вызове dispatch ложит в store, которое ложит в menu и они таким образом рендарятся. тоесть пришли с сервака, а эти функция mapDispatchToProps отправила их в store, и при изменении store react перерисует данные. 
            dispatch(menuLoaded(newMenu)) //обьяснение и развернутый ответ чуть ниже   menuLoaded(actions/index) это наш action, который потом идет в reducers 

            /* dispatch({  переписал, так как action сделан в отдельном файле
                type: 'MENU_LOADED',
                payload: newMenu//newMenu это данные с сервера, они в файле reducer/index.js перезапишутся в menu, что в свою очередь перезапишет state, и уже из state это все будет рендерится 
            }) */
        },
        
        menuRequested: () => { //теперь компонент умеет читать это действие и его использовать  (запуск action со спинером)
            dispatch(menuRequested())
            
        },

        menuError: () => {
            dispatch(menuError())
        }
    }
} 

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));//композиция компонентов высшего порядка 
//connect позволяет связать вместе наш компонент и redux.  Action и state это чисто redux работа, react их не знает как понять, и благодаря connect мы их соединяем 

//mapStateToProps это то что мы получаем из redux и  используем єто в react(компоненте)

//WithRestoService это компонент высшего порядка, благодаря которому мы отправляем данные из нашего компонента обратно в store. Суть его в том, что  нам нужен сервис который загружает данные с сервера( в нашем случае это services/resto-service) В самом главном index.js. мы оборачиваем все внутринаходящиеся файлы этим WithRestoService которому передаем в качестве value копию сервиса нашего(Resto-serv тот который данные получает с бека), и он как props передает его в наш этот файл MenuList. вытягиваем его в componentDidMount. далее в mapDispatchToProps

//mapDispatchToProps тепер уже то, что мы получили от сервиса мы обрабатывает, прописіваем там или вставляем из-вне action и возвращаем его в redux. в action мы прописываем что он может делать( в нашем случае меняет state в redux )

//потом после обработки 15 строка идет render, где уже рендерятся измененные данные(которые уже пришли из сервака)  
//const {menuItems} = this.props  эти даные уже получаются с redux.store, записываем данные в store мы в mapStateToProps. страница два раза рендерится, сначала с пустым state.menu, а потом ужекогда данные пришли с сервера он их быстро перерисует 

//mapStateToProps говорим каие именно свойства из нашего store  будем использовать в этом компоненте
//mapDispatchToProps делает действие в нашем случае он говрит что мы вытаскиваем условие этого действия из action/index там говорится что у нас есть такой тип(MENU_LOADED), и есть paylload, который в себя примет приходящее значение(в нашем случае это res ) в строчке         .then(res => this.props.menuLoaded(res)) мы передаем в action res. там он ставится в payload 