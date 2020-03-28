import { createStore } from 'redux';

import rootReducer from './modules/rooterReducer'

const store = createStore(rootReducer)

export default store;
