import { devToolsEnhancer } from '@redux-devtools/extension';

const { createStore } = require('redux');
const { rootReducer } = require('./rootReducer');

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
