import { GitHubUser } from "../interface/github-interface.js";
import { applyApiAtHtml } from "../utils/dom-data.js";
import { domUpdater } from "./dom-injector.js";
import { EventEmitter } from "./event-emiter.js";

function action (api : GitHubUser) {
    const apiInHtml = applyApiAtHtml(api);
    domUpdater(apiInHtml);
}

EventEmitter.sub(action, 'resultado');