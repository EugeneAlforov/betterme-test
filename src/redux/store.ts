import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import testReducer, { TestState } from './test/test.reducer';


export const rootReducer = combineReducers({
  test: testReducer,
});

const reduxDevToolsCompose = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
const shouldUseReduxDevTools = reduxDevToolsCompose;

const composeEnhancers = shouldUseReduxDevTools ? reduxDevToolsCompose : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware()),
);

export interface State {
  test: TestState;
}

export default store;
