import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

function getMiddleware() {
    return createLogger();
}

export default applyMiddleware(getMiddleware());
