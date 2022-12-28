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
})({"7age3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3cYfC":[function(require,module,exports) {
// Virtual DOM Utilities
var _createElement = require("./dom/createElement");
var _hyperRender = require("./dom/hyper-render");
var _mount = require("./dom/mount");
var _diff = require("./dom/diff");
// Utilities
var _pickRandomIndexUtil = require("./utils/pick-random-index.util");
//redux
var _actionHasNoTypeExceptionJs = require("./redux/exception/action-has-no-type.exception.js");
var _actionHasNoTargetExceptionJs = require("./redux/exception/action-has-no-target.exception.js");
var _actionIsNotAnObjectException = require("./redux/exception/action-is-not-an-object.exception");
const AppTree = (0, _createElement.createElement)("div", {
    props: {
        class: "container"
    },
    children: [
        (0, _createElement.createElement)("div", {
            props: {
                class: "page-Header"
            },
            children: [
                (0, _createElement.createElement)("h1", {
                    children: [
                        (0, _createElement.createElement)("i", {
                            props: {
                                class: "fa-solid fa-calendar-check"
                            }
                        }),
                        "What's Next"
                    ]
                }),
                (0, _createElement.createElement)("h4", {
                    children: [
                        "your amazing daily planer"
                    ]
                })
            ]
        }),
        (0, _createElement.createElement)("div", {
            props: {
                class: "page-Body"
            },
            children: [
                (0, _createElement.createElement)("div", {
                    props: {
                        class: "todo-container"
                    },
                    children: [
                        (0, _createElement.createElement)("div", {
                            props: {
                                class: "todo-header"
                            },
                            children: [
                                (0, _createElement.createElement)("input", {
                                    props: {
                                        id: "new-task",
                                        type: "text",
                                        placeholder: "new task"
                                    }
                                }),
                                (0, _createElement.createElement)("button", {
                                    props: {
                                        class: "todo-add"
                                    },
                                    children: [
                                        "ADD"
                                    ]
                                })
                            ]
                        }),
                        (0, _createElement.createElement)("div", {
                            props: {
                                class: "todo-body"
                            },
                            children: [
                                (0, _createElement.createElement)("ul", {
                                    props: {
                                        class: "task-list"
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        }),
        (0, _createElement.createElement)("div", {
            props: {
                class: "page-Footer"
            },
            children: [
                (0, _createElement.createElement)("div", {
                    props: {
                        class: "footer-container"
                    },
                    children: [
                        (0, _createElement.createElement)("div", {
                            props: {
                                class: "email-info"
                            },
                            children: [
                                (0, _createElement.createElement)("p", {
                                    children: [
                                        (0, _createElement.createElement)("i", {
                                            props: {
                                                class: "fa-solid fa-at"
                                            }
                                        }),
                                        "Email : amirmf831380@gmail.com"
                                    ]
                                })
                            ]
                        }),
                        (0, _createElement.createElement)("div", {
                            props: {
                                class: "phone-info"
                            },
                            children: [
                                (0, _createElement.createElement)("p", {
                                    children: [
                                        (0, _createElement.createElement)("i", {
                                            props: {
                                                class: "fa-solid fa-phone-volume"
                                            }
                                        }),
                                        "Phone Number : 0939-833-2265"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    ]
});
let AppTreeElm = AppTree;
const $app = (0, _hyperRender.hyperRender)(AppTreeElm);
const appElm = document.querySelector(".container");
(0, _mount.mount)($app, appElm);
let $rootEl = (0, _mount.mount)($app, appElm);
const newAppElm = AppTree;
const patch = (0, _diff.diff)(AppTreeElm, newAppElm);
$rootEl = patch($rootEl);
AppTreeElm = newAppElm;
function createStore(reducer, initialState) {
    if (!isFunction(reducer)) throw new Error(`Reducer should be a function, but got "${kindOf(reducer)}"`);
    if (isFunction(initialState)) throw new Error("InitialState couldn't be a function");
    let state = initialState;
    let subscribers = [];
    let isDispatching = false;
    function dispatch(action) {
        if (!isObject(action)) throw new (0, _actionIsNotAnObjectException.ActionIsNotAnObject)(action);
        if (!("type" in action)) throw new (0, _actionHasNoTypeExceptionJs.ActionHasNoType)();
        const isInitType = action.type === "@INIT";
        if (!isInitType && !("target" in action)) throw new (0, _actionHasNoTargetExceptionJs.ActionHasNoTarget)();
        if (isDispatching) throw new Error("Couldn't handle any other actions while processing");
        try {
            isDispatching = true;
            state = reducer(state, action);
        } finally{
            isDispatching = false;
            broadcast();
        }
    }
    function broadcast() {
        for (const follow of subscribers)follow();
    }
    function getState() {
        if (isDispatching) throw new Error("Some Reducers may updating and are busy. please wait...");
        return state;
    }
    function subscribe(watcher) {
        subscribers.push(watcher);
        return function unSubscribe() {
            const nodeIndex = subscribers.indexOf(watcher);
            if (nodeIndex >= 0) subscribers.splice(nodeIndex, 1);
        };
    }
    dispatch({
        type: "@INIT"
    });
    return {
        dispatch,
        getState,
        subscribe
    };
}
function shapeAssertionReducers(reducers) {
    Object.entries(reducers).forEach(([reducerKey, reducer])=>{
        const action = {
            type: "@INIT",
            target: reducerKey
        };
        const state = reducer(undefined, action);
        if (typeof state === "undefined") throw new Error(`Reducer for key ${reducerKey} returns undefined for action ${JSON.stringify(action)}`);
        const randomActionType = Math.random().toString(16).slice(2);
        const secondAction = {
            type: randomActionType,
            target: reducerKey
        };
        const secondState = reducer(undefined, secondAction);
        if (typeof secondState === "undefined") throw new Error(`Reducer for key ${reducerKey} returns undefined for action ${JSON.stringify(secondAction)}`);
    });
}
function combineReducers(reducers) {
    const finalReducers = {};
    for(const reducerKey in reducers){
        const reducer = reducers[reducerKey];
        if (isFunction(reducer)) finalReducers[reducerKey] = reducer;
    }
    let shapeError;
    try {
        shapeAssertionReducers(finalReducers);
    } catch (e) {
        shapeError = e;
    }
    return (state = {}, action)=>{
        if (shapeError) throw shapeError;
        let hasChanged = false;
        const nextState = state;
        if (action.type === "@INIT" || action.target === "*") for(const reducerKey in finalReducers){
            const reducer = finalReducers[reducerKey];
            const reducerState = state[reducerKey] || undefined;
            delete action.target;
            const newReducerState = reducer(reducerState, action);
            if (typeof newReducerState === "undefined") throw new Error(`Reducer ${reducerKey} returns undefined for action's type ${action.type}.`);
            hasChanged = hasChanged || reducerState !== newReducerState;
            nextState[reducerKey] = newReducerState;
        }
        else {
            const reducerKey1 = action.target;
            if (!(reducerKey1 in finalReducers)) throw new Error(`Target ${reducerKey1} not found in reducers`);
            const reducer1 = finalReducers[reducerKey1];
            const reducerState1 = state[reducerKey1] || undefined;
            delete action.target;
            const newReducerState1 = reducer1(reducerState1, action);
            if (typeof newReducerState1 === "undefined") throw new Error(`Reducer ${reducerKey1} returns undefined for action's type ${action.type}.`);
            hasChanged = reducerState1 !== newReducerState1;
            if (hasChanged) nextState[reducerKey1] = newReducerState1;
        }
        return hasChanged ? nextState : state;
    };
}
function kindOf(inp) {
    return Object.prototype.toString.call(inp).slice(8, -1).toLowerCase();
}
function isObject(inp) {
    return kindOf(inp) === "object";
}
function isFunction(inp) {
    return typeof inp === "function";
}
const tasksValue = localStorage.getItem("tasks");
const tasksInitialState = tasksValue ? JSON.parse(tasksValue) : [];
function taskReducer(state = tasksInitialState, action) {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    doneStatus: action.payload.doneStatus
                }
            ];
        case "DELETE":
            {
                const id = action.payload.id;
                const newList = state.filter((box)=>box.id !== id);
                return newList;
            }
        case "TOGGLE_TASK_STATUS":
            {
                const { id: id1  } = action.payload;
                const todoIndex = state.findIndex((todo)=>todo.id === id1);
                if (todoIndex >= 0) {
                    const todo = state[todoIndex];
                    todo.doneStatus = !todo.doneStatus;
                }
                return [
                    ...state
                ];
            }
        default:
            return state;
    }
}
const store = createStore(combineReducers({
    task: taskReducer
}));
window.onload = function() {
    renderTasks(store.getState().task);
};
const taskListELM = document.querySelector(".task-list");
function createTask({ id , title: titleText , doneStatus  }) {
    const liELM = document.createElement("li");
    liELM.classList.add("list__node");
    liELM.setAttribute("id", id);
    const doneButtonELM = document.createElement("button");
    doneButtonELM.classList.add("done-btn");
    const doneButtonIcon = document.createElement("i");
    doneButtonIcon.classList = "fa-regular fa-check";
    doneButtonELM.append(doneButtonIcon);
    doneButtonELM.addEventListener("click", (event)=>{
        const elementId = event.target.parentElement.parentElement.id;
        store.dispatch({
            type: "TOGGLE_TASK_STATUS",
            target: "task",
            payload: {
                id: elementId
            }
        });
    // if(doneStatus) {
    //     event.target.parentElement.parentElement.classList.add("done")
    // }
    });
    liELM.append(doneButtonELM);
    let titleDivELM;
    if (doneStatus) {
        titleDivELM = document.createElement("strike");
        titleDivELM.classList.add("title-div");
        const titleTextNode = document.createTextNode(titleText);
        titleDivELM.append(titleTextNode);
        liELM.append(titleDivELM);
    } else {
        titleDivELM = document.createElement("span");
        titleDivELM.classList.add("title-div");
        const titleTextNode1 = document.createTextNode(titleText);
        titleDivELM.append(titleTextNode1);
        liELM.append(titleDivELM);
    }
    const deleteNodeELM = document.createElement("button");
    deleteNodeELM.classList.add("delete-node-btn");
    const deleteNodeIcon = document.createElement("i");
    deleteNodeIcon.classList = "fa-solid fa-trash";
    deleteNodeELM.append(deleteNodeIcon);
    deleteNodeELM.addEventListener("click", (event)=>{
        const elementId = event.target.parentElement.parentElement.id;
        store.dispatch({
            type: "DELETE",
            target: "task",
            payload: {
                id: elementId
            }
        });
    });
    liELM.append(deleteNodeELM);
    taskListELM.append(liELM);
}
const inputValue = document.querySelector("#new-task");
const addTaskELM = document.querySelector(".todo-add");
addTaskELM.addEventListener("click", ()=>{
    if (inputValue.value) {
        store.dispatch({
            type: "ADD",
            target: "task",
            payload: {
                id: Math.random().toString(16).slice(2),
                title: inputValue.value,
                doneStatus: false
            }
        });
        inputValue.value = "";
    }
});
function renderTasks(list) {
    taskListELM.innerHTML = "";
    for (const task of list)createTask(task);
}
const unSubscribeTask = store.subscribe(()=>{
    renderTasks(store.getState().task);
    localStorage.setItem("tasks", JSON.stringify(store.getState().task));
});

},{"./dom/createElement":"dxu3Z","./dom/hyper-render":"7c8mI","./dom/mount":"eqon6","./dom/diff":"e3Iih","./utils/pick-random-index.util":"3g1lj","./redux/exception/action-has-no-type.exception.js":"kRXB6","./redux/exception/action-has-no-target.exception.js":"gfoe4","./redux/exception/action-is-not-an-object.exception":"eTgte"}],"dxu3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function createElement(type, { props ={} , children =[]  } = {}) {
    return {
        type,
        props,
        children
    };
}

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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"7c8mI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hyperRender", ()=>hyperRender);
var _isStringUtil = require("../utils/is-string.util");
const hyperRenderElement = ({ type , props ={} , children =[]  })=>{
    if (!type) throw new Error("Property type does not exist");
    const $el = document.createElement(type);
    // set attributes that should be rendered
    for (const [propKey, propValue] of Object.entries(props))if (propKey.startsWith("data")) {
        let propDataKey = propKey.slice(4);
        propDataKey = propDataKey.charAt(0).toLowerCase() + propDataKey.slice(1);
        $el.dataset[propDataKey] = propValue;
    } else $el.setAttribute(propKey, propValue);
    // set children that should be rendered
    for (const child of children){
        const $child = hyperRender(child);
        $el.appendChild($child);
    }
    return $el;
};
const hyperRender = ($node)=>{
    if ((0, _isStringUtil.isString)($node)) return document.createTextNode($node);
    return hyperRenderElement($node);
};

},{"../utils/is-string.util":"38xB2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38xB2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString);
function isString(inp) {
    return typeof inp === "string";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqon6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mount", ()=>mount);
function mount($node, $target) {
    $target.replaceWith($node);
    return $node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3Iih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diff", ()=>diff);
var _hyperRender = require("./hyper-render");
// Utilities
var _zipUtil = require("../utils/zip.util");
var _isStringUtil = require("../utils/is-string.util");
const diffProps = (oldProps, newProps)=>{
    const patches = [];
    // set new props
    for (const [propKey, propValue] of Object.entries(newProps))patches.push(($node)=>{
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        if (propKey.startsWith("data")) {
            let propDataKey = propKey.slice(4);
            propDataKey = propDataKey.charAt(0).toLowerCase() + propDataKey.slice(1);
            $node.dataset[propDataKey] = propValue;
        } else $node.setAttribute(propKey, propValue);
        return $node;
    });
    // remove old props
    for(const propKey1 in oldProps)if (!(propKey1 in newProps)) patches.push(($node)=>{
        $node.removeAttribute(propKey1);
        return $node;
    });
    return ($node)=>{
        for (const patch of patches)patch($node);
    };
};
const diffChildren = (oldChildren, newChildren)=>{
    const childPatches = [];
    oldChildren.forEach((oldChild, i)=>{
        childPatches.push(diff(oldChild, newChildren[i]));
    });
    const extraPatches = [];
    const extraChildren = newChildren.slice(oldChildren.length);
    for (const extraChild of extraChildren)extraPatches.push(($node)=>{
        $node.appendChild((0, _hyperRender.hyperRender)(extraChild));
        return $node;
    });
    return ($parent)=>{
        const zippedChilds = (0, _zipUtil.zip)(childPatches, $parent.childNodes);
        for (const [patch, child] of zippedChilds)patch(child);
        for (const patch1 of extraPatches)patch1($parent);
        return $parent;
    };
};
const diff = (oldNode, newNode)=>{
    if (newNode === undefined) return ($node)=>{
        $node.remove();
        return;
    };
    if ((0, _isStringUtil.isString)(oldNode) || (0, _isStringUtil.isString)(newNode)) {
        if (oldNode !== newNode) return ($node)=>{
            const $newNode = (0, _hyperRender.hyperRender)(newNode);
            // Replace the current node its new version. God dame it
            $node.replaceWith($newNode);
            return $newNode;
        };
        else return ()=>{};
    }
    if (oldNode.type !== newNode.type) return ($node)=>{
        const $newNode = (0, _hyperRender.hyperRender)(newNode);
        $node.replaceWith($newNode);
        return $newNode;
    };
    const patchProps = diffProps(oldNode.props, newNode.props);
    const patchChildren = diffChildren(oldNode.children, newNode.children);
    // Return a function just for applying attrs and children patches
    return ($node)=>{
        patchProps($node);
        patchChildren($node);
        return $node;
    };
};

},{"./hyper-render":"7c8mI","../utils/zip.util":"bEBB8","../utils/is-string.util":"38xB2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEBB8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip);
const zip = (xs, ys)=>{
    const zipped = [];
    for(let i = 0; i < Math.max(xs.length, ys.length); i++)zipped.push([
        xs[i],
        ys[i]
    ]);
    return zipped;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3g1lj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pickRandomIndex", ()=>pickRandomIndex);
function pickRandomIndex(arr) {
    var item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRXB6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionHasNoType", ()=>ActionHasNoType);
class ActionHasNoType extends Error {
    constructor(){
        super(`Action should have a type.`);
        this.name = "ActionHasNoType";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gfoe4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionHasNoTarget", ()=>ActionHasNoTarget);
class ActionHasNoTarget extends Error {
    constructor(){
        super(`Action should have a target.`);
        this.name = "ActionHasNoTarget";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTgte":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionIsNotAnObject", ()=>ActionIsNotAnObject);
class ActionIsNotAnObject extends Error {
    constructor(action){
        super(`Action should be an object but got ${kindOf(action)}`);
        this.name = "ActionIsNotAnObject";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7age3","3cYfC"], "3cYfC", "parcelRequire2d1f")

//# sourceMappingURL=index.b8fca702.js.map
