import { composeWithDevTools } from "redux-devtools-extension";
import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, reducers, sagas } from ".";
import createSagaMiddleware from "redux-saga";
import reactotron from "../configs/reactotron";

function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore<ApplicationState, any, any, any>(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
 );
 
  sagaMiddleware.run(sagas);
  return store;
}

function configureStoreDev(): Store<ApplicationState> {
  const sagaMonitor = reactotron.createSagaMonitor!();
  const actionsMonitor = reactotron.createEnhancer!();
  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor,
  });

  const store = createStore<ApplicationState, any, any, any>(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware), actionsMonitor)
 );

  sagaMiddleware.run(sagas);

  return store;
}


export default process.env.NODE_ENV === 'development' ? configureStoreDev : configureStore