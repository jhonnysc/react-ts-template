import { Store, createStore, applyMiddleware, compose } from "redux";
import { ApplicationState, reducers, sagas } from ".";
import createSagaMiddleware from "redux-saga";

function configureStore(): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore<ApplicationState, any, any, any>(
    reducers,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);
  return store;
}

function configureStoreDev(): Store<ApplicationState> {
  const { composeWithDevTools } = require("redux-devtools-extension");
  const reactotron = require("../configs/reactotron");

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

export default process.env.NODE_ENV === "development"
  ? configureStoreDev
  : configureStore;
