
import RedirectApi from "./lib/index.js";
import * as data from "./data.js";

const redirectApi = new RedirectApi(data);

export default redirectApi.handler.bind(redirectApi);
