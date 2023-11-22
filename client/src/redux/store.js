import { createStore, applyMiddleware, compose } from 'redux' // applyMiddleware es la funcionalidad que nos permitira hacer las consultas a una API externa 
import thunk from 'redux-thunk'; // es el middleware para hacer peticiones por fuera de la aplicacion 
import rootReducer from './reducer';


const composeEnhancers = 
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  ||
        compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store; 