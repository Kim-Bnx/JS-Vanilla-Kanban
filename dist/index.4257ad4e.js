// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4Lkt2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9d88be974257ad4e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9OMkf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _listJs = require("./list.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _cardJs = require("./card.js");
var _cardJsDefault = parcelHelpers.interopDefault(_cardJs);
var _tagJs = require("./tag.js");
var _tagJsDefault = parcelHelpers.interopDefault(_tagJs);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const app = {
    // Init function 
    init: async function() {
        app.addListeners();
        await app.getListFromAPI();
    },
    addListeners: function() {
        // Open new list modals
        document.querySelector("#addListButton").addEventListener("click", (0, _listJsDefault.default).showAddModal);
        // Close all modals
        const modalButtons = document.querySelectorAll(".close, .modal-background");
        modalButtons.forEach((button)=>button.addEventListener("click", (0, _utilsJsDefault.default).hideModals));
        // Submit new list form
        document.querySelector("#addListForm").addEventListener("submit", (0, _listJsDefault.default).handleAddForm);
        // Submit new card form
        document.querySelector("#addCardForm").addEventListener("submit", (0, _cardJsDefault.default).handleAddForm);
        // Submit updated tags form
        document.querySelector("#addTagForm").addEventListener("submit", (0, _tagJsDefault.default).handleCustomTag);
    },
    // GET LIST FROM THE API
    // With cards and tags includes
    getListFromAPI: async function() {
        let response;
        try {
            response = await fetch("/lists", {
                method: "GET"
            });
        } catch (error) {
            console.error(error);
        }
        if (response && response.ok) {
            const lists = await response.json();
            lists.forEach((list)=>{
                (0, _listJsDefault.default).makeInDOM(list); // Create list in DOM
                list.cards.forEach((card)=>{
                    (0, _cardJsDefault.default).makeInDOM(card); // Create card
                    card.tags.forEach((tag)=>{
                        (0, _tagJsDefault.default).makeInDOM(tag); // Create tag
                    });
                });
                // Make all the lists draggable
                const listContainer = document.querySelector(".list-container");
                Sortable.create(listContainer, {
                    draggable: ".panel",
                    onEnd: (0, _listJsDefault.default).handleDragList // update list position on release
                });
            });
        }
    }
};
// Start when DOM fully loaded
document.addEventListener("DOMContentLoaded", app.init);

},{"./list.js":"bC2qY","./card.js":"4Qdi8","./tag.js":"dUFsd","./utils.js":"1Si2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bC2qY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _cardJs = require("./card.js");
var _cardJsDefault = parcelHelpers.interopDefault(_cardJs);
const listModule = {
    // CREATE LIST HTML ELEMENT
    makeInDOM: function(list) {
        const list_template = document.querySelector("#listTemplate").content, listHTML = document.importNode(list_template, true);
        listHTML.querySelector(".panel").setAttribute("data-list-id", list.id);
        listHTML.querySelector(".panel").setAttribute("data-list-position", list.position);
        listHTML.querySelector(".list-name").textContent = list.name;
        // Update the form for modifications
        listHTML.querySelector('[name="id"]').value = list.id;
        listHTML.querySelector('[name="name"]').value = list.name;
        // Event listeners
        listHTML.querySelector("#addCardButton").addEventListener("click", (0, _cardJsDefault.default).showAddModal);
        listHTML.querySelector("h2").addEventListener("dblclick", listModule.showEditList);
        listHTML.querySelector("form").addEventListener("submit", listModule.handleEditForm);
        listHTML.querySelector("#deleteListButton").addEventListener("click", listModule.handleDelete);
        // Make the cards draggable
        const cardContainer = listHTML.querySelector(".panel-block");
        Sortable.create(cardContainer, {
            group: "list",
            draggable: ".box",
            onEnd: (0, _cardJsDefault.default).handleDragCard // update list position on release
        });
        // Add list in dom 
        document.querySelector(".list-container").appendChild(listHTML);
    },
    // ADD LIST
    // Show modal for adding list
    showAddModal: function() {
        const listNb = document.querySelectorAll(".panel").length;
        const listModal = document.querySelector("#addListModal");
        listModal.querySelector('[name="position"]').value = listNb + 1;
        document.querySelector("#addListModal").classList.add("is-active");
    },
    // ADD LIST
    // Submit the form
    handleAddForm: async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const payload = {};
        formData.forEach((value, key)=>payload[key] = value);
        let response;
        try {
            response = await fetch("/lists", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                const newList = await response.json();
                listModule.makeInDOM(newList); // make new list in DOM
                // Scroll at the end of the container
                const listContainer = document.querySelector(".list-container");
                listContainer.scrollTo(listContainer.scrollWidth, 0);
                event.target.reset(); // reset input                      
                (0, _utilsJsDefault.default).hideModals();
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }
        } catch (error) {
            alert(error.message);
        }
    },
    // EDIT LIST
    // Show edit form
    showEditList: function(event) {
        event.target.classList.add("is-hidden");
        event.target.nextElementSibling.classList.remove("is-hidden");
    },
    // EDIT LIST
    // Submit the edit list title form
    handleEditForm: async function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const editedList = event.target.closest(".panel");
        let response;
        try {
            response = await fetch("/lists/" + editedList.dataset.listId, {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.get("name")
                })
            });
            if (response.ok) {
                const edit = await response.json();
                editedList.querySelector(".list-name").textContent = edit.name;
                editedList.querySelector("form").classList.add("is-hidden");
                editedList.querySelector("h2").classList.remove("is-hidden");
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }
        } catch (error) {
            alert(error.message);
        }
    },
    // DELETE LIST
    // Submit a delete list
    handleDelete: async function(event) {
        const deletedList = event.target.closest(".panel");
        const confirm = window.confirm("Are you sure you want to delete this list?");
        if (confirm) {
            let response;
            try {
                response = await fetch("/lists/" + deletedList.dataset.listId, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) deletedList.remove();
                else {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.error);
                }
            } catch (error) {
                alert(error.message);
            }
        }
    },
    // UPDATE LIST POSITION
    // Save the list position
    handleDragList: async function() {
        const lists = document.querySelectorAll(".panel");
        lists.forEach(async (lists, index)=>{
            // This formData is empty (there is no form on the DOM)
            // it will be manually set with the index
            const formData = new FormData();
            formData.set("position", index);
            let response;
            try {
                response = await fetch("/lists/" + lists.dataset.listId, {
                    method: "PATCH",
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                });
                const json = await response.json();
                if (!response.ok) throw json;
            } catch (error) {
                alert("A problem occurred while updating the new list position.");
                console.error(error);
            }
        });
    }
};
exports.default = listModule;

},{"./utils.js":"1Si2V","./card.js":"4Qdi8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Si2V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const utils = {
    hideModals: function() {
        document.querySelectorAll(".modal").forEach((modal)=>modal.classList.remove("is-active"));
    }
};
exports.default = utils;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4Qdi8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _tagJs = require("./tag.js");
var _tagJsDefault = parcelHelpers.interopDefault(_tagJs);
const cardModule = {
    // CREATE CARD HTML ELEMENT
    makeInDOM: function(card) {
        const cardTemplate = document.querySelector("#cardTemplate").content, cardHTML = document.importNode(cardTemplate, true), cardContainer = document.querySelector(`[data-list-id="${card.list_id}"] .panel-block`);
        cardHTML.querySelector(".box").setAttribute("data-card-id", card.id);
        cardHTML.querySelector(".box").setAttribute("data-card-position", card.position);
        cardHTML.querySelector(".card-name").textContent = card.title;
        // Update the form for modifications
        cardHTML.querySelector('[name="id"]').value = card.id;
        cardHTML.querySelector('[name="title"]').value = card.title;
        // Event listeners
        cardHTML.querySelector("#editCardButton").addEventListener("click", cardModule.showEditForm);
        cardHTML.querySelector("form").addEventListener("submit", cardModule.handleEdit);
        cardHTML.querySelector("#deleteCardButton").addEventListener("click", cardModule.handleDelete);
        cardHTML.querySelector("#customTagButton").addEventListener("click", (0, _tagJsDefault.default).showCustomModal);
        // Add the new card in DOM
        cardContainer.appendChild(cardHTML);
    },
    // ADD CARD
    // Show modal for adding card
    showAddModal: function(event) {
        // Get the list ID
        const list = event.target.closest(".panel");
        // Count the number of cards to determine the position of the new one
        const cardsNb = list.querySelectorAll(".box").length;
        const listId = list.dataset.listId; // dataset["list-id"]
        const cardModal = document.querySelector("#addCardModal");
        // For the hidden input
        cardModal.querySelector('[name="list_id"]').value = listId;
        cardModal.querySelector('[name="position"]').value = cardsNb + 1;
        document.querySelector("#addCardModal").classList.add("is-active");
    },
    // ADD CARD
    // Submit the new card form
    handleAddForm: async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const payload = {};
        formData.forEach((value, key)=>payload[key] = value);
        console.log(payload);
        let response;
        try {
            response = await fetch("/cards", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (response && response.ok) {
                const newCard = await response.json();
                console.log(newCard);
                cardModule.makeInDOM(newCard);
                event.target.reset(); // reset input
                (0, _utilsJsDefault.default).hideModals();
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    },
    // EDIT CARD
    // Show the input to edit the card title
    showEditForm: function(event) {
        const editedCard = event.target.closest(".box");
        editedCard.querySelector(".card-name").classList.add("is-hidden");
        editedCard.querySelector(".card-name").nextElementSibling.classList.remove("is-hidden");
    },
    // EDIT CARD
    // Sumbit update card title
    handleEdit: async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const payload = {};
        formData.forEach((value, key)=>payload[key] = value);
        // Get the card
        const editedCard = event.target.closest(".box");
        let response;
        try {
            response = await fetch("/cards/" + payload.id, {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                const edit = await response.json();
                editedCard.querySelector(".card-name").textContent = edit.title; // Change the DOM title
                editedCard.querySelector("form").classList.add("is-hidden");
                editedCard.querySelector(".card-name").classList.remove("is-hidden");
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }
        } catch (error) {
            alert(error.message);
        }
    },
    // DELETE CARD
    handleDelete: async function(event) {
        const deletedCard = event.target.closest(".box");
        const confirm = window.confirm("Are you sure you want to delete this card?");
        if (confirm) {
            let response;
            try {
                response = await fetch("/cards/" + deletedCard.dataset.cardId, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) deletedCard.remove();
                else {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.error);
                }
            } catch (error) {
                alert(error.message);
            }
        }
    },
    // UPDATE CARD POSITION
    handleDragCard: function(event) {
        let cards = event.from.querySelectorAll(".box");
        // Save the position
        cardModule.updateCards(cards);
        // If the card is still in the same list, the function end there
        if (event.from === event.to) return;
        // Get the new card list and its id
        cards = event.to.querySelectorAll(".box");
        const listId = event.to.closest(".panel").dataset.listId;
        // Save the position and the list container
        cardModule.updateCards(cards, listId);
    },
    // SAVE CARD MODIFICATION IN API
    updateCards: async function(cards, listId = null) {
        cards.forEach(async (cards, index)=>{
            // formData is empty (no form on DOM)
            // manually set with the index (and list container if there is a new one)
            const formData = new FormData();
            formData.set("position", index);
            if (listId) formData.set("list_id", listId);
            let response;
            try {
                response = await fetch("/cards/" + cards.dataset.cardId, {
                    method: "PATCH",
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                });
                const json = await response.json();
                if (!response.ok) throw json;
            } catch (error) {
                alert("A problem occurred while updating the new list position.");
                console.error(error);
            }
        });
    }
};
exports.default = cardModule;

},{"./utils.js":"1Si2V","./tag.js":"dUFsd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUFsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const tagModule = {
    // CREATE TAG HTML ELEMENT
    makeInDOM: function(tag) {
        const tagDOM = document.createElement("span");
        tagDOM.dataset.tagId = tag.id;
        tagDOM.textContent = tag.name;
        tagDOM.style.backgroundColor = tag.color;
        tagDOM.classList.add("tag", "has-text-white");
        // Get card container
        const cardDOM = document.querySelector(`.box[data-card-id="${tag.card_has_tag.card_id}"]`);
        // Add tag in DOM
        cardDOM.querySelector(".tags").appendChild(tagDOM);
    },
    // CREATE CHECKBOX INPUT ELEMENT FOR FORM
    makeInForm: function(tag, isChecked) {
        // Label
        const label = document.createElement("label");
        label.classList.add("checkbok", "is-block");
        label.setAttribute("data-tags-id", tag.id);
        label.textContent = tag.name;
        // Checkbox input
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", tag.name);
        // Check status
        input.checked = isChecked;
        label.prepend(input); // child of the label
        // Add input in the form dom
        document.querySelector("#addTagModal .field").append(label);
    },
    // UPDATE TAG CARD
    // Show modal to customize the tag card
    showCustomModal: async function(event) {
        // Get the card
        const card = event.target.closest(".box");
        const cardId = card.dataset.cardId;
        // Target the modal and update the form with the card id
        const modal = document.querySelector("#addTagModal");
        modal.querySelector('[name="id"]').value = cardId;
        // Get all the tags of the card to make an array with their id
        const cardTags = Array.from(card.querySelectorAll(".tag"));
        const associatedTagId = cardTags.map((tag)=>parseInt(tag.dataset.tagId));
        let response;
        try {
            // Fetch all the API tags to display them in the form
            response = await fetch("/tags", {
                method: "GET"
            });
            if (response.ok) {
                const tags = await response.json();
                // Empty the form so it doesn't interfere with other modifications tag
                const field = document.querySelector("#addTagModal .field");
                field.innerHTML = "";
                tags.forEach((tag)=>{
                    // Check the box if the tag is already associated with the card
                    if (associatedTagId.includes(tag.id)) tagModule.makeInForm(tag, true);
                    else tagModule.makeInForm(tag, false);
                });
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }
        } catch (error) {
            alert(error.message);
        }
        // Show modal
        document.querySelector("#addTagModal").classList.add("is-active");
    },
    // UPDATE TAG CARD
    // Submit the modificated tags
    handleCustomTag: async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // To have the card id
        const param = {};
        formData.forEach((value, key)=>param[key] = value);
        // Get all the check input tag
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const checkedIds = [];
        // Get the id of the check input tag
        checkboxes.forEach((checkbox)=>{
            const tagId = checkbox.parentElement.getAttribute("data-tags-id");
            if (tagId) checkedIds.push(parseInt(tagId, 10)); // Parsing the ID as an integer
        });
        // Prepare the payload in the right format
        const payload = {
            tagsId: JSON.stringify([
                ...checkedIds
            ])
        };
        let response;
        try {
            response = await fetch("/cards/" + param.id + "/tags", {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                const card = await response.json();
                // Select the card and empty the old associate tag
                const field = document.querySelector(`[data-card-id="${card.id}"] .tags`);
                field.innerHTML = "";
                // Add the new associated tag
                card.tags.forEach((tag)=>{
                    tagModule.makeInDOM(tag, true);
                });
                (0, _utilsJsDefault.default).hideModals();
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }
        } catch (error) {
            alert(error.message);
        }
    }
};
exports.default = tagModule;

},{"./utils.js":"1Si2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4Lkt2","9OMkf"], "9OMkf", "parcelRequire84d9")

//# sourceMappingURL=index.4257ad4e.js.map
