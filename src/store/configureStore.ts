import { composeWithDevTools } from "redux-devtools-extension";
import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, reducers, sagas } from ".";
import createSagaMiddleware from "redux-saga";

export default function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware({});

  const store = createStore<ApplicationState, any, any, any>(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}
