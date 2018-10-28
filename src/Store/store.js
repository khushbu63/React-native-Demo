import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'; //allows you to write action creators that return a function instead of an action
import { createLogger } from 'redux-logger'; //logs out state in console
import rootReducer  from '../Reducers';
import RootSaga from 'App/sagas';

const logger = createLogger();
const sagaMiddleware=createSagaMiddleware();
const runSagaMiddleware=()=>{
  sagaMiddleware.run(RootSaga);
}
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger),
    runSagaMiddleware, 
  );
  };