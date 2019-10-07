import {createStore} from 'redux'
import AppReducer from './app/reducer.app.redux'

const rootStore = createStore(
    AppReducer
)

export default rootStore;