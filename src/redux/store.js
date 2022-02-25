import { compose, createStore } from "redux";
import { persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage";

import middleware from "./middleware";
import reducers from "./reducers";
import { migrations } from "./migrations";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: [],
    migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, reducers);

const enhancer = compose(middleware);
export default createStore(persistedReducer, enhancer);
