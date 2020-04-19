import { composeWithDevTools } from "redux-devtools-extension";
import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, reducers, sagas } from ".";
import createSagaMiddleware from "redux-saga";
import reactotron from "../configs/reactotron";

export default function configureStore(): Store<ApplicationState> {
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
