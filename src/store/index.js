import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({
    // state: {
    //     likes: 2,
    //     isAuth: false
    // },
    // // Обязательно что-то возвращать!
    // getters: {
    //     doubleLikes(state) {
    //         return state.likes * 2
    //     }
    // },
    // // Мутации для изменения состояния объектов
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1
    //     }
    // },
    // // Функции использующие мутации
    // actions: {
    //
    // },
    // // Во избежание засорения стора - модули, которые представлчяют собой то же ядро vuex, но разбитое на маленькие части
    modules: {
        post: postModule
    }


})

