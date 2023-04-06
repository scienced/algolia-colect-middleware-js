function Uf(e, t) {
  const r = `
      <link rel="stylesheet" type="text/css" href="/style.css">
      
      <!-- search field -->
      <input type="text" name="q" value="" class="acm-searchquery" id="acm-searchfield" placeholder="Searchie" autocomplete="off">
      <!-- The Modal -->
      <div id="acm-modal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div style="display: flex; justify-content: flex-end">
            <div id="acm-close">&#x2715 </div>
          </div>
          <div id="searchbox"></div>
          <br>
          <div id="autocomplete" style="    max-width: 650px;
          margin: auto; margin-bottom: 1rem;"></div>
          <br>
          <div id="autocomplete2" style="    max-width: 650px;
          margin: auto; margin-bottom: 1rem;"></div>
          <div class="with-sidebar">
            <div class="hide-when-no-result">
              <!-- sidebar -->
              <div id="stats"></div>
              <div id="clear"></div>


              <div id="dynamic-widgets" style="margin-top: 15px;"></div>
              
            </div>
            <div>
              <!-- non-sidebar -->
              <div id="banner"></div>
              <div id="hits"></div>
            </div>
          </div>
        </div>
      </div>
      `;
  var n = document.querySelector(".a4f-searchquery-container"), i = n.attachShadow({ mode: "open" });
  i.innerHTML = r;
  var a = i.getElementById("acm-modal"), o = i.getElementById("acm-searchfield");
  o.onfocus = function() {
    a.style.display = "block", document.body.style.overflow = "hidden", document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };
  var s = i.getElementById("acm-close");
  s.onclick = function() {
    a.style.display = "none", document.body.style.overflow = "scroll", document.getElementsByTagName("html")[0].style.overflow = "scroll";
  }, window.onclick = function(u) {
    u.target == a && (a.style.display = "none");
  };
}
var Bf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ii = {}, Vf = {
  get exports() {
    return Ii;
  },
  set exports(e) {
    Ii = e;
  }
};
/*! algoliasearch.umd.js | 4.15.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Bf, function() {
    function r(g, y, b) {
      return y in g ? Object.defineProperty(g, y, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : g[y] = b, g;
    }
    function n(g, y) {
      var b = Object.keys(g);
      if (Object.getOwnPropertySymbols) {
        var S = Object.getOwnPropertySymbols(g);
        y && (S = S.filter(function(I) {
          return Object.getOwnPropertyDescriptor(g, I).enumerable;
        })), b.push.apply(b, S);
      }
      return b;
    }
    function i(g) {
      for (var y = 1; y < arguments.length; y++) {
        var b = arguments[y] != null ? arguments[y] : {};
        y % 2 ? n(Object(b), !0).forEach(function(S) {
          r(g, S, b[S]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(b)) : n(Object(b)).forEach(function(S) {
          Object.defineProperty(g, S, Object.getOwnPropertyDescriptor(b, S));
        });
      }
      return g;
    }
    function a(g, y) {
      if (g == null)
        return {};
      var b, S, I = function(F, N) {
        if (F == null)
          return {};
        var D, M, W = {}, z = Object.keys(F);
        for (M = 0; M < z.length; M++)
          D = z[M], N.indexOf(D) >= 0 || (W[D] = F[D]);
        return W;
      }(g, y);
      if (Object.getOwnPropertySymbols) {
        var C = Object.getOwnPropertySymbols(g);
        for (S = 0; S < C.length; S++)
          b = C[S], y.indexOf(b) >= 0 || Object.prototype.propertyIsEnumerable.call(g, b) && (I[b] = g[b]);
      }
      return I;
    }
    function o(g, y) {
      return function(b) {
        if (Array.isArray(b))
          return b;
      }(g) || function(b, S) {
        if (Symbol.iterator in Object(b) || Object.prototype.toString.call(b) === "[object Arguments]") {
          var I = [], C = !0, F = !1, N = void 0;
          try {
            for (var D, M = b[Symbol.iterator](); !(C = (D = M.next()).done) && (I.push(D.value), !S || I.length !== S); C = !0)
              ;
          } catch (W) {
            F = !0, N = W;
          } finally {
            try {
              C || M.return == null || M.return();
            } finally {
              if (F)
                throw N;
            }
          }
          return I;
        }
      }(g, y) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }();
    }
    function s(g) {
      return function(y) {
        if (Array.isArray(y)) {
          for (var b = 0, S = new Array(y.length); b < y.length; b++)
            S[b] = y[b];
          return S;
        }
      }(g) || function(y) {
        if (Symbol.iterator in Object(y) || Object.prototype.toString.call(y) === "[object Arguments]")
          return Array.from(y);
      }(g) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }
    function u(g) {
      var y, b = "algoliasearch-client-js-".concat(g.key), S = function() {
        return y === void 0 && (y = g.localStorage || window.localStorage), y;
      }, I = function() {
        return JSON.parse(S().getItem(b) || "{}");
      };
      return { get: function(C, F) {
        var N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
          return Promise.resolve();
        } };
        return Promise.resolve().then(function() {
          var D = JSON.stringify(C), M = I()[D];
          return Promise.all([M || F(), M !== void 0]);
        }).then(function(D) {
          var M = o(D, 2), W = M[0], z = M[1];
          return Promise.all([W, z || N.miss(W)]);
        }).then(function(D) {
          return o(D, 1)[0];
        });
      }, set: function(C, F) {
        return Promise.resolve().then(function() {
          var N = I();
          return N[JSON.stringify(C)] = F, S().setItem(b, JSON.stringify(N)), F;
        });
      }, delete: function(C) {
        return Promise.resolve().then(function() {
          var F = I();
          delete F[JSON.stringify(C)], S().setItem(b, JSON.stringify(F));
        });
      }, clear: function() {
        return Promise.resolve().then(function() {
          S().removeItem(b);
        });
      } };
    }
    function c(g) {
      var y = s(g.caches), b = y.shift();
      return b === void 0 ? { get: function(S, I) {
        var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
          return Promise.resolve();
        } }, F = I();
        return F.then(function(N) {
          return Promise.all([N, C.miss(N)]);
        }).then(function(N) {
          return o(N, 1)[0];
        });
      }, set: function(S, I) {
        return Promise.resolve(I);
      }, delete: function(S) {
        return Promise.resolve();
      }, clear: function() {
        return Promise.resolve();
      } } : { get: function(S, I) {
        var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
          return Promise.resolve();
        } };
        return b.get(S, I, C).catch(function() {
          return c({ caches: y }).get(S, I, C);
        });
      }, set: function(S, I) {
        return b.set(S, I).catch(function() {
          return c({ caches: y }).set(S, I);
        });
      }, delete: function(S) {
        return b.delete(S).catch(function() {
          return c({ caches: y }).delete(S);
        });
      }, clear: function() {
        return b.clear().catch(function() {
          return c({ caches: y }).clear();
        });
      } };
    }
    function l() {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, y = {};
      return { get: function(b, S) {
        var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
          return Promise.resolve();
        } }, C = JSON.stringify(b);
        if (C in y)
          return Promise.resolve(g.serializable ? JSON.parse(y[C]) : y[C]);
        var F = S(), N = I && I.miss || function() {
          return Promise.resolve();
        };
        return F.then(function(D) {
          return N(D);
        }).then(function() {
          return F;
        });
      }, set: function(b, S) {
        return y[JSON.stringify(b)] = g.serializable ? JSON.stringify(S) : S, Promise.resolve(S);
      }, delete: function(b) {
        return delete y[JSON.stringify(b)], Promise.resolve();
      }, clear: function() {
        return y = {}, Promise.resolve();
      } };
    }
    function p(g, y, b) {
      var S = { "x-algolia-api-key": b, "x-algolia-application-id": y };
      return { headers: function() {
        return g === O.WithinHeaders ? S : {};
      }, queryParameters: function() {
        return g === O.WithinQueryParameters ? S : {};
      } };
    }
    function d(g) {
      var y = 0;
      return g(function b() {
        return y++, new Promise(function(S) {
          setTimeout(function() {
            S(g(b));
          }, Math.min(100 * y, 1e3));
        });
      });
    }
    function f(g) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(b, S) {
        return Promise.resolve();
      };
      return Object.assign(g, { wait: function(b) {
        return f(g.then(function(S) {
          return Promise.all([y(S, b), S]);
        }).then(function(S) {
          return S[1];
        }));
      } });
    }
    function m(g) {
      for (var y = g.length - 1; y > 0; y--) {
        var b = Math.floor(Math.random() * (y + 1)), S = g[y];
        g[y] = g[b], g[b] = S;
      }
      return g;
    }
    function v(g, y) {
      return y && Object.keys(y).forEach(function(b) {
        g[b] = y[b](g);
      }), g;
    }
    function h(g) {
      for (var y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++)
        b[S - 1] = arguments[S];
      var I = 0;
      return g.replace(/%s/g, function() {
        return encodeURIComponent(b[I++]);
      });
    }
    var O = { WithinQueryParameters: 0, WithinHeaders: 1 };
    function P(g, y) {
      var b = g || {}, S = b.data || {};
      return Object.keys(b).forEach(function(I) {
        ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(I) === -1 && (S[I] = b[I]);
      }), { data: Object.entries(S).length > 0 ? S : void 0, timeout: b.timeout || y, headers: b.headers || {}, queryParameters: b.queryParameters || {}, cacheable: b.cacheable };
    }
    var _ = { Read: 1, Write: 2, Any: 3 }, T = 1, $ = 2, x = 3;
    function A(g) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T;
      return i(i({}, g), {}, { status: y, lastUpdate: Date.now() });
    }
    function w(g) {
      return typeof g == "string" ? { protocol: "https", url: g, accept: _.Any } : { protocol: g.protocol || "https", url: g.url, accept: g.accept || _.Any };
    }
    var R = "DELETE", j = "GET", E = "POST", U = "PUT";
    function ee(g, y) {
      return Promise.all(y.map(function(b) {
        return g.get(b, function() {
          return Promise.resolve(A(b));
        });
      })).then(function(b) {
        var S = b.filter(function(F) {
          return function(N) {
            return N.status === T || Date.now() - N.lastUpdate > 12e4;
          }(F);
        }), I = b.filter(function(F) {
          return function(N) {
            return N.status === x && Date.now() - N.lastUpdate <= 12e4;
          }(F);
        }), C = [].concat(s(S), s(I));
        return { getTimeout: function(F, N) {
          return (I.length === 0 && F === 0 ? 1 : I.length + 3 + F) * N;
        }, statelessHosts: C.length > 0 ? C.map(function(F) {
          return w(F);
        }) : y };
      });
    }
    function je(g, y, b, S) {
      var I = [], C = function(V, te) {
        if (!(V.method === j || V.data === void 0 && te.data === void 0)) {
          var Y = Array.isArray(V.data) ? V.data : i(i({}, V.data), te.data);
          return JSON.stringify(Y);
        }
      }(b, S), F = function(V, te) {
        var Y = i(i({}, V.headers), te.headers), ae = {};
        return Object.keys(Y).forEach(function(ce) {
          var De = Y[ce];
          ae[ce.toLowerCase()] = De;
        }), ae;
      }(g, S), N = b.method, D = b.method !== j ? {} : i(i({}, b.data), S.data), M = i(i(i({ "x-algolia-agent": g.userAgent.value }, g.queryParameters), D), S.queryParameters), W = 0, z = function V(te, Y) {
        var ae = te.pop();
        if (ae === void 0)
          throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: B(I) };
        var ce = { data: C, headers: F, method: N, url: oe(ae, b.path, M), connectTimeout: Y(W, g.timeouts.connect), responseTimeout: Y(W, S.timeout) }, De = function($e) {
          var Se = { request: ce, response: $e, host: ae, triesLeft: te.length };
          return I.push(Se), Se;
        }, sr = { onSuccess: function($e) {
          return function(Se) {
            try {
              return JSON.parse(Se.content);
            } catch (yt) {
              throw function(nt, Nt) {
                return { name: "DeserializationError", message: nt, response: Nt };
              }(yt.message, Se);
            }
          }($e);
        }, onRetry: function($e) {
          var Se = De($e);
          return $e.isTimedOut && W++, Promise.all([g.logger.info("Retryable failure", Z(Se)), g.hostsCache.set(ae, A(ae, $e.isTimedOut ? x : $))]).then(function() {
            return V(te, Y);
          });
        }, onFail: function($e) {
          throw De($e), function(Se, yt) {
            var nt = Se.content, Nt = Se.status, ur = nt;
            try {
              ur = JSON.parse(nt).message;
            } catch {
            }
            return function(ln, ui, kf) {
              return { name: "ApiError", message: ln, status: ui, transporterStackTrace: kf };
            }(ur, Nt, yt);
          }($e, B(I));
        } };
        return g.requester.send(ce).then(function($e) {
          return function(Se, yt) {
            return function(nt) {
              var Nt = nt.status;
              return nt.isTimedOut || function(ur) {
                var ln = ur.isTimedOut, ui = ur.status;
                return !ln && ~~ui == 0;
              }(nt) || ~~(Nt / 100) != 2 && ~~(Nt / 100) != 4;
            }(Se) ? yt.onRetry(Se) : ~~(Se.status / 100) == 2 ? yt.onSuccess(Se) : yt.onFail(Se);
          }($e, sr);
        });
      };
      return ee(g.hostsCache, y).then(function(V) {
        return z(s(V.statelessHosts).reverse(), V.getTimeout);
      });
    }
    function G(g) {
      var y = g.hostsCache, b = g.logger, S = g.requester, I = g.requestsCache, C = g.responsesCache, F = g.timeouts, N = g.userAgent, D = g.hosts, M = g.queryParameters, W = { hostsCache: y, logger: b, requester: S, requestsCache: I, responsesCache: C, timeouts: F, userAgent: N, headers: g.headers, queryParameters: M, hosts: D.map(function(z) {
        return w(z);
      }), read: function(z, V) {
        var te = P(V, W.timeouts.read), Y = function() {
          return je(W, W.hosts.filter(function(ce) {
            return (ce.accept & _.Read) != 0;
          }), z, te);
        };
        if ((te.cacheable !== void 0 ? te.cacheable : z.cacheable) !== !0)
          return Y();
        var ae = { request: z, mappedRequestOptions: te, transporter: { queryParameters: W.queryParameters, headers: W.headers } };
        return W.responsesCache.get(ae, function() {
          return W.requestsCache.get(ae, function() {
            return W.requestsCache.set(ae, Y()).then(function(ce) {
              return Promise.all([W.requestsCache.delete(ae), ce]);
            }, function(ce) {
              return Promise.all([W.requestsCache.delete(ae), Promise.reject(ce)]);
            }).then(function(ce) {
              var De = o(ce, 2);
              return De[0], De[1];
            });
          });
        }, { miss: function(ce) {
          return W.responsesCache.set(ae, ce);
        } });
      }, write: function(z, V) {
        return je(W, W.hosts.filter(function(te) {
          return (te.accept & _.Write) != 0;
        }), z, P(V, W.timeouts.write));
      } };
      return W;
    }
    function Le(g) {
      var y = { value: "Algolia for JavaScript (".concat(g, ")"), add: function(b) {
        var S = "; ".concat(b.segment).concat(b.version !== void 0 ? " (".concat(b.version, ")") : "");
        return y.value.indexOf(S) === -1 && (y.value = "".concat(y.value).concat(S)), y;
      } };
      return y;
    }
    function oe(g, y, b) {
      var S = k(b), I = "".concat(g.protocol, "://").concat(g.url, "/").concat(y.charAt(0) === "/" ? y.substr(1) : y);
      return S.length && (I += "?".concat(S)), I;
    }
    function k(g) {
      return Object.keys(g).map(function(y) {
        return h("%s=%s", y, (b = g[y], Object.prototype.toString.call(b) === "[object Object]" || Object.prototype.toString.call(b) === "[object Array]" ? JSON.stringify(g[y]) : g[y]));
        var b;
      }).join("&");
    }
    function B(g) {
      return g.map(function(y) {
        return Z(y);
      });
    }
    function Z(g) {
      var y = g.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
      return i(i({}, g), {}, { request: i(i({}, g.request), {}, { headers: i(i({}, g.request.headers), y) }) });
    }
    var K = function(g) {
      return function(y, b) {
        return g.transporter.write({ method: E, path: "2/abtests", data: y }, b);
      };
    }, Te = function(g) {
      return function(y, b) {
        return g.transporter.write({ method: R, path: h("2/abtests/%s", y) }, b);
      };
    }, ge = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("2/abtests/%s", y) }, b);
      };
    }, fe = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "2/abtests" }, y);
      };
    }, Ee = function(g) {
      return function(y, b) {
        return g.transporter.write({ method: E, path: h("2/abtests/%s/stop", y) }, b);
      };
    }, We = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/strategies/personalization" }, y);
      };
    }, Fe = function(g) {
      return function(y, b) {
        return g.transporter.write({ method: E, path: "1/strategies/personalization", data: y }, b);
      };
    };
    function Oe(g) {
      return function y(b) {
        return g.request(b).then(function(S) {
          if (g.batch !== void 0 && g.batch(S.hits), !g.shouldStop(S))
            return S.cursor ? y({ cursor: S.cursor }) : y({ page: (b.page || 0) + 1 });
        });
      }({});
    }
    var me = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.queryParameters, C = a(S, ["queryParameters"]), F = i({ acl: y }, I !== void 0 ? { queryParameters: I } : {});
        return f(g.transporter.write({ method: E, path: "1/keys", data: F }, C), function(N, D) {
          return d(function(M) {
            return ar(g)(N.key, D).catch(function(W) {
              if (W.status !== 404)
                throw W;
              return M();
            });
          });
        });
      };
    }, de = function(g) {
      return function(y, b, S) {
        var I = P(S);
        return I.queryParameters["X-Algolia-User-ID"] = y, g.transporter.write({ method: E, path: "1/clusters/mapping", data: { cluster: b } }, I);
      };
    }, Re = function(g) {
      return function(y, b, S) {
        return g.transporter.write({ method: E, path: "1/clusters/mapping/batch", data: { users: y, cluster: b } }, S);
      };
    }, Ve = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: E, path: h("/1/dictionaries/%s/batch", y), data: { clearExistingDictionaryEntries: !0, requests: { action: "addEntry", body: [] } } }, b), function(S, I) {
          return At(g)(S.taskID, I);
        });
      };
    }, Qe = function(g) {
      return function(y, b, S) {
        return f(g.transporter.write({ method: E, path: h("1/indexes/%s/operation", y), data: { operation: "copy", destination: b } }, S), function(I, C) {
          return or(g)(y, { methods: { waitTask: pe } }).waitTask(I.taskID, C);
        });
      };
    }, Tt = function(g) {
      return function(y, b, S) {
        return Qe(g)(y, b, i(i({}, S), {}, { scope: [si.Rules] }));
      };
    }, Wl = function(g) {
      return function(y, b, S) {
        return Qe(g)(y, b, i(i({}, S), {}, { scope: [si.Settings] }));
      };
    }, Ml = function(g) {
      return function(y, b, S) {
        return Qe(g)(y, b, i(i({}, S), {}, { scope: [si.Synonyms] }));
      };
    }, kl = function(g) {
      return function(y, b) {
        return y.method === j ? g.transporter.read(y, b) : g.transporter.write(y, b);
      };
    }, Ul = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: R, path: h("1/keys/%s", y) }, b), function(S, I) {
          return d(function(C) {
            return ar(g)(y, I).then(C).catch(function(F) {
              if (F.status !== 404)
                throw F;
            });
          });
        });
      };
    }, Bl = function(g) {
      return function(y, b, S) {
        var I = b.map(function(C) {
          return { action: "deleteEntry", body: { objectID: C } };
        });
        return f(g.transporter.write({ method: E, path: h("/1/dictionaries/%s/batch", y), data: { clearExistingDictionaryEntries: !1, requests: I } }, S), function(C, F) {
          return At(g)(C.taskID, F);
        });
      };
    }, ar = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("1/keys/%s", y) }, b);
      };
    }, Ma = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("1/task/%s", y.toString()) }, b);
      };
    }, Vl = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "/1/dictionaries/*/settings" }, y);
      };
    }, Ql = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/logs" }, y);
      };
    }, Kl = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/clusters/mapping/top" }, y);
      };
    }, zl = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("1/clusters/mapping/%s", y) }, b);
      };
    }, Jl = function(g) {
      return function(y) {
        var b = y || {}, S = b.retrieveMappings, I = a(b, ["retrieveMappings"]);
        return S === !0 && (I.getClusters = !0), g.transporter.read({ method: j, path: "1/clusters/mapping/pending" }, I);
      };
    }, or = function(g) {
      return function(y) {
        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = { transporter: g.transporter, appId: g.appId, indexName: y };
        return v(S, b.methods);
      };
    }, Gl = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/keys" }, y);
      };
    }, Yl = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/clusters" }, y);
      };
    }, Xl = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/indexes" }, y);
      };
    }, Zl = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: "1/clusters/mapping" }, y);
      };
    }, ef = function(g) {
      return function(y, b, S) {
        return f(g.transporter.write({ method: E, path: h("1/indexes/%s/operation", y), data: { operation: "move", destination: b } }, S), function(I, C) {
          return or(g)(y, { methods: { waitTask: pe } }).waitTask(I.taskID, C);
        });
      };
    }, tf = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: E, path: "1/indexes/*/batch", data: { requests: y } }, b), function(S, I) {
          return Promise.all(Object.keys(S.taskID).map(function(C) {
            return or(g)(C, { methods: { waitTask: pe } }).waitTask(S.taskID[C], I);
          }));
        });
      };
    }, rf = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: E, path: "1/indexes/*/objects", data: { requests: y } }, b);
      };
    }, ka = function(g) {
      return function(y, b) {
        var S = y.map(function(I) {
          return i(i({}, I), {}, { params: k(I.params || {}) });
        });
        return g.transporter.read({ method: E, path: "1/indexes/*/queries", data: { requests: S }, cacheable: !0 }, b);
      };
    }, Ua = function(g) {
      return function(y, b) {
        return Promise.all(y.map(function(S) {
          var I = S.params, C = I.facetName, F = I.facetQuery, N = a(I, ["facetName", "facetQuery"]);
          return or(g)(S.indexName, { methods: { searchForFacetValues: Ja } }).searchForFacetValues(C, F, i(i({}, b), N));
        }));
      };
    }, nf = function(g) {
      return function(y, b) {
        var S = P(b);
        return S.queryParameters["X-Algolia-User-ID"] = y, g.transporter.write({ method: R, path: "1/clusters/mapping" }, S);
      };
    }, af = function(g) {
      return function(y, b, S) {
        var I = b.map(function(C) {
          return { action: "addEntry", body: C };
        });
        return f(g.transporter.write({ method: E, path: h("/1/dictionaries/%s/batch", y), data: { clearExistingDictionaryEntries: !0, requests: I } }, S), function(C, F) {
          return At(g)(C.taskID, F);
        });
      };
    }, of = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: E, path: h("1/keys/%s/restore", y) }, b), function(S, I) {
          return d(function(C) {
            return ar(g)(y, I).catch(function(F) {
              if (F.status !== 404)
                throw F;
              return C();
            });
          });
        });
      };
    }, sf = function(g) {
      return function(y, b, S) {
        var I = b.map(function(C) {
          return { action: "addEntry", body: C };
        });
        return f(g.transporter.write({ method: E, path: h("/1/dictionaries/%s/batch", y), data: { clearExistingDictionaryEntries: !1, requests: I } }, S), function(C, F) {
          return At(g)(C.taskID, F);
        });
      };
    }, uf = function(g) {
      return function(y, b, S) {
        return g.transporter.read({ method: E, path: h("/1/dictionaries/%s/search", y), data: { query: b }, cacheable: !0 }, S);
      };
    }, cf = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: E, path: "1/clusters/mapping/search", data: { query: y } }, b);
      };
    }, lf = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: U, path: "/1/dictionaries/*/settings", data: y }, b), function(S, I) {
          return At(g)(S.taskID, I);
        });
      };
    }, ff = function(g) {
      return function(y, b) {
        var S = Object.assign({}, b), I = b || {}, C = I.queryParameters, F = a(I, ["queryParameters"]), N = C ? { queryParameters: C } : {}, D = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
        return f(g.transporter.write({ method: U, path: h("1/keys/%s", y), data: N }, F), function(M, W) {
          return d(function(z) {
            return ar(g)(y, W).then(function(V) {
              return function(te) {
                return Object.keys(S).filter(function(Y) {
                  return D.indexOf(Y) !== -1;
                }).every(function(Y) {
                  return te[Y] === S[Y];
                });
              }(V) ? Promise.resolve() : z();
            });
          });
        });
      };
    }, At = function(g) {
      return function(y, b) {
        return d(function(S) {
          return Ma(g)(y, b).then(function(I) {
            return I.status !== "published" ? S() : void 0;
          });
        });
      };
    }, Ba = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: E, path: h("1/indexes/%s/batch", g.indexName), data: { requests: y } }, b), function(S, I) {
          return pe(g)(S.taskID, I);
        });
      };
    }, pf = function(g) {
      return function(y) {
        return Oe(i(i({ shouldStop: function(b) {
          return b.cursor === void 0;
        } }, y), {}, { request: function(b) {
          return g.transporter.read({ method: E, path: h("1/indexes/%s/browse", g.indexName), data: b }, y);
        } }));
      };
    }, df = function(g) {
      return function(y) {
        var b = i({ hitsPerPage: 1e3 }, y);
        return Oe(i(i({ shouldStop: function(S) {
          return S.hits.length < b.hitsPerPage;
        } }, b), {}, { request: function(S) {
          return Ga(g)("", i(i({}, b), S)).then(function(I) {
            return i(i({}, I), {}, { hits: I.hits.map(function(C) {
              return delete C._highlightResult, C;
            }) });
          });
        } }));
      };
    }, hf = function(g) {
      return function(y) {
        var b = i({ hitsPerPage: 1e3 }, y);
        return Oe(i(i({ shouldStop: function(S) {
          return S.hits.length < b.hitsPerPage;
        } }, b), {}, { request: function(S) {
          return Ya(g)("", i(i({}, b), S)).then(function(I) {
            return i(i({}, I), {}, { hits: I.hits.map(function(C) {
              return delete C._highlightResult, C;
            }) });
          });
        } }));
      };
    }, ni = function(g) {
      return function(y, b, S) {
        var I = S || {}, C = I.batchSize, F = a(I, ["batchSize"]), N = { taskIDs: [], objectIDs: [] };
        return f(function D() {
          var M, W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, z = [];
          for (M = W; M < y.length && (z.push(y[M]), z.length !== (C || 1e3)); M++)
            ;
          return z.length === 0 ? Promise.resolve(N) : Ba(g)(z.map(function(V) {
            return { action: b, body: V };
          }), F).then(function(V) {
            return N.objectIDs = N.objectIDs.concat(V.objectIDs), N.taskIDs.push(V.taskID), M++, D(M);
          });
        }(), function(D, M) {
          return Promise.all(D.taskIDs.map(function(W) {
            return pe(g)(W, M);
          }));
        });
      };
    }, mf = function(g) {
      return function(y) {
        return f(g.transporter.write({ method: E, path: h("1/indexes/%s/clear", g.indexName) }, y), function(b, S) {
          return pe(g)(b.taskID, S);
        });
      };
    }, gf = function(g) {
      return function(y) {
        var b = y || {}, S = b.forwardToReplicas, I = P(a(b, ["forwardToReplicas"]));
        return S && (I.queryParameters.forwardToReplicas = 1), f(g.transporter.write({ method: E, path: h("1/indexes/%s/rules/clear", g.indexName) }, I), function(C, F) {
          return pe(g)(C.taskID, F);
        });
      };
    }, vf = function(g) {
      return function(y) {
        var b = y || {}, S = b.forwardToReplicas, I = P(a(b, ["forwardToReplicas"]));
        return S && (I.queryParameters.forwardToReplicas = 1), f(g.transporter.write({ method: E, path: h("1/indexes/%s/synonyms/clear", g.indexName) }, I), function(C, F) {
          return pe(g)(C.taskID, F);
        });
      };
    }, yf = function(g) {
      return function(y, b) {
        return f(g.transporter.write({ method: E, path: h("1/indexes/%s/deleteByQuery", g.indexName), data: y }, b), function(S, I) {
          return pe(g)(S.taskID, I);
        });
      };
    }, bf = function(g) {
      return function(y) {
        return f(g.transporter.write({ method: R, path: h("1/indexes/%s", g.indexName) }, y), function(b, S) {
          return pe(g)(b.taskID, S);
        });
      };
    }, Of = function(g) {
      return function(y, b) {
        return f(Va(g)([y], b).then(function(S) {
          return { taskID: S.taskIDs[0] };
        }), function(S, I) {
          return pe(g)(S.taskID, I);
        });
      };
    }, Va = function(g) {
      return function(y, b) {
        var S = y.map(function(I) {
          return { objectID: I };
        });
        return ni(g)(S, Ct.DeleteObject, b);
      };
    }, Sf = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.forwardToReplicas, C = P(a(S, ["forwardToReplicas"]));
        return I && (C.queryParameters.forwardToReplicas = 1), f(g.transporter.write({ method: R, path: h("1/indexes/%s/rules/%s", g.indexName, y) }, C), function(F, N) {
          return pe(g)(F.taskID, N);
        });
      };
    }, wf = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.forwardToReplicas, C = P(a(S, ["forwardToReplicas"]));
        return I && (C.queryParameters.forwardToReplicas = 1), f(g.transporter.write({ method: R, path: h("1/indexes/%s/synonyms/%s", g.indexName, y) }, C), function(F, N) {
          return pe(g)(F.taskID, N);
        });
      };
    }, Pf = function(g) {
      return function(y) {
        return Qa(g)(y).then(function() {
          return !0;
        }).catch(function(b) {
          if (b.status !== 404)
            throw b;
          return !1;
        });
      };
    }, _f = function(g) {
      return function(y, b, S) {
        return g.transporter.read({ method: E, path: h("1/answers/%s/prediction", g.indexName), data: { query: y, queryLanguages: b }, cacheable: !0 }, S);
      };
    }, jf = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.query, C = S.paginate, F = a(S, ["query", "paginate"]), N = 0;
        return function D() {
          return za(g)(I || "", i(i({}, F), {}, { page: N })).then(function(M) {
            for (var W = 0, z = Object.entries(M.hits); W < z.length; W++) {
              var V = o(z[W], 2), te = V[0], Y = V[1];
              if (y(Y))
                return { object: Y, position: parseInt(te, 10), page: N };
            }
            if (N++, C === !1 || N >= M.nbPages)
              throw { name: "ObjectNotFoundError", message: "Object not found." };
            return D();
          });
        }();
      };
    }, Rf = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("1/indexes/%s/%s", g.indexName, y) }, b);
      };
    }, If = function() {
      return function(g, y) {
        for (var b = 0, S = Object.entries(g.hits); b < S.length; b++) {
          var I = o(S[b], 2), C = I[0];
          if (I[1].objectID === y)
            return parseInt(C, 10);
        }
        return -1;
      };
    }, Ef = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.attributesToRetrieve, C = a(S, ["attributesToRetrieve"]), F = y.map(function(N) {
          return i({ indexName: g.indexName, objectID: N }, I ? { attributesToRetrieve: I } : {});
        });
        return g.transporter.read({ method: E, path: "1/indexes/*/objects", data: { requests: F } }, C);
      };
    }, $f = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("1/indexes/%s/rules/%s", g.indexName, y) }, b);
      };
    }, Qa = function(g) {
      return function(y) {
        return g.transporter.read({ method: j, path: h("1/indexes/%s/settings", g.indexName), data: { getVersion: 2 } }, y);
      };
    }, xf = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: j, path: h("1/indexes/%s/synonyms/%s", g.indexName, y) }, b);
      };
    }, Tf = function(g) {
      return function(y, b) {
        return f(Ka(g)([y], b).then(function(S) {
          return { objectID: S.objectIDs[0], taskID: S.taskIDs[0] };
        }), function(S, I) {
          return pe(g)(S.taskID, I);
        });
      };
    }, Ka = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.createIfNotExists, C = a(S, ["createIfNotExists"]), F = I ? Ct.PartialUpdateObject : Ct.PartialUpdateObjectNoCreate;
        return ni(g)(y, F, C);
      };
    }, Af = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.safe, C = S.autoGenerateObjectIDIfNotExist, F = S.batchSize, N = a(S, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]), D = function(Y, ae, ce, De) {
          return f(g.transporter.write({ method: E, path: h("1/indexes/%s/operation", Y), data: { operation: ce, destination: ae } }, De), function(sr, $e) {
            return pe(g)(sr.taskID, $e);
          });
        }, M = Math.random().toString(36).substring(7), W = "".concat(g.indexName, "_tmp_").concat(M), z = ii({ appId: g.appId, transporter: g.transporter, indexName: W }), V = [], te = D(g.indexName, W, "copy", i(i({}, N), {}, { scope: ["settings", "synonyms", "rules"] }));
        return V.push(te), f((I ? te.wait(N) : te).then(function() {
          var Y = z(y, i(i({}, N), {}, { autoGenerateObjectIDIfNotExist: C, batchSize: F }));
          return V.push(Y), I ? Y.wait(N) : Y;
        }).then(function() {
          var Y = D(W, g.indexName, "move", N);
          return V.push(Y), I ? Y.wait(N) : Y;
        }).then(function() {
          return Promise.all(V);
        }).then(function(Y) {
          var ae = o(Y, 3), ce = ae[0], De = ae[1], sr = ae[2];
          return { objectIDs: De.objectIDs, taskIDs: [ce.taskID].concat(s(De.taskIDs), [sr.taskID]) };
        }), function(Y, ae) {
          return Promise.all(V.map(function(ce) {
            return ce.wait(ae);
          }));
        });
      };
    }, Cf = function(g) {
      return function(y, b) {
        return ai(g)(y, i(i({}, b), {}, { clearExistingRules: !0 }));
      };
    }, Nf = function(g) {
      return function(y, b) {
        return oi(g)(y, i(i({}, b), {}, { clearExistingSynonyms: !0 }));
      };
    }, Ff = function(g) {
      return function(y, b) {
        return f(ii(g)([y], b).then(function(S) {
          return { objectID: S.objectIDs[0], taskID: S.taskIDs[0] };
        }), function(S, I) {
          return pe(g)(S.taskID, I);
        });
      };
    }, ii = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.autoGenerateObjectIDIfNotExist, C = a(S, ["autoGenerateObjectIDIfNotExist"]), F = I ? Ct.AddObject : Ct.UpdateObject;
        if (F === Ct.UpdateObject) {
          var N = !0, D = !1, M = void 0;
          try {
            for (var W, z = y[Symbol.iterator](); !(N = (W = z.next()).done); N = !0)
              if (W.value.objectID === void 0)
                return f(Promise.reject({ name: "MissingObjectIDError", message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option." }));
          } catch (V) {
            D = !0, M = V;
          } finally {
            try {
              N || z.return == null || z.return();
            } finally {
              if (D)
                throw M;
            }
          }
        }
        return ni(g)(y, F, C);
      };
    }, Df = function(g) {
      return function(y, b) {
        return ai(g)([y], b);
      };
    }, ai = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.forwardToReplicas, C = S.clearExistingRules, F = P(a(S, ["forwardToReplicas", "clearExistingRules"]));
        return I && (F.queryParameters.forwardToReplicas = 1), C && (F.queryParameters.clearExistingRules = 1), f(g.transporter.write({ method: E, path: h("1/indexes/%s/rules/batch", g.indexName), data: y }, F), function(N, D) {
          return pe(g)(N.taskID, D);
        });
      };
    }, Hf = function(g) {
      return function(y, b) {
        return oi(g)([y], b);
      };
    }, oi = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.forwardToReplicas, C = S.clearExistingSynonyms, F = S.replaceExistingSynonyms, N = P(a(S, ["forwardToReplicas", "clearExistingSynonyms", "replaceExistingSynonyms"]));
        return I && (N.queryParameters.forwardToReplicas = 1), (F || C) && (N.queryParameters.replaceExistingSynonyms = 1), f(g.transporter.write({ method: E, path: h("1/indexes/%s/synonyms/batch", g.indexName), data: y }, N), function(D, M) {
          return pe(g)(D.taskID, M);
        });
      };
    }, za = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: E, path: h("1/indexes/%s/query", g.indexName), data: { query: y }, cacheable: !0 }, b);
      };
    }, Ja = function(g) {
      return function(y, b, S) {
        return g.transporter.read({ method: E, path: h("1/indexes/%s/facets/%s/query", g.indexName, y), data: { facetQuery: b }, cacheable: !0 }, S);
      };
    }, Ga = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: E, path: h("1/indexes/%s/rules/search", g.indexName), data: { query: y } }, b);
      };
    }, Ya = function(g) {
      return function(y, b) {
        return g.transporter.read({ method: E, path: h("1/indexes/%s/synonyms/search", g.indexName), data: { query: y } }, b);
      };
    }, qf = function(g) {
      return function(y, b) {
        var S = b || {}, I = S.forwardToReplicas, C = P(a(S, ["forwardToReplicas"]));
        return I && (C.queryParameters.forwardToReplicas = 1), f(g.transporter.write({ method: U, path: h("1/indexes/%s/settings", g.indexName), data: y }, C), function(F, N) {
          return pe(g)(F.taskID, N);
        });
      };
    }, pe = function(g) {
      return function(y, b) {
        return d(function(S) {
          return function(I) {
            return function(C, F) {
              return I.transporter.read({ method: j, path: h("1/indexes/%s/task/%s", I.indexName, C.toString()) }, F);
            };
          }(g)(y, b).then(function(I) {
            return I.status !== "published" ? S() : void 0;
          });
        });
      };
    }, Ct = { AddObject: "addObject", UpdateObject: "updateObject", PartialUpdateObject: "partialUpdateObject", PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate", DeleteObject: "deleteObject", DeleteIndex: "delete", ClearIndex: "clear" }, si = { Settings: "settings", Synonyms: "synonyms", Rules: "rules" }, Lf = 1, Wf = 2, Mf = 3;
    function Xa(g, y, b) {
      var S, I = { appId: g, apiKey: y, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(N) {
        return new Promise(function(D) {
          var M = new XMLHttpRequest();
          M.open(N.method, N.url, !0), Object.keys(N.headers).forEach(function(te) {
            return M.setRequestHeader(te, N.headers[te]);
          });
          var W, z = function(te, Y) {
            return setTimeout(function() {
              M.abort(), D({ status: 0, content: Y, isTimedOut: !0 });
            }, 1e3 * te);
          }, V = z(N.connectTimeout, "Connection timeout");
          M.onreadystatechange = function() {
            M.readyState > M.OPENED && W === void 0 && (clearTimeout(V), W = z(N.responseTimeout, "Socket timeout"));
          }, M.onerror = function() {
            M.status === 0 && (clearTimeout(V), clearTimeout(W), D({ content: M.responseText || "Network request failed", status: M.status, isTimedOut: !1 }));
          }, M.onload = function() {
            clearTimeout(V), clearTimeout(W), D({ content: M.responseText, status: M.status, isTimedOut: !1 });
          }, M.send(N.data);
        });
      } }, logger: (S = Mf, { debug: function(N, D) {
        return Lf >= S && console.debug(N, D), Promise.resolve();
      }, info: function(N, D) {
        return Wf >= S && console.info(N, D), Promise.resolve();
      }, error: function(N, D) {
        return console.error(N, D), Promise.resolve();
      } }), responsesCache: l(), requestsCache: l({ serializable: !1 }), hostsCache: c({ caches: [u({ key: "".concat("4.15.0", "-").concat(g) }), l()] }), userAgent: Le("4.15.0").add({ segment: "Browser" }) }, C = i(i({}, I), b), F = function() {
        return function(N) {
          return function(D) {
            var M = D.region || "us", W = p(O.WithinHeaders, D.appId, D.apiKey), z = G(i(i({ hosts: [{ url: "personalization.".concat(M, ".algolia.com") }] }, D), {}, { headers: i(i(i({}, W.headers()), { "content-type": "application/json" }), D.headers), queryParameters: i(i({}, W.queryParameters()), D.queryParameters) }));
            return v({ appId: D.appId, transporter: z }, D.methods);
          }(i(i(i({}, I), N), {}, { methods: { getPersonalizationStrategy: We, setPersonalizationStrategy: Fe } }));
        };
      };
      return function(N) {
        var D = N.appId, M = p(N.authMode !== void 0 ? N.authMode : O.WithinHeaders, D, N.apiKey), W = G(i(i({ hosts: [{ url: "".concat(D, "-dsn.algolia.net"), accept: _.Read }, { url: "".concat(D, ".algolia.net"), accept: _.Write }].concat(m([{ url: "".concat(D, "-1.algolianet.com") }, { url: "".concat(D, "-2.algolianet.com") }, { url: "".concat(D, "-3.algolianet.com") }])) }, N), {}, { headers: i(i(i({}, M.headers()), { "content-type": "application/x-www-form-urlencoded" }), N.headers), queryParameters: i(i({}, M.queryParameters()), N.queryParameters) }));
        return v({ transporter: W, appId: D, addAlgoliaAgent: function(z, V) {
          W.userAgent.add({ segment: z, version: V });
        }, clearCache: function() {
          return Promise.all([W.requestsCache.clear(), W.responsesCache.clear()]).then(function() {
          });
        } }, N.methods);
      }(i(i({}, C), {}, { methods: { search: ka, searchForFacetValues: Ua, multipleBatch: tf, multipleGetObjects: rf, multipleQueries: ka, copyIndex: Qe, copySettings: Wl, copySynonyms: Ml, copyRules: Tt, moveIndex: ef, listIndices: Xl, getLogs: Ql, listClusters: Yl, multipleSearchForFacetValues: Ua, getApiKey: ar, addApiKey: me, listApiKeys: Gl, updateApiKey: ff, deleteApiKey: Ul, restoreApiKey: of, assignUserID: de, assignUserIDs: Re, getUserID: zl, searchUserIDs: cf, listUserIDs: Zl, getTopUserIDs: Kl, removeUserID: nf, hasPendingMappings: Jl, clearDictionaryEntries: Ve, deleteDictionaryEntries: Bl, getDictionarySettings: Vl, getAppTask: Ma, replaceDictionaryEntries: af, saveDictionaryEntries: sf, searchDictionaryEntries: uf, setDictionarySettings: lf, waitAppTask: At, customRequest: kl, initIndex: function(N) {
        return function(D) {
          return or(N)(D, { methods: { batch: Ba, delete: bf, findAnswers: _f, getObject: Rf, getObjects: Ef, saveObject: Ff, saveObjects: ii, search: za, searchForFacetValues: Ja, waitTask: pe, setSettings: qf, getSettings: Qa, partialUpdateObject: Tf, partialUpdateObjects: Ka, deleteObject: Of, deleteObjects: Va, deleteBy: yf, clearObjects: mf, browseObjects: pf, getObjectPosition: If, findObject: jf, exists: Pf, saveSynonym: Hf, saveSynonyms: oi, getSynonym: xf, searchSynonyms: Ya, browseSynonyms: hf, deleteSynonym: wf, clearSynonyms: vf, replaceAllObjects: Af, replaceAllSynonyms: Nf, searchRules: Ga, getRule: $f, deleteRule: Sf, saveRule: Df, saveRules: ai, replaceAllRules: Cf, browseRules: df, clearRules: gf } });
        };
      }, initAnalytics: function() {
        return function(N) {
          return function(D) {
            var M = D.region || "us", W = p(O.WithinHeaders, D.appId, D.apiKey), z = G(i(i({ hosts: [{ url: "analytics.".concat(M, ".algolia.com") }] }, D), {}, { headers: i(i(i({}, W.headers()), { "content-type": "application/json" }), D.headers), queryParameters: i(i({}, W.queryParameters()), D.queryParameters) }));
            return v({ appId: D.appId, transporter: z }, D.methods);
          }(i(i(i({}, I), N), {}, { methods: { addABTest: K, getABTest: ge, getABTests: fe, stopABTest: Ee, deleteABTest: Te } }));
        };
      }, initPersonalization: F, initRecommendation: function() {
        return function(N) {
          return C.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), F()(N);
        };
      } } }));
    }
    return Xa.version = "4.15.0", Xa;
  });
})(Vf);
const Lu = Ii;
var Qf = "ais", Ne = function(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = r.descendantName, i = r.modifierName, a = n ? "-".concat(n) : "", o = i ? "--".concat(i) : "";
    return "".concat(Qf, "-").concat(t).concat(a).concat(o);
  };
};
function Za(e) {
  return e.toString().charAt(0).toUpperCase() + e.toString().slice(1);
}
function ue() {
}
var ht = function(t, r) {
  return t;
}, ci = ue, X = ue;
process.env.NODE_ENV === "development" && (ci = function(t) {
  console.warn("[InstantSearch.js]: ".concat(t.trim()));
}, ht = function(t, r) {
  var n = !1;
  return function() {
    return n || (n = !0, process.env.NODE_ENV === "development" && ci(r)), t.apply(void 0, arguments);
  };
}, X = function(t, r) {
  if (!t) {
    var n = X.cache[r];
    n || (X.cache[r] = !0, process.env.NODE_ENV === "development" && ci(r));
  }
}, X.cache = {});
var Kf = Object.keys;
function zf(e) {
  return Yf(e) || Gf(e) || Wu(e) || Jf();
}
function Jf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Yf(e) {
  if (Array.isArray(e))
    return Ei(e);
}
function cr(e, t) {
  return ep(e) || Zf(e, t) || Wu(e, t) || Xf();
}
function Xf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wu(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ei(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ei(e, t);
  }
}
function Ei(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Zf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0)
          ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (c)
          throw i;
      }
    }
    return s;
  }
}
function ep(e) {
  if (Array.isArray(e))
    return e;
}
function tp(e) {
  switch (e) {
    case "range":
      return [];
    case "menu":
      return ["menu", "menuSelect"];
    default:
      return [e];
  }
}
var rp = {
  query: {
    connectors: ["connectSearchBox"],
    widgets: ["ais.searchBox", "ais.autocomplete", "ais.voiceSearch"]
  },
  refinementList: {
    connectors: ["connectRefinementList"],
    widgets: ["ais.refinementList"]
  },
  menu: {
    connectors: ["connectMenu"],
    widgets: ["ais.menu"]
  },
  hierarchicalMenu: {
    connectors: ["connectHierarchicalMenu"],
    widgets: ["ais.hierarchicalMenu"]
  },
  numericMenu: {
    connectors: ["connectNumericMenu"],
    widgets: ["ais.numericMenu"]
  },
  ratingMenu: {
    connectors: ["connectRatingMenu"],
    widgets: ["ais.ratingMenu"]
  },
  range: {
    connectors: ["connectRange"],
    widgets: ["ais.rangeInput", "ais.rangeSlider", "ais.range"]
  },
  toggle: {
    connectors: ["connectToggleRefinement"],
    widgets: ["ais.toggleRefinement"]
  },
  geoSearch: {
    connectors: ["connectGeoSearch"],
    widgets: ["ais.geoSearch"]
  },
  sortBy: {
    connectors: ["connectSortBy"],
    widgets: ["ais.sortBy"]
  },
  page: {
    connectors: ["connectPagination"],
    widgets: ["ais.pagination", "ais.infiniteHits"]
  },
  hitsPerPage: {
    connectors: ["connectHitsPerPage"],
    widgets: ["ais.hitsPerPage"]
  },
  configure: {
    connectors: ["connectConfigure"],
    widgets: ["ais.configure"]
  },
  places: {
    connectors: [],
    widgets: ["ais.places"]
  }
};
function Mu(e) {
  var t = e.index, r = e.indexUiState, n = t.getWidgets().map(function(a) {
    return a.$$type;
  }).filter(Boolean), i = Kf(r).reduce(function(a, o) {
    var s = rp[o];
    if (!s)
      return a;
    var u = s.widgets;
    return u && !u.some(function(c) {
      return n.includes(c);
    }) && a.push([o, {
      connectors: s.connectors,
      widgets: s.widgets.map(function(c) {
        return c.split("ais.")[1];
      })
    }]), a;
  }, []);
  process.env.NODE_ENV === "development" && X(i.length === 0, 'The UI state for the index "'.concat(t.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(t.getIndexId(), `":

`).concat(i.map(function(a) {
    var o, s = cr(a, 2), u = s[0], c = s[1].widgets;
    return "- `".concat(u, "` needs one of these widgets: ").concat((o = []).concat.apply(o, zf(c.map(function(l) {
      return tp(l);
    }))).map(function(l) {
      return '"'.concat(l, '"');
    }).join(", "));
  }).join(`
`), `

If you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don't render anything:

\`\`\`
`).concat(i.filter(function(a) {
    var o = cr(a, 2);
    o[0];
    var s = o[1].connectors;
    return s.length > 0;
  }).map(function(a) {
    var o = cr(a, 2);
    o[0];
    var s = o[1], u = s.connectors, c = s.widgets, l = Za(c[0]), p = u[0];
    return "const virtual".concat(l, " = ").concat(p, "(() => null);");
  }).join(`
`), `

search.addWidgets([
  `).concat(i.filter(function(a) {
    var o = cr(a, 2);
    o[0];
    var s = o[1].connectors;
    return s.length > 0;
  }).map(function(a) {
    var o = cr(a, 2);
    o[0];
    var s = o[1].widgets, u = Za(s[0]);
    return "virtual".concat(u, "({ /* ... */ })");
  }).join(`,
  `), `
]);
\`\`\`

If you're using custom widgets that do set these query parameters, we recommend using connectors instead.

See https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets`));
}
function $i(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function mt(e, t) {
  if (e === void 0 || typeof e != "function")
    throw new Error("The render function is not valid (received type ".concat($i(e), `).

`).concat(t));
}
function eo(e) {
  var t = e.helper, r = e.attributesToClear, n = r === void 0 ? [] : r, i = t.state.setPage(0);
  return i = n.reduce(function(a, o) {
    return i.isNumericRefined(o) ? a.removeNumericRefinement(o) : i.isHierarchicalFacet(o) ? a.removeHierarchicalFacetRefinement(o) : i.isDisjunctiveFacet(o) ? a.removeDisjunctiveFacetRefinement(o) : i.isConjunctiveFacet(o) ? a.removeFacetRefinement(o) : a;
  }, i), n.indexOf("query") !== -1 && (i = i.setQuery("")), i;
}
var np = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ku = /[&<>"']/g, ip = RegExp(ku.source);
function ap(e) {
  return e && ip.test(e) ? e.replace(ku, function(t) {
    return np[t];
  }) : e;
}
var op = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, Uu = /&(amp|quot|lt|gt|#39);/g, sp = RegExp(Uu.source);
function un(e) {
  return e && sp.test(e) ? e.replace(Uu, function(t) {
    return op[t];
  }) : e;
}
function xi(e) {
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function up(e) {
  return e === null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function cp(e) {
  return xi(e) === "object" && e !== null;
}
function lp(e) {
  if (!cp(e) || up(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Pr(e) {
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function fp(e) {
  if (e == null)
    throw new TypeError("Cannot destructure " + e);
}
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
function to(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? to(Object(r), !0).forEach(function(n) {
      Bu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : to(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bu(e, t, r) {
  return t = pp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pp(e) {
  var t = dp(e, "string");
  return Pr(t) === "symbol" ? t : String(t);
}
function dp(e, t) {
  if (Pr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Pr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vt = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__"
}, Pe = {
  highlightPreTag: "<mark>",
  highlightPostTag: "</mark>"
};
function Vu(e) {
  return ap(e).replace(new RegExp(Vt.highlightPreTag, "g"), Pe.highlightPreTag).replace(new RegExp(Vt.highlightPostTag, "g"), Pe.highlightPostTag);
}
function Tn(e) {
  return lp(e) && typeof e.value != "string" ? Object.keys(e).reduce(function(t, r) {
    return Mt(Mt({}, t), {}, Bu({}, r, Tn(e[r])));
  }, {}) : Array.isArray(e) ? e.map(Tn) : Mt(Mt({}, e), {}, {
    value: Vu(e.value)
  });
}
function Qu(e) {
  return e.__escaped === void 0 && (e = e.map(function(t) {
    var r = Ti({}, (fp(t), t));
    return r._highlightResult && (r._highlightResult = Tn(r._highlightResult)), r._snippetResult && (r._snippetResult = Tn(r._snippetResult)), r;
  }), e.__escaped = !0), e;
}
function hp(e) {
  return e.map(function(t) {
    return Mt(Mt({}, t), {}, {
      highlighted: Vu(t.highlighted)
    });
  });
}
function Ku(e) {
  var t = Pe.highlightPreTag, r = Pe.highlightPostTag;
  return e.map(function(n) {
    return n.isHighlighted ? t + n.value + r : n.value;
  }).join("");
}
function mp() {
  var e = -1, t = -1, r = void 0;
  return function(i) {
    var a = ++e;
    return Promise.resolve(i).then(function(o) {
      return r && a < t ? r : (t = a, r = o, o);
    });
  };
}
function gp(e, t, r) {
  return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, r) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, r) : e.state.isDisjunctiveFacetRefined(t, r);
}
function Ai(e) {
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function vp(e) {
  var t = e.instantSearchInstance, r = e.helper, n = e.attribute, i = e.widgetType, a = function() {
    for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
      u[c] = arguments[c];
    var l = u[0], p = u[1], d = u[2], f = d === void 0 ? "Filter Applied" : d, m = typeof n == "string" ? n : n(p);
    if (u.length === 1 && Ai(u[0]) === "object")
      t.sendEventToInsights(u[0]);
    else if (l === "click" && (u.length === 2 || u.length === 3))
      gp(r, m, p) || t.sendEventToInsights({
        insightsMethod: "clickedFilters",
        widgetType: i,
        eventType: l,
        payload: {
          eventName: f,
          index: r.getIndex(),
          filters: ["".concat(m, ":").concat(p)]
        },
        attribute: m
      });
    else if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass two arguments like:
  sendEvent('click', facetValue);

If you want to send a custom payload, you can pass one object: sendEvent(customPayload);
`);
  };
  return a;
}
function zu(e) {
  return btoa(encodeURIComponent(JSON.stringify(e)));
}
function Ju(e) {
  return JSON.parse(decodeURIComponent(atob(e)));
}
function Ci(e) {
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function yp(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, r = [], n = 0; n < Math.ceil(e.length / t); n++)
    r.push(e.slice(n * t, (n + 1) * t));
  return r;
}
var Gu = function(t) {
  var r = t.index, n = t.widgetType, i = t.methodName, a = t.args, o = t.instantSearchInstance;
  if (a.length === 1 && Ci(a[0]) === "object")
    return [a[0]];
  var s = a[0], u = a[1], c = a[2];
  if (!u) {
    if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass hit or hits as the second argument like:
  `.concat(i, `(eventType, hit);
  `));
    return [];
  }
  if ((s === "click" || s === "conversion") && !c) {
    if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass eventName as the third argument for 'click' or 'conversion' events like:
  `.concat(i, `('click', hit, 'Product Purchased');

  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/
  `));
    return [];
  }
  var l = Array.isArray(u) ? u : [u];
  if (l.length === 0)
    return [];
  var p = l[0].__queryID, d = yp(l), f = d.map(function(v) {
    return v.map(function(h) {
      return h.objectID;
    });
  }), m = d.map(function(v) {
    return v.map(function(h) {
      return h.__position;
    });
  });
  if (s === "view")
    return o.status !== "idle" ? [] : d.map(function(v, h) {
      return {
        insightsMethod: "viewedObjectIDs",
        widgetType: n,
        eventType: s,
        payload: {
          eventName: c || "Hits Viewed",
          index: r,
          objectIDs: f[h]
        },
        hits: v
      };
    });
  if (s === "click")
    return d.map(function(v, h) {
      return {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType: n,
        eventType: s,
        payload: {
          eventName: c,
          index: r,
          queryID: p,
          objectIDs: f[h],
          positions: m[h]
        },
        hits: v
      };
    });
  if (s === "conversion")
    return d.map(function(v, h) {
      return {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType: n,
        eventType: s,
        payload: {
          eventName: c,
          index: r,
          queryID: p,
          objectIDs: f[h]
        },
        hits: v
      };
    });
  if (process.env.NODE_ENV === "development")
    throw new Error('eventType("'.concat(s, `") is not supported.
    If you want to send a custom payload, you can pass one object: `).concat(i, `(customPayload);
    `));
  return [];
};
function bp(e) {
  var t = e.instantSearchInstance, r = e.index, n = e.widgetType, i = function() {
    for (var o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    var c = Gu({
      widgetType: n,
      index: r,
      methodName: "sendEvent",
      args: s,
      instantSearchInstance: t
    });
    c.forEach(function(l) {
      return t.sendEventToInsights(l);
    });
  };
  return i;
}
function Op(e) {
  var t = e.index, r = e.widgetType, n = e.instantSearchInstance, i = function() {
    for (var o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    var c = Gu({
      widgetType: r,
      index: t,
      methodName: "bindEvent",
      args: s,
      instantSearchInstance: n
    });
    return c.length ? "data-insights-event=".concat(zu(c)) : "";
  };
  return i;
}
function rr(e) {
  return e.$$type === "ais.index";
}
function Ni(e, t) {
  var r = e[t.getIndexId()] || {};
  process.env.NODE_ENV === "development" && Mu({
    index: t,
    indexUiState: r
  }), t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, {
    uiState: r
  })), t.getWidgets().filter(rr).forEach(function(n) {
    return Ni(e, n);
  });
}
function ro(e, t) {
  var r = null;
  return function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return new Promise(function(o, s) {
      r && clearTimeout(r), r = setTimeout(function() {
        r = null, Promise.resolve(e.apply(void 0, i)).then(o).catch(s);
      }, t);
    });
  };
}
var Sp = Promise.resolve();
function lr(e) {
  var t = null, r = !1, n = function() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    t === null && (t = Sp.then(function() {
      if (t = null, r) {
        r = !1;
        return;
      }
      e.apply(void 0, o);
    }));
  };
  return n.wait = function() {
    if (t === null)
      throw new Error("The deferred function should be called before calling `wait()`");
    return t;
  }, n.cancel = function() {
    t !== null && (r = !0);
  }, n;
}
function Yu(e) {
  var t = e.name, r = e.connector, n = r === void 0 ? !1 : r;
  return ["https://www.algolia.com/doc/api-reference/widgets/", t, "/js/", n ? "#connector" : ""].join("");
}
function he() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.map(function(i) {
    return Yu(i);
  }).join(", ");
  return function(i) {
    return [i, "See documentation: ".concat(n)].filter(Boolean).join(`

`);
  };
}
function wp(e) {
  return typeof e == "string" ? e.replace(/^\\-/, "-") : e;
}
function Pp(e) {
  return typeof e == "number" && e < 0 || typeof e == "string" ? String(e).replace(/^-/, "\\-") : e;
}
function Fi(e, t) {
  for (var r, n = 0; n < e.length; n++)
    if (r = e[n], t(r, n, e))
      return r;
}
function _p(e, t) {
  if (!Array.isArray(e))
    return -1;
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
  return -1;
}
function jp(e) {
  return e instanceof HTMLElement || Boolean(e) && e.nodeType > 0;
}
function gt(e) {
  var t = typeof e == "string", r = t ? document.querySelector(e) : e;
  if (!jp(r)) {
    var n = "Container must be `string` or `HTMLElement`.";
    throw t && (n += " Unable to find ".concat(e)), new Error(n);
  }
  return r;
}
function nr(e) {
  var t = Pe.highlightPostTag, r = Pe.highlightPreTag, n = e.split(r), i = n.shift(), a = i ? [{
    value: i,
    isHighlighted: !1
  }] : [];
  return n.forEach(function(o) {
    var s = o.split(t);
    a.push({
      value: s[0],
      isHighlighted: !0
    }), s[1] !== "" && a.push({
      value: s[1],
      isHighlighted: !1
    });
  }), a;
}
var Rp = new RegExp(/\w/i);
function Ip(e, t) {
  var r, n, i = e[t], a = ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) || !0, o = ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) || !0;
  return !Rp.test(un(i.value)) && o === a ? o : i.isHighlighted;
}
function vt(e, t) {
  var r = Array.isArray(t) ? t : t.split(".");
  return r.reduce(function(n, i) {
    return n && n[i];
  }, e);
}
function li(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], a = {
    type: t,
    attribute: r,
    name: n,
    escapedValue: Pp(n)
  }, o = Fi(i, function(f) {
    return f.name === r;
  }), s;
  if (t === "hierarchical") {
    for (var u = e.getHierarchicalFacetByName(r), c = n.split(u.separator), l = function(m) {
      return function(v) {
        return m[v];
      };
    }, p = function(m) {
      o = o && o.data && Fi(Object.keys(o.data).map(l(o.data)), function(v) {
        return v.name === c[m];
      });
    }, d = 0; o !== void 0 && d < c.length; ++d)
      p(d);
    s = o && o.count;
  } else
    s = o && o.data && o.data[a.name];
  return s !== void 0 && (a.count = s), o && o.exhaustive !== void 0 && (a.exhaustive = o.exhaustive), a;
}
function Xu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = [], i = t.facetsRefinements, a = i === void 0 ? {} : i, o = t.facetsExcludes, s = o === void 0 ? {} : o, u = t.disjunctiveFacetsRefinements, c = u === void 0 ? {} : u, l = t.hierarchicalFacetsRefinements, p = l === void 0 ? {} : l, d = t.numericRefinements, f = d === void 0 ? {} : d, m = t.tagRefinements, v = m === void 0 ? [] : m;
  return Object.keys(a).forEach(function(h) {
    var O = a[h];
    O.forEach(function(P) {
      n.push(li(t, "facet", h, P, e.facets));
    });
  }), Object.keys(s).forEach(function(h) {
    var O = s[h];
    O.forEach(function(P) {
      n.push({
        type: "exclude",
        attribute: h,
        name: P,
        exclude: !0
      });
    });
  }), Object.keys(c).forEach(function(h) {
    var O = c[h];
    O.forEach(function(P) {
      n.push(li(
        t,
        "disjunctive",
        h,
        // We unescape any disjunctive refined values with `unescapeFacetValue` because
        // they can be escaped on negative numeric values with `escapeFacetValue`.
        wp(P),
        e.disjunctiveFacets
      ));
    });
  }), Object.keys(p).forEach(function(h) {
    var O = p[h];
    O.forEach(function(P) {
      n.push(li(t, "hierarchical", h, P, e.hierarchicalFacets));
    });
  }), Object.keys(f).forEach(function(h) {
    var O = f[h];
    Object.keys(O).forEach(function(P) {
      var _ = P, T = O[_], $ = Array.isArray(T) ? T : [T];
      $.forEach(function(x) {
        n.push({
          type: "numeric",
          attribute: h,
          name: "".concat(x),
          numericValue: x,
          operator: _
        });
      });
    });
  }), v.forEach(function(h) {
    n.push({
      type: "tag",
      attribute: "_tags",
      name: h
    });
  }), r && t.query && t.query.trim() && n.push({
    attribute: "query",
    type: "query",
    name: t.query,
    query: t.query
  }), n;
}
function Zu(e, t) {
  var r, n = (r = e.getWidgetRenderState) === null || r === void 0 ? void 0 : r.call(e, t), i = null;
  if (n && n.widgetParams) {
    var a = n.widgetParams;
    a.attribute ? i = a.attribute : Array.isArray(a.attributes) && (i = a.attributes[0]);
  }
  if (typeof i != "string")
    throw new Error(`Could not find the attribute of the widget:

`.concat(JSON.stringify(e), `

Please check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly.`));
  return i;
}
function _r(e) {
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
}
function no(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? no(Object(r), !0).forEach(function(n) {
      Ep(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ep(e, t, r) {
  return t = $p(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $p(e) {
  var t = xp(e, "string");
  return _r(t) === "symbol" ? t : String(t);
}
function xp(e, t) {
  if (_r(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_r(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ec(e, t, r) {
  return e.map(function(n, i) {
    return io(io({}, n), {}, {
      __position: r * t + i + 1
    });
  });
}
function jr(e) {
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
function ao(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ao(Object(r), !0).forEach(function(n) {
      Tp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ao(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tp(e, t, r) {
  return t = Ap(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ap(e) {
  var t = Cp(e, "string");
  return jr(t) === "symbol" ? t : String(t);
}
function Cp(e, t) {
  if (jr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (jr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tc(e, t) {
  return t ? e.map(function(r) {
    return oo(oo({}, r), {}, {
      __queryID: t
    });
  }) : e;
}
function so(e) {
  return e !== Object(e);
}
function Et(e, t) {
  if (e === t)
    return !0;
  if (so(e) || so(t) || typeof e == "function" || typeof t == "function")
    return e === t;
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (!(i in t) || !Et(e[i], t[i]))
      return !1;
  }
  return !0;
}
function Np(e) {
  var t = e.button === 1;
  return t || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
}
function Jn(e) {
  return e.filter(function(t, r, n) {
    return n.indexOf(t) === r;
  });
}
function Rr(e) {
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
var Fp = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];
function uo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uo(Object(r), !0).forEach(function(n) {
      Dp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dp(e, t, r) {
  return t = Hp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hp(e) {
  var t = qp(e, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function qp(e, t) {
  if (Rr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lp(e, t) {
  if (e == null)
    return {};
  var r = Wp(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Wp(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Mp = function(t, r) {
  r.facets, r.disjunctiveFacets, r.facetsRefinements, r.facetsExcludes, r.disjunctiveFacetsRefinements, r.numericRefinements, r.tagRefinements, r.hierarchicalFacets, r.hierarchicalFacetsRefinements, r.ruleContexts;
  var n = Lp(r, Fp);
  return t.setQueryParameters(n);
}, kp = function(t, r) {
  return r.facets.reduce(function(n, i) {
    return n.addFacet(i);
  }, t);
}, Up = function(t, r) {
  return r.disjunctiveFacets.reduce(function(n, i) {
    return n.addDisjunctiveFacet(i);
  }, t);
}, Bp = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacets: r.hierarchicalFacets.reduce(function(n, i) {
      var a = _p(n, function(s) {
        return s.name === i.name;
      });
      if (a === -1)
        return n.concat(i);
      var o = n.slice();
      return o.splice(a, 1, i), o;
    }, t.hierarchicalFacets)
  });
}, Vp = function(t, r) {
  return r.tagRefinements.reduce(function(n, i) {
    return n.addTagRefinement(i);
  }, t);
}, Qp = function(t, r) {
  return t.setQueryParameters({
    facetsRefinements: Ge(Ge({}, t.facetsRefinements), r.facetsRefinements)
  });
}, Kp = function(t, r) {
  return t.setQueryParameters({
    facetsExcludes: Ge(Ge({}, t.facetsExcludes), r.facetsExcludes)
  });
}, zp = function(t, r) {
  return t.setQueryParameters({
    disjunctiveFacetsRefinements: Ge(Ge({}, t.disjunctiveFacetsRefinements), r.disjunctiveFacetsRefinements)
  });
}, Jp = function(t, r) {
  return t.setQueryParameters({
    numericRefinements: Ge(Ge({}, t.numericRefinements), r.numericRefinements)
  });
}, Gp = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacetsRefinements: Ge(Ge({}, t.hierarchicalFacetsRefinements), r.hierarchicalFacetsRefinements)
  });
}, Yp = function(t, r) {
  var n = Jn([].concat(t.ruleContexts).concat(r.ruleContexts).filter(Boolean));
  return n.length > 0 ? t.setQueryParameters({
    ruleContexts: n
  }) : t;
}, rc = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.reduce(function(i, a) {
    var o = Gp(i, a), s = Bp(o, a), u = Vp(s, a), c = Jp(u, a), l = zp(c, a), p = Kp(l, a), d = Qp(p, a), f = Up(d, a), m = Yp(f, a), v = kp(m, a);
    return Mp(v, a);
  });
};
function Xp(e, t) {
  return e == null ? e : Object.keys(e).reduce(function(r, n) {
    if (t.indexOf(n) >= 0)
      return r;
    var i = n;
    return r[i] = e[i], r;
  }, {});
}
function mr(e, t, r) {
  var n = t.getHelper();
  return {
    uiState: r,
    helper: n,
    parent: t,
    instantSearchInstance: e,
    state: n.state,
    renderState: e.renderState,
    templatesConfig: e.templatesConfig,
    createURL: t.createURL,
    scopedResults: [],
    searchMetadata: {
      isSearchStalled: e.status === "stalled"
    },
    status: e.status,
    error: e.error
  };
}
function co(e, t) {
  var r = t.getResults();
  return {
    helper: t.getHelper(),
    parent: t,
    instantSearchInstance: e,
    results: r,
    scopedResults: t.getScopedResults(),
    state: r._state,
    renderState: e.renderState,
    templatesConfig: e.templatesConfig,
    createURL: t.createURL,
    searchMetadata: {
      isSearchStalled: e.status === "stalled"
    },
    status: e.status,
    error: e.error
  };
}
function Zp(e) {
  for (var t = e.getParent(), r = [e.getHelper().state]; t !== null; )
    r = [t.getHelper().state].concat(r), t = t.getParent();
  return r;
}
function Ir(e) {
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function lo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lo(Object(r), !0).forEach(function(n) {
      ed(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ed(e, t, r) {
  return t = td(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function td(e) {
  var t = rd(e, "string");
  return Ir(t) === "symbol" ? t : String(t);
}
function rd(e, t) {
  if (Ir(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ir(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nc(e) {
  return e.some(function(t) {
    return t.isHighlighted;
  }) ? e.map(function(t, r) {
    return fn(fn({}, t), {}, {
      isHighlighted: !Ip(e, r)
    });
  }) : e.map(function(t) {
    return fn(fn({}, t), {}, {
      isHighlighted: !1
    });
  });
}
function tt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    fallback: function() {
    }
  }, r = t.fallback;
  return typeof window > "u" ? r() : e({
    window
  });
}
function Gn(e) {
  return Array.isArray(e) ? e : [e];
}
var nd = Ne("Highlight");
function ic(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a, s = vt(i._highlightResult, t);
  process.env.NODE_ENV === "development" && X(s, 'Could not enable highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var u = s || {}, c = u.value, l = c === void 0 ? "" : c, p = nd({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : "");
  return l.replace(new RegExp(Pe.highlightPreTag, "g"), "<".concat(n, ' class="').concat(p, '">')).replace(new RegExp(Pe.highlightPostTag, "g"), "</".concat(n, ">"));
}
var id = Ne("ReverseHighlight");
function ac(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a, s = vt(i._highlightResult, t);
  process.env.NODE_ENV === "development" && X(s, 'Could not enable reverse highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var u = s || {}, c = u.value, l = c === void 0 ? "" : c, p = id({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : ""), d = Ku(nc(nr(l)));
  return d.replace(new RegExp(Pe.highlightPreTag, "g"), "<".concat(n, ' class="').concat(p, '">')).replace(new RegExp(Pe.highlightPostTag, "g"), "</".concat(n, ">"));
}
var ad = Ne("Snippet");
function oc(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a, s = vt(i._snippetResult, t);
  process.env.NODE_ENV === "development" && X(s, 'Could not enable snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var u = s || {}, c = u.value, l = c === void 0 ? "" : c, p = ad({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : "");
  return l.replace(new RegExp(Pe.highlightPreTag, "g"), "<".concat(n, ' class="').concat(p, '">')).replace(new RegExp(Pe.highlightPostTag, "g"), "</".concat(n, ">"));
}
var od = Ne("ReverseSnippet");
function sc(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a, s = vt(i._snippetResult, t);
  process.env.NODE_ENV === "development" && X(s, 'Could not enable reverse snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var u = s || {}, c = u.value, l = c === void 0 ? "" : c, p = od({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : ""), d = Ku(nc(nr(l)));
  return d.replace(new RegExp(Pe.highlightPreTag, "g"), "<".concat(n, ' class="').concat(p, '">')).replace(new RegExp(Pe.highlightPostTag, "g"), "</".concat(n, ">"));
}
function Di(e) {
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
function sd(e) {
  var t = e.getAttribute("data-insights-method"), r = e.getAttribute("data-insights-payload");
  if (typeof r != "string")
    throw new Error("The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.");
  try {
    var n = Ju(r);
    return {
      method: t,
      payload: n
    };
  } catch {
    throw new Error("The insights helper was unable to parse `data-insights-payload`.");
  }
}
function ud(e) {
  return e.hasAttribute("data-insights-method");
}
function cd(e) {
  var t = e.method, r = e.payload;
  if (Di(r) !== "object")
    throw new Error("The insights helper expects the payload to be an object.");
  var n;
  try {
    n = zu(r);
  } catch {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return 'data-insights-method="'.concat(t, '" data-insights-payload="').concat(n, '"');
}
function uc(e, t) {
  return process.env.NODE_ENV === "development" && X(!1, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), cd({
    method: e,
    payload: t
  });
}
function Hi(e) {
  return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e);
}
var ld = "_ALGOLIA";
function fd(e) {
  if (!((typeof document > "u" ? "undefined" : Hi(document)) !== "object" || typeof document.cookie != "string"))
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) === " "; )
        i = i.substring(1);
      if (i.indexOf(t) === 0)
        return i.substring(t.length, i.length);
    }
}
function pd() {
  return fd(ld);
}
function dd() {
  return process.env.NODE_ENV === "development" && X(!1, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), pd();
}
var hd = ["page"];
function md(e, t) {
  if (e == null)
    return {};
  var r = gd(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gd(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fo(e) {
  var t = e || {};
  t.page;
  var r = md(t, hd);
  return r;
}
var fi = "ais.infiniteHits";
function vd() {
  return {
    read: function(t) {
      var r = t.state, n = tt(function(a) {
        var o = a.window;
        return o.sessionStorage;
      });
      if (!n)
        return null;
      try {
        var i = JSON.parse(
          // @ts-expect-error JSON.parse() requires a string, but it actually accepts null, too.
          n.getItem(fi)
        );
        return i && Et(i.state, fo(r)) ? i.hits : null;
      } catch (a) {
        if (a instanceof SyntaxError)
          try {
            n.removeItem(fi);
          } catch {
          }
        return null;
      }
    },
    write: function(t) {
      var r = t.state, n = t.hits, i = tt(function(a) {
        var o = a.window;
        return o.sessionStorage;
      });
      if (i)
        try {
          i.setItem(fi, JSON.stringify({
            state: fo(r),
            hits: n
          }));
        } catch {
        }
    }
  };
}
function _e() {
  this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
}
var $a = _e;
_e.prototype._events = void 0;
_e.prototype._maxListeners = void 0;
_e.defaultMaxListeners = 10;
_e.prototype.setMaxListeners = function(e) {
  if (!yd(e) || e < 0 || isNaN(e))
    throw TypeError("n must be a positive number");
  return this._maxListeners = e, this;
};
_e.prototype.emit = function(e) {
  var t, r, n, i, a, o;
  if (this._events || (this._events = {}), e === "error" && (!this._events.error || Er(this._events.error) && !this._events.error.length)) {
    if (t = arguments[1], t instanceof Error)
      throw t;
    var s = new Error('Uncaught, unspecified "error" event. (' + t + ")");
    throw s.context = t, s;
  }
  if (r = this._events[e], cc(r))
    return !1;
  if (rt(r))
    switch (arguments.length) {
      case 1:
        r.call(this);
        break;
      case 2:
        r.call(this, arguments[1]);
        break;
      case 3:
        r.call(this, arguments[1], arguments[2]);
        break;
      default:
        i = Array.prototype.slice.call(arguments, 1), r.apply(this, i);
    }
  else if (Er(r))
    for (i = Array.prototype.slice.call(arguments, 1), o = r.slice(), n = o.length, a = 0; a < n; a++)
      o[a].apply(this, i);
  return !0;
};
_e.prototype.addListener = function(e, t) {
  var r;
  if (!rt(t))
    throw TypeError("listener must be a function");
  return this._events || (this._events = {}), this._events.newListener && this.emit(
    "newListener",
    e,
    rt(t.listener) ? t.listener : t
  ), this._events[e] ? Er(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, Er(this._events[e]) && !this._events[e].warned && (cc(this._maxListeners) ? r = _e.defaultMaxListeners : r = this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error(
    "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
    this._events[e].length
  ), typeof console.trace == "function" && console.trace())), this;
};
_e.prototype.on = _e.prototype.addListener;
_e.prototype.once = function(e, t) {
  if (!rt(t))
    throw TypeError("listener must be a function");
  var r = !1;
  function n() {
    this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
  }
  return n.listener = t, this.on(e, n), this;
};
_e.prototype.removeListener = function(e, t) {
  var r, n, i, a;
  if (!rt(t))
    throw TypeError("listener must be a function");
  if (!this._events || !this._events[e])
    return this;
  if (r = this._events[e], i = r.length, n = -1, r === t || rt(r.listener) && r.listener === t)
    delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
  else if (Er(r)) {
    for (a = i; a-- > 0; )
      if (r[a] === t || r[a].listener && r[a].listener === t) {
        n = a;
        break;
      }
    if (n < 0)
      return this;
    r.length === 1 ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t);
  }
  return this;
};
_e.prototype.removeAllListeners = function(e) {
  var t, r;
  if (!this._events)
    return this;
  if (!this._events.removeListener)
    return arguments.length === 0 ? this._events = {} : this._events[e] && delete this._events[e], this;
  if (arguments.length === 0) {
    for (t in this._events)
      t !== "removeListener" && this.removeAllListeners(t);
    return this.removeAllListeners("removeListener"), this._events = {}, this;
  }
  if (r = this._events[e], rt(r))
    this.removeListener(e, r);
  else if (r)
    for (; r.length; )
      this.removeListener(e, r[r.length - 1]);
  return delete this._events[e], this;
};
_e.prototype.listeners = function(e) {
  var t;
  return !this._events || !this._events[e] ? t = [] : rt(this._events[e]) ? t = [this._events[e]] : t = this._events[e].slice(), t;
};
_e.prototype.listenerCount = function(e) {
  if (this._events) {
    var t = this._events[e];
    if (rt(t))
      return 1;
    if (t)
      return t.length;
  }
  return 0;
};
_e.listenerCount = function(e, t) {
  return e.listenerCount(t);
};
function rt(e) {
  return typeof e == "function";
}
function yd(e) {
  return typeof e == "number";
}
function Er(e) {
  return typeof e == "object" && e !== null;
}
function cc(e) {
  return e === void 0;
}
function bd(e) {
  return typeof e == "object" && e !== null ? xa(Array.isArray(e) ? [] : {}, e) : e;
}
function An(e) {
  return typeof e == "function" || Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
}
function xa(e, t) {
  if (e === t)
    return e;
  for (var r in t)
    if (!(!Object.prototype.hasOwnProperty.call(t, r) || r === "__proto__" || r === "constructor")) {
      var n = t[r], i = e[r];
      typeof i < "u" && typeof n > "u" || (An(i) && An(n) ? e[r] = xa(i, n) : e[r] = bd(n));
    }
  return e;
}
function Od(e) {
  An(e) || (e = {});
  for (var t = 1, r = arguments.length; t < r; t++) {
    var n = arguments[t];
    An(n) && xa(e, n);
  }
  return e;
}
var Yn = Od, Ta = function() {
  var t = Array.prototype.slice.call(arguments);
  return t.reduceRight(function(r, n) {
    return Object.keys(Object(n)).forEach(function(i) {
      n[i] !== void 0 && (r[i] !== void 0 && delete r[i], r[i] = n[i]);
    }), r;
  }, {});
};
function Sd(e, t) {
  return e.filter(function(r, n) {
    return t.indexOf(r) > -1 && e.indexOf(r) === n;
  });
}
var wd = Sd, Xn = function(t, r) {
  if (Array.isArray(t)) {
    for (var n = 0; n < t.length; n++)
      if (r(t[n]))
        return t[n];
  }
};
function lc(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string")
    return parseFloat(e);
  if (Array.isArray(e))
    return e.map(lc);
  throw new Error("The value should be a number, a parsable string or an array of those.");
}
var Pd = lc;
function _d(e, t) {
  if (e === null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Aa = _d;
function jd(e) {
  return e && Object.keys(e).length > 0;
}
var Ca = jd, Rd = function(t) {
  return t === null ? !1 : /^[a-zA-Z0-9_-]{1,64}$/.test(t);
}, Id = Ta, Ed = Aa, $d = Ca, Pt = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function(t, r, n) {
    if (Pt.isRefined(t, r, n))
      return t;
    var i = "" + n, a = t[r] ? t[r].concat(i) : [i], o = {};
    return o[r] = a, Id({}, o, t);
  },
  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function(t, r, n) {
    if (n === void 0)
      return Pt.clearRefinement(t, function(a, o) {
        return r === o;
      });
    var i = "" + n;
    return Pt.clearRefinement(t, function(a, o) {
      return r === o && i === a;
    });
  },
  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function(t, r, n) {
    if (n === void 0)
      throw new Error("toggleRefinement should be used with a value");
    return Pt.isRefined(t, r, n) ? Pt.removeRefinement(t, r, n) : Pt.addRefinement(t, r, n);
  },
  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function(t, r, n) {
    if (r === void 0)
      return $d(t) ? {} : t;
    if (typeof r == "string")
      return Ed(t, [r]);
    if (typeof r == "function") {
      var i = !1, a = Object.keys(t).reduce(function(o, s) {
        var u = t[s] || [], c = u.filter(function(l) {
          return !r(l, s, n);
        });
        return c.length !== u.length && (i = !0), o[s] = c, o;
      }, {});
      return i ? a : t;
    }
  },
  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */
  isRefined: function(t, r, n) {
    var i = !!t[r] && t[r].length > 0;
    if (n === void 0 || !i)
      return i;
    var a = "" + n;
    return t[r].indexOf(a) !== -1;
  }
}, xd = Pt, qi = Yn, pi = Ta, po = wd, fc = Xn, di = Pd, ho = Aa, Li = Ca, Td = Rd, se = xd;
function Na(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function(r, n) {
    return Na(t[n], r);
  }) : e === t;
}
function Ad(e, t) {
  return fc(e, function(r) {
    return Na(r, t);
  });
}
function xe(e) {
  var t = e ? xe._parseNumbers(e) : {};
  t.userToken !== void 0 && !Td(t.userToken) && console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
  var r = this;
  Object.keys(t).forEach(function(n) {
    var i = xe.PARAMETERS.indexOf(n) !== -1, a = t[n] !== void 0;
    !i && a && (r[n] = t[n]);
  });
}
xe.PARAMETERS = Object.keys(new xe());
xe._parseNumbers = function(e) {
  if (e instanceof xe)
    return e;
  var t = {}, r = [
    "aroundPrecision",
    "aroundRadius",
    "getRankingInfo",
    "minWordSizefor2Typos",
    "minWordSizefor1Typo",
    "page",
    "maxValuesPerFacet",
    "distinct",
    "minimumAroundRadius",
    "hitsPerPage",
    "minProximity"
  ];
  if (r.forEach(function(i) {
    var a = e[i];
    if (typeof a == "string") {
      var o = parseFloat(a);
      t[i] = isNaN(o) ? a : o;
    }
  }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function(i) {
    return Array.isArray(i) ? i.map(function(a) {
      return parseFloat(a);
    }) : i;
  })), e.numericRefinements) {
    var n = {};
    Object.keys(e.numericRefinements).forEach(function(i) {
      var a = e.numericRefinements[i] || {};
      n[i] = {}, Object.keys(a).forEach(function(o) {
        var s = a[o], u = s.map(function(c) {
          return Array.isArray(c) ? c.map(function(l) {
            return typeof l == "string" ? parseFloat(l) : l;
          }) : typeof c == "string" ? parseFloat(c) : c;
        });
        n[i][o] = u;
      });
    }), t.numericRefinements = n;
  }
  return qi({}, e, t);
};
xe.make = function(t) {
  var r = new xe(t), n = t.hierarchicalFacets || [];
  return n.forEach(function(i) {
    if (i.rootPath) {
      var a = r.getHierarchicalRefinement(i.name);
      a.length > 0 && a[0].indexOf(i.rootPath) !== 0 && (r = r.clearRefinements(i.name)), a = r.getHierarchicalRefinement(i.name), a.length === 0 && (r = r.toggleHierarchicalFacetRefinement(i.name, i.rootPath));
    }
  }), r;
};
xe.validate = function(e, t) {
  var r = t || {};
  return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? new Error(
    "[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."
  ) : e.tagRefinements.length > 0 && r.tagFilters ? new Error(
    "[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."
  ) : e.numericFilters && r.numericRefinements && Li(r.numericRefinements) ? new Error(
    "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : Li(e.numericRefinements) && r.numericFilters ? new Error(
    "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : null;
};
xe.prototype = {
  constructor: xe,
  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */
  clearRefinements: function(t) {
    var r = {
      numericRefinements: this._clearNumericRefinements(t),
      facetsRefinements: se.clearRefinement(
        this.facetsRefinements,
        t,
        "conjunctiveFacet"
      ),
      facetsExcludes: se.clearRefinement(
        this.facetsExcludes,
        t,
        "exclude"
      ),
      disjunctiveFacetsRefinements: se.clearRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        "disjunctiveFacet"
      ),
      hierarchicalFacetsRefinements: se.clearRefinement(
        this.hierarchicalFacetsRefinements,
        t,
        "hierarchicalFacet"
      )
    };
    return r.numericRefinements === this.numericRefinements && r.facetsRefinements === this.facetsRefinements && r.facetsExcludes === this.facetsExcludes && r.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && r.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(r);
  },
  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */
  clearTags: function() {
    return this.tagFilters === void 0 && this.tagRefinements.length === 0 ? this : this.setQueryParameters({
      tagFilters: void 0,
      tagRefinements: []
    });
  },
  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */
  setIndex: function(t) {
    return t === this.index ? this : this.setQueryParameters({
      index: t
    });
  },
  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */
  setQuery: function(t) {
    return t === this.query ? this : this.setQueryParameters({
      query: t
    });
  },
  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */
  setPage: function(t) {
    return t === this.page ? this : this.setQueryParameters({
      page: t
    });
  },
  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */
  setFacets: function(t) {
    return this.setQueryParameters({
      facets: t
    });
  },
  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */
  setDisjunctiveFacets: function(t) {
    return this.setQueryParameters({
      disjunctiveFacets: t
    });
  },
  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */
  setHitsPerPage: function(t) {
    return this.hitsPerPage === t ? this : this.setQueryParameters({
      hitsPerPage: t
    });
  },
  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */
  setTypoTolerance: function(t) {
    return this.typoTolerance === t ? this : this.setQueryParameters({
      typoTolerance: t
    });
  },
  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function(e, t, r) {
    var n = di(r);
    if (this.isNumericRefined(e, t, n))
      return this;
    var i = qi({}, this.numericRefinements);
    return i[e] = qi({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(n)) : i[e][t] = [n], this.setQueryParameters({
      numericRefinements: i
    });
  },
  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function(e) {
    return this.isConjunctiveFacet(e) ? this.facetsRefinements[e] || [] : [];
  },
  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function(e) {
    return this.isDisjunctiveFacet(e) ? this.disjunctiveFacetsRefinements[e] || [] : [];
  },
  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function(e) {
    return this.hierarchicalFacetsRefinements[e] || [];
  },
  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function(e) {
    return this.isConjunctiveFacet(e) ? this.facetsExcludes[e] || [] : [];
  },
  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */
  removeNumericRefinement: function(e, t, r) {
    return r !== void 0 ? this.isNumericRefined(e, t, r) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(n, i) {
        return i === e && n.op === t && Na(n.val, di(r));
      })
    }) : this : t !== void 0 ? this.isNumericRefined(e, t) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(n, i) {
        return i === e && n.op === t;
      })
    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(n, i) {
        return i === e;
      })
    }) : this;
  },
  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */
  getNumericRefinements: function(e) {
    return this.numericRefinements[e] || {};
  },
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  getNumericRefinement: function(e, t) {
    return this.numericRefinements[e] && this.numericRefinements[e][t];
  },
  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */
  _clearNumericRefinements: function(t) {
    if (t === void 0)
      return Li(this.numericRefinements) ? {} : this.numericRefinements;
    if (typeof t == "string")
      return ho(this.numericRefinements, [t]);
    if (typeof t == "function") {
      var r = !1, n = this.numericRefinements, i = Object.keys(n).reduce(function(a, o) {
        var s = n[o], u = {};
        return s = s || {}, Object.keys(s).forEach(function(c) {
          var l = s[c] || [], p = [];
          l.forEach(function(d) {
            var f = t({ val: d, op: c }, o, "numeric");
            f || p.push(d);
          }), p.length !== l.length && (r = !0), u[c] = p;
        }), a[o] = u, a;
      }, {});
      return r ? i : this.numericRefinements;
    }
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */
  addFacet: function(t) {
    return this.isConjunctiveFacet(t) ? this : this.setQueryParameters({
      facets: this.facets.concat([t])
    });
  },
  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */
  addDisjunctiveFacet: function(t) {
    return this.isDisjunctiveFacet(t) ? this : this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([t])
    });
  },
  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function(t) {
    if (this.isHierarchicalFacet(t.name))
      throw new Error(
        "Cannot declare two hierarchical facets with the same name: `" + t.name + "`"
      );
    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([t])
    });
  },
  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return se.isRefined(this.facetsRefinements, t, r) ? this : this.setQueryParameters({
      facetsRefinements: se.addRefinement(this.facetsRefinements, t, r)
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addExcludeRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return se.isRefined(this.facetsExcludes, t, r) ? this : this.setQueryParameters({
      facetsExcludes: se.addRefinement(this.facetsExcludes, t, r)
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return se.isRefined(this.disjunctiveFacetsRefinements, t, r) ? this : this.setQueryParameters({
      disjunctiveFacetsRefinements: se.addRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */
  addTagRefinement: function(t) {
    if (this.isTagRefined(t))
      return this;
    var r = {
      tagRefinements: this.tagRefinements.concat(t)
    };
    return this.setQueryParameters(r);
  },
  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */
  removeFacet: function(t) {
    return this.isConjunctiveFacet(t) ? this.clearRefinements(t).setQueryParameters({
      facets: this.facets.filter(function(r) {
        return r !== t;
      })
    }) : this;
  },
  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */
  removeDisjunctiveFacet: function(t) {
    return this.isDisjunctiveFacet(t) ? this.clearRefinements(t).setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.filter(function(r) {
        return r !== t;
      })
    }) : this;
  },
  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */
  removeHierarchicalFacet: function(t) {
    return this.isHierarchicalFacet(t) ? this.clearRefinements(t).setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.filter(function(r) {
        return r.name !== t;
      })
    }) : this;
  },
  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */
  removeFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return se.isRefined(this.facetsRefinements, t, r) ? this.setQueryParameters({
      facetsRefinements: se.removeRefinement(this.facetsRefinements, t, r)
    }) : this;
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeExcludeRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return se.isRefined(this.facetsExcludes, t, r) ? this.setQueryParameters({
      facetsExcludes: se.removeRefinement(this.facetsExcludes, t, r)
    }) : this;
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return se.isRefined(this.disjunctiveFacetsRefinements, t, r) ? this.setQueryParameters({
      disjunctiveFacetsRefinements: se.removeRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    }) : this;
  },
  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */
  removeTagRefinement: function(t) {
    if (!this.isTagRefined(t))
      return this;
    var r = {
      tagRefinements: this.tagRefinements.filter(function(n) {
        return n !== t;
      })
    };
    return this.setQueryParameters(r);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function(t, r) {
    return this.toggleFacetRefinement(t, r);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function(t, r) {
    if (this.isHierarchicalFacet(t))
      return this.toggleHierarchicalFacetRefinement(t, r);
    if (this.isConjunctiveFacet(t))
      return this.toggleConjunctiveFacetRefinement(t, r);
    if (this.isDisjunctiveFacet(t))
      return this.toggleDisjunctiveFacetRefinement(t, r);
    throw new Error("Cannot refine the undeclared facet " + t + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleConjunctiveFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return this.setQueryParameters({
      facetsRefinements: se.toggleRefinement(this.facetsRefinements, t, r)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleExcludeFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return this.setQueryParameters({
      facetsExcludes: se.toggleRefinement(this.facetsExcludes, t, r)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      disjunctiveFacetsRefinements: se.toggleRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleHierarchicalFacetRefinement: function(t, r) {
    if (!this.isHierarchicalFacet(t))
      throw new Error(
        t + " is not defined in the hierarchicalFacets attribute of the helper configuration"
      );
    var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(t)), i = {}, a = this.hierarchicalFacetsRefinements[t] !== void 0 && this.hierarchicalFacetsRefinements[t].length > 0 && // remove current refinement:
    // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
    (this.hierarchicalFacetsRefinements[t][0] === r || // remove a parent refinement of the current refinement:
    //  - refinement was 'beer > IPA > Flying dog'
    //  - call is toggleRefine('beer > IPA')
    //  - refinement should be `beer`
    this.hierarchicalFacetsRefinements[t][0].indexOf(r + n) === 0);
    return a ? r.indexOf(n) === -1 ? i[t] = [] : i[t] = [r.slice(0, r.lastIndexOf(n))] : i[t] = [r], this.setQueryParameters({
      hierarchicalFacetsRefinements: pi({}, i, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function(e, t) {
    if (this.isHierarchicalFacetRefined(e))
      throw new Error(e + " is already refined.");
    if (!this.isHierarchicalFacet(e))
      throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
    var r = {};
    return r[e] = [t], this.setQueryParameters({
      hierarchicalFacetsRefinements: pi({}, r, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function(e) {
    if (!this.isHierarchicalFacetRefined(e))
      return this;
    var t = {};
    return t[e] = [], this.setQueryParameters({
      hierarchicalFacetsRefinements: pi({}, t, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */
  toggleTagRefinement: function(t) {
    return this.isTagRefined(t) ? this.removeTagRefinement(t) : this.addTagRefinement(t);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isDisjunctiveFacet: function(e) {
    return this.disjunctiveFacets.indexOf(e) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */
  isHierarchicalFacet: function(e) {
    return this.getHierarchicalFacetByName(e) !== void 0;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isConjunctiveFacet: function(e) {
    return this.facets.indexOf(e) > -1;
  },
  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function(t, r) {
    return this.isConjunctiveFacet(t) ? se.isRefined(this.facetsRefinements, t, r) : !1;
  },
  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function(t, r) {
    return this.isConjunctiveFacet(t) ? se.isRefined(this.facetsExcludes, t, r) : !1;
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isDisjunctiveFacetRefined: function(t, r) {
    return this.isDisjunctiveFacet(t) ? se.isRefined(this.disjunctiveFacetsRefinements, t, r) : !1;
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isHierarchicalFacetRefined: function(t, r) {
    if (!this.isHierarchicalFacet(t))
      return !1;
    var n = this.getHierarchicalRefinement(t);
    return r ? n.indexOf(r) !== -1 : n.length > 0;
  },
  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function(t, r, n) {
    if (n === void 0 && r === void 0)
      return !!this.numericRefinements[t];
    var i = this.numericRefinements[t] && this.numericRefinements[t][r] !== void 0;
    if (n === void 0 || !i)
      return i;
    var a = di(n), o = Ad(this.numericRefinements[t][r], a) !== void 0;
    return i && o;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */
  isTagRefined: function(t) {
    return this.tagRefinements.indexOf(t) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedDisjunctiveFacets: function() {
    var t = this, r = po(
      Object.keys(this.numericRefinements).filter(function(n) {
        return Object.keys(t.numericRefinements[n]).length > 0;
      }),
      this.disjunctiveFacets
    );
    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(n) {
      return t.disjunctiveFacetsRefinements[n].length > 0;
    }).concat(r).concat(this.getRefinedHierarchicalFacets());
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedHierarchicalFacets: function() {
    var t = this;
    return po(
      // enforce the order between the two arrays,
      // so that refinement name index === hierarchical facet index
      this.hierarchicalFacets.map(function(r) {
        return r.name;
      }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function(r) {
        return t.hierarchicalFacetsRefinements[r].length > 0;
      })
    );
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */
  getUnrefinedDisjunctiveFacets: function() {
    var e = this.getRefinedDisjunctiveFacets();
    return this.disjunctiveFacets.filter(function(t) {
      return e.indexOf(t) === -1;
    });
  },
  managedParameters: [
    "index",
    "facets",
    "disjunctiveFacets",
    "facetsRefinements",
    "hierarchicalFacets",
    "facetsExcludes",
    "disjunctiveFacetsRefinements",
    "numericRefinements",
    "tagRefinements",
    "hierarchicalFacetsRefinements"
  ],
  getQueryParams: function() {
    var t = this.managedParameters, r = {}, n = this;
    return Object.keys(this).forEach(function(i) {
      var a = n[i];
      t.indexOf(i) === -1 && a !== void 0 && (r[i] = a);
    }), r;
  },
  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function(t, r) {
    if (this[t] === r)
      return this;
    var n = {};
    return n[t] = r, this.setQueryParameters(n);
  },
  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function(t) {
    if (!t)
      return this;
    var r = xe.validate(this, t);
    if (r)
      throw r;
    var n = this, i = xe._parseNumbers(t), a = Object.keys(this).reduce(function(s, u) {
      return s[u] = n[u], s;
    }, {}), o = Object.keys(i).reduce(
      function(s, u) {
        var c = s[u] !== void 0, l = i[u] !== void 0;
        return c && !l ? ho(s, [u]) : (l && (s[u] = i[u]), s);
      },
      a
    );
    return new this.constructor(o);
  },
  /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */
  resetPage: function() {
    return this.page === void 0 ? this : this.setPage(0);
  },
  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function(e) {
    return e.sortBy || ["isRefined:desc", "name:asc"];
  },
  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function(e) {
    return e.separator || " > ";
  },
  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function(e) {
    return e.rootPath || null;
  },
  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function(e) {
    return typeof e.showParentLevel == "boolean" ? e.showParentLevel : !0;
  },
  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function(e) {
    return fc(
      this.hierarchicalFacets,
      function(t) {
        return t.name === e;
      }
    );
  },
  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function(e) {
    if (!this.isHierarchicalFacet(e))
      return [];
    var t = this.getHierarchicalRefinement(e)[0];
    if (!t)
      return [];
    var r = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(e)
    ), n = t.split(r);
    return n.map(function(i) {
      return i.trim();
    });
  },
  toString: function() {
    return JSON.stringify(this, null, 2);
  }
};
var pc = xe;
function Cd(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = t !== void 0, a = t === null;
    if (!a && e > t || n && i || !r)
      return 1;
    if (!n && e < t || a && r || !i)
      return -1;
  }
  return 0;
}
function Nd(e, t, r) {
  if (!Array.isArray(e))
    return [];
  Array.isArray(r) || (r = []);
  var n = e.map(function(i, a) {
    return {
      criteria: t.map(function(o) {
        return i[o];
      }),
      index: a,
      value: i
    };
  });
  return n.sort(function(a, o) {
    for (var s = -1; ++s < a.criteria.length; ) {
      var u = Cd(a.criteria[s], o.criteria[s]);
      if (u)
        return s >= r.length ? u : r[s] === "desc" ? -u : u;
    }
    return a.index - o.index;
  }), n.map(function(i) {
    return i.value;
  });
}
var dc = Nd, Fd = function(t) {
  return Array.isArray(t) ? t.filter(Boolean) : [];
}, Dd = function(t, r) {
  if (!Array.isArray(t))
    return -1;
  for (var n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
  return -1;
}, Hd = Xn, hc = function(t, r) {
  var n = (r || []).map(function(i) {
    return i.split(":");
  });
  return t.reduce(
    function(a, o) {
      var s = o.split(":"), u = Hd(n, function(c) {
        return c[0] === s[0];
      });
      return s.length > 1 || !u ? (a[0].push(s[0]), a[1].push(s[1]), a) : (a[0].push(u[0]), a[1].push(u[1]), a);
    },
    [[], []]
  );
};
function qd(e) {
  return typeof e != "string" ? e : String(e).replace(/^-/, "\\-");
}
function Ld(e) {
  return typeof e != "string" ? e : e.replace(/^\\-/, "-");
}
var Fa = {
  escapeFacetValue: qd,
  unescapeFacetValue: Ld
}, Wd = Qd, Md = dc, kd = Xn, Ud = hc, mc = Fa, Bd = mc.escapeFacetValue, Vd = mc.unescapeFacetValue;
function Qd(e) {
  return function(r, n) {
    var i = e.hierarchicalFacets[n], a = e.hierarchicalFacetsRefinements[i.name] && e.hierarchicalFacetsRefinements[i.name][0] || "", o = e._getHierarchicalFacetSeparator(
      i
    ), s = e._getHierarchicalRootPath(
      i
    ), u = e._getHierarchicalShowParentLevel(
      i
    ), c = Ud(
      e._getHierarchicalFacetSortBy(i)
    ), l = r.every(function(f) {
      return f.exhaustive;
    }), p = Kd(
      c,
      o,
      s,
      u,
      a
    ), d = r;
    return s && (d = r.slice(
      s.split(o).length
    )), d.reduce(p, {
      name: e.hierarchicalFacets[n].name,
      count: null,
      // root level, no count
      isRefined: !0,
      // root level, always refined
      path: null,
      // root level, no path
      escapedValue: null,
      exhaustive: l,
      data: null
    });
  };
}
function Kd(e, t, r, n, i) {
  return function(o, s, u) {
    var c = o;
    if (u > 0) {
      var l = 0;
      for (c = o; l < u; ) {
        var p = c && Array.isArray(c.data) ? c.data : [];
        c = kd(p, function(f) {
          return f.isRefined;
        }), l++;
      }
    }
    if (c) {
      var d = Object.keys(s.data).map(function(f) {
        return [f, s.data[f]];
      }).filter(function(f) {
        var m = f[0];
        return zd(
          m,
          c.path || r,
          i,
          t,
          r,
          n
        );
      });
      c.data = Md(
        d.map(function(f) {
          var m = f[0], v = f[1];
          return Jd(
            v,
            m,
            t,
            Vd(i),
            s.exhaustive
          );
        }),
        e[0],
        e[1]
      );
    }
    return o;
  };
}
function zd(e, t, r, n, i, a) {
  return i && (e.indexOf(i) !== 0 || i === e) ? !1 : !i && e.indexOf(n) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
  i && e.split(n).length - i.split(n).length === 1 || // if current refinement is a root level and current facetValue is a root level,
  // keep the facetValue
  e.indexOf(n) === -1 && r.indexOf(n) === -1 || // currentRefinement is a child of the facet value
  r.indexOf(e) === 0 || // facetValue is a child of the current parent, add it
  e.indexOf(t + n) === 0 && (a || e.indexOf(r) === 0);
}
function Jd(e, t, r, n, i) {
  var a = t.split(r);
  return {
    name: a[a.length - 1].trim(),
    path: t,
    escapedValue: Bd(t),
    count: e,
    isRefined: n === t || n.indexOf(t + r) === 0,
    exhaustive: i,
    data: null
  };
}
var Gd = Yn, Cn = Ta, gc = dc, hi = Fd, Ue = Xn, fr = Dd, Yd = hc, vc = Fa, mo = vc.escapeFacetValue, yc = vc.unescapeFacetValue, Xd = Wd;
function go(e) {
  var t = {};
  return e.forEach(function(r, n) {
    t[r] = n;
  }), t;
}
function mi(e, t, r) {
  t && t[r] && (e.stats = t[r]);
}
function Zd(e, t) {
  return Ue(e, function(n) {
    var i = n.attributes || [];
    return i.indexOf(t) > -1;
  });
}
function dt(e, t, r) {
  var n = t[0];
  this._rawResults = t;
  var i = this;
  Object.keys(n).forEach(function(l) {
    i[l] = n[l];
  }), Object.keys(r || {}).forEach(function(l) {
    i[l] = r[l];
  }), this.processingTimeMS = t.reduce(function(l, p) {
    return p.processingTimeMS === void 0 ? l : l + p.processingTimeMS;
  }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map(function() {
    return [];
  }), this.facets = [];
  var a = e.getRefinedDisjunctiveFacets(), o = go(e.facets), s = go(e.disjunctiveFacets), u = 1, c = n.facets || {};
  Object.keys(c).forEach(function(l) {
    var p = c[l], d = Zd(
      e.hierarchicalFacets,
      l
    );
    if (d) {
      var f = d.attributes.indexOf(l), m = fr(e.hierarchicalFacets, function(P) {
        return P.name === d.name;
      });
      i.hierarchicalFacets[m][f] = {
        attribute: l,
        data: p,
        exhaustive: n.exhaustiveFacetsCount
      };
    } else {
      var v = e.disjunctiveFacets.indexOf(l) !== -1, h = e.facets.indexOf(l) !== -1, O;
      v && (O = s[l], i.disjunctiveFacets[O] = {
        name: l,
        data: p,
        exhaustive: n.exhaustiveFacetsCount
      }, mi(i.disjunctiveFacets[O], n.facets_stats, l)), h && (O = o[l], i.facets[O] = {
        name: l,
        data: p,
        exhaustive: n.exhaustiveFacetsCount
      }, mi(i.facets[O], n.facets_stats, l));
    }
  }), this.hierarchicalFacets = hi(this.hierarchicalFacets), a.forEach(function(l) {
    var p = t[u], d = p && p.facets ? p.facets : {}, f = e.getHierarchicalFacetByName(l);
    Object.keys(d).forEach(function(m) {
      var v = d[m], h;
      if (f) {
        h = fr(e.hierarchicalFacets, function(_) {
          return _.name === f.name;
        });
        var O = fr(i.hierarchicalFacets[h], function(_) {
          return _.attribute === m;
        });
        if (O === -1)
          return;
        i.hierarchicalFacets[h][O].data = Gd(
          {},
          i.hierarchicalFacets[h][O].data,
          v
        );
      } else {
        h = s[m];
        var P = n.facets && n.facets[m] || {};
        i.disjunctiveFacets[h] = {
          name: m,
          data: Cn({}, v, P),
          exhaustive: p.exhaustiveFacetsCount
        }, mi(i.disjunctiveFacets[h], p.facets_stats, m), e.disjunctiveFacetsRefinements[m] && e.disjunctiveFacetsRefinements[m].forEach(function(_) {
          !i.disjunctiveFacets[h].data[_] && e.disjunctiveFacetsRefinements[m].indexOf(yc(_)) > -1 && (i.disjunctiveFacets[h].data[_] = 0);
        });
      }
    }), u++;
  }), e.getRefinedHierarchicalFacets().forEach(function(l) {
    var p = e.getHierarchicalFacetByName(l), d = e._getHierarchicalFacetSeparator(p), f = e.getHierarchicalRefinement(l);
    f.length === 0 || f[0].split(d).length < 2 || t.slice(u).forEach(function(m) {
      var v = m && m.facets ? m.facets : {};
      Object.keys(v).forEach(function(h) {
        var O = v[h], P = fr(e.hierarchicalFacets, function(x) {
          return x.name === p.name;
        }), _ = fr(i.hierarchicalFacets[P], function(x) {
          return x.attribute === h;
        });
        if (_ !== -1) {
          var T = {};
          if (f.length > 0) {
            var $ = f[0].split(d)[0];
            T[$] = i.hierarchicalFacets[P][_].data[$];
          }
          i.hierarchicalFacets[P][_].data = Cn(
            T,
            O,
            i.hierarchicalFacets[P][_].data
          );
        }
      }), u++;
    });
  }), Object.keys(e.facetsExcludes).forEach(function(l) {
    var p = e.facetsExcludes[l], d = o[l];
    i.facets[d] = {
      name: l,
      data: n.facets[l],
      exhaustive: n.exhaustiveFacetsCount
    }, p.forEach(function(f) {
      i.facets[d] = i.facets[d] || { name: l }, i.facets[d].data = i.facets[d].data || {}, i.facets[d].data[f] = 0;
    });
  }), this.hierarchicalFacets = this.hierarchicalFacets.map(Xd(e)), this.facets = hi(this.facets), this.disjunctiveFacets = hi(this.disjunctiveFacets), this._state = e;
}
dt.prototype.getFacetByName = function(e) {
  function t(r) {
    return r.name === e;
  }
  return Ue(this.facets, t) || Ue(this.disjunctiveFacets, t) || Ue(this.hierarchicalFacets, t);
};
function eh(e, t) {
  function r(u) {
    return u.name === t;
  }
  if (e._state.isConjunctiveFacet(t)) {
    var n = Ue(e.facets, r);
    return n ? Object.keys(n.data).map(function(u) {
      var c = mo(u);
      return {
        name: u,
        escapedValue: c,
        count: n.data[u],
        isRefined: e._state.isFacetRefined(t, c),
        isExcluded: e._state.isExcludeRefined(t, u)
      };
    }) : [];
  } else if (e._state.isDisjunctiveFacet(t)) {
    var i = Ue(e.disjunctiveFacets, r);
    return i ? Object.keys(i.data).map(function(u) {
      var c = mo(u);
      return {
        name: u,
        escapedValue: c,
        count: i.data[u],
        isRefined: e._state.isDisjunctiveFacetRefined(t, c)
      };
    }) : [];
  } else if (e._state.isHierarchicalFacet(t)) {
    var a = Ue(e.hierarchicalFacets, r);
    if (!a)
      return a;
    var o = e._state.getHierarchicalFacetByName(t), s = yc(
      e._state.getHierarchicalRefinement(t)[0] || ""
    ).split(e._state._getHierarchicalFacetSeparator(o));
    return s.unshift(t), bc(a, s, 0), a;
  }
}
function bc(e, t, r) {
  e.isRefined = e.name === t[r], e.data && e.data.forEach(function(n) {
    bc(n, t, r + 1);
  });
}
function Oc(e, t, r, n) {
  if (n = n || 0, Array.isArray(t))
    return e(t, r[n]);
  if (!t.data || t.data.length === 0)
    return t;
  var i = t.data.map(function(s) {
    return Oc(e, s, r, n + 1);
  }), a = e(i, r[n]), o = Cn({ data: a }, t);
  return o;
}
dt.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
function th(e, t) {
  return t.sort(e);
}
function rh(e, t) {
  var r = [], n = [], i = t.order || [], a = i.reduce(function(u, c, l) {
    return u[c] = l, u;
  }, {});
  e.forEach(function(u) {
    var c = u.path || u.name;
    a[c] !== void 0 ? r[a[c]] = u : n.push(u);
  }), r = r.filter(function(u) {
    return u;
  });
  var o = t.sortRemainingBy, s;
  return o === "hidden" ? r : (o === "alpha" ? s = [["path", "name"], ["asc", "asc"]] : s = [["count"], ["desc"]], r.concat(
    gc(n, s[0], s[1])
  ));
}
function nh(e, t) {
  return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t];
}
dt.prototype.getFacetValues = function(e, t) {
  var r = eh(this, e);
  if (r) {
    var n = Cn({}, t, {
      sortBy: dt.DEFAULT_SORT,
      // if no sortBy is given, attempt to sort based on facetOrdering
      // if it is given, we still allow to sort via facet ordering first
      facetOrdering: !(t && t.sortBy)
    }), i = this, a;
    if (Array.isArray(r))
      a = [e];
    else {
      var o = i._state.getHierarchicalFacetByName(r.name);
      a = o.attributes;
    }
    return Oc(function(s, u) {
      if (n.facetOrdering) {
        var c = nh(i, u);
        if (Boolean(c))
          return rh(s, c);
      }
      if (Array.isArray(n.sortBy)) {
        var l = Yd(n.sortBy, dt.DEFAULT_SORT);
        return gc(s, l[0], l[1]);
      } else if (typeof n.sortBy == "function")
        return th(n.sortBy, s);
      throw new Error(
        "options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function"
      );
    }, r, a);
  }
};
dt.prototype.getFacetStats = function(e) {
  if (this._state.isConjunctiveFacet(e))
    return vo(this.facets, e);
  if (this._state.isDisjunctiveFacet(e))
    return vo(this.disjunctiveFacets, e);
};
function vo(e, t) {
  var r = Ue(e, function(n) {
    return n.name === t;
  });
  return r && r.stats;
}
dt.prototype.getRefinements = function() {
  var e = this._state, t = this, r = [];
  return Object.keys(e.facetsRefinements).forEach(function(n) {
    e.facetsRefinements[n].forEach(function(i) {
      r.push(gi(e, "facet", n, i, t.facets));
    });
  }), Object.keys(e.facetsExcludes).forEach(function(n) {
    e.facetsExcludes[n].forEach(function(i) {
      r.push(gi(e, "exclude", n, i, t.facets));
    });
  }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function(n) {
    e.disjunctiveFacetsRefinements[n].forEach(function(i) {
      r.push(gi(e, "disjunctive", n, i, t.disjunctiveFacets));
    });
  }), Object.keys(e.hierarchicalFacetsRefinements).forEach(function(n) {
    e.hierarchicalFacetsRefinements[n].forEach(function(i) {
      r.push(ih(e, n, i, t.hierarchicalFacets));
    });
  }), Object.keys(e.numericRefinements).forEach(function(n) {
    var i = e.numericRefinements[n];
    Object.keys(i).forEach(function(a) {
      i[a].forEach(function(o) {
        r.push({
          type: "numeric",
          attributeName: n,
          name: o,
          numericValue: o,
          operator: a
        });
      });
    });
  }), e.tagRefinements.forEach(function(n) {
    r.push({ type: "tag", attributeName: "_tags", name: n });
  }), r;
};
function gi(e, t, r, n, i) {
  var a = Ue(i, function(u) {
    return u.name === r;
  }), o = a && a.data && a.data[n] ? a.data[n] : 0, s = a && a.exhaustive || !1;
  return {
    type: t,
    attributeName: r,
    name: n,
    count: o,
    exhaustive: s
  };
}
function ih(e, t, r, n) {
  var i = e.getHierarchicalFacetByName(t), a = e._getHierarchicalFacetSeparator(i), o = r.split(a), s = Ue(n, function(d) {
    return d.name === t;
  }), u = o.reduce(function(d, f) {
    var m = d && Ue(d.data, function(v) {
      return v.name === f;
    });
    return m !== void 0 ? m : d;
  }, s), c = u && u.count || 0, l = u && u.exhaustive || !1, p = u && u.path || "";
  return {
    type: "hierarchical",
    attributeName: t,
    name: p,
    count: c,
    exhaustive: l
  };
}
var Sc = dt;
function ah(e, t) {
  e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
}
var wc = ah, oh = $a, sh = wc;
function Zn(e, t) {
  this.main = e, this.fn = t, this.lastResults = null;
}
sh(Zn, oh);
Zn.prototype.detach = function() {
  this.removeAllListeners(), this.main.detachDerivedHelper(this);
};
Zn.prototype.getModifiedState = function(e) {
  return this.fn(e);
};
var uh = Zn, vi = Yn;
function yi(e) {
  return Object.keys(e).sort(function(t, r) {
    return t.localeCompare(r);
  }).reduce(function(t, r) {
    return t[r] = e[r], t;
  }, {});
}
var Ce = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */
  _getQueries: function(t, r) {
    var n = [];
    return n.push({
      indexName: t,
      params: Ce._getHitsSearchParams(r)
    }), r.getRefinedDisjunctiveFacets().forEach(function(i) {
      n.push({
        indexName: t,
        params: Ce._getDisjunctiveFacetSearchParams(r, i)
      });
    }), r.getRefinedHierarchicalFacets().forEach(function(i) {
      var a = r.getHierarchicalFacetByName(i), o = r.getHierarchicalRefinement(i), s = r._getHierarchicalFacetSeparator(a);
      if (o.length > 0 && o[0].split(s).length > 1) {
        var u = o[0].split(s).slice(0, -1).reduce(
          function(l, p, d) {
            return l.concat({
              attribute: a.attributes[d],
              value: d === 0 ? p : [l[l.length - 1].value, p].join(s)
            });
          },
          []
        );
        u.forEach(function(c, l) {
          var p = Ce._getDisjunctiveFacetSearchParams(
            r,
            c.attribute,
            l === 0
          );
          function d(v) {
            return a.attributes.some(function(h) {
              return h === v.split(":")[0];
            });
          }
          var f = (p.facetFilters || []).reduce(function(v, h) {
            if (Array.isArray(h)) {
              var O = h.filter(function(P) {
                return !d(P);
              });
              O.length > 0 && v.push(O);
            }
            return typeof h == "string" && !d(h) && v.push(h), v;
          }, []), m = u[l - 1];
          l > 0 ? p.facetFilters = f.concat(m.attribute + ":" + m.value) : p.facetFilters = f.length > 0 ? f : void 0, n.push({ indexName: t, params: p });
        });
      }
    }), n;
  },
  /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */
  _getHitsSearchParams: function(e) {
    var t = e.facets.concat(e.disjunctiveFacets).concat(Ce._getHitsHierarchicalFacetsAttributes(e)), r = Ce._getFacetFilters(e), n = Ce._getNumericFilters(e), i = Ce._getTagFilters(e), a = {
      facets: t.indexOf("*") > -1 ? ["*"] : t,
      tagFilters: i
    };
    return r.length > 0 && (a.facetFilters = r), n.length > 0 && (a.numericFilters = n), yi(vi({}, e.getQueryParams(), a));
  },
  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */
  _getDisjunctiveFacetSearchParams: function(e, t, r) {
    var n = Ce._getFacetFilters(e, t, r), i = Ce._getNumericFilters(e, t), a = Ce._getTagFilters(e), o = {
      hitsPerPage: 0,
      page: 0,
      analytics: !1,
      clickAnalytics: !1
    };
    a.length > 0 && (o.tagFilters = a);
    var s = e.getHierarchicalFacetByName(t);
    return s ? o.facets = Ce._getDisjunctiveHierarchicalFacetAttribute(
      e,
      s,
      r
    ) : o.facets = t, i.length > 0 && (o.numericFilters = i), n.length > 0 && (o.facetFilters = n), yi(vi({}, e.getQueryParams(), o));
  },
  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function(e, t) {
    if (e.numericFilters)
      return e.numericFilters;
    var r = [];
    return Object.keys(e.numericRefinements).forEach(function(n) {
      var i = e.numericRefinements[n] || {};
      Object.keys(i).forEach(function(a) {
        var o = i[a] || [];
        t !== n && o.forEach(function(s) {
          if (Array.isArray(s)) {
            var u = s.map(function(c) {
              return n + a + c;
            });
            r.push(u);
          } else
            r.push(n + a + s);
        });
      });
    }), r;
  },
  /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */
  _getTagFilters: function(e) {
    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",");
  },
  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */
  _getFacetFilters: function(e, t, r) {
    var n = [], i = e.facetsRefinements || {};
    Object.keys(i).forEach(function(u) {
      var c = i[u] || [];
      c.forEach(function(l) {
        n.push(u + ":" + l);
      });
    });
    var a = e.facetsExcludes || {};
    Object.keys(a).forEach(function(u) {
      var c = a[u] || [];
      c.forEach(function(l) {
        n.push(u + ":-" + l);
      });
    });
    var o = e.disjunctiveFacetsRefinements || {};
    Object.keys(o).forEach(function(u) {
      var c = o[u] || [];
      if (!(u === t || !c || c.length === 0)) {
        var l = [];
        c.forEach(function(p) {
          l.push(u + ":" + p);
        }), n.push(l);
      }
    });
    var s = e.hierarchicalFacetsRefinements || {};
    return Object.keys(s).forEach(function(u) {
      var c = s[u] || [], l = c[0];
      if (l !== void 0) {
        var p = e.getHierarchicalFacetByName(u), d = e._getHierarchicalFacetSeparator(p), f = e._getHierarchicalRootPath(p), m, v;
        if (t === u) {
          if (l.indexOf(d) === -1 || !f && r === !0 || f && f.split(d).length === l.split(d).length)
            return;
          f ? (v = f.split(d).length - 1, l = f) : (v = l.split(d).length - 2, l = l.slice(0, l.lastIndexOf(d))), m = p.attributes[v];
        } else
          v = l.split(d).length - 1, m = p.attributes[v];
        m && n.push([m + ":" + l]);
      }
    }), n;
  },
  _getHitsHierarchicalFacetsAttributes: function(e) {
    var t = [];
    return e.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function(n, i) {
        var a = e.getHierarchicalRefinement(i.name)[0];
        if (!a)
          return n.push(i.attributes[0]), n;
        var o = e._getHierarchicalFacetSeparator(i), s = a.split(o).length, u = i.attributes.slice(0, s + 1);
        return n.concat(u);
      },
      t
    );
  },
  _getDisjunctiveHierarchicalFacetAttribute: function(e, t, r) {
    var n = e._getHierarchicalFacetSeparator(t);
    if (r === !0) {
      var i = e._getHierarchicalRootPath(t), a = 0;
      return i && (a = i.split(n).length), [t.attributes[a]];
    }
    var o = e.getHierarchicalRefinement(t.name)[0] || "", s = o.split(n).length - 1;
    return t.attributes.slice(0, s + 1);
  },
  getSearchForFacetQuery: function(e, t, r, n) {
    var i = n.isDisjunctiveFacet(e) ? n.clearRefinements(e) : n, a = {
      facetQuery: t,
      facetName: e
    };
    return typeof r == "number" && (a.maxFacetHits = r), yi(vi(
      {},
      Ce._getHitsSearchParams(i),
      a
    ));
  }
}, ch = Ce, Pc = "3.12.0", Da = pc, Wi = Sc, lh = uh, Qt = ch, fh = $a, ph = wc, dh = Ca, hh = Aa, mh = Yn, _c = Pc, gh = Fa.escapeFacetValue;
function L(e, t, r) {
  typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + _c + ")"), this.setClient(e);
  var n = r || {};
  n.index = t, this.state = Da.make(n), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0;
}
ph(L, fh);
L.prototype.search = function() {
  return this._search({ onlyWithDerivedHelpers: !1 }), this;
};
L.prototype.searchOnlyWithDerivedHelpers = function() {
  return this._search({ onlyWithDerivedHelpers: !0 }), this;
};
L.prototype.getQuery = function() {
  var e = this.state;
  return Qt._getHitsSearchParams(e);
};
L.prototype.searchOnce = function(e, t) {
  var r = e ? this.state.setQueryParameters(e) : this.state, n = Qt._getQueries(r.index, r), i = this;
  if (this._currentNbQueries++, this.emit("searchOnce", {
    state: r
  }), t) {
    this.client.search(n).then(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(null, new Wi(r, a.results), r);
    }).catch(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(a, null, r);
    });
    return;
  }
  return this.client.search(n).then(function(a) {
    return i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), {
      content: new Wi(r, a.results),
      state: r,
      _originalResponse: a
    };
  }, function(a) {
    throw i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), a;
  });
};
L.prototype.findAnswers = function(e) {
  console.warn("[algoliasearch-helper] answers is no longer supported");
  var t = this.state, r = this.derivedHelpers[0];
  if (!r)
    return Promise.resolve([]);
  var n = r.getModifiedState(t), i = mh(
    {
      attributesForPrediction: e.attributesForPrediction,
      nbHits: e.nbHits
    },
    {
      params: hh(Qt._getHitsSearchParams(n), [
        "attributesToSnippet",
        "hitsPerPage",
        "restrictSearchableAttributes",
        "snippetEllipsisText"
        // FIXME remove this line once the engine is fixed.
      ])
    }
  ), a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
  if (typeof this.client.initIndex != "function")
    throw new Error(a);
  var o = this.client.initIndex(n.index);
  if (typeof o.findAnswers != "function")
    throw new Error(a);
  return o.findAnswers(n.query, e.queryLanguages, i);
};
L.prototype.searchForFacetValues = function(e, t, r, n) {
  var i = typeof this.client.searchForFacetValues == "function", a = typeof this.client.initIndex == "function";
  if (!i && !a && typeof this.client.search != "function")
    throw new Error(
      "search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues"
    );
  var o = this.state.setQueryParameters(n || {}), s = o.isDisjunctiveFacet(e), u = Qt.getSearchForFacetQuery(e, t, r, o);
  this._currentNbQueries++;
  var c = this, l;
  return i ? l = this.client.searchForFacetValues([
    { indexName: o.index, params: u }
  ]) : a ? l = this.client.initIndex(o.index).searchForFacetValues(u) : (delete u.facetName, l = this.client.search([
    {
      type: "facet",
      facet: e,
      indexName: o.index,
      params: u
    }
  ]).then(function(d) {
    return d.results[0];
  })), this.emit("searchForFacetValues", {
    state: o,
    facet: e,
    query: t
  }), l.then(function(d) {
    return c._currentNbQueries--, c._currentNbQueries === 0 && c.emit("searchQueueEmpty"), d = Array.isArray(d) ? d[0] : d, d.facetHits.forEach(function(f) {
      f.escapedValue = gh(f.value), f.isRefined = s ? o.isDisjunctiveFacetRefined(e, f.escapedValue) : o.isFacetRefined(e, f.escapedValue);
    }), d;
  }, function(p) {
    throw c._currentNbQueries--, c._currentNbQueries === 0 && c.emit("searchQueueEmpty"), p;
  });
};
L.prototype.setQuery = function(e) {
  return this._change({
    state: this.state.resetPage().setQuery(e),
    isPageReset: !0
  }), this;
};
L.prototype.clearRefinements = function(e) {
  return this._change({
    state: this.state.resetPage().clearRefinements(e),
    isPageReset: !0
  }), this;
};
L.prototype.clearTags = function() {
  return this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: !0
  }), this;
};
L.prototype.addDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.addDisjunctiveRefine = function() {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
L.prototype.addHierarchicalFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.addNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().addNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
L.prototype.addFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.addRefine = function() {
  return this.addFacetRefinement.apply(this, arguments);
};
L.prototype.addFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().addExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.addExclude = function() {
  return this.addFacetExclusion.apply(this, arguments);
};
L.prototype.addTag = function(e) {
  return this._change({
    state: this.state.resetPage().addTagRefinement(e),
    isPageReset: !0
  }), this;
};
L.prototype.removeNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().removeNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
L.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.removeDisjunctiveRefine = function() {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
L.prototype.removeHierarchicalFacetRefinement = function(e) {
  return this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
    isPageReset: !0
  }), this;
};
L.prototype.removeFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.removeRefine = function() {
  return this.removeFacetRefinement.apply(this, arguments);
};
L.prototype.removeFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.removeExclude = function() {
  return this.removeFacetExclusion.apply(this, arguments);
};
L.prototype.removeTag = function(e) {
  return this._change({
    state: this.state.resetPage().removeTagRefinement(e),
    isPageReset: !0
  }), this;
};
L.prototype.toggleFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.toggleExclude = function() {
  return this.toggleFacetExclusion.apply(this, arguments);
};
L.prototype.toggleRefinement = function(e, t) {
  return this.toggleFacetRefinement(e, t);
};
L.prototype.toggleFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.toggleRefine = function() {
  return this.toggleFacetRefinement.apply(this, arguments);
};
L.prototype.toggleTag = function(e) {
  return this._change({
    state: this.state.resetPage().toggleTagRefinement(e),
    isPageReset: !0
  }), this;
};
L.prototype.nextPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e + 1);
};
L.prototype.previousPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e - 1);
};
function jc(e) {
  if (e < 0)
    throw new Error("Page requested below 0.");
  return this._change({
    state: this.state.setPage(e),
    isPageReset: !1
  }), this;
}
L.prototype.setCurrentPage = jc;
L.prototype.setPage = jc;
L.prototype.setIndex = function(e) {
  return this._change({
    state: this.state.resetPage().setIndex(e),
    isPageReset: !0
  }), this;
};
L.prototype.setQueryParameter = function(e, t) {
  return this._change({
    state: this.state.resetPage().setQueryParameter(e, t),
    isPageReset: !0
  }), this;
};
L.prototype.setState = function(e) {
  return this._change({
    state: Da.make(e),
    isPageReset: !1
  }), this;
};
L.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
  return this.state = new Da(e), this;
};
L.prototype.hasRefinements = function(e) {
  return dh(this.state.getNumericRefinements(e)) ? !0 : this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : this.state.isHierarchicalFacet(e) ? this.state.isHierarchicalFacetRefined(e) : !1;
};
L.prototype.isExcluded = function(e, t) {
  return this.state.isExcludeRefined(e, t);
};
L.prototype.isDisjunctiveRefined = function(e, t) {
  return this.state.isDisjunctiveFacetRefined(e, t);
};
L.prototype.hasTag = function(e) {
  return this.state.isTagRefined(e);
};
L.prototype.isTagRefined = function() {
  return this.hasTagRefinements.apply(this, arguments);
};
L.prototype.getIndex = function() {
  return this.state.index;
};
function Rc() {
  return this.state.page;
}
L.prototype.getCurrentPage = Rc;
L.prototype.getPage = Rc;
L.prototype.getTags = function() {
  return this.state.tagRefinements;
};
L.prototype.getRefinements = function(e) {
  var t = [];
  if (this.state.isConjunctiveFacet(e)) {
    var r = this.state.getConjunctiveRefinements(e);
    r.forEach(function(o) {
      t.push({
        value: o,
        type: "conjunctive"
      });
    });
    var n = this.state.getExcludeRefinements(e);
    n.forEach(function(o) {
      t.push({
        value: o,
        type: "exclude"
      });
    });
  } else if (this.state.isDisjunctiveFacet(e)) {
    var i = this.state.getDisjunctiveRefinements(e);
    i.forEach(function(o) {
      t.push({
        value: o,
        type: "disjunctive"
      });
    });
  }
  var a = this.state.getNumericRefinements(e);
  return Object.keys(a).forEach(function(o) {
    var s = a[o];
    t.push({
      value: s,
      operator: o,
      type: "numeric"
    });
  }), t;
};
L.prototype.getNumericRefinement = function(e, t) {
  return this.state.getNumericRefinement(e, t);
};
L.prototype.getHierarchicalFacetBreadcrumb = function(e) {
  return this.state.getHierarchicalFacetBreadcrumb(e);
};
L.prototype._search = function(e) {
  var t = this.state, r = [], n = [];
  e.onlyWithDerivedHelpers || (n = Qt._getQueries(t.index, t), r.push({
    state: t,
    queriesCount: n.length,
    helper: this
  }), this.emit("search", {
    state: t,
    results: this.lastResults
  }));
  var i = this.derivedHelpers.map(function(s) {
    var u = s.getModifiedState(t), c = Qt._getQueries(u.index, u);
    return r.push({
      state: u,
      queriesCount: c.length,
      helper: s
    }), s.emit("search", {
      state: u,
      results: s.lastResults
    }), c;
  }), a = Array.prototype.concat.apply(n, i), o = this._queryId++;
  this._currentNbQueries++;
  try {
    this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, r, o)).catch(this._dispatchAlgoliaError.bind(this, o));
  } catch (s) {
    this.emit("error", {
      error: s
    });
  }
};
L.prototype._dispatchAlgoliaResponse = function(e, t, r) {
  if (!(t < this._lastQueryIdReceived)) {
    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, this._currentNbQueries === 0 && this.emit("searchQueueEmpty");
    var n = r.results.slice();
    e.forEach(function(i) {
      var a = i.state, o = i.queriesCount, s = i.helper, u = n.splice(0, o), c = s.lastResults = new Wi(a, u);
      s.emit("result", {
        results: c,
        state: a
      });
    });
  }
};
L.prototype._dispatchAlgoliaError = function(e, t) {
  e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
    error: t
  }), this._currentNbQueries === 0 && this.emit("searchQueueEmpty"));
};
L.prototype.containsRefinement = function(e, t, r, n) {
  return e || t.length !== 0 || r.length !== 0 || n.length !== 0;
};
L.prototype._hasDisjunctiveRefinements = function(e) {
  return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0;
};
L.prototype._change = function(e) {
  var t = e.state, r = e.isPageReset;
  t !== this.state && (this.state = t, this.emit("change", {
    state: this.state,
    results: this.lastResults,
    isPageReset: r
  }));
};
L.prototype.clearCache = function() {
  return this.client.clearCache && this.client.clearCache(), this;
};
L.prototype.setClient = function(e) {
  return this.client === e ? this : (typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + _c + ")"), this.client = e, this);
};
L.prototype.getClient = function() {
  return this.client;
};
L.prototype.derive = function(e) {
  var t = new lh(this, e);
  return this.derivedHelpers.push(t), t;
};
L.prototype.detachDerivedHelper = function(e) {
  var t = this.derivedHelpers.indexOf(e);
  if (t === -1)
    throw new Error("Derived helper already detached");
  this.derivedHelpers.splice(t, 1);
};
L.prototype.hasPendingRequests = function() {
  return this._currentNbQueries > 0;
};
var vh = L, Ic = vh, yh = pc, bh = Sc;
function cn(e, t, r) {
  return new Ic(e, t, r);
}
cn.version = Pc;
cn.AlgoliaSearchHelper = Ic;
cn.SearchParameters = yh;
cn.SearchResults = bh;
var kt = cn;
function Ec(e, t, r) {
  var n = mr(t, t.mainIndex, t._initialUiState);
  e.forEach(function(i) {
    var a = {};
    if (i.getWidgetRenderState) {
      var o = i.getWidgetRenderState(n);
      o && o.widgetParams && (a = o.widgetParams);
    }
    var s = Object.keys(a).filter(function(u) {
      return a[u] !== void 0;
    });
    r.widgets.push({
      type: i.$$type,
      widgetType: i.$$widgetType,
      params: s
    }), i.$$type === "ais.index" && Ec(i.getWidgets(), t, r);
  });
}
function Oh() {
  return tt(function(e) {
    var t, r, n = e.window;
    return ((t = n.navigator) === null || t === void 0 || (r = t.userAgent) === null || r === void 0 ? void 0 : r.indexOf("Algolia Crawler")) > -1;
  }, {
    fallback: function() {
      return !1;
    }
  });
}
function Sh() {
  return function(e) {
    var t = e.instantSearchInstance, r = {
      widgets: []
    }, n = document.createElement("meta"), i = document.querySelector("head");
    return n.name = "instantsearch:widgets", {
      onStateChange: function() {
      },
      subscribe: function() {
        setTimeout(function() {
          var o = t.client;
          r.ua = o.transporter && o.transporter.userAgent ? o.transporter.userAgent.value : o._ua, Ec(t.mainIndex.getWidgets(), t, r), n.content = JSON.stringify(r), i.appendChild(n);
        }, 0);
      },
      started: function() {
      },
      unsubscribe: function() {
        n.remove();
      }
    };
  };
}
var wh = String.prototype.replace, Ph = /%20/g, bi = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ha = {
  default: bi.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return wh.call(e, Ph, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: bi.RFC1738,
  RFC3986: bi.RFC3986
}, _h = Ha, Oi = Object.prototype.hasOwnProperty, _t = Array.isArray, Ke = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), jh = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (_t(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, $c = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, Rh = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (_t(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Oi.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return _t(t) && !_t(r) && (i = $c(t, n)), _t(t) && _t(r) ? (r.forEach(function(a, o) {
    if (Oi.call(t, o)) {
      var s = t[o];
      s && typeof s == "object" && a && typeof a == "object" ? t[o] = e(s, a, n) : t.push(a);
    } else
      t[o] = a;
  }), t) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return Oi.call(a, o) ? a[o] = e(a[o], s, n) : a[o] = s, a;
  }, i);
}, Ih = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, Eh = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, $h = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(l) {
      return "%26%23" + parseInt(l.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === _h.RFC1738 && (c === 40 || c === 41)) {
      s += o.charAt(u);
      continue;
    }
    if (c < 128) {
      s = s + Ke[c];
      continue;
    }
    if (c < 2048) {
      s = s + (Ke[192 | c >> 6] + Ke[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (Ke[224 | c >> 12] + Ke[128 | c >> 6 & 63] + Ke[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), s += Ke[240 | c >> 18] + Ke[128 | c >> 12 & 63] + Ke[128 | c >> 6 & 63] + Ke[128 | c & 63];
  }
  return s;
}, xh = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var c = s[u], l = o[c];
      typeof l == "object" && l !== null && n.indexOf(l) === -1 && (r.push({ obj: o, prop: c }), n.push(l));
    }
  return jh(r), t;
}, Th = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Ah = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Ch = function(t, r) {
  return [].concat(t, r);
}, Nh = function(t, r) {
  if (_t(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, xc = {
  arrayToObject: $c,
  assign: Ih,
  combine: Ch,
  compact: xh,
  decode: Eh,
  encode: $h,
  isBuffer: Ah,
  isRegExp: Th,
  maybeMap: Nh,
  merge: Rh
}, Mi = xc, br = Ha, Fh = Object.prototype.hasOwnProperty, yo = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Rt = Array.isArray, Dh = String.prototype.split, Hh = Array.prototype.push, Tc = function(e, t) {
  Hh.apply(e, Rt(t) ? t : [t]);
}, qh = Date.prototype.toISOString, bo = br.default, ye = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Mi.encode,
  encodeValuesOnly: !1,
  format: bo,
  formatter: br.formatters[bo],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return qh.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Lh = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Wh = function e(t, r, n, i, a, o, s, u, c, l, p, d, f, m) {
  var v = t;
  if (typeof s == "function" ? v = s(r, v) : v instanceof Date ? v = l(v) : n === "comma" && Rt(v) && (v = Mi.maybeMap(v, function(E) {
    return E instanceof Date ? l(E) : E;
  })), v === null) {
    if (i)
      return o && !f ? o(r, ye.encoder, m, "key", p) : r;
    v = "";
  }
  if (Lh(v) || Mi.isBuffer(v)) {
    if (o) {
      var h = f ? r : o(r, ye.encoder, m, "key", p);
      if (n === "comma" && f) {
        for (var O = Dh.call(String(v), ","), P = "", _ = 0; _ < O.length; ++_)
          P += (_ === 0 ? "" : ",") + d(o(O[_], ye.encoder, m, "value", p));
        return [d(h) + "=" + P];
      }
      return [d(h) + "=" + d(o(v, ye.encoder, m, "value", p))];
    }
    return [d(r) + "=" + d(String(v))];
  }
  var T = [];
  if (typeof v > "u")
    return T;
  var $;
  if (n === "comma" && Rt(v))
    $ = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (Rt(s))
    $ = s;
  else {
    var x = Object.keys(v);
    $ = u ? x.sort(u) : x;
  }
  for (var A = 0; A < $.length; ++A) {
    var w = $[A], R = typeof w == "object" && typeof w.value < "u" ? w.value : v[w];
    if (!(a && R === null)) {
      var j = Rt(v) ? typeof n == "function" ? n(r, w) : r : r + (c ? "." + w : "[" + w + "]");
      Tc(T, e(
        R,
        j,
        n,
        i,
        a,
        o,
        s,
        u,
        c,
        l,
        p,
        d,
        f,
        m
      ));
    }
  }
  return T;
}, Mh = function(t) {
  if (!t)
    return ye;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || ye.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = br.default;
  if (typeof t.format < "u") {
    if (!Fh.call(br.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = br.formatters[n], a = ye.filter;
  return (typeof t.filter == "function" || Rt(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ye.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? ye.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ye.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? ye.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : ye.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : ye.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ye.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ye.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ye.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ye.strictNullHandling
  };
}, kh = function(e, t) {
  var r = e, n = Mh(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Rt(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  t && t.arrayFormat in yo ? s = t.arrayFormat : t && "indices" in t ? s = t.indices ? "indices" : "repeat" : s = "indices";
  var u = yo[s];
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var c = 0; c < i.length; ++c) {
    var l = i[c];
    n.skipNulls && r[l] === null || Tc(o, Wh(
      r[l],
      l,
      u,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset
    ));
  }
  var p = o.join(n.delimiter), d = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), p.length > 0 ? d + p : "";
}, Kt = xc, ki = Object.prototype.hasOwnProperty, Uh = Array.isArray, ve = {
  allowDots: !1,
  allowPrototypes: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Kt.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Bh = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ac = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, Vh = "utf8=%26%2310003%3B", Qh = "utf8=%E2%9C%93", Kh = function(t, r) {
  var n = {}, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === Qh ? c = "utf-8" : o[u] === Vh && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var l = o[u], p = l.indexOf("]="), d = p === -1 ? l.indexOf("=") : p + 1, f, m;
      d === -1 ? (f = r.decoder(l, ve.decoder, c, "key"), m = r.strictNullHandling ? null : "") : (f = r.decoder(l.slice(0, d), ve.decoder, c, "key"), m = Kt.maybeMap(
        Ac(l.slice(d + 1), r),
        function(v) {
          return r.decoder(v, ve.decoder, c, "value");
        }
      )), m && r.interpretNumericEntities && c === "iso-8859-1" && (m = Bh(m)), l.indexOf("[]=") > -1 && (m = Uh(m) ? [m] : m), ki.call(n, f) ? n[f] = Kt.combine(n[f], m) : n[f] = m;
    }
  return n;
}, zh = function(e, t, r, n) {
  for (var i = n ? t : Ac(t, r), a = e.length - 1; a >= 0; --a) {
    var o, s = e[a];
    if (s === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(u, 10);
      !r.parseArrays && u === "" ? o = { 0: i } : !isNaN(c) && s !== u && String(c) === u && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (o = [], o[c] = i) : u !== "__proto__" && (o[u] = i);
    }
    i = o;
  }
  return i;
}, Jh = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(a), c = u ? a.slice(0, u.index) : a, l = [];
    if (c) {
      if (!n.plainObjects && ki.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      l.push(c);
    }
    for (var p = 0; n.depth > 0 && (u = s.exec(a)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && ki.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      l.push(u[1]);
    }
    return u && l.push("[" + a.slice(u.index) + "]"), zh(l, r, n, i);
  }
}, Gh = function(t) {
  if (!t)
    return ve;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? ve.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? ve.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ve.allowPrototypes,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ve.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ve.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : ve.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : ve.decoder,
    delimiter: typeof t.delimiter == "string" || Kt.isRegExp(t.delimiter) ? t.delimiter : ve.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : ve.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ve.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ve.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ve.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ve.strictNullHandling
  };
}, Yh = function(e, t) {
  var r = Gh(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? Kh(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = Jh(s, n[s], r, typeof e == "string");
    i = Kt.merge(i, u, r);
  }
  return Kt.compact(i);
}, Xh = kh, Zh = Yh, em = Ha, Oo = {
  formats: em,
  parse: Zh,
  stringify: Xh
};
function $r(e) {
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function So(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cc(n.key), n);
  }
}
function rm(e, t, r) {
  return t && So(e.prototype, t), r && So(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function He(e, t, r) {
  return t = Cc(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cc(e) {
  var t = nm(e, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function nm(e, t) {
  if ($r(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($r(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wo = function(t) {
  t && (window.document.title = t);
}, im = /* @__PURE__ */ function() {
  function e(t) {
    var r = this, n = t.windowTitle, i = t.writeDelay, a = i === void 0 ? 400 : i, o = t.createURL, s = t.parseURL, u = t.getLocation, c = t.start, l = t.dispose, p = t.push;
    tm(this, e), He(this, "windowTitle", void 0), He(this, "writeDelay", void 0), He(this, "_createURL", void 0), He(this, "parseURL", void 0), He(this, "getLocation", void 0), He(this, "writeTimer", void 0), He(this, "inPopState", !1), He(this, "isDisposed", !1), He(this, "latestAcknowledgedHistory", 0), He(this, "_start", void 0), He(this, "_dispose", void 0), He(this, "_push", void 0), this.windowTitle = n, this.writeTimer = void 0, this.writeDelay = a, this._createURL = o, this.parseURL = s, this.getLocation = u, this._start = c, this._dispose = l, this._push = p, tt(function(d) {
      var f = d.window, m = r.windowTitle && r.windowTitle(r.read());
      wo(m), r.latestAcknowledgedHistory = f.history.length;
    });
  }
  return rm(e, [{
    key: "read",
    value: function() {
      return this.parseURL({
        qsModule: Oo,
        location: this.getLocation()
      });
    }
    /**
     * Pushes a search state into the URL.
     */
  }, {
    key: "write",
    value: function(r) {
      var n = this;
      tt(function(i) {
        var a = i.window, o = n.createURL(r), s = n.windowTitle && n.windowTitle(r);
        n.writeTimer && clearTimeout(n.writeTimer), n.writeTimer = setTimeout(function() {
          wo(s), n.shouldWrite(o) && (n._push ? n._push(o) : a.history.pushState(r, s || "", o), n.latestAcknowledgedHistory = a.history.length), n.inPopState = !1, n.writeTimer = void 0;
        }, n.writeDelay);
      });
    }
    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */
  }, {
    key: "onUpdate",
    value: function(r) {
      var n = this;
      this._start && this._start(function() {
        r(n.read());
      }), this._onPopState = function() {
        n.writeTimer && (clearTimeout(n.writeTimer), n.writeTimer = void 0), n.inPopState = !0, r(n.read());
      }, tt(function(i) {
        var a = i.window;
        a.addEventListener("popstate", n._onPopState);
      });
    }
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch.js/issues/790
     */
  }, {
    key: "createURL",
    value: function(r) {
      return this._createURL({
        qsModule: Oo,
        routeState: r,
        location: this.getLocation()
      });
    }
    /**
     * Removes the event listener and cleans up the URL.
     */
  }, {
    key: "dispose",
    value: function() {
      var r = this;
      this._dispose && this._dispose(), this.isDisposed = !0, tt(function(n) {
        var i = n.window;
        r._onPopState && i.removeEventListener("popstate", r._onPopState);
      }), this.writeTimer && clearTimeout(this.writeTimer), this.write({});
    }
  }, {
    key: "start",
    value: function() {
      this.isDisposed = !1;
    }
  }, {
    key: "shouldWrite",
    value: function(r) {
      var n = this;
      return tt(function(i) {
        var a = i.window, o = !(n.isDisposed && n.latestAcknowledgedHistory !== a.history.length);
        return (
          // When the last state change was through popstate, the IS.js state changes,
          // but that should not write the URL.
          !n.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
          o && // When the URL is the same as the current one, we do not want to write it.
          r !== a.location.href
        );
      });
    }
  }]), e;
}();
function Nc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.createURL, r = t === void 0 ? function(f) {
    var m = f.qsModule, v = f.routeState, h = f.location, O = h.protocol, P = h.hostname, _ = h.port, T = _ === void 0 ? "" : _, $ = h.pathname, x = h.hash, A = m.stringify(v), w = T === "" ? "" : ":".concat(T);
    return A ? "".concat(O, "//").concat(P).concat(w).concat($, "?").concat(A).concat(x) : "".concat(O, "//").concat(P).concat(w).concat($).concat(x);
  } : t, n = e.parseURL, i = n === void 0 ? function(f) {
    var m = f.qsModule, v = f.location;
    return m.parse(v.search.slice(1), {
      arrayLimit: 99
    });
  } : n, a = e.writeDelay, o = a === void 0 ? 400 : a, s = e.windowTitle, u = e.getLocation, c = u === void 0 ? function() {
    return tt(function(f) {
      var m = f.window;
      return m.location;
    }, {
      fallback: function() {
        throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
      }
    });
  } : u, l = e.start, p = e.dispose, d = e.push;
  return new im({
    createURL: r,
    parseURL: i,
    writeDelay: o,
    windowTitle: s,
    getLocation: c,
    start: l,
    dispose: p,
    push: d
  });
}
function xr(e) {
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
var am = ["configure"];
function Po(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Po(Object(r), !0).forEach(function(n) {
      Ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Po(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ui(e, t, r) {
  return t = om(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function om(e) {
  var t = sm(e, "string");
  return xr(t) === "symbol" ? t : String(t);
}
function sm(e, t) {
  if (xr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function um(e, t) {
  if (e == null)
    return {};
  var r = cm(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cm(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function _o(e) {
  e.configure;
  var t = um(e, am);
  return t;
}
function lm() {
  return {
    stateToRoute: function(t) {
      return Object.keys(t).reduce(function(r, n) {
        return pn(pn({}, r), {}, Ui({}, n, _o(t[n])));
      }, {});
    },
    routeToState: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(t).reduce(function(r, n) {
        return pn(pn({}, r), {}, Ui({}, n, _o(t[n])));
      }, {});
    }
  };
}
function Tr(e) {
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function jo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jo(Object(r), !0).forEach(function(n) {
      Fc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fc(e, t, r) {
  return t = fm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fm(e) {
  var t = pm(e, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function pm(e, t) {
  if (Tr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Tr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dm = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.router, n = r === void 0 ? Nc() : r, i = t.stateMapping, a = i === void 0 ? lm() : i;
  return function(o) {
    var s = o.instantSearchInstance;
    function u(p) {
      var d = Object.keys(p).reduce(function(m, v) {
        return dn(dn({}, m), {}, Fc({}, v, p[v]));
      }, s.mainIndex.getWidgetUiState({})), f = a.stateToRoute(d);
      return n.createURL(f);
    }
    s._createURL = u;
    var c = void 0, l = s._initialUiState;
    return {
      onStateChange: function(d) {
        var f = d.uiState, m = a.stateToRoute(f);
        (c === void 0 || !Et(c, m)) && (n.write(m), c = m);
      },
      subscribe: function() {
        s._initialUiState = dn(dn({}, l), a.routeToState(n.read())), n.onUpdate(function(d) {
          s.setUiState(a.routeToState(d));
        });
      },
      started: function() {
        var d;
        (d = n.start) === null || d === void 0 || d.call(n);
      },
      unsubscribe: function() {
        n.dispose();
      }
    };
  };
};
function Ar(e) {
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
var hm = ["initialSearchParameters"];
function Ro(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ro(Object(r), !0).forEach(function(n) {
      Or(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ro(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Or(e, t, r) {
  return t = mm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mm(e) {
  var t = gm(e, "string");
  return Ar(t) === "symbol" ? t : String(t);
}
function gm(e, t) {
  if (Ar(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ar(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dc(e) {
  return Om(e) || bm(e) || ym(e) || vm();
}
function vm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ym(e, t) {
  if (e) {
    if (typeof e == "string")
      return Bi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Bi(e, t);
  }
}
function bm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Om(e) {
  if (Array.isArray(e))
    return Bi(e);
}
function Bi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Sm(e, t) {
  if (e == null)
    return {};
  var r = wm(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wm(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var pr = he({
  name: "index-widget"
});
function Hc(e, t) {
  var r = t.state, n = t.isPageReset, i = t._uiState;
  r !== e.state && (e.state = r, e.emit("change", {
    state: e.state,
    results: e.lastResults,
    isPageReset: n,
    _uiState: i
  }));
}
function hn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return e.reduce(function(n, i) {
    return rr(i) || !i.getWidgetUiState && !i.getWidgetState ? n : i.getWidgetUiState ? i.getWidgetUiState(n, t) : i.getWidgetState(n, t);
  }, r);
}
function mn(e, t) {
  var r = t.initialSearchParameters, n = Sm(t, hm);
  return e.filter(function(i) {
    return !rr(i);
  }).reduce(function(i, a) {
    return a.getWidgetSearchParameters ? a.getWidgetSearchParameters(i, n) : i;
  }, r);
}
function qc(e) {
  var t = e.filter(rr);
  t.length !== 0 && t.forEach(function(r) {
    var n = r.getHelper();
    Hc(n, {
      state: n.state.resetPage(),
      isPageReset: !0
    }), qc(r.getWidgets());
  });
}
function Lc(e) {
  var t = e.filter(rr);
  return t.reduce(function(r, n) {
    return r.concat.apply(r, [{
      indexId: n.getIndexId(),
      results: n.getResults(),
      helper: n.getHelper()
    }].concat(Dc(Lc(n.getWidgets()))));
  }, []);
}
var Pm = function(t) {
  if (t === void 0 || t.indexName === void 0)
    throw new Error(pr("The `indexName` option is required."));
  var r = t.indexName, n = t.indexId, i = n === void 0 ? r : n, a = [], o = {}, s = null, u = null, c = null, l = null, p = null;
  return {
    $$type: "ais.index",
    $$widgetType: "ais.index",
    getIndexName: function() {
      return r;
    },
    getIndexId: function() {
      return i;
    },
    getHelper: function() {
      return c;
    },
    getResults: function() {
      var f;
      return (f = l) !== null && f !== void 0 && f.lastResults ? (l.lastResults._state = c.state, l.lastResults) : null;
    },
    getPreviousState: function() {
      return p;
    },
    getScopedResults: function() {
      var f = this.getParent(), m = f ? f.getWidgets() : [this];
      return Lc(m);
    },
    getParent: function() {
      return u;
    },
    createURL: function(f) {
      return s._createURL(Or({}, i, hn(a, {
        searchParameters: f,
        helper: c
      })));
    },
    getWidgets: function() {
      return a;
    },
    addWidgets: function(f) {
      var m = this;
      if (!Array.isArray(f))
        throw new Error(pr("The `addWidgets` method expects an array of widgets."));
      if (f.some(function(v) {
        return typeof v.init != "function" && typeof v.render != "function";
      }))
        throw new Error(pr("The widget definition expects a `render` and/or an `init` method."));
      return a = a.concat(f), s && Boolean(f.length) && (Hc(c, {
        state: mn(a, {
          uiState: o,
          initialSearchParameters: c.state
        }),
        _uiState: o
      }), f.forEach(function(v) {
        if (v.getRenderState) {
          var h = v.getRenderState(s.renderState[m.getIndexId()] || {}, mr(s, m, s._initialUiState));
          Si({
            renderState: h,
            instantSearchInstance: s,
            parent: m
          });
        }
      }), f.forEach(function(v) {
        v.init && v.init(mr(s, m, s._initialUiState));
      }), s.scheduleSearch()), this;
    },
    removeWidgets: function(f) {
      var m = this;
      if (!Array.isArray(f))
        throw new Error(pr("The `removeWidgets` method expects an array of widgets."));
      if (f.some(function(h) {
        return typeof h.dispose != "function";
      }))
        throw new Error(pr("The widget definition expects a `dispose` method."));
      if (a = a.filter(function(h) {
        return f.indexOf(h) === -1;
      }), s && Boolean(f.length)) {
        var v = f.reduce(function(h, O) {
          var P = O.dispose({
            helper: c,
            state: h,
            parent: m
          });
          return P || h;
        }, c.state);
        o = hn(a, {
          searchParameters: v,
          helper: c
        }), c.setState(mn(a, {
          uiState: o,
          initialSearchParameters: v
        })), a.length && s.scheduleSearch();
      }
      return this;
    },
    init: function(f) {
      var m = this, v, h = f.instantSearchInstance, O = f.parent, P = f.uiState;
      if (c === null) {
        s = h, u = O, o = P[i] || {};
        var _ = h.mainHelper, T = mn(a, {
          uiState: o,
          initialSearchParameters: new kt.SearchParameters({
            index: r
          })
        });
        c = kt({}, T.index, T), c.search = function() {
          return h.onStateChange ? (h.onStateChange({
            uiState: h.mainIndex.getWidgetUiState({}),
            setUiState: function(w) {
              return h.setUiState(w, !1);
            }
          }), _) : _.search();
        }, c.searchWithoutTriggeringOnStateChange = function() {
          return _.search();
        }, c.searchForFacetValues = function(A, w, R, j) {
          var E = c.state.setQueryParameters(j);
          return _.searchForFacetValues(A, w, R, E);
        }, l = _.derive(function() {
          return rc.apply(void 0, Dc(Zp(m)));
        });
        var $ = (v = h._initialResults) === null || v === void 0 ? void 0 : v[this.getIndexId()];
        if ($) {
          var x = new kt.SearchResults(new kt.SearchParameters($.state), $.results);
          l.lastResults = x, c.lastResults = x;
        }
        c.on("change", function(A) {
          var w = A.isPageReset;
          w && qc(a);
        }), l.on("search", function() {
          h.scheduleStalledRender(), process.env.NODE_ENV === "development" && Mu({
            index: m,
            indexUiState: o
          });
        }), l.on("result", function(A) {
          var w = A.results;
          h.scheduleRender(), c.lastResults = w, p = w._state;
        }), a.forEach(function(A) {
          if (A.getRenderState) {
            var w = A.getRenderState(h.renderState[m.getIndexId()] || {}, mr(h, m, P));
            Si({
              renderState: w,
              instantSearchInstance: h,
              parent: m
            });
          }
        }), a.forEach(function(A) {
          process.env.NODE_ENV === "development" && X(
            // if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
            // aka we warn if there's _only_ getWidgetState
            !A.getWidgetState || Boolean(A.getWidgetUiState),
            "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."
          ), A.init && A.init(mr(h, m, P));
        }), c.on("change", function(A) {
          var w = A.state, R = A._uiState;
          o = hn(a, {
            searchParameters: w,
            helper: c
          }, R || {}), h.onStateChange || h.onInternalStateChange();
        }), $ && h.scheduleRender();
      }
    },
    render: function(f) {
      var m = this, v = f.instantSearchInstance;
      this.getResults() && (v.status === "error" && !v.mainHelper.hasPendingRequests() && c.setState(p), a.forEach(function(h) {
        if (h.getRenderState) {
          var O = h.getRenderState(v.renderState[m.getIndexId()] || {}, co(v, m));
          Si({
            renderState: O,
            instantSearchInstance: v,
            parent: m
          });
        }
      }), a.forEach(function(h) {
        h.render && h.render(co(v, m));
      }));
    },
    dispose: function() {
      var f = this, m, v;
      a.forEach(function(h) {
        h.dispose && h.dispose({
          helper: c,
          state: c.state,
          parent: f
        });
      }), s = null, u = null, (m = c) === null || m === void 0 || m.removeAllListeners(), c = null, (v = l) === null || v === void 0 || v.detach(), l = null;
    },
    getWidgetUiState: function(f) {
      return a.filter(rr).reduce(function(m, v) {
        return v.getWidgetUiState(m);
      }, Je(Je({}, f), {}, Or({}, i, Je(Je({}, f[i]), o))));
    },
    getWidgetState: function(f) {
      return process.env.NODE_ENV === "development" && X(!1, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."), this.getWidgetUiState(f);
    },
    getWidgetSearchParameters: function(f, m) {
      var v = m.uiState;
      return mn(a, {
        uiState: v,
        initialSearchParameters: f
      });
    },
    refreshUiState: function() {
      o = hn(a, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, o);
    },
    setIndexUiState: function(f) {
      var m = typeof f == "function" ? f(o) : f;
      s.setUiState(function(v) {
        return Je(Je({}, v), {}, Or({}, i, m));
      });
    }
  };
};
const _m = Pm;
function Si(e) {
  var t = e.renderState, r = e.instantSearchInstance, n = e.parent, i = n ? n.getIndexId() : r.mainIndex.getIndexId();
  r.renderState = Je(Je({}, r.renderState), {}, Or({}, i, Je(Je({}, r.renderState[i]), t)));
}
function Cr(e, t) {
  return e.toLocaleString(t);
}
function Nr(e) {
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function Io(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Io(Object(r), !0).forEach(function(n) {
      jm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Io(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jm(e, t, r) {
  return t = Rm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rm(e) {
  var t = Im(e, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function Im(e, t) {
  if (Nr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Em(e) {
  var t = e.numberLocale;
  return {
    formatNumber: function(n, i) {
      return Cr(Number(i(n)), t);
    },
    highlight: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(ic(Ye(Ye({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
The highlight helper expects a JSON object of the format:
{ "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    reverseHighlight: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(ac(Ye(Ye({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
  The reverseHighlight helper expects a JSON object of the format:
  { "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    snippet: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(oc(Ye(Ye({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
The snippet helper expects a JSON object of the format:
{ "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    reverseSnippet: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(sc(Ye(Ye({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
  The reverseSnippet helper expects a JSON object of the format:
  { "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    insights: function(n, i) {
      try {
        var a = JSON.parse(n), o = a.method, s = a.payload;
        return i(uc(o, Ye({
          objectIDs: [this.objectID]
        }, s)));
      } catch {
        throw new Error(`
The insights helper expects a JSON object of the format:
{ "method": "method-name", "payload": { "eventName": "name of the event" } }`);
      }
    }
  };
}
const Wc = "4.52.0";
function zt(e) {
  return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zt(e);
}
function Eo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eo(Object(r), !0).forEach(function(n) {
      ie(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $o(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mc(n.key), n);
  }
}
function Tm(e, t, r) {
  return t && $o(e.prototype, t), r && $o(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Am(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vi(e, t);
}
function Vi(e, t) {
  return Vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vi(e, t);
}
function Cm(e) {
  var t = Fm();
  return function() {
    var n = Nn(e), i;
    if (t) {
      var a = Nn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Nm(this, i);
  };
}
function Nm(e, t) {
  if (t && (zt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ne(e);
}
function ne(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nn(e) {
  return Nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nn(e);
}
function ie(e, t, r) {
  return t = Mc(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mc(e) {
  var t = Dm(e, "string");
  return zt(t) === "symbol" ? t : String(t);
}
function Dm(e, t) {
  if (zt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Me = he({
  name: "instantsearch"
});
function Hm() {
  return "#";
}
var qm = /* @__PURE__ */ function(e) {
  Am(r, e);
  var t = Cm(r);
  function r(n) {
    var i;
    xm(this, r), i = t.call(this), ie(ne(i), "client", void 0), ie(ne(i), "indexName", void 0), ie(ne(i), "insightsClient", void 0), ie(ne(i), "onStateChange", null), ie(ne(i), "helper", void 0), ie(ne(i), "mainHelper", void 0), ie(ne(i), "mainIndex", void 0), ie(ne(i), "started", void 0), ie(ne(i), "templatesConfig", void 0), ie(ne(i), "renderState", {}), ie(ne(i), "_stalledSearchDelay", void 0), ie(ne(i), "_searchStalledTimer", void 0), ie(ne(i), "_initialUiState", void 0), ie(ne(i), "_initialResults", void 0), ie(ne(i), "_createURL", void 0), ie(ne(i), "_searchFunction", void 0), ie(ne(i), "_mainHelperSearch", void 0), ie(ne(i), "middleware", []), ie(ne(i), "sendEventToInsights", void 0), ie(ne(i), "status", "idle"), ie(ne(i), "error", void 0), ie(ne(i), "scheduleSearch", lr(function() {
      i.started && i.mainHelper.search();
    })), ie(ne(i), "scheduleRender", lr(function() {
      var x, A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      (x = i.mainHelper) !== null && x !== void 0 && x.hasPendingRequests() || (clearTimeout(i._searchStalledTimer), i._searchStalledTimer = null, A && (i.status = "idle", i.error = void 0)), i.mainIndex.render({
        instantSearchInstance: ne(i)
      }), i.emit("render");
    })), ie(ne(i), "onInternalStateChange", lr(function() {
      var x = i.mainIndex.getWidgetUiState({});
      i.middleware.forEach(function(A) {
        var w = A.instance;
        w.onStateChange({
          uiState: x
        });
      });
    })), i.setMaxListeners(100);
    var a = n.indexName, o = a === void 0 ? null : a, s = n.numberLocale, u = n.initialUiState, c = u === void 0 ? {} : u, l = n.routing, p = l === void 0 ? null : l, d = n.searchFunction, f = n.stalledSearchDelay, m = f === void 0 ? 200 : f, v = n.searchClient, h = v === void 0 ? null : v, O = n.insightsClient, P = O === void 0 ? null : O, _ = n.onStateChange, T = _ === void 0 ? null : _;
    if (o === null)
      throw new Error(Me("The `indexName` option is required."));
    if (h === null)
      throw new Error(Me("The `searchClient` option is required."));
    if (typeof h.search != "function")
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    if (typeof h.addAlgoliaAgent == "function" && h.addAlgoliaAgent("instantsearch.js (".concat(Wc, ")")), process.env.NODE_ENV === "development" && X(P === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), P && typeof P != "function")
      throw new Error(Me("The `insightsClient` option should be a function."));
    if (process.env.NODE_ENV === "development" && X(!n.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(n.searchParameters, null, 2), `)
]);
\`\`\`

See `).concat(Yu({
      name: "configure"
    }))), i.client = h, i.insightsClient = P, i.indexName = o, i.helper = null, i.mainHelper = null, i.mainIndex = _m({
      indexName: o
    }), i.onStateChange = T, i.started = !1, i.templatesConfig = {
      helpers: Em({
        numberLocale: s
      }),
      compileOptions: {}
    }, i._stalledSearchDelay = m, i._searchStalledTimer = null, i._createURL = Hm, i._initialUiState = c, i._initialResults = null, d && (process.env.NODE_ENV === "development" && X(!1, "The `searchFunction` option is deprecated. Use `onStateChange` instead."), i._searchFunction = d), i.sendEventToInsights = ue, p) {
      var $ = typeof p == "boolean" ? void 0 : p;
      i.use(dm($));
    }
    return Oh() && i.use(Sh()), i;
  }
  return Tm(r, [{
    key: "_isSearchStalled",
    get: (
      /**
       * The status of the search. Can be "idle", "loading", "stalled", or "error".
       */
      /**
       * The last returned error from the Search API.
       * The error gets cleared when the next valid search response is rendered.
       */
      /**
       * @deprecated use `status === 'stalled'` instead
       */
      function() {
        return process.env.NODE_ENV === "development" && X(!1, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.'), this.status === "stalled";
      }
    )
  }, {
    key: "use",
    value: function() {
      for (var i = this, a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      var u = o.map(function(c) {
        var l = $m({
          subscribe: ue,
          started: ue,
          unsubscribe: ue,
          onStateChange: ue
        }, c({
          instantSearchInstance: i
        }));
        return i.middleware.push({
          creator: c,
          instance: l
        }), l;
      });
      return this.started && u.forEach(function(c) {
        c.subscribe(), c.started();
      }), this;
    }
    /**
     * Removes a middleware from the InstantSearch lifecycle.
     */
  }, {
    key: "unuse",
    value: function() {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return this.middleware.filter(function(s) {
        return a.includes(s.creator);
      }).forEach(function(s) {
        return s.instance.unsubscribe();
      }), this.middleware = this.middleware.filter(function(s) {
        return !a.includes(s.creator);
      }), this;
    }
    // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
  }, {
    key: "EXPERIMENTAL_use",
    value: function() {
      return process.env.NODE_ENV === "development" && X(!1, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version."), this.use.apply(this, arguments);
    }
    /**
     * Adds a widget to the search instance.
     * A widget can be added either before or after InstantSearch has started.
     * @param widget The widget to add to InstantSearch.
     *
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.
     */
  }, {
    key: "addWidget",
    value: function(i) {
      return process.env.NODE_ENV === "development" && X(!1, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`"), this.addWidgets([i]);
    }
    /**
     * Adds multiple widgets to the search instance.
     * Widgets can be added either before or after InstantSearch has started.
     * @param widgets The array of widgets to add to InstantSearch.
     */
  }, {
    key: "addWidgets",
    value: function(i) {
      if (!Array.isArray(i))
        throw new Error(Me("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
      if (i.some(function(a) {
        return typeof a.init != "function" && typeof a.render != "function";
      }))
        throw new Error(Me("The widget definition expects a `render` and/or an `init` method."));
      return this.mainIndex.addWidgets(i), this;
    }
    /**
     * Removes a widget from the search instance.
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`
     * @param widget The widget instance to remove from InstantSearch.
     *
     * The widget must implement a `dispose()` method to clear its state.
     */
  }, {
    key: "removeWidget",
    value: function(i) {
      return process.env.NODE_ENV === "development" && X(!1, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`"), this.removeWidgets([i]);
    }
    /**
     * Removes multiple widgets from the search instance.
     * @param widgets Array of widgets instances to remove from InstantSearch.
     *
     * The widgets must implement a `dispose()` method to clear their states.
     */
  }, {
    key: "removeWidgets",
    value: function(i) {
      if (!Array.isArray(i))
        throw new Error(Me("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
      if (i.some(function(a) {
        return typeof a.dispose != "function";
      }))
        throw new Error(Me("The widget definition expects a `dispose` method."));
      return this.mainIndex.removeWidgets(i), this;
    }
    /**
     * Ends the initialization of InstantSearch.js and triggers the
     * first search. This method should be called after all widgets have been added
     * to the instance of InstantSearch.js. InstantSearch.js also supports adding and removing
     * widgets after the start as an **EXPERIMENTAL** feature.
     */
  }, {
    key: "start",
    value: function() {
      var i = this;
      if (this.started)
        throw new Error(Me("The `start` method has already been called once."));
      var a = this.mainHelper || kt(this.client, this.indexName);
      if (a.search = function() {
        return i.status = "loading", i.scheduleRender(!1), a.searchOnlyWithDerivedHelpers();
      }, this._searchFunction) {
        var o = {
          search: function() {
            return new Promise(ue);
          }
        };
        this._mainHelperSearch = a.search.bind(a), a.search = function() {
          var u = i.mainIndex.getHelper(), c = kt(o, u.state.index, u.state);
          return c.once("search", function(l) {
            var p = l.state;
            u.overrideStateWithoutTriggeringChangeEvent(p), i._mainHelperSearch();
          }), c.on("change", function(l) {
            var p = l.state;
            u.setState(p);
          }), i._searchFunction(c), a;
        };
      }
      if (a.on("error", function(u) {
        var c = u.error;
        if (!(c instanceof Error)) {
          var l = c;
          c = Object.keys(l).reduce(function(p, d) {
            return p[d] = l[d], p;
          }, new Error(l.message));
        }
        c.error = c, i.error = c, i.status = "error", i.scheduleRender(!1), i.emit("error", c);
      }), this.mainHelper = a, this.middleware.forEach(function(u) {
        var c = u.instance;
        c.subscribe();
      }), this.mainIndex.init({
        instantSearchInstance: this,
        parent: null,
        uiState: this._initialUiState
      }), this._initialResults) {
        var s = this.scheduleSearch;
        this.scheduleSearch = lr(ue), lr(function() {
          i.scheduleSearch = s;
        })();
      } else
        this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
      this.helper = this.mainIndex.getHelper(), this.started = !0, this.middleware.forEach(function(u) {
        var c = u.instance;
        c.started();
      });
    }
    /**
     * Removes all widgets without triggering a search afterwards. This is an **EXPERIMENTAL** feature,
     * if you find an issue with it, please
     * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20dispose).
     * @return {undefined} This method does not return anything
     */
  }, {
    key: "dispose",
    value: function() {
      var i;
      this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), (i = this.mainHelper) === null || i === void 0 || i.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(a) {
        var o = a.instance;
        o.unsubscribe();
      });
    }
  }, {
    key: "scheduleStalledRender",
    value: function() {
      var i = this;
      this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function() {
        i.status = "stalled", i.scheduleRender();
      }, this._stalledSearchDelay));
    }
    /**
     * Set the UI state and trigger a search.
     * @param uiState The next UI state or a function computing it from the current state
     * @param callOnStateChange private parameter used to know if the method is called from a state change
     */
  }, {
    key: "setUiState",
    value: function(i) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!this.mainHelper)
        throw new Error(Me("The `start` method needs to be called before `setUiState`."));
      this.mainIndex.refreshUiState();
      var s = typeof i == "function" ? i(this.mainIndex.getWidgetUiState({})) : i;
      this.onStateChange && o ? this.onStateChange({
        uiState: s,
        setUiState: function(c) {
          Ni(typeof c == "function" ? c(s) : c, a.mainIndex), a.scheduleSearch(), a.onInternalStateChange();
        }
      }) : (Ni(s, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange());
    }
  }, {
    key: "getUiState",
    value: function() {
      return this.started && this.mainIndex.refreshUiState(), this.mainIndex.getWidgetUiState({});
    }
  }, {
    key: "createURL",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.started)
        throw new Error(Me("The `start` method needs to be called before `createURL`."));
      return this._createURL(i);
    }
  }, {
    key: "refresh",
    value: function() {
      if (!this.mainHelper)
        throw new Error(Me("The `start` method needs to be called before `refresh`."));
      this.mainHelper.clearCache().search();
    }
  }]), r;
}($a);
const Lm = qm;
var Be = function(t) {
  return new Lm(t);
};
Be.version = Wc;
Be.createInfiniteHitsSessionStorageCache = ht(vd, "import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/lib/infiniteHitsCache'");
Be.highlight = ht(ic, "import { highlight } from 'instantsearch.js/es/helpers'");
Be.reverseHighlight = ht(ac, "import { reverseHighlight } from 'instantsearch.js/es/helpers'");
Be.snippet = ht(oc, "import { snippet } from 'instantsearch.js/es/helpers'");
Be.reverseSnippet = ht(sc, "import { reverseSnippet } from 'instantsearch.js/es/helpers'");
Be.insights = uc;
Be.getInsightsAnonymousUserToken = dd;
Object.defineProperty(Be, "widgets", {
  get: function() {
    throw new ReferenceError(`"instantsearch.widgets" are not available from the ES build.

To import the widgets:

import { searchBox } from 'instantsearch.js/es/widgets'`);
  }
});
Object.defineProperty(Be, "connectors", {
  get: function() {
    throw new ReferenceError(`"instantsearch.connectors" are not available from the ES build.

To import the connectors:

import { connectSearchBox } from 'instantsearch.js/es/connectors'`);
  }
});
const Wm = Be;
function H() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.reduce(function(n, i) {
    return Array.isArray(i) ? n.concat(i) : n.concat([i]);
  }, []).filter(Boolean).join(" ");
}
var ei, Q, kc, jt, xo, Uc, Qi, Fn = {}, Bc = [], Mm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function pt(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Vc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, r) {
  var n, i, a, o = {};
  for (a in t)
    a == "key" ? n = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ei.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (a in e.defaultProps)
      o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return In(e, o, n, i, null);
}
function In(e, t, r, n, i) {
  var a = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++kc };
  return i == null && Q.vnode != null && Q.vnode(a), a;
}
function Qc() {
  return { current: null };
}
function ir(e) {
  return e.children;
}
function It(e, t) {
  this.props = e, this.context = t;
}
function Fr(e, t) {
  if (t == null)
    return e.__ ? Fr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Fr(e) : null;
}
function Kc(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Kc(e);
  }
}
function To(e) {
  (!e.__d && (e.__d = !0) && jt.push(e) && !Dn.__r++ || xo !== Q.debounceRendering) && ((xo = Q.debounceRendering) || Uc)(Dn);
}
function Dn() {
  var e, t, r, n, i, a, o, s;
  for (jt.sort(Qi); e = jt.shift(); )
    e.__d && (t = jt.length, n = void 0, i = void 0, o = (a = (r = e).__v).__e, (s = r.__P) && (n = [], (i = pt({}, a)).__v = a.__v + 1, qa(s, a, i, r.__n, s.ownerSVGElement !== void 0, a.__h != null ? [o] : null, n, o ?? Fr(a), a.__h), Xc(n, a), a.__e != o && Kc(a)), jt.length > t && jt.sort(Qi));
  Dn.__r = 0;
}
function zc(e, t, r, n, i, a, o, s, u, c) {
  var l, p, d, f, m, v, h, O = n && n.__k || Bc, P = O.length;
  for (r.__k = [], l = 0; l < t.length; l++)
    if ((f = r.__k[l] = (f = t[l]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? In(null, f, null, null, f) : Array.isArray(f) ? In(ir, { children: f }, null, null, null) : f.__b > 0 ? In(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = r, f.__b = r.__b + 1, (d = O[l]) === null || d && f.key == d.key && f.type === d.type)
        O[l] = void 0;
      else
        for (p = 0; p < P; p++) {
          if ((d = O[p]) && f.key == d.key && f.type === d.type) {
            O[p] = void 0;
            break;
          }
          d = null;
        }
      qa(e, f, d = d || Fn, i, a, o, s, u, c), m = f.__e, (p = f.ref) && d.ref != p && (h || (h = []), d.ref && h.push(d.ref, null, f), h.push(p, f.__c || m, f)), m != null ? (v == null && (v = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = u = Jc(f, u, e) : u = Gc(e, f, d, O, m, u), typeof r.type == "function" && (r.__d = u)) : u && d.__e == u && u.parentNode != e && (u = Fr(d));
    }
  for (r.__e = v, l = P; l--; )
    O[l] != null && (typeof r.type == "function" && O[l].__e != null && O[l].__e == r.__d && (r.__d = Yc(n).nextSibling), el(O[l], O[l]));
  if (h)
    for (l = 0; l < h.length; l++)
      Zc(h[l], h[++l], h[++l]);
}
function Jc(e, t, r) {
  for (var n, i = e.__k, a = 0; i && a < i.length; a++)
    (n = i[a]) && (n.__ = e, t = typeof n.type == "function" ? Jc(n, t, r) : Gc(r, n, n, i, n.__e, t));
  return t;
}
function Gc(e, t, r, n, i, a) {
  var o, s, u;
  if (t.__d !== void 0)
    o = t.__d, t.__d = void 0;
  else if (r == null || i != a || i.parentNode == null)
    e:
      if (a == null || a.parentNode !== e)
        e.appendChild(i), o = null;
      else {
        for (s = a, u = 0; (s = s.nextSibling) && u < n.length; u += 1)
          if (s == i)
            break e;
        e.insertBefore(i, a), o = a;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function Yc(e) {
  var t, r, n;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((r = e.__k[t]) && (n = Yc(r)))
        return n;
  }
  return null;
}
function km(e, t, r, n, i) {
  var a;
  for (a in r)
    a === "children" || a === "key" || a in t || Hn(e, a, null, r[a], n);
  for (a in t)
    i && typeof t[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || r[a] === t[a] || Hn(e, a, t[a], r[a], n);
}
function Ao(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Mm.test(t) ? r : r + "px";
}
function Hn(e, t, r, n, i) {
  var a;
  e:
    if (t === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            r && t in r || Ao(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || Ao(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = r, r ? n || e.addEventListener(t, a ? No : Co, a) : e.removeEventListener(t, a ? No : Co, a);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function Co(e) {
  return this.l[e.type + !1](Q.event ? Q.event(e) : e);
}
function No(e) {
  return this.l[e.type + !0](Q.event ? Q.event(e) : e);
}
function qa(e, t, r, n, i, a, o, s, u) {
  var c, l, p, d, f, m, v, h, O, P, _, T, $, x, A, w = t.type;
  if (t.constructor !== void 0)
    return null;
  r.__h != null && (u = r.__h, s = t.__e = r.__e, t.__h = null, a = [s]), (c = Q.__b) && c(t);
  try {
    e:
      if (typeof w == "function") {
        if (h = t.props, O = (c = w.contextType) && n[c.__c], P = c ? O ? O.props.value : c.__ : n, r.__c ? v = (l = t.__c = r.__c).__ = l.__E : ("prototype" in w && w.prototype.render ? t.__c = l = new w(h, P) : (t.__c = l = new It(h, P), l.constructor = w, l.render = Bm), O && O.sub(l), l.props = h, l.state || (l.state = {}), l.context = P, l.__n = n, p = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), w.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = pt({}, l.__s)), pt(l.__s, w.getDerivedStateFromProps(h, l.__s))), d = l.props, f = l.state, l.__v = t, p)
          w.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && h !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(h, P), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(h, l.__s, P) === !1 || t.__v === r.__v) {
            for (t.__v !== r.__v && (l.props = h, l.state = l.__s, l.__d = !1), l.__e = !1, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(R) {
              R && (R.__ = t);
            }), _ = 0; _ < l._sb.length; _++)
              l.__h.push(l._sb[_]);
            l._sb = [], l.__h.length && o.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(h, l.__s, P), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(d, f, m);
          });
        }
        if (l.context = P, l.props = h, l.__P = e, T = Q.__r, $ = 0, "prototype" in w && w.prototype.render) {
          for (l.state = l.__s, l.__d = !1, T && T(t), c = l.render(l.props, l.state, l.context), x = 0; x < l._sb.length; x++)
            l.__h.push(l._sb[x]);
          l._sb = [];
        } else
          do
            l.__d = !1, T && T(t), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++$ < 25);
        l.state = l.__s, l.getChildContext != null && (n = pt(pt({}, n), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (m = l.getSnapshotBeforeUpdate(d, f)), A = c != null && c.type === ir && c.key == null ? c.props.children : c, zc(e, Array.isArray(A) ? A : [A], t, r, n, i, a, o, s, u), l.base = t.__e, t.__h = null, l.__h.length && o.push(l), v && (l.__E = l.__ = null), l.__e = !1;
      } else
        a == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = Um(r.__e, t, r, n, i, a, o, u);
    (c = Q.diffed) && c(t);
  } catch (R) {
    t.__v = null, (u || a != null) && (t.__e = s, t.__h = !!u, a[a.indexOf(s)] = null), Q.__e(R, t, r);
  }
}
function Xc(e, t) {
  Q.__c && Q.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      Q.__e(n, r.__v);
    }
  });
}
function Um(e, t, r, n, i, a, o, s) {
  var u, c, l, p = r.props, d = t.props, f = t.type, m = 0;
  if (f === "svg" && (i = !0), a != null) {
    for (; m < a.length; m++)
      if ((u = a[m]) && "setAttribute" in u == !!f && (f ? u.localName === f : u.nodeType === 3)) {
        e = u, a[m] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), a = null, s = !1;
  }
  if (f === null)
    p === d || s && e.data === d || (e.data = d);
  else {
    if (a = a && ei.call(e.childNodes), c = (p = r.props || Fn).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !s) {
      if (a != null)
        for (p = {}, m = 0; m < e.attributes.length; m++)
          p[e.attributes[m].name] = e.attributes[m].value;
      (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (km(e, d, p, i, s), l)
      t.__k = [];
    else if (m = t.props.children, zc(e, Array.isArray(m) ? m : [m], t, r, n, i && f !== "foreignObject", a, o, a ? a[0] : r.__k && Fr(r, 0), s), a != null)
      for (m = a.length; m--; )
        a[m] != null && Vc(a[m]);
    s || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== p.value) && Hn(e, "value", m, p.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Hn(e, "checked", m, p.checked, !1));
  }
  return e;
}
function Zc(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    Q.__e(n, r);
  }
}
function el(e, t, r) {
  var n, i;
  if (Q.unmount && Q.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Zc(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (a) {
        Q.__e(a, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && el(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Vc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Bm(e, t, r) {
  return this.constructor(e, r);
}
function Ie(e, t, r) {
  var n, i, a;
  Q.__ && Q.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, a = [], qa(t, e = (!n && r || t).__k = q(ir, null, [e]), i || Fn, Fn, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? ei.call(t.childNodes) : null, a, !n && r ? r : i ? i.__e : t.firstChild, n), Xc(a, e);
}
ei = Bc.slice, Q = { __e: function(e, t, r, n) {
  for (var i, a, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (s) {
        e = s;
      }
  throw e;
} }, kc = 0, It.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = pt({}, this.state), typeof e == "function" && (e = e(pt({}, r), this.props)), e && pt(r, e), e != null && this.__v && (t && this._sb.push(t), To(this));
}, It.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), To(this));
}, It.prototype.render = ir, jt = [], Uc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Dn.__r = 0;
function Dr(e) {
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function Fo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fo(Object(r), !0).forEach(function(n) {
      Qm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qm(e, t, r) {
  return t = Km(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Km(e) {
  var t = zm(e, "string");
  return Dr(t) === "symbol" ? t : String(t);
}
function zm(e, t) {
  if (Dr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Dr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Do(e) {
  return Xm(e) || Ym(e) || Gm(e) || Jm();
}
function Jm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gm(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ki(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ki(e, t);
  }
}
function Ym(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Xm(e) {
  if (Array.isArray(e))
    return Ki(e);
}
function Ki(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Zm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Jn([].concat(Do(Object.keys(e || {})), Do(Object.keys(t))));
  return r.reduce(function(n, i) {
    var a = e ? e[i] : void 0, o = t[i], s = o !== void 0 && o !== a;
    return n.templates[i] = s ? o : a, n.useCustomCompileOptions[i] = s, n;
  }, {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    templates: {},
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    useCustomCompileOptions: {}
  });
}
function Jt(e) {
  var t = e.defaultTemplates, r = e.templates, n = e.templatesConfig, i = Zm(t, r);
  return Vm({
    templatesConfig: n
  }, i);
}
var tl = {};
(function(e) {
  (function(t) {
    var r = /\S/, n = /\"/g, i = /\n/g, a = /\r/g, o = /\\/g, s = /\u2028/, u = /\u2029/;
    t.tags = {
      "#": 1,
      "^": 2,
      "<": 3,
      $: 4,
      "/": 5,
      "!": 6,
      ">": 7,
      "=": 8,
      _v: 9,
      "{": 10,
      "&": 11,
      _t: 12
    }, t.scan = function(R, j) {
      var E = R.length, U = 0, ee = 1, je = 2, G = U, Le = null, oe = null, k = "", B = [], Z = !1, K = 0, Te = 0, ge = "{{", fe = "}}";
      function Ee() {
        k.length > 0 && (B.push({ tag: "_t", text: new String(k) }), k = "");
      }
      function We() {
        for (var me = !0, de = Te; de < B.length; de++)
          if (me = t.tags[B[de].tag] < t.tags._v || B[de].tag == "_t" && B[de].text.match(r) === null, !me)
            return !1;
        return me;
      }
      function Fe(me, de) {
        if (Ee(), me && We())
          for (var Re = Te, Ve; Re < B.length; Re++)
            B[Re].text && ((Ve = B[Re + 1]) && Ve.tag == ">" && (Ve.indent = B[Re].text.toString()), B.splice(Re, 1));
        else
          de || B.push({ tag: `
` });
        Z = !1, Te = B.length;
      }
      function Oe(me, de) {
        var Re = "=" + fe, Ve = me.indexOf(Re, de), Qe = l(
          me.substring(me.indexOf("=", de) + 1, Ve)
        ).split(" ");
        return ge = Qe[0], fe = Qe[Qe.length - 1], Ve + Re.length - 1;
      }
      for (j && (j = j.split(" "), ge = j[0], fe = j[1]), K = 0; K < E; K++)
        G == U ? p(ge, R, K) ? (--K, Ee(), G = ee) : R.charAt(K) == `
` ? Fe(Z) : k += R.charAt(K) : G == ee ? (K += ge.length - 1, oe = t.tags[R.charAt(K + 1)], Le = oe ? R.charAt(K + 1) : "_v", Le == "=" ? (K = Oe(R, K), G = U) : (oe && K++, G = je), Z = K) : p(fe, R, K) ? (B.push({
          tag: Le,
          n: l(k),
          otag: ge,
          ctag: fe,
          i: Le == "/" ? Z - ge.length : K + fe.length
        }), k = "", K += fe.length - 1, G = U, Le == "{" && (fe == "}}" ? K++ : c(B[B.length - 1]))) : k += R.charAt(K);
      return Fe(Z, !0), B;
    };
    function c(w) {
      w.n.substr(w.n.length - 1) === "}" && (w.n = w.n.substring(0, w.n.length - 1));
    }
    function l(w) {
      return w.trim ? w.trim() : w.replace(/^\s*|\s*$/g, "");
    }
    function p(w, R, j) {
      if (R.charAt(j) != w.charAt(0))
        return !1;
      for (var E = 1, U = w.length; E < U; E++)
        if (R.charAt(j + E) != w.charAt(E))
          return !1;
      return !0;
    }
    var d = { _t: !0, "\n": !0, $: !0, "/": !0 };
    function f(w, R, j, E) {
      var U = [], ee = null, je = null, G = null;
      for (je = j[j.length - 1]; w.length > 0; ) {
        if (G = w.shift(), je && je.tag == "<" && !(G.tag in d))
          throw new Error("Illegal content in < super tag.");
        if (t.tags[G.tag] <= t.tags.$ || m(G, E))
          j.push(G), G.nodes = f(w, G.tag, j, E);
        else if (G.tag == "/") {
          if (j.length === 0)
            throw new Error("Closing tag without opener: /" + G.n);
          if (ee = j.pop(), G.n != ee.n && !v(G.n, ee.n, E))
            throw new Error("Nesting error: " + ee.n + " vs. " + G.n);
          return ee.end = G.i, U;
        } else
          G.tag == `
` && (G.last = w.length == 0 || w[0].tag == `
`);
        U.push(G);
      }
      if (j.length > 0)
        throw new Error("missing closing tag: " + j.pop().n);
      return U;
    }
    function m(w, R) {
      for (var j = 0, E = R.length; j < E; j++)
        if (R[j].o == w.n)
          return w.tag = "#", !0;
    }
    function v(w, R, j) {
      for (var E = 0, U = j.length; E < U; E++)
        if (j[E].c == w && j[E].o == R)
          return !0;
    }
    function h(w) {
      var R = [];
      for (var j in w)
        R.push('"' + _(j) + '": function(c,p,t,i) {' + w[j] + "}");
      return "{ " + R.join(",") + " }";
    }
    function O(w) {
      var R = [];
      for (var j in w.partials)
        R.push('"' + _(j) + '":{name:"' + _(w.partials[j].name) + '", ' + O(w.partials[j]) + "}");
      return "partials: {" + R.join(",") + "}, subs: " + h(w.subs);
    }
    t.stringify = function(w, R, j) {
      return "{code: function (c,p,i) { " + t.wrapMain(w.code) + " }," + O(w) + "}";
    };
    var P = 0;
    t.generate = function(w, R, j) {
      P = 0;
      var E = { code: "", subs: {}, partials: {} };
      return t.walk(w, E), j.asString ? this.stringify(E, R, j) : this.makeTemplate(E, R, j);
    }, t.wrapMain = function(w) {
      return 'var t=this;t.b(i=i||"");' + w + "return t.fl();";
    }, t.template = t.Template, t.makeTemplate = function(w, R, j) {
      var E = this.makePartials(w);
      return E.code = new Function("c", "p", "i", this.wrapMain(w.code)), new this.template(E, R, this, j);
    }, t.makePartials = function(w) {
      var R, j = { subs: {}, partials: w.partials, name: w.name };
      for (R in j.partials)
        j.partials[R] = this.makePartials(j.partials[R]);
      for (R in w.subs)
        j.subs[R] = new Function("c", "p", "t", "i", w.subs[R]);
      return j;
    };
    function _(w) {
      return w.replace(o, "\\\\").replace(n, '\\"').replace(i, "\\n").replace(a, "\\r").replace(s, "\\u2028").replace(u, "\\u2029");
    }
    function T(w) {
      return ~w.indexOf(".") ? "d" : "f";
    }
    function $(w, R) {
      var j = "<" + (R.prefix || ""), E = j + w.n + P++;
      return R.partials[E] = { name: w.n, partials: {} }, R.code += 't.b(t.rp("' + _(E) + '",c,p,"' + (w.indent || "") + '"));', E;
    }
    t.codegen = {
      "#": function(w, R) {
        R.code += "if(t.s(t." + T(w.n) + '("' + _(w.n) + '",c,p,1),c,p,0,' + w.i + "," + w.end + ',"' + w.otag + " " + w.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(w.nodes, R), R.code += "});c.pop();}";
      },
      "^": function(w, R) {
        R.code += "if(!t.s(t." + T(w.n) + '("' + _(w.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(w.nodes, R), R.code += "};";
      },
      ">": $,
      "<": function(w, R) {
        var j = { partials: {}, code: "", subs: {}, inPartial: !0 };
        t.walk(w.nodes, j);
        var E = R.partials[$(w, R)];
        E.subs = j.subs, E.partials = j.partials;
      },
      $: function(w, R) {
        var j = { subs: {}, code: "", partials: R.partials, prefix: w.n };
        t.walk(w.nodes, j), R.subs[w.n] = j.code, R.inPartial || (R.code += 't.sub("' + _(w.n) + '",c,p,i);');
      },
      "\n": function(w, R) {
        R.code += A('"\\n"' + (w.last ? "" : " + i"));
      },
      _v: function(w, R) {
        R.code += "t.b(t.v(t." + T(w.n) + '("' + _(w.n) + '",c,p,0)));';
      },
      _t: function(w, R) {
        R.code += A('"' + _(w.text) + '"');
      },
      "{": x,
      "&": x
    };
    function x(w, R) {
      R.code += "t.b(t.t(t." + T(w.n) + '("' + _(w.n) + '",c,p,0)));';
    }
    function A(w) {
      return "t.b(" + w + ");";
    }
    t.walk = function(w, R) {
      for (var j, E = 0, U = w.length; E < U; E++)
        j = t.codegen[w[E].tag], j && j(w[E], R);
      return R;
    }, t.parse = function(w, R, j) {
      return j = j || {}, f(w, "", [], j.sectionTags || []);
    }, t.cache = {}, t.cacheKey = function(w, R) {
      return [w, !!R.asString, !!R.disableLambda, R.delimiters, !!R.modelGet].join("||");
    }, t.compile = function(w, R) {
      R = R || {};
      var j = t.cacheKey(w, R), E = this.cache[j];
      if (E) {
        var U = E.partials;
        for (var ee in U)
          delete U[ee].instance;
        return E;
      }
      return E = this.generate(this.parse(this.scan(w, R.delimiters), w, R), w, R), this.cache[j] = E;
    };
  })(e);
})(tl);
var rl = {};
(function(e) {
  (function(t) {
    t.Template = function(f, m, v, h) {
      f = f || {}, this.r = f.code || this.r, this.c = v, this.options = h || {}, this.text = m || "", this.partials = f.partials || {}, this.subs = f.subs || {}, this.buf = "";
    }, t.Template.prototype = {
      // render: replaced by generated code.
      r: function(f, m, v) {
        return "";
      },
      // variable escaping
      v: p,
      // triple stache
      t: l,
      render: function(m, v, h) {
        return this.ri([m], v || {}, h);
      },
      // render internal -- a hook for overrides that catches partials too
      ri: function(f, m, v) {
        return this.r(f, m, v);
      },
      // ensurePartial
      ep: function(f, m) {
        var v = this.partials[f], h = m[v.name];
        if (v.instance && v.base == h)
          return v.instance;
        if (typeof h == "string") {
          if (!this.c)
            throw new Error("No compiler available.");
          h = this.c.compile(h, this.options);
        }
        if (!h)
          return null;
        if (this.partials[f].base = h, v.subs) {
          m.stackText || (m.stackText = {});
          for (key in v.subs)
            m.stackText[key] || (m.stackText[key] = this.activeSub !== void 0 && m.stackText[this.activeSub] ? m.stackText[this.activeSub] : this.text);
          h = n(
            h,
            v.subs,
            v.partials,
            this.stackSubs,
            this.stackPartials,
            m.stackText
          );
        }
        return this.partials[f].instance = h, h;
      },
      // tries to find a partial in the current scope and render it
      rp: function(f, m, v, h) {
        var O = this.ep(f, v);
        return O ? O.ri(m, v, h) : "";
      },
      // render a section
      rs: function(f, m, v) {
        var h = f[f.length - 1];
        if (!d(h)) {
          v(f, m, this);
          return;
        }
        for (var O = 0; O < h.length; O++)
          f.push(h[O]), v(f, m, this), f.pop();
      },
      // maybe start a section
      s: function(f, m, v, h, O, P, _) {
        var T;
        return d(f) && f.length === 0 ? !1 : (typeof f == "function" && (f = this.ms(f, m, v, h, O, P, _)), T = !!f, !h && T && m && m.push(typeof f == "object" ? f : m[m.length - 1]), T);
      },
      // find values with dotted names
      d: function(f, m, v, h) {
        var O, P = f.split("."), _ = this.f(P[0], m, v, h), T = this.options.modelGet, $ = null;
        if (f === "." && d(m[m.length - 2]))
          _ = m[m.length - 1];
        else
          for (var x = 1; x < P.length; x++)
            O = r(P[x], _, T), O !== void 0 ? ($ = _, _ = O) : _ = "";
        return h && !_ ? !1 : (!h && typeof _ == "function" && (m.push($), _ = this.mv(_, m, v), m.pop()), _);
      },
      // find values with normal names
      f: function(f, m, v, h) {
        for (var O = !1, P = null, _ = !1, T = this.options.modelGet, $ = m.length - 1; $ >= 0; $--)
          if (P = m[$], O = r(f, P, T), O !== void 0) {
            _ = !0;
            break;
          }
        return _ ? (!h && typeof O == "function" && (O = this.mv(O, m, v)), O) : h ? !1 : "";
      },
      // higher order templates
      ls: function(f, m, v, h, O) {
        var P = this.options.delimiters;
        return this.options.delimiters = O, this.b(this.ct(l(f.call(m, h)), m, v)), this.options.delimiters = P, !1;
      },
      // compile text
      ct: function(f, m, v) {
        if (this.options.disableLambda)
          throw new Error("Lambda features disabled.");
        return this.c.compile(f, this.options).render(m, v);
      },
      // template result buffering
      b: function(f) {
        this.buf += f;
      },
      fl: function() {
        var f = this.buf;
        return this.buf = "", f;
      },
      // method replace section
      ms: function(f, m, v, h, O, P, _) {
        var T, $ = m[m.length - 1], x = f.call($);
        return typeof x == "function" ? h ? !0 : (T = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(x, $, v, T.substring(O, P), _)) : x;
      },
      // method replace variable
      mv: function(f, m, v) {
        var h = m[m.length - 1], O = f.call(h);
        return typeof O == "function" ? this.ct(l(O.call(h)), h, v) : O;
      },
      sub: function(f, m, v, h) {
        var O = this.subs[f];
        O && (this.activeSub = f, O(m, v, this, h), this.activeSub = !1);
      }
    };
    function r(f, m, v) {
      var h;
      return m && typeof m == "object" && (m[f] !== void 0 ? h = m[f] : v && m.get && typeof m.get == "function" && (h = m.get(f))), h;
    }
    function n(f, m, v, h, O, P) {
      function _() {
      }
      _.prototype = f;
      function T() {
      }
      T.prototype = f.subs;
      var $, x = new _();
      x.subs = new T(), x.subsText = {}, x.buf = "", h = h || {}, x.stackSubs = h, x.subsText = P;
      for ($ in m)
        h[$] || (h[$] = m[$]);
      for ($ in h)
        x.subs[$] = h[$];
      O = O || {}, x.stackPartials = O;
      for ($ in v)
        O[$] || (O[$] = v[$]);
      for ($ in O)
        x.partials[$] = O[$];
      return x;
    }
    var i = /&/g, a = /</g, o = />/g, s = /\'/g, u = /\"/g, c = /[&<>\"\']/;
    function l(f) {
      return String(f ?? "");
    }
    function p(f) {
      return f = l(f), c.test(f) ? f.replace(i, "&amp;").replace(a, "&lt;").replace(o, "&gt;").replace(s, "&#39;").replace(u, "&quot;") : f;
    }
    var d = Array.isArray || function(f) {
      return Object.prototype.toString.call(f) === "[object Array]";
    };
  })(e);
})(rl);
var qn = tl;
qn.Template = rl.Template;
qn.template = qn.Template;
var eg = qn;
const nl = eg;
var il = function(e, t, r, n) {
  var i;
  t[0] = 0;
  for (var a = 1; a < t.length; a++) {
    var o = t[a++], s = t[a] ? (t[0] |= o ? 1 : 2, r[t[a++]]) : t[++a];
    o === 3 ? n[0] = s : o === 4 ? n[1] = Object.assign(n[1] || {}, s) : o === 5 ? (n[1] = n[1] || {})[t[++a]] = s : o === 6 ? n[1][t[++a]] += s + "" : o ? (i = e.apply(s, il(e, s, r, ["", null])), n.push(i), s[0] ? t[0] |= 2 : (t[a - 2] = 0, t[a] = i)) : n.push(s);
  }
  return n;
}, Ho = /* @__PURE__ */ new Map();
function al(e) {
  var t = Ho.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Ho.set(this, t)), (t = il(this, t.get(e) || (t.set(e, t = function(r) {
    for (var n, i, a = 1, o = "", s = "", u = [0], c = function(d) {
      a === 1 && (d || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? u.push(0, d, o) : a === 3 && (d || o) ? (u.push(3, d, o), a = 2) : a === 2 && o === "..." && d ? u.push(4, d, 0) : a === 2 && o && !d ? u.push(5, 0, !0, o) : a >= 5 && ((o || !d && a === 5) && (u.push(a, 0, o, i), a = 6), d && (u.push(a, d, 0, i), a = 6)), o = "";
    }, l = 0; l < r.length; l++) {
      l && (a === 1 && c(), c(l));
      for (var p = 0; p < r[l].length; p++)
        n = r[l][p], a === 1 ? n === "<" ? (c(), u = [u], a = 3) : o += n : a === 4 ? o === "--" && n === ">" ? (a = 1, o = "") : o = n + o[0] : s ? n === s ? s = "" : o += n : n === '"' || n === "'" ? s = n : n === ">" ? (c(), a = 1) : a && (n === "=" ? (a = 5, i = o, o = "") : n === "/" && (a < 5 || r[l][p + 1] === ">") ? (c(), a === 3 && (u = u[0]), a = u, (u = u[0]).push(2, 0, a), a = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (c(), a = 2) : o += n), a === 3 && o === "!--" && (a = 4, u = u[0]);
    }
    return c(), u;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
var tg = al.bind(q);
function zi() {
  return zi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zi.apply(this, arguments);
}
function rg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ng(e, t) {
  if (e == null)
    return {};
  var r = rg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var ig = ["parts", "highlightedTagName", "nonHighlightedTagName", "separator", "className", "classNames"];
function ag(e) {
  var t = e.createElement;
  return function(n) {
    var i = n.classNames, a = n.children, o = n.highlightedTagName, s = n.isHighlighted, u = n.nonHighlightedTagName, c = s ? o : u;
    return t(c, {
      className: s ? i.highlighted : i.nonHighlighted
    }, a);
  };
}
function og(e) {
  var t = e.createElement, r = e.Fragment, n = ag({
    createElement: t,
    Fragment: r
  });
  return function(a) {
    var o = a.parts, s = a.highlightedTagName, u = s === void 0 ? "mark" : s, c = a.nonHighlightedTagName, l = c === void 0 ? "span" : c, p = a.separator, d = p === void 0 ? ", " : p, f = a.className, m = a.classNames, v = m === void 0 ? {} : m, h = ng(a, ig);
    return t("span", zi({}, h, {
      className: H(v.root, f)
    }), o.map(function(O, P) {
      var _ = P === o.length - 1;
      return t(r, {
        key: P
      }, O.map(function(T, $) {
        return t(n, {
          key: $,
          classNames: v,
          highlightedTagName: u,
          nonHighlightedTagName: l,
          isHighlighted: T.isHighlighted
        }, T.value);
      }), !_ && t("span", {
        className: v.separator
      }, d));
    }));
  };
}
var ti = og({
  createElement: q,
  Fragment: ir
}), sg = ["classNames"];
function Ji() {
  return Ji = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ji.apply(this, arguments);
}
function ug(e, t) {
  if (e == null)
    return {};
  var r = cg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function lg(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = ug(e, sg);
  return q(ti, Ji({
    classNames: {
      root: H("ais-Highlight", r.root),
      highlighted: H("ais-Highlight-highlighted", r.highlighted),
      nonHighlighted: H("ais-Highlight-nonHighlighted", r.nonHighlighted),
      separator: H("ais-Highlight-separator", r.separator)
    }
  }, n));
}
var fg = ["hit", "attribute", "cssClasses"];
function Gi() {
  return Gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gi.apply(this, arguments);
}
function pg(e, t) {
  if (e == null)
    return {};
  var r = dg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function hg(e) {
  var t = e.hit, r = e.attribute, n = e.cssClasses, i = pg(e, fg), a = vt(t._highlightResult, r) || [], o = Gn(a);
  process.env.NODE_ENV === "development" && X(Boolean(o.length), 'Could not enable highlight for "'.concat(r.toString(), `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var s = o.map(function(u) {
    var c = u.value;
    return nr(un(c || ""));
  });
  return q(lg, Gi({}, i, {
    parts: s,
    classNames: n
  }));
}
var mg = ["classNames"];
function Yi() {
  return Yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yi.apply(this, arguments);
}
function gg(e, t) {
  if (e == null)
    return {};
  var r = vg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function yg(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = gg(e, mg);
  return q(ti, Yi({
    classNames: {
      root: H("ais-ReverseHighlight", r.root),
      highlighted: H("ais-ReverseHighlight-highlighted", r.highlighted),
      nonHighlighted: H("ais-ReverseHighlight-nonHighlighted", r.nonHighlighted),
      separator: H("ais-ReverseHighlight-separator", r.separator)
    }
  }, n));
}
function Hr(e) {
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
var bg = ["hit", "attribute", "cssClasses"], Og = ["isHighlighted"];
function Xi() {
  return Xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xi.apply(this, arguments);
}
function qo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qo(Object(r), !0).forEach(function(n) {
      Sg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sg(e, t, r) {
  return t = wg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wg(e) {
  var t = Pg(e, "string");
  return Hr(t) === "symbol" ? t : String(t);
}
function Pg(e, t) {
  if (Hr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wo(e, t) {
  if (e == null)
    return {};
  var r = _g(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _g(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function jg(e) {
  var t = e.hit, r = e.attribute, n = e.cssClasses, i = Wo(e, bg), a = vt(t._highlightResult, r) || [], o = Gn(a);
  process.env.NODE_ENV === "development" && X(Boolean(o.length), 'Could not enable highlight for "'.concat(r.toString(), `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var s = o.map(function(u) {
    var c = u.value;
    return nr(un(c || "")).map(function(l) {
      var p = l.isHighlighted, d = Wo(l, Og);
      return Lo(Lo({}, d), {}, {
        isHighlighted: !p
      });
    });
  });
  return q(yg, Xi({}, i, {
    parts: s,
    classNames: n
  }));
}
var Rg = ["classNames"];
function Zi() {
  return Zi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zi.apply(this, arguments);
}
function Ig(e, t) {
  if (e == null)
    return {};
  var r = Eg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Eg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $g(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = Ig(e, Rg);
  return q(ti, Zi({
    classNames: {
      root: H("ais-ReverseSnippet", r.root),
      highlighted: H("ais-ReverseSnippet-highlighted", r.highlighted),
      nonHighlighted: H("ais-ReverseSnippet-nonHighlighted", r.nonHighlighted),
      separator: H("ais-ReverseSnippet-separator", r.separator)
    }
  }, n));
}
function qr(e) {
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
var xg = ["hit", "attribute", "cssClasses"], Tg = ["isHighlighted"];
function ea() {
  return ea = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ea.apply(this, arguments);
}
function Mo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mo(Object(r), !0).forEach(function(n) {
      Ag(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ag(e, t, r) {
  return t = Cg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cg(e) {
  var t = Ng(e, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function Ng(e, t) {
  if (qr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Uo(e, t) {
  if (e == null)
    return {};
  var r = Fg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Fg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Dg(e) {
  var t = e.hit, r = e.attribute, n = e.cssClasses, i = Uo(e, xg), a = vt(t._snippetResult, r) || [], o = Gn(a);
  process.env.NODE_ENV === "development" && X(Boolean(o.length), 'Could not enable snippet for "'.concat(r.toString(), `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var s = o.map(function(u) {
    var c = u.value;
    return nr(un(c || "")).map(function(l) {
      var p = l.isHighlighted, d = Uo(l, Tg);
      return ko(ko({}, d), {}, {
        isHighlighted: !p
      });
    });
  });
  return q($g, ea({}, i, {
    parts: s,
    classNames: n
  }));
}
var Hg = ["classNames"];
function ta() {
  return ta = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ta.apply(this, arguments);
}
function qg(e, t) {
  if (e == null)
    return {};
  var r = Lg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Lg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Wg(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = qg(e, Hg);
  return q(ti, ta({
    classNames: {
      root: H("ais-Snippet", r.root),
      highlighted: H("ais-Snippet-highlighted", r.highlighted),
      nonHighlighted: H("ais-Snippet-nonHighlighted", r.nonHighlighted),
      separator: H("ais-Snippet-separator", r.separator)
    }
  }, n));
}
var Mg = ["hit", "attribute", "cssClasses"];
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ra.apply(this, arguments);
}
function kg(e, t) {
  if (e == null)
    return {};
  var r = Ug(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ug(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Bg(e) {
  var t = e.hit, r = e.attribute, n = e.cssClasses, i = kg(e, Mg), a = vt(t._snippetResult, r) || [], o = Gn(a);
  process.env.NODE_ENV === "development" && X(Boolean(o.length), 'Could not enable snippet for "'.concat(r.toString(), `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var s = o.map(function(u) {
    var c = u.value;
    return nr(un(c || ""));
  });
  return q(Wg, ra({}, i, {
    parts: s,
    classNames: n
  }));
}
function Gt(e) {
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gt(e);
}
function Bo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bo(Object(r), !0).forEach(function(n) {
      ol(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ol(e, t, r) {
  return t = Vg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vg(e) {
  var t = Qg(e, "string");
  return Gt(t) === "symbol" ? t : String(t);
}
function Qg(e, t) {
  if (Gt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
  return Object.keys(e).reduce(function(n, i) {
    return Ln(Ln({}, n), {}, ol({}, i, function() {
      var a = this;
      return function(o) {
        var s = function(c) {
          return nl.compile(c, t).render(a);
        };
        return e[i].call(r, o, s);
      };
    }));
  }, {});
}
function zg(e) {
  var t = e.templates, r = e.templateKey, n = e.compileOptions, i = e.helpers, a = e.data, o = e.bindEvent, s = e.sendEvent, u = t[r];
  if (typeof u != "string" && typeof u != "function")
    throw new Error("Template must be 'string' or 'function', was '".concat(Gt(u), "' (key: ").concat(r, ")"));
  if (typeof u == "function") {
    var c = o || {};
    return c.html = tg, c.sendEvent = s, c.components = {
      Highlight: hg,
      ReverseHighlight: jg,
      Snippet: Bg,
      ReverseSnippet: Dg
    }, u(a, c);
  }
  var l = Kg(i, n, a);
  return nl.compile(u, n).render(Ln(Ln({}, a), {}, {
    helpers: l
  })).replace(/[ \n\r\t\f\xA0]+/g, function(p) {
    return p.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ");
  }).trim();
}
function na() {
  return na = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, na.apply(this, arguments);
}
function $t(e) {
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
}
function Jg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vo(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sl(n.key), n);
  }
}
function Gg(e, t, r) {
  return t && Vo(e.prototype, t), r && Vo(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Yg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ia(e, t);
}
function ia(e, t) {
  return ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ia(e, t);
}
function Xg(e) {
  var t = tv();
  return function() {
    var n = Wn(e), i;
    if (t) {
      var a = Wn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Zg(this, i);
  };
}
function Zg(e, t) {
  if (t && ($t(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ev(e);
}
function ev(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Wn(e) {
  return Wn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wn(e);
}
function rv(e, t, r) {
  return t = sl(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sl(e) {
  var t = nv(e, "string");
  return $t(t) === "symbol" ? t : String(t);
}
function nv(e, t) {
  if ($t(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($t(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iv = {
  data: {},
  rootTagName: "div",
  useCustomCompileOptions: {},
  templates: {},
  templatesConfig: {}
}, ul = /* @__PURE__ */ function(e) {
  Yg(r, e);
  var t = Xg(r);
  function r() {
    return Jg(this, r), t.apply(this, arguments);
  }
  return Gg(r, [{
    key: "shouldComponentUpdate",
    value: function(i) {
      return !Et(this.props.data, i.data) || this.props.templateKey !== i.templateKey || !Et(this.props.rootProps, i.rootProps);
    }
  }, {
    key: "render",
    value: function() {
      var i = this;
      process.env.NODE_ENV === "development" && X(Object.keys(this.props.templates).every(function(c) {
        return typeof i.props.templates[c] == "function";
      }), `Hogan.js and string-based templates are deprecated and will not be supported in InstantSearch.js 5.x.

You can replace them with function-form templates and use either the provided \`html\` function or JSX templates.

See: https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/#upgrade-templates`);
      var a = this.props.rootTagName, o = this.props.useCustomCompileOptions[this.props.templateKey], s = o ? this.props.templatesConfig.compileOptions : {}, u = zg({
        templates: this.props.templates,
        templateKey: this.props.templateKey,
        compileOptions: s,
        helpers: this.props.templatesConfig.helpers,
        data: this.props.data,
        bindEvent: this.props.bindEvent,
        sendEvent: this.props.sendEvent
      });
      return u === null ? null : $t(u) === "object" ? q(a, this.props.rootProps, u) : q(a, na({}, this.props.rootProps, {
        dangerouslySetInnerHTML: {
          __html: u
        }
      }));
    }
  }]), r;
}(It);
rv(ul, "defaultProps", iv);
const be = ul;
function Lr(e) {
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function Qo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qo(Object(r), !0).forEach(function(n) {
      av(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function av(e, t, r) {
  return t = ov(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ov(e) {
  var t = sv(e, "string");
  return Lr(t) === "symbol" ? t : String(t);
}
function sv(e, t) {
  if (Lr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sr.apply(this, arguments);
}
var uv = function(t) {
  var r = t.hits, n = t.isLoading, i = t.cssClasses, a = t.templateProps;
  return q("div", {
    className: H(i.root, r.length === 0 && i.emptyRoot)
  }, q(be, Sr({}, a, {
    templateKey: "header",
    rootProps: {
      className: i.header
    },
    data: {
      hits: r,
      isLoading: n
    }
  })), n ? q(be, Sr({}, a, {
    templateKey: "loader",
    rootProps: {
      className: i.loader
    }
  })) : q("ul", {
    className: i.list
  }, r.map(function(o, s) {
    return q(be, Sr({}, a, {
      templateKey: "item",
      rootTagName: "li",
      rootProps: {
        className: i.item
      },
      key: o.objectID,
      data: Ko(Ko({}, o), {}, {
        get __hitIndex() {
          return process.env.NODE_ENV === "development" && X(!1, "The `__hitIndex` property is deprecated. Use the absolute `__position` instead."), s;
        }
      })
    }));
  })));
};
const cv = uv;
function Wr(e) {
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function zo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zo(Object(r), !0).forEach(function(n) {
      lv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lv(e, t, r) {
  return t = fv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fv(e) {
  var t = pv(e, "string");
  return Wr(t) === "symbol" ? t : String(t);
}
function pv(e, t) {
  if (Wr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dv(e) {
  return typeof e.findAnswers == "function";
}
var wi = he({
  name: "answers",
  connector: !0
}), hv = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, wi()), function(n) {
    var i = n || {}, a = i.queryLanguages, o = i.attributesForPrediction, s = i.nbHits, u = s === void 0 ? 1 : s, c = i.renderDebounceTime, l = c === void 0 ? 100 : c, p = i.searchDebounceTime, d = p === void 0 ? 100 : p, f = i.escapeHTML, m = f === void 0 ? !0 : f, v = i.extraParameters, h = v === void 0 ? {} : v;
    if (!a || a.length === 0)
      throw new Error(wi("The `queryLanguages` expects an array of strings."));
    var O = mp(), P = [], _ = !1, T = ro(t, l), $;
    return {
      $$type: "ais.answers",
      init: function(A) {
        var w = A.state, R = A.instantSearchInstance, j = R.client.initIndex(w.index);
        if (!dv(j))
          throw new Error(wi("`algoliasearch` >= 4.8.0 required."));
        $ = ro(j.findAnswers, d), t(qe(qe({}, this.getWidgetRenderState(A)), {}, {
          instantSearchInstance: A.instantSearchInstance
        }), !0);
      },
      render: function(A) {
        var w = this, R = A.state.query;
        if (!R) {
          P = [], _ = !1, t(qe(qe({}, this.getWidgetRenderState(A)), {}, {
            instantSearchInstance: A.instantSearchInstance
          }), !1);
          return;
        }
        P = [], _ = !0, t(qe(qe({}, this.getWidgetRenderState(A)), {}, {
          instantSearchInstance: A.instantSearchInstance
        }), !1), O($(R, a, qe(qe({}, h), {}, {
          nbHits: u,
          attributesForPrediction: o
        }))).then(function(j) {
          if (j) {
            m && j.hits.length > 0 && (j.hits = Qu(j.hits));
            var E = ec(j.hits, 0, u), U = tc(E, j.queryID);
            P = U, _ = !1, T(qe(qe({}, w.getWidgetRenderState(A)), {}, {
              instantSearchInstance: A.instantSearchInstance
            }), !1);
          }
        });
      },
      getRenderState: function(A, w) {
        return qe(qe({}, A), {}, {
          answers: this.getWidgetRenderState(w)
        });
      },
      getWidgetRenderState: function() {
        return {
          hits: P,
          isLoading: _,
          widgetParams: n
        };
      },
      dispose: function(A) {
        var w = A.state;
        return r(), w;
      },
      getWidgetSearchParameters: function(A) {
        return A;
      }
    };
  };
};
const mv = hv;
var gv = {
  header: function() {
    return "";
  },
  loader: function() {
    return "";
  },
  item: function(t) {
    return JSON.stringify(t);
  }
};
const vv = gv;
function Mr(e) {
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(e);
}
function Jo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jo(Object(r), !0).forEach(function(n) {
      yv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yv(e, t, r) {
  return t = bv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bv(e) {
  var t = Ov(e, "string");
  return Mr(t) === "symbol" ? t : String(t);
}
function Ov(e, t) {
  if (Mr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sv = he({
  name: "answers"
}), Ft = Ne("Answers"), wv = function(t) {
  var r = t.containerNode, n = t.cssClasses, i = t.renderState, a = t.templates;
  return function(o, s) {
    var u = o.hits, c = o.isLoading, l = o.instantSearchInstance;
    if (s) {
      i.templateProps = Jt({
        defaultTemplates: vv,
        templatesConfig: l.templatesConfig,
        templates: a
      });
      return;
    }
    Ie(q(cv, {
      cssClasses: n,
      hits: u,
      isLoading: c,
      templateProps: i.templateProps
    }), r);
  };
}, Pv = function(t) {
  var r = t || {}, n = r.container, i = r.attributesForPrediction, a = r.queryLanguages, o = r.nbHits, s = r.searchDebounceTime, u = r.renderDebounceTime, c = r.escapeHTML, l = r.extraParameters, p = r.templates, d = p === void 0 ? {} : p, f = r.cssClasses, m = f === void 0 ? {} : f;
  if (!n)
    throw new Error(Sv("The `container` option is required."));
  var v = gt(n), h = {
    root: H(Ft(), m.root),
    emptyRoot: H(Ft({
      modifierName: "empty"
    }), m.emptyRoot),
    header: H(Ft({
      descendantName: "header"
    }), m.header),
    loader: H(Ft({
      descendantName: "loader"
    }), m.loader),
    list: H(Ft({
      descendantName: "list"
    }), m.list),
    item: H(Ft({
      descendantName: "item"
    }), m.item)
  }, O = wv({
    containerNode: v,
    cssClasses: h,
    templates: d,
    renderState: {}
  }), P = mv(O, function() {
    return Ie(null, v);
  });
  return Go(Go({}, P({
    attributesForPrediction: i,
    queryLanguages: a,
    nbHits: o,
    searchDebounceTime: s,
    renderDebounceTime: u,
    escapeHTML: c,
    extraParameters: l
  })), {}, {
    $$widgetType: "ais.answers"
  });
};
const _v = Pv;
function Yo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yo(Object(r), !0).forEach(function(n) {
      jv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jv(e, t, r) {
  return t = Rv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rv(e) {
  var t = Iv(e, "string");
  return Yt(t) === "symbol" ? t : String(t);
}
function Iv(e, t) {
  if (Yt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yt(e) {
  return Yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yt(e);
}
var gn = he({
  name: "dynamic-widgets",
  connector: !0
}), Xo = 20, Ev = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, gn()), function(n) {
    var i = n.widgets, a = n.maxValuesPerFacet, o = a === void 0 ? 20 : a, s = n.facets, u = s === void 0 ? ["*"] : s, c = n.transformItems, l = c === void 0 ? function(f) {
      return f;
    } : c, p = n.fallbackWidget;
    if (!(i && Array.isArray(i) && i.every(function(f) {
      return Yt(f) === "object";
    })))
      throw new Error(gn("The `widgets` option expects an array of widgets."));
    if (!(Array.isArray(u) && u.length <= 1 && (u[0] === "*" || u[0] === void 0)))
      throw new Error(gn('The `facets` option only accepts [] or ["*"], you passed '.concat(JSON.stringify(u))));
    var d = /* @__PURE__ */ new Map();
    return {
      $$type: "ais.dynamicWidgets",
      init: function(m) {
        i.forEach(function(v) {
          var h = Zu(v, m);
          d.set(h, {
            widget: v,
            isMounted: !1
          });
        }), t(Dt(Dt({}, this.getWidgetRenderState(m)), {}, {
          instantSearchInstance: m.instantSearchInstance
        }), !0);
      },
      render: function(m) {
        var v = m.parent, h = this.getWidgetRenderState(m), O = [], P = [];
        p && h.attributesToRender.forEach(function(_) {
          if (!d.has(_)) {
            var T = p({
              attribute: _
            });
            d.set(_, {
              widget: T,
              isMounted: !1
            });
          }
        }), d.forEach(function(_, T) {
          var $ = _.widget, x = _.isMounted, A = h.attributesToRender.indexOf(T) > -1;
          !x && A ? (P.push($), d.set(T, {
            widget: $,
            isMounted: !0
          })) : x && !A && (O.push($), d.set(T, {
            widget: $,
            isMounted: !1
          }));
        }), v.addWidgets(P), setTimeout(function() {
          return v.removeWidgets(O);
        }, 0), t(Dt(Dt({}, h), {}, {
          instantSearchInstance: m.instantSearchInstance
        }), !1);
      },
      dispose: function(m) {
        var v = m.parent, h = [];
        d.forEach(function(O) {
          var P = O.widget, _ = O.isMounted;
          _ && h.push(P);
        }), v.removeWidgets(h), r();
      },
      getWidgetSearchParameters: function(m) {
        return u.reduce(function(v, h) {
          return v.addFacet(h);
        }, m.setQueryParameters({
          maxValuesPerFacet: Math.max(o || 0, m.maxValuesPerFacet || 0)
        }));
      },
      getRenderState: function(m, v) {
        return Dt(Dt({}, m), {}, {
          dynamicWidgets: this.getWidgetRenderState(v)
        });
      },
      getWidgetRenderState: function(m) {
        var v, h, O, P, _ = m.results, T = m.state;
        if (!_)
          return {
            attributesToRender: [],
            widgetParams: n
          };
        var $ = l((v = (h = _.renderingContent) === null || h === void 0 || (O = h.facetOrdering) === null || O === void 0 || (P = O.facets) === null || P === void 0 ? void 0 : P.order) !== null && v !== void 0 ? v : [], {
          results: _
        });
        if (!Array.isArray($))
          throw new Error(gn("The `transformItems` option expects a function that returns an Array."));
        return process.env.NODE_ENV === "development" && X(o >= (T.maxValuesPerFacet || 0), "The maxValuesPerFacet set by dynamic widgets (".concat(o, ") is smaller than one of the limits set by a widget (").concat(T.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted.")), process.env.NODE_ENV === "development" && X($.length <= Xo || n.facets !== void 0, "More than ".concat(Xo, ` facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set "facets" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning.`)), {
          attributesToRender: $,
          widgetParams: n
        };
      }
    };
  };
};
const $v = Ev;
function kr(e) {
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
var xv = ["container", "widgets", "fallbackWidget"];
function Zo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zo(Object(r), !0).forEach(function(n) {
      Tv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tv(e, t, r) {
  return t = Av(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Av(e) {
  var t = Cv(e, "string");
  return kr(t) === "symbol" ? t : String(t);
}
function Cv(e, t) {
  if (kr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nv(e, t) {
  if (e == null)
    return {};
  var r = Fv(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Fv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var es = he({
  name: "dynamic-widgets"
}), cl = Ne("DynamicWidgets");
function ts(e) {
  var t = document.createElement("div");
  return t.className = cl({
    descendantName: "widget"
  }), e.appendChild(t), t;
}
var Dv = function(t) {
  var r = t || {}, n = r.container, i = r.widgets, a = r.fallbackWidget, o = Nv(r, xv);
  if (!n)
    throw new Error(es("The `container` option is required."));
  if (!(i && Array.isArray(i) && i.every(function(f) {
    return typeof f == "function";
  })))
    throw new Error(es("The `widgets` option expects an array of callbacks."));
  var s = gt(n), u = document.createElement("div");
  u.className = cl();
  var c = /* @__PURE__ */ new Map(), l = [], p = $v(function(f, m) {
    var v = f.attributesToRender;
    m && s.appendChild(u), v.forEach(function(h) {
      if (c.has(h)) {
        var O = c.get(h);
        u.appendChild(O);
      }
    });
  }, function() {
    s.removeChild(u);
  }), d = p(vn(vn({}, o), {}, {
    widgets: l,
    fallbackWidget: typeof a == "function" ? function(f) {
      var m = f.attribute, v = ts(u);
      return c.set(m, v), a({
        attribute: m,
        container: v
      });
    } : void 0
  }));
  return vn(vn({}, d), {}, {
    init: function(m) {
      i.forEach(function(v) {
        var h = ts(u), O = v(h), P = Zu(O, m);
        c.set(P, h), l.push(O);
      }), d.init(m);
    },
    $$widgetType: "ais.dynamicWidgets"
  });
};
const ll = Dv;
function aa() {
  return aa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, aa.apply(this, arguments);
}
var Hv = function(t) {
  var r = t.hasRefinements, n = t.refine, i = t.cssClasses, a = t.templateProps;
  return q("div", {
    className: i.root
  }, q(be, aa({}, a, {
    templateKey: "resetLabel",
    rootTagName: "button",
    rootProps: {
      className: H(i.button, !r && i.disabledButton),
      onClick: n,
      disabled: !r
    },
    data: {
      hasRefinements: r
    }
  })));
};
const qv = Hv;
function Ur(e) {
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(e);
}
function Lv(e) {
  return Uv(e) || kv(e) || Mv(e) || Wv();
}
function Wv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mv(e, t) {
  if (e) {
    if (typeof e == "string")
      return oa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return oa(e, t);
  }
}
function kv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Uv(e) {
  if (Array.isArray(e))
    return oa(e);
}
function oa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rs(Object(r), !0).forEach(function(n) {
      Bv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bv(e, t, r) {
  return t = Vv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vv(e) {
  var t = Qv(e, "string");
  return Ur(t) === "symbol" ? t : String(t);
}
function Qv(e, t) {
  if (Ur(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ur(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ns = he({
  name: "clear-refinements",
  connector: !0
}), Kv = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, ns()), function(n) {
    var i = n || {}, a = i.includedAttributes, o = a === void 0 ? [] : a, s = i.excludedAttributes, u = s === void 0 ? ["query"] : s, c = i.transformItems, l = c === void 0 ? function(m) {
      return m;
    } : c;
    if (n && n.includedAttributes && n.excludedAttributes)
      throw new Error(ns("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
    var p = {
      refine: ue,
      createURL: function() {
        return "";
      },
      attributesToClear: []
    }, d = function() {
      return p.refine();
    }, f = function() {
      return p.createURL();
    };
    return {
      $$type: "ais.clearRefinements",
      init: function(v) {
        var h = v.instantSearchInstance;
        t(Ht(Ht({}, this.getWidgetRenderState(v)), {}, {
          instantSearchInstance: h
        }), !0);
      },
      render: function(v) {
        var h = v.instantSearchInstance;
        t(Ht(Ht({}, this.getWidgetRenderState(v)), {}, {
          instantSearchInstance: h
        }), !1);
      },
      dispose: function() {
        r();
      },
      getRenderState: function(v, h) {
        return Ht(Ht({}, v), {}, {
          clearRefinements: this.getWidgetRenderState(h)
        });
      },
      getWidgetRenderState: function(v) {
        var h = v.createURL, O = v.scopedResults, P = v.results;
        p.attributesToClear = O.reduce(function(T, $) {
          return T.concat(zv({
            scopedResult: $,
            includedAttributes: o,
            excludedAttributes: u,
            transformItems: l,
            results: P
          }));
        }, []), p.refine = function() {
          p.attributesToClear.forEach(function(T) {
            var $ = T.helper, x = T.items;
            $.setState(eo({
              helper: $,
              attributesToClear: x
            })).search();
          });
        }, p.createURL = function() {
          return h(rc.apply(void 0, Lv(p.attributesToClear.map(function(T) {
            var $ = T.helper, x = T.items;
            return eo({
              helper: $,
              attributesToClear: x
            });
          }))));
        };
        var _ = p.attributesToClear.some(function(T) {
          return T.items.length > 0;
        });
        return {
          canRefine: _,
          hasRefinements: _,
          refine: d,
          createURL: f,
          widgetParams: n
        };
      }
    };
  };
};
function zv(e) {
  var t = e.scopedResult, r = e.includedAttributes, n = e.excludedAttributes, i = e.transformItems, a = e.results, o = r.indexOf("query") !== -1 || n.indexOf("query") === -1;
  return {
    helper: t.helper,
    items: i(Jn(Xu(t.results, t.helper.state, o).map(function(s) {
      return s.attribute;
    }).filter(function(s) {
      return (
        // If the array is empty (default case), we keep all the attributes
        r.length === 0 || // Otherwise, only add the specified attributes
        r.indexOf(s) !== -1
      );
    }).filter(function(s) {
      return (
        // If the query is included, we ignore the default `excludedAttributes = ['query']`
        s === "query" && o || // Otherwise, ignore the excluded attributes
        n.indexOf(s) === -1
      );
    })), {
      results: a
    })
  };
}
const Jv = Kv;
var Gv = {
  resetLabel: function() {
    return "Clear refinements";
  }
};
const Yv = Gv;
function Br(e) {
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function is(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function as(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? is(Object(r), !0).forEach(function(n) {
      Xv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : is(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xv(e, t, r) {
  return t = Zv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zv(e) {
  var t = ey(e, "string");
  return Br(t) === "symbol" ? t : String(t);
}
function ey(e, t) {
  if (Br(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Br(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ty = he({
  name: "clear-refinements"
}), Pi = Ne("ClearRefinements"), ry = function(t) {
  var r = t.containerNode, n = t.cssClasses, i = t.renderState, a = t.templates;
  return function(o, s) {
    var u = o.refine, c = o.canRefine, l = o.instantSearchInstance;
    if (s) {
      i.templateProps = Jt({
        defaultTemplates: Yv,
        templatesConfig: l.templatesConfig,
        templates: a
      });
      return;
    }
    Ie(q(qv, {
      refine: u,
      cssClasses: n,
      hasRefinements: c,
      templateProps: i.templateProps
    }), r);
  };
}, ny = function(t) {
  var r = t || {}, n = r.container, i = r.templates, a = i === void 0 ? {} : i, o = r.includedAttributes, s = r.excludedAttributes, u = r.transformItems, c = r.cssClasses, l = c === void 0 ? {} : c;
  if (!n)
    throw new Error(ty("The `container` option is required."));
  var p = gt(n), d = {
    root: H(Pi(), l.root),
    button: H(Pi({
      descendantName: "button"
    }), l.button),
    disabledButton: H(Pi({
      descendantName: "button",
      modifierName: "disabled"
    }), l.disabledButton)
  }, f = ry({
    containerNode: p,
    cssClasses: d,
    renderState: {},
    templates: a
  }), m = Jv(f, function() {
    return Ie(null, p);
  });
  return as(as({}, m({
    includedAttributes: o,
    excludedAttributes: s,
    transformItems: u
  })), {}, {
    $$widgetType: "ais.clearRefinements"
  });
};
const iy = ny;
function Xt(e) {
  return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xt(e);
}
function ay(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function os(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fl(n.key), n);
  }
}
function oy(e, t, r) {
  return t && os(e.prototype, t), r && os(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sa(e, t);
}
function sa(e, t) {
  return sa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sa(e, t);
}
function uy(e) {
  var t = ly();
  return function() {
    var n = Mn(e), i;
    if (t) {
      var a = Mn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return cy(this, i);
  };
}
function cy(e, t) {
  if (t && (Xt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ct(e);
}
function ct(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ly() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mn(e) {
  return Mn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mn(e);
}
function lt(e, t, r) {
  return t = fl(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fl(e) {
  var t = fy(e, "string");
  return Xt(t) === "symbol" ? t : String(t);
}
function fy(e, t) {
  if (Xt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var py = {
  query: "",
  showSubmit: !0,
  showReset: !0,
  showLoadingIndicator: !0,
  autofocus: !1,
  searchAsYouType: !0,
  isSearchStalled: !1,
  disabled: !1,
  onChange: ue,
  onSubmit: ue,
  onReset: ue,
  refine: ue
}, pl = /* @__PURE__ */ function(e) {
  sy(r, e);
  var t = uy(r);
  function r() {
    var n;
    ay(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), lt(ct(n), "state", {
      query: n.props.query,
      focused: !1
    }), lt(ct(n), "input", Qc()), lt(ct(n), "onInput", function(s) {
      var u = n.props, c = u.searchAsYouType, l = u.refine, p = u.onChange, d = s.target.value;
      c && l(d), n.setState({
        query: d
      }), p(s);
    }), lt(ct(n), "onSubmit", function(s) {
      var u = n.props, c = u.searchAsYouType, l = u.refine, p = u.onSubmit;
      return s.preventDefault(), s.stopPropagation(), n.input.current && n.input.current.blur(), c || l(n.state.query), p(s), !1;
    }), lt(ct(n), "onReset", function(s) {
      var u = n.props, c = u.refine, l = u.onReset, p = "";
      n.input.current && n.input.current.focus(), c(p), n.setState({
        query: p
      }), l(s);
    }), lt(ct(n), "onBlur", function() {
      n.setState({
        focused: !1
      });
    }), lt(ct(n), "onFocus", function() {
      n.setState({
        focused: !0
      });
    }), n;
  }
  return oy(r, [{
    key: "resetInput",
    value: (
      /**
       * This public method is used in the RefinementList SFFV search box
       * to reset the input state when an item is selected.
       *
       * @see RefinementList#componentWillReceiveProps
       * @return {undefined}
       */
      function() {
        this.setState({
          query: ""
        });
      }
    )
  }, {
    key: "componentWillReceiveProps",
    value: function(i) {
      !this.state.focused && i.query !== this.state.query && this.setState({
        query: i.query
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.cssClasses, o = i.placeholder, s = i.autofocus, u = i.showSubmit, c = i.showReset, l = i.showLoadingIndicator, p = i.templates, d = i.isSearchStalled;
      return q("div", {
        className: a.root
      }, q("form", {
        action: "",
        role: "search",
        className: a.form,
        noValidate: !0,
        onSubmit: this.onSubmit,
        onReset: this.onReset
      }, q("input", {
        ref: this.input,
        value: this.state.query,
        disabled: this.props.disabled,
        className: a.input,
        type: "search",
        placeholder: o,
        autoFocus: s,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: "false",
        maxLength: 512,
        onInput: this.onInput,
        onBlur: this.onBlur,
        onFocus: this.onFocus
      }), q(be, {
        templateKey: "submit",
        rootTagName: "button",
        rootProps: {
          className: a.submit,
          type: "submit",
          title: "Submit the search query.",
          hidden: !u
        },
        templates: p,
        data: {
          cssClasses: a
        }
      }), q(be, {
        templateKey: "reset",
        rootTagName: "button",
        rootProps: {
          className: a.reset,
          type: "reset",
          title: "Clear the search query.",
          hidden: !(c && this.state.query.trim() && !d)
        },
        templates: p,
        data: {
          cssClasses: a
        }
      }), l && q(be, {
        templateKey: "loadingIndicator",
        rootTagName: "span",
        rootProps: {
          className: a.loadingIndicator,
          hidden: !d
        },
        templates: p,
        data: {
          cssClasses: a
        }
      })));
    }
  }]), r;
}(It);
lt(pl, "defaultProps", py);
const dy = pl;
function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ua.apply(this, arguments);
}
function hy(e) {
  var t = e.className, r = e.handleClick, n = e.facetValueToRefine, i = e.isRefined, a = e.templateProps, o = e.templateKey, s = e.templateData, u = e.subItems;
  return q("li", {
    className: t,
    onClick: function(l) {
      r({
        facetValueToRefine: n,
        isRefined: i,
        originalEvent: l
      });
    }
  }, q(be, ua({}, a, {
    templateKey: o,
    data: s
  })), u);
}
var my = ["root"];
function Zt(e) {
  return Zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zt(e);
}
function ss(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ss(Object(r), !0).forEach(function(n) {
      La(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ss(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wr.apply(this, arguments);
}
function gy(e, t) {
  if (e == null)
    return {};
  var r = vy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function yy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dl(n.key), n);
  }
}
function by(e, t, r) {
  return t && cs(e.prototype, t), r && cs(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Oy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ca(e, t);
}
function ca(e, t) {
  return ca = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ca(e, t);
}
function Sy(e) {
  var t = Py();
  return function() {
    var n = kn(e), i;
    if (t) {
      var a = kn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return wy(this, i);
  };
}
function wy(e, t) {
  if (t && (Zt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return la(e);
}
function la(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Py() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kn(e) {
  return kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kn(e);
}
function La(e, t, r) {
  return t = dl(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dl(e) {
  var t = _y(e, "string");
  return Zt(t) === "symbol" ? t : String(t);
}
function _y(e, t) {
  if (Zt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jy = {
  cssClasses: {},
  depth: 0
};
function ls(e) {
  return e.data !== void 0;
}
var hl = /* @__PURE__ */ function(e) {
  Oy(r, e);
  var t = Sy(r);
  function r(n) {
    var i;
    return yy(this, r), i = t.call(this, n), La(la(i), "searchBox", Qc()), i.handleItemClick = i.handleItemClick.bind(la(i)), i;
  }
  return by(r, [{
    key: "shouldComponentUpdate",
    value: function(i) {
      var a = !Et(this.props.facetValues, i.facetValues);
      return a;
    }
  }, {
    key: "refine",
    value: function(i) {
      this.props.toggleRefinement(i);
    }
  }, {
    key: "_generateFacetItem",
    value: function(i) {
      var a;
      if (ls(i) && Array.isArray(i.data) && i.data.length > 0) {
        var o = this.props.cssClasses;
        o.root;
        var s = gy(o, my);
        a = q(r, wr({}, this.props, {
          // We want to keep `root` required for external usage but not for the
          // sub items.
          cssClasses: s,
          depth: this.props.depth + 1,
          facetValues: i.data,
          showMore: !1,
          className: this.props.cssClasses.childList
        }));
      }
      var u = this.props.createURL(i.value), c = us(us({}, i), {}, {
        url: u,
        attribute: this.props.attribute,
        cssClasses: this.props.cssClasses,
        isFromSearch: this.props.isFromSearch
      }), l = i.value;
      i.isRefined !== void 0 && (l += "/".concat(i.isRefined)), i.count !== void 0 && (l += "/".concat(i.count));
      var p = H(this.props.cssClasses.item, i.isRefined && this.props.cssClasses.selectedItem, !i.count && this.props.cssClasses.disabledItem, Boolean(ls(i) && Array.isArray(i.data) && i.data.length > 0) && this.props.cssClasses.parentItem);
      return q(hy, {
        templateKey: "item",
        key: l,
        facetValueToRefine: i.value,
        handleClick: this.handleItemClick,
        isRefined: i.isRefined,
        className: p,
        subItems: a,
        templateData: c,
        templateProps: this.props.templateProps
      });
    }
    // Click events on DOM tree like LABEL > INPUT will result in two click events
    // instead of one.
    // No matter the framework, see https://www.google.com/search?q=click+label+twice
    //
    // Thus making it hard to distinguish activation from deactivation because both click events
    // are very close. Debounce is a solution but hacky.
    //
    // So the code here checks if the click was done on or in a LABEL. If this LABEL
    // has a checkbox inside, we ignore the first click event because we will get another one.
    //
    // We also check if the click was done inside a link and then e.preventDefault() because we already
    // handle the url
    //
    // Finally, we always stop propagation of the event to avoid multiple levels RefinementLists to fail: click
    // on child would click on parent also
  }, {
    key: "handleItemClick",
    value: function(i) {
      var a = i.facetValueToRefine, o = i.isRefined, s = i.originalEvent;
      if (!Np(s) && !(!(s.target instanceof HTMLElement) || !(s.target.parentNode instanceof HTMLElement)) && !(o && s.target.parentNode.querySelector('input[type="radio"]:checked'))) {
        if (s.target.tagName === "INPUT") {
          this.refine(a);
          return;
        }
        for (var u = s.target; u !== s.currentTarget; ) {
          if (u.tagName === "LABEL" && (u.querySelector('input[type="checkbox"]') || u.querySelector('input[type="radio"]')))
            return;
          u.tagName === "A" && u.href && s.preventDefault(), u = u.parentNode;
        }
        s.stopPropagation(), this.refine(a);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function(i) {
      this.searchBox.current && !i.isFromSearch && this.searchBox.current.resetInput();
    }
  }, {
    key: "refineFirstValue",
    value: function() {
      var i = this.props.facetValues && this.props.facetValues[0];
      if (i) {
        var a = i.value;
        this.props.toggleRefinement(a);
      }
    }
  }, {
    key: "render",
    value: function() {
      var i = this, a = H(this.props.cssClasses.showMore, !(this.props.showMore === !0 && this.props.canToggleShowMore) && this.props.cssClasses.disabledShowMore), o = this.props.showMore === !0 && q(be, wr({}, this.props.templateProps, {
        templateKey: "showMoreText",
        rootTagName: "button",
        rootProps: {
          className: a,
          disabled: !this.props.canToggleShowMore,
          onClick: this.props.toggleShowMore
        },
        data: {
          isShowingMore: this.props.isShowingMore
        }
      })), s = this.props.searchIsAlwaysActive !== !0 && !(this.props.isFromSearch || !this.props.hasExhaustiveItems), u = this.props.searchFacetValues && q("div", {
        className: this.props.cssClasses.searchBox
      }, q(dy, {
        ref: this.searchBox,
        placeholder: this.props.searchPlaceholder,
        disabled: s,
        cssClasses: this.props.cssClasses.searchable,
        templates: this.props.searchBoxTemplateProps.templates,
        onChange: function(f) {
          return i.props.searchFacetValues(f.target.value);
        },
        onReset: function() {
          return i.props.searchFacetValues("");
        },
        onSubmit: function() {
          return i.refineFirstValue();
        },
        searchAsYouType: !1
      })), c = this.props.facetValues && this.props.facetValues.length > 0 && q("ul", {
        className: this.props.cssClasses.list
      }, this.props.facetValues.map(this._generateFacetItem, this)), l = this.props.searchFacetValues && this.props.isFromSearch && (!this.props.facetValues || this.props.facetValues.length === 0) && q(be, wr({}, this.props.templateProps, {
        templateKey: "searchableNoResults",
        rootProps: {
          className: this.props.cssClasses.noResults
        }
      })), p = H(this.props.cssClasses.root, (!this.props.facetValues || this.props.facetValues.length === 0) && this.props.cssClasses.noRefinementRoot, this.props.className);
      return q("div", {
        className: p
      }, this.props.children, u, c, l, o);
    }
  }]), r;
}(It);
La(hl, "defaultProps", jy);
const Ry = hl;
function Vr(e) {
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function fs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fs(Object(r), !0).forEach(function(n) {
      Iy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Iy(e, t, r) {
  return t = Ey(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ey(e) {
  var t = $y(e, "string");
  return Vr(t) === "symbol" ? t : String(t);
}
function $y(e, t) {
  if (Vr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Un.apply(this, arguments);
}
var xy = function(t) {
  var r = t.results, n = t.hits, i = t.bindEvent, a = t.sendEvent, o = t.cssClasses, s = t.templateProps;
  return r.hits.length === 0 ? q(be, Un({}, s, {
    templateKey: "empty",
    rootProps: {
      className: H(o.root, o.emptyRoot)
    },
    data: r
  })) : q("div", {
    className: o.root
  }, q("ol", {
    className: o.list
  }, n.map(function(u, c) {
    return q(be, Un({}, s, {
      templateKey: "item",
      rootTagName: "li",
      rootProps: {
        className: o.item
      },
      key: u.objectID,
      data: ps(ps({}, u), {}, {
        get __hitIndex() {
          return process.env.NODE_ENV === "development" && X(!1, "The `__hitIndex` property is deprecated. Use the absolute `__position` instead."), c;
        }
      }),
      bindEvent: i,
      sendEvent: a
    }));
  })));
};
const Ty = xy;
function Qr(e) {
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function ds(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ds(Object(r), !0).forEach(function(n) {
      ml(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ds(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ml(e, t, r) {
  return t = Ay(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ay(e) {
  var t = Cy(e, "string");
  return Qr(t) === "symbol" ? t : String(t);
}
function Cy(e, t) {
  if (Qr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ny = he({
  name: "hits",
  connector: !0
}), Fy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, Ny()), function(n) {
    var i = n || {}, a = i.escapeHTML, o = a === void 0 ? !0 : a, s = i.transformItems, u = s === void 0 ? function(p) {
      return p;
    } : s, c, l;
    return {
      $$type: "ais.hits",
      init: function(d) {
        t(it(it({}, this.getWidgetRenderState(d)), {}, {
          instantSearchInstance: d.instantSearchInstance
        }), !0);
      },
      render: function(d) {
        var f = this.getWidgetRenderState(d);
        t(it(it({}, f), {}, {
          instantSearchInstance: d.instantSearchInstance
        }), !1), f.sendEvent("view", f.hits);
      },
      getRenderState: function(d, f) {
        return it(it({}, d), {}, {
          hits: this.getWidgetRenderState(f)
        });
      },
      getWidgetRenderState: function(d) {
        var f = d.results, m = d.helper, v = d.instantSearchInstance;
        if (c || (c = bp({
          instantSearchInstance: v,
          index: m.getIndex(),
          widgetType: this.$$type
        })), l || (l = Op({
          index: m.getIndex(),
          widgetType: this.$$type,
          instantSearchInstance: v
        })), !f)
          return {
            hits: [],
            results: void 0,
            sendEvent: c,
            bindEvent: l,
            widgetParams: n
          };
        o && f.hits.length > 0 && (f.hits = Qu(f.hits));
        var h = ec(f.hits, f.page, f.hitsPerPage), O = tc(h, f.queryID), P = u(O, {
          results: f
        });
        return {
          hits: P,
          results: f,
          sendEvent: c,
          bindEvent: l,
          widgetParams: n
        };
      },
      dispose: function(d) {
        var f = d.state;
        return r(), o ? f.setQueryParameters(Object.keys(Vt).reduce(function(m, v) {
          return it(it({}, m), {}, ml({}, v, void 0));
        }, {})) : f;
      },
      getWidgetSearchParameters: function(d) {
        return o ? d.setQueryParameters(Vt) : d;
      }
    };
  };
};
const Dy = Fy;
function Kr(e) {
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function hs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hs(Object(r), !0).forEach(function(n) {
      Hy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hy(e, t, r) {
  return t = qy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qy(e) {
  var t = Ly(e, "string");
  return Kr(t) === "symbol" ? t : String(t);
}
function Ly(e, t) {
  if (Kr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Kr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wy = function(t, r) {
  return r.map(function(n) {
    var i = Fi(t, function(a) {
      return a.objectID === n;
    });
    if (typeof i > "u")
      throw new Error('Could not find objectID "'.concat(n, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
    return i;
  });
}, My = function(t) {
  var r = Jn(t.map(function(i) {
    return i.__queryID;
  }));
  if (r.length > 1)
    throw new Error("Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.");
  var n = r[0];
  if (typeof n != "string")
    throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
  return n;
}, ky = function(t) {
  return t.map(function(r) {
    return r.__position;
  });
}, Uy = function(t) {
  var r = t.method, n = t.results, i = t.hits, a = t.objectIDs, o = n.index, s = Wy(i, a), u = My(s);
  switch (r) {
    case "clickedObjectIDsAfterSearch": {
      var c = ky(s);
      return {
        index: o,
        queryID: u,
        objectIDs: a,
        positions: c
      };
    }
    case "convertedObjectIDsAfterSearch":
      return {
        index: o,
        queryID: u,
        objectIDs: a
      };
    default:
      throw new Error('Unsupported method passed to insights: "'.concat(r, '".'));
  }
}, By = function(t, r, n) {
  return function(i) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
      o[s - 1] = arguments[s];
    var u = o[0];
    if (process.env.NODE_ENV === "development" && X(!1, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), !t) {
      var c = he({
        name: "instantsearch"
      });
      throw new Error(c("The `insightsClient` option has not been provided to `instantsearch`."));
    }
    if (!Array.isArray(u.objectIDs))
      throw new TypeError("Expected `objectIDs` to be an array.");
    var l = Uy({
      method: i,
      results: r,
      hits: n,
      objectIDs: u.objectIDs
    });
    t(i, Bn(Bn({}, l), u));
  };
};
function Vy(e) {
  return function(t, r) {
    return e(function(n, i) {
      var a = n.results, o = n.hits, s = n.instantSearchInstance;
      if (a && o && s) {
        var u = By(s.insightsClient, a, o);
        return t(Bn(Bn({}, n), {}, {
          insights: u
        }), i);
      }
      return t(n, i);
    }, r);
  };
}
var ms = function(t, r, n) {
  for (var i = t; i && !n(i); ) {
    if (i === r)
      return null;
    i = i.parentElement;
  }
  return i;
}, Qy = function(t) {
  var r = t.getAttribute("data-insights-event");
  if (typeof r != "string")
    throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");
  try {
    return Ju(r);
  } catch {
    throw new Error("The insights middleware was unable to parse `data-insights-event`.");
  }
}, Ky = function(t) {
  function r(n) {
    var i = function(o) {
      if (n.sendEvent) {
        var s = ms(o.target, o.currentTarget, function(f) {
          return f.hasAttribute("data-insights-event");
        });
        if (s) {
          var u = Qy(s);
          u.forEach(function(f) {
            return n.sendEvent(f);
          });
        }
      }
      var c = ms(o.target, o.currentTarget, function(f) {
        return ud(f);
      });
      if (c) {
        var l = sd(c), p = l.method, d = l.payload;
        n.insights(p, d);
      }
    };
    return q("div", {
      onClick: i
    }, q(t, n));
  }
  return r;
};
const zy = Ky;
var Jy = {
  empty: function() {
    return "No results";
  },
  item: function(t) {
    return JSON.stringify(Xp(t, ["__hitIndex"]), null, 2);
  }
};
const Gy = Jy;
function zr(e) {
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function gs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gs(Object(r), !0).forEach(function(n) {
      Yy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yy(e, t, r) {
  return t = Xy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xy(e) {
  var t = Zy(e, "string");
  return zr(t) === "symbol" ? t : String(t);
}
function Zy(e, t) {
  if (zr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eb = he({
  name: "hits"
}), yn = Ne("Hits"), tb = zy(Ty), rb = function(t) {
  var r = t.renderState, n = t.cssClasses, i = t.containerNode, a = t.templates;
  return function(o, s) {
    var u = o.hits, c = o.results, l = o.instantSearchInstance, p = o.insights, d = o.bindEvent, f = o.sendEvent;
    if (s) {
      r.templateProps = Jt({
        defaultTemplates: Gy,
        templatesConfig: l.templatesConfig,
        templates: a
      });
      return;
    }
    Ie(q(tb, {
      cssClasses: n,
      hits: u,
      results: c,
      templateProps: r.templateProps,
      insights: p,
      sendEvent: f,
      bindEvent: d
    }), i);
  };
}, nb = function(t) {
  var r = t || {}, n = r.container, i = r.escapeHTML, a = r.transformItems, o = r.templates, s = o === void 0 ? {} : o, u = r.cssClasses, c = u === void 0 ? {} : u;
  if (!n)
    throw new Error(eb("The `container` option is required."));
  var l = gt(n), p = {
    root: H(yn(), c.root),
    emptyRoot: H(yn({
      modifierName: "empty"
    }), c.emptyRoot),
    list: H(yn({
      descendantName: "list"
    }), c.list),
    item: H(yn({
      descendantName: "item"
    }), c.item)
  }, d = rb({
    containerNode: l,
    cssClasses: p,
    renderState: {},
    templates: s
  }), f = Vy(Dy)(d, function() {
    return Ie(null, l);
  });
  return vs(vs({}, f({
    escapeHTML: i,
    transformItems: a
  })), {}, {
    $$widgetType: "ais.hits"
  });
};
const ib = nb;
var ri, le, _i, ys, Vn = 0, gl = [], En = [], bs = Q.__b, Os = Q.__r, Ss = Q.diffed, ws = Q.__c, Ps = Q.unmount;
function Wa(e, t) {
  Q.__h && Q.__h(le, e, Vn || t), Vn = 0;
  var r = le.__H || (le.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: En }), r.__[e];
}
function _s(e) {
  return Vn = 1, ab(yl, e);
}
function ab(e, t, r) {
  var n = Wa(ri++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : yl(void 0, t), function(s) {
    var u = n.__N ? n.__N[0] : n.__[0], c = n.t(u, s);
    u !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = le, !le.u)) {
    var i = function(s, u, c) {
      if (!n.__c.__H)
        return !0;
      var l = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (l.every(function(d) {
        return !d.__N;
      }))
        return !a || a.call(this, s, u, c);
      var p = !1;
      return l.forEach(function(d) {
        if (d.__N) {
          var f = d.__[0];
          d.__ = d.__N, d.__N = void 0, f !== d.__[0] && (p = !0);
        }
      }), !(!p && n.__c.props === s) && (!a || a.call(this, s, u, c));
    };
    le.u = !0;
    var a = le.shouldComponentUpdate, o = le.componentWillUpdate;
    le.componentWillUpdate = function(s, u, c) {
      if (this.__e) {
        var l = a;
        a = void 0, i(s, u, c), a = l;
      }
      o && o.call(this, s, u, c);
    }, le.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function ob(e, t) {
  var r = Wa(ri++, 3);
  !Q.__s && vl(r.__H, t) && (r.__ = e, r.i = t, le.__H.__h.push(r));
}
function sb(e) {
  return Vn = 5, ub(function() {
    return { current: e };
  }, []);
}
function ub(e, t) {
  var r = Wa(ri++, 7);
  return vl(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__;
}
function cb() {
  for (var e; e = gl.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach($n), e.__H.__h.forEach(fa), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Q.__e(t, e.__v);
      }
}
Q.__b = function(e) {
  le = null, bs && bs(e);
}, Q.__r = function(e) {
  Os && Os(e), ri = 0;
  var t = (le = e.__c).__H;
  t && (_i === le ? (t.__h = [], le.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = En, r.__N = r.i = void 0;
  })) : (t.__h.forEach($n), t.__h.forEach(fa), t.__h = [])), _i = le;
}, Q.diffed = function(e) {
  Ss && Ss(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (gl.push(t) !== 1 && ys === Q.requestAnimationFrame || ((ys = Q.requestAnimationFrame) || lb)(cb)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== En && (r.__ = r.__V), r.i = void 0, r.__V = En;
  })), _i = le = null;
}, Q.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach($n), r.__h = r.__h.filter(function(n) {
        return !n.__ || fa(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], Q.__e(n, r.__v);
    }
  }), ws && ws(e, t);
}, Q.unmount = function(e) {
  Ps && Ps(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      $n(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && Q.__e(t, r.__v));
};
var js = typeof requestAnimationFrame == "function";
function lb(e) {
  var t, r = function() {
    clearTimeout(n), js && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  js && (t = requestAnimationFrame(r));
}
function $n(e) {
  var t = le, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), le = t;
}
function fa(e) {
  var t = le;
  e.__c = e.__(), le = t;
}
function vl(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function yl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rs(e, t) {
  return hb(e) || db(e, t) || pb(e, t) || fb();
}
function fb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pb(e, t) {
  if (e) {
    if (typeof e == "string")
      return Is(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Is(e, t);
  }
}
function Is(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function db(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0)
          ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (c)
          throw i;
      }
    }
    return s;
  }
}
function hb(e) {
  if (Array.isArray(e))
    return e;
}
function mb(e) {
  var t = _s(e.isCollapsed), r = Rs(t, 2), n = r[0], i = r[1], a = _s(!1), o = Rs(a, 2), s = o[0], u = o[1], c = sb(null);
  return ob(function() {
    var l = c.current;
    if (l)
      return l.appendChild(e.bodyElement), function() {
        l.removeChild(e.bodyElement);
      };
  }, [c, e.bodyElement]), !s && e.isCollapsed !== n && i(e.isCollapsed), q("div", {
    className: H(e.cssClasses.root, e.hidden && e.cssClasses.noRefinementRoot, e.collapsible && e.cssClasses.collapsibleRoot, n && e.cssClasses.collapsedRoot),
    hidden: e.hidden
  }, e.templates.header && q("div", {
    className: e.cssClasses.header
  }, q(be, {
    templates: e.templates,
    templateKey: "header",
    rootTagName: "span",
    data: e.data
  }), e.collapsible && q("button", {
    className: e.cssClasses.collapseButton,
    "aria-expanded": !n,
    onClick: function(p) {
      p.preventDefault(), u(!0), i(function(d) {
        return !d;
      });
    }
  }, q(be, {
    templates: e.templates,
    templateKey: "collapseButtonText",
    rootTagName: "span",
    data: {
      collapsed: n
    }
  }))), q("div", {
    className: e.cssClasses.body,
    ref: c
  }), e.templates.footer && q(be, {
    templates: e.templates,
    templateKey: "footer",
    rootProps: {
      className: e.cssClasses.footer
    },
    data: e.data
  }));
}
function Jr(e) {
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function Es(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Es(Object(r), !0).forEach(function(n) {
      gb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Es(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gb(e, t, r) {
  return t = vb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vb(e) {
  var t = yb(e, "string");
  return Jr(t) === "symbol" ? t : String(t);
}
function yb(e, t) {
  if (Jr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bb = he({
  name: "panel"
}), Xe = Ne("Panel"), Ob = function(t) {
  var r = t.containerNode, n = t.bodyContainerNode, i = t.cssClasses, a = t.templates;
  return function(o) {
    var s = o.options, u = o.hidden, c = o.collapsible, l = o.collapsed;
    Ie(q(mb, {
      cssClasses: i,
      hidden: u,
      collapsible: c,
      isCollapsed: l,
      templates: a,
      data: s,
      bodyElement: n
    }), r);
  };
}, Sb = function(t) {
  var r = t || {}, n = r.templates, i = n === void 0 ? {} : n, a = r.hidden, o = a === void 0 ? function() {
    return !1;
  } : a, s = r.collapsed, u = r.cssClasses, c = u === void 0 ? {} : u;
  process.env.NODE_ENV === "development" && X(typeof o == "function", 'The `hidden` option in the "panel" widget expects a function returning a boolean (received type '.concat($i(o), ").")), process.env.NODE_ENV === "development" && X(typeof s > "u" || typeof s == "function", 'The `collapsed` option in the "panel" widget expects a function returning a boolean (received type '.concat($i(s), ")."));
  var l = document.createElement("div"), p = Boolean(s), d = typeof s == "function" ? s : function() {
    return !1;
  }, f = {
    root: H(Xe(), c.root),
    noRefinementRoot: H(Xe({
      modifierName: "noRefinement"
    }), c.noRefinementRoot),
    collapsibleRoot: H(Xe({
      modifierName: "collapsible"
    }), c.collapsibleRoot),
    collapsedRoot: H(Xe({
      modifierName: "collapsed"
    }), c.collapsedRoot),
    collapseButton: H(Xe({
      descendantName: "collapseButton"
    }), c.collapseButton),
    collapseIcon: H(Xe({
      descendantName: "collapseIcon"
    }), c.collapseIcon),
    body: H(Xe({
      descendantName: "body"
    }), c.body),
    header: H(Xe({
      descendantName: "header"
    }), c.header),
    footer: H(Xe({
      descendantName: "footer"
    }), c.footer)
  };
  return function(m) {
    return function(v) {
      if (!(v && v.container))
        throw new Error(bb("The `container` option is required in the widget within the panel."));
      var h = gt(v.container), O = {
        header: "",
        footer: "",
        collapseButtonText: function($) {
          var x = $.collapsed;
          return `<svg
          class="`.concat(f.collapseIcon, `"
          width="1em"
          height="1em"
          viewBox="0 0 500 500"
        >
        <path d="`).concat(x ? "M100 250l300-150v300z" : "M250 400l150-300H100z", `" fill="currentColor" />
        </svg>`);
        }
      }, P = Ob({
        containerNode: h,
        bodyContainerNode: l,
        cssClasses: f,
        templates: ze(ze({}, O), i)
      }), _ = m(ze(ze({}, v), {}, {
        container: l
      }));
      return ze(ze({}, _), {}, {
        init: function() {
          for (var $ = arguments.length, x = new Array($), A = 0; A < $; A++)
            x[A] = arguments[A];
          var w = x[0], R = ze(ze({}, _.getWidgetRenderState ? _.getWidgetRenderState(w) : {}), w);
          if (P({
            options: R,
            hidden: !0,
            collapsible: p,
            collapsed: !1
          }), typeof _.init == "function") {
            var j;
            (j = _.init).call.apply(j, [this].concat(x));
          }
        },
        render: function() {
          for (var $ = arguments.length, x = new Array($), A = 0; A < $; A++)
            x[A] = arguments[A];
          var w = x[0], R = ze(ze({}, _.getWidgetRenderState ? _.getWidgetRenderState(w) : {}), w);
          if (P({
            options: R,
            hidden: Boolean(o(R)),
            collapsible: p,
            collapsed: Boolean(d(R))
          }), typeof _.render == "function") {
            var j;
            (j = _.render).call.apply(j, [this].concat(x));
          }
        },
        dispose: function() {
          if (Ie(null, h), typeof _.dispose == "function") {
            for (var $, x = arguments.length, A = new Array(x), w = 0; w < x; w++)
              A[w] = arguments[w];
            return ($ = _.dispose).call.apply($, [this].concat(A));
          }
        }
      });
    };
  };
};
const at = Sb;
function Gr(e) {
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function $s(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $s(Object(r), !0).forEach(function(n) {
      wb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $s(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wb(e, t, r) {
  return t = Pb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pb(e) {
  var t = _b(e, "string");
  return Gr(t) === "symbol" ? t : String(t);
}
function _b(e, t) {
  if (Gr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qn(e) {
  return Eb(e) || Ib(e) || Rb(e) || jb();
}
function jb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rb(e, t) {
  if (e) {
    if (typeof e == "string")
      return pa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pa(e, t);
  }
}
function Ib(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Eb(e) {
  if (Array.isArray(e))
    return pa(e);
}
function pa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var xs = he({
  name: "query-rules",
  connector: !0
});
function $b(e) {
  return [e.disjunctiveFacetsRefinements, e.facetsRefinements, e.hierarchicalFacetsRefinements, e.numericRefinements].some(function(t) {
    return Boolean(t && Object.keys(t).length > 0);
  });
}
function xb(e) {
  return e.replace(/[^a-z0-9-_]+/gi, "_");
}
function Tb(e) {
  var t = e.helper, r = e.sharedHelperState, n = e.trackedFilters, i = Object.keys(n).reduce(function(a, o) {
    var s = Xu(t.lastResults || {}, r, !0).filter(function(l) {
      return l.attribute === o;
    }).map(function(l) {
      return l.numericValue || l.name;
    }), u = n[o], c = u(s);
    return [].concat(Qn(a), Qn(s.filter(function(l) {
      return c.includes(l);
    }).map(function(l) {
      return xb("ais-".concat(o, "-").concat(l));
    })));
  }, []);
  return i;
}
function Ab(e) {
  var t = this.helper, r = this.initialRuleContexts, n = this.trackedFilters, i = this.transformRuleContexts, a = e.state, o = a.ruleContexts || [], s = Tb({
    helper: t,
    sharedHelperState: a,
    trackedFilters: n
  }), u = [].concat(Qn(r), Qn(s));
  process.env.NODE_ENV === "development" && X(u.length <= 10, "\nThe maximum number of `ruleContexts` is 10. They have been sliced to that limit.\nConsider using `transformRuleContexts` to minimize the number of rules sent to Algolia.\n");
  var c = i(u).slice(0, 10);
  Et(o, c) || t.overrideStateWithoutTriggeringChangeEvent(ft(ft({}, a), {}, {
    ruleContexts: c
  }));
}
var Cb = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, xs()), function(n) {
    var i = n || {}, a = i.trackedFilters, o = a === void 0 ? {} : a, s = i.transformRuleContexts, u = s === void 0 ? function(m) {
      return m;
    } : s, c = i.transformItems, l = c === void 0 ? function(m) {
      return m;
    } : c;
    Object.keys(o).forEach(function(m) {
      if (typeof o[m] != "function")
        throw new Error(xs(`'The "`.concat(m, '" filter value in the `trackedFilters` option expects a function.')));
    });
    var p = Object.keys(o).length > 0, d = [], f;
    return {
      $$type: "ais.queryRules",
      init: function(v) {
        var h = v.helper, O = v.state, P = v.instantSearchInstance;
        d = O.ruleContexts || [], f = Ab.bind({
          helper: h,
          initialRuleContexts: d,
          trackedFilters: o,
          transformRuleContexts: u
        }), p && (($b(O) || Boolean(n.transformRuleContexts)) && f({
          state: O
        }), h.on("change", f)), t(ft(ft({}, this.getWidgetRenderState(v)), {}, {
          instantSearchInstance: P
        }), !0);
      },
      render: function(v) {
        var h = v.instantSearchInstance;
        t(ft(ft({}, this.getWidgetRenderState(v)), {}, {
          instantSearchInstance: h
        }), !1);
      },
      getWidgetRenderState: function(v) {
        var h = v.results, O = h || {}, P = O.userData, _ = P === void 0 ? [] : P, T = l(_, {
          results: h
        });
        return {
          items: T,
          widgetParams: n
        };
      },
      getRenderState: function(v, h) {
        return ft(ft({}, v), {}, {
          queryRules: this.getWidgetRenderState(h)
        });
      },
      dispose: function(v) {
        var h = v.helper, O = v.state;
        return r(), p ? (h.removeListener("change", f), O.setQueryParameter("ruleContexts", d)) : O;
      }
    };
  };
};
const Nb = Cb;
var Fb = function(t) {
  var r = t.cssClasses, n = t.templates, i = t.items;
  return q(be, {
    templateKey: "default",
    templates: n,
    rootProps: {
      className: r.root
    },
    data: {
      items: i
    }
  });
};
const Db = Fb;
function Yr(e) {
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(e);
}
function Ts(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ts(Object(r), !0).forEach(function(n) {
      Hb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ts(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hb(e, t, r) {
  return t = qb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qb(e) {
  var t = Lb(e, "string");
  return Yr(t) === "symbol" ? t : String(t);
}
function Lb(e, t) {
  if (Yr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wb = {
  default: function(t) {
    var r = t.items;
    return JSON.stringify(r, null, 2);
  }
}, Mb = he({
  name: "query-rule-custom-data"
}), kb = Ne("QueryRuleCustomData"), Ub = function(t) {
  var r = t.containerNode, n = t.cssClasses, i = t.templates;
  return function(a) {
    var o = a.items;
    Ie(q(Db, {
      cssClasses: n,
      templates: i,
      items: o
    }), r);
  };
}, Bb = function(t) {
  var r = t || {}, n = r.container, i = r.cssClasses, a = i === void 0 ? {} : i, o = r.templates, s = o === void 0 ? {} : o, u = r.transformItems, c = u === void 0 ? function(v) {
    return v;
  } : u;
  if (!n)
    throw new Error(Mb("The `container` option is required."));
  var l = {
    root: H(kb(), a.root)
  }, p = gt(n), d = bn(bn({}, Wb), s), f = Ub({
    containerNode: p,
    cssClasses: l,
    renderState: {},
    templates: d
  }), m = Nb(f, function() {
    Ie(null, p);
  });
  return bn(bn({}, m({
    transformItems: c
  })), {}, {
    $$widgetType: "ais.queryRuleCustomData"
  });
};
const Vb = Bb;
function Xr(e) {
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
var Qb = ["name", "escapedValue"], Kb = ["escapedValue", "value"];
function As(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? As(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : As(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gr(e, t, r) {
  return t = zb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zb(e) {
  var t = Jb(e, "string");
  return Xr(t) === "symbol" ? t : String(t);
}
function Jb(e, t) {
  if (Xr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cs(e, t) {
  if (e == null)
    return {};
  var r = Gb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Gb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var On = he({
  name: "refinement-list",
  connector: !0
}), Ns = ["isRefined", "count:desc", "name:asc"], Yb = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, On()), function(n) {
    var i = n || {}, a = i.attribute, o = i.operator, s = o === void 0 ? "or" : o, u = i.limit, c = u === void 0 ? 10 : u, l = i.showMore, p = l === void 0 ? !1 : l, d = i.showMoreLimit, f = d === void 0 ? 20 : d, m = i.sortBy, v = m === void 0 ? Ns : m, h = i.escapeFacetValues, O = h === void 0 ? !0 : h, P = i.transformItems, _ = P === void 0 ? function(oe) {
      return oe;
    } : P;
    if (!a)
      throw new Error(On("The `attribute` option is required."));
    if (!/^(and|or)$/.test(s))
      throw new Error(On('The `operator` must one of: `"and"`, `"or"` (got "'.concat(s, '").')));
    if (p === !0 && f <= c)
      throw new Error(On("`showMoreLimit` should be greater than `limit`."));
    var T = function(k) {
      var B = k.name, Z = k.escapedValue, K = Cs(k, Qb);
      return re(re({}, K), {}, {
        value: Z,
        label: B,
        highlighted: B
      });
    }, $, x = [], A = !0, w, R, j = !1, E = function() {
    };
    function U() {
      E();
    }
    function ee(oe, k) {
      return function() {
        j = !j, k.render(oe);
      };
    }
    function je() {
      return j ? f : c;
    }
    var G = function() {
      return function() {
      };
    }, Le = function(k, B) {
      return function(Z) {
        return function(K) {
          var Te = Z.instantSearchInstance, ge = Z.results;
          if (K === "" && x)
            t(re(re({}, B.getWidgetRenderState(re(re({}, Z), {}, {
              results: $
            }))), {}, {
              instantSearchInstance: Te
            }), !1);
          else {
            var fe = {
              highlightPreTag: O ? Vt.highlightPreTag : Pe.highlightPreTag,
              highlightPostTag: O ? Vt.highlightPostTag : Pe.highlightPostTag
            };
            k.searchForFacetValues(
              a,
              K,
              // We cap the `maxFacetHits` value to 100 because the Algolia API
              // doesn't support a greater number.
              // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
              Math.min(je(), 100),
              fe
            ).then(function(Ee) {
              var We = O ? hp(Ee.facetHits) : Ee.facetHits, Fe = _(We.map(function(Oe) {
                var me = Oe.escapedValue, de = Oe.value, Re = Cs(Oe, Kb);
                return re(re({}, Re), {}, {
                  value: me,
                  label: de
                });
              }), {
                results: ge
              });
              t(re(re({}, B.getWidgetRenderState(re(re({}, Z), {}, {
                results: $
              }))), {}, {
                items: Fe,
                canToggleShowMore: !1,
                canRefine: !0,
                isFromSearch: !0,
                instantSearchInstance: Te
              }), !1);
            });
          }
        };
      };
    };
    return {
      $$type: "ais.refinementList",
      init: function(k) {
        t(re(re({}, this.getWidgetRenderState(k)), {}, {
          instantSearchInstance: k.instantSearchInstance
        }), !0);
      },
      render: function(k) {
        t(re(re({}, this.getWidgetRenderState(k)), {}, {
          instantSearchInstance: k.instantSearchInstance
        }), !1);
      },
      getRenderState: function(k, B) {
        return re(re({}, k), {}, {
          refinementList: re(re({}, k.refinementList), {}, gr({}, a, this.getWidgetRenderState(B)))
        });
      },
      getWidgetRenderState: function(k) {
        var B = k.results, Z = k.state, K = k.createURL, Te = k.instantSearchInstance, ge = k.helper, fe = [], Ee = [];
        if ((!R || !w || !G) && (R = vp({
          instantSearchInstance: Te,
          helper: ge,
          attribute: a,
          widgetType: this.$$type
        }), w = function(Tt) {
          R("click", Tt), ge.toggleFacetRefinement(a, Tt).search();
        }, G = Le(ge, this)), B) {
          var We = B.getFacetValues(a, {
            sortBy: v,
            facetOrdering: v === Ns
          });
          Ee = We && Array.isArray(We) ? We : [], fe = _(Ee.slice(0, je()).map(T), {
            results: B
          });
          var Fe = Z.maxValuesPerFacet, Oe = je();
          A = Fe > Oe ? Ee.length <= Oe : Ee.length < Oe, $ = B, x = fe, k.results && (E = ee(k, this));
        }
        var me = G && G(k), de = j && x.length > c, Re = p && !A, Ve = de || Re;
        return {
          createURL: function(Tt) {
            return K(Z.resetPage().toggleFacetRefinement(a, Tt));
          },
          items: fe,
          refine: w,
          searchForItems: me,
          isFromSearch: !1,
          canRefine: fe.length > 0,
          widgetParams: n,
          isShowingMore: j,
          canToggleShowMore: Ve,
          toggleShowMore: U,
          sendEvent: R,
          hasExhaustiveItems: A
        };
      },
      dispose: function(k) {
        var B = k.state;
        r();
        var Z = B.setQueryParameter("maxValuesPerFacet", void 0);
        return s === "and" ? Z.removeFacet(a) : Z.removeDisjunctiveFacet(a);
      },
      getWidgetUiState: function(k, B) {
        var Z = B.searchParameters, K = s === "or" ? Z.getDisjunctiveRefinements(a) : Z.getConjunctiveRefinements(a);
        return K.length ? re(re({}, k), {}, {
          refinementList: re(re({}, k.refinementList), {}, gr({}, a, K))
        }) : k;
      },
      getWidgetSearchParameters: function(k, B) {
        var Z = B.uiState, K = s === "or", Te = Z.refinementList && Z.refinementList[a], ge = k.clearRefinements(a), fe = K ? ge.addDisjunctiveFacet(a) : ge.addFacet(a), Ee = fe.maxValuesPerFacet || 0, We = Math.max(Ee, p ? f : c), Fe = fe.setQueryParameter("maxValuesPerFacet", We);
        if (!Te) {
          var Oe = K ? "disjunctiveFacetsRefinements" : "facetsRefinements";
          return Fe.setQueryParameters(gr({}, Oe, re(re({}, Fe[Oe]), {}, gr({}, a, []))));
        }
        return Te.reduce(function(me, de) {
          return K ? me.addDisjunctiveFacetRefinement(a, de) : me.addFacetRefinement(a, de);
        }, Fe);
      }
    };
  };
};
const Xb = Yb;
var Zb = q("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
}), eO = q("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
}), tO = q("g", {
  fill: "none",
  fillRule: "evenodd"
}, q("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, q("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), q("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, q("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
})))), rO = {
  reset: function(t) {
    var r = t.cssClasses;
    return q("svg", {
      className: r.resetIcon,
      viewBox: "0 0 20 20",
      width: "10",
      height: "10"
    }, Zb);
  },
  submit: function(t) {
    var r = t.cssClasses;
    return q("svg", {
      className: r.submitIcon,
      width: "10",
      height: "10",
      viewBox: "0 0 40 40"
    }, eO);
  },
  loadingIndicator: function(t) {
    var r = t.cssClasses;
    return q("svg", {
      className: r.loadingIcon,
      width: "16",
      height: "16",
      viewBox: "0 0 38 38",
      stroke: "#444"
    }, tO);
  }
};
const nO = rO;
var iO = {
  item: function(t) {
    var r = t.cssClasses, n = t.count, i = t.value, a = t.highlighted, o = t.isRefined, s = t.isFromSearch;
    return q("label", {
      className: H(r.label)
    }, q("input", {
      type: "checkbox",
      className: H(r.checkbox),
      value: i,
      defaultChecked: o
    }), q("span", {
      className: H(r.labelText),
      dangerouslySetInnerHTML: s ? {
        __html: a
      } : void 0
    }, !s && a), q("span", {
      className: H(r.count)
    }, Cr(n)));
  },
  showMoreText: function(t) {
    var r = t.isShowingMore;
    return r ? "Show less" : "Show more";
  },
  searchableNoResults: function() {
    return "No results";
  }
};
const aO = iO;
function Zr(e) {
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
}
function Fs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fs(Object(r), !0).forEach(function(n) {
      oO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oO(e, t, r) {
  return t = sO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sO(e) {
  var t = uO(e, "string");
  return Zr(t) === "symbol" ? t : String(t);
}
function uO(e, t) {
  if (Zr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cO = he({
  name: "refinement-list"
}), Ae = Ne("RefinementList"), Ze = Ne("SearchBox"), lO = function(t) {
  var r = t.containerNode, n = t.cssClasses, i = t.templates, a = t.searchBoxTemplates, o = t.renderState, s = t.showMore, u = t.searchable, c = t.searchablePlaceholder, l = t.searchableIsAlwaysActive;
  return function(p, d) {
    var f = p.refine, m = p.items, v = p.createURL, h = p.searchForItems, O = p.isFromSearch, P = p.instantSearchInstance, _ = p.toggleShowMore, T = p.isShowingMore, $ = p.hasExhaustiveItems, x = p.canToggleShowMore;
    if (d) {
      o.templateProps = Jt({
        defaultTemplates: aO,
        templatesConfig: P.templatesConfig,
        templates: i
      }), o.searchBoxTemplateProps = Jt({
        defaultTemplates: nO,
        templatesConfig: P.templatesConfig,
        templates: a
      });
      return;
    }
    Ie(q(Ry, {
      createURL: v,
      cssClasses: n,
      facetValues: m,
      templateProps: o.templateProps,
      searchBoxTemplateProps: o.searchBoxTemplateProps,
      toggleRefinement: f,
      searchFacetValues: u ? h : void 0,
      searchPlaceholder: c,
      searchIsAlwaysActive: l,
      isFromSearch: O,
      showMore: s && !O && m.length > 0,
      toggleShowMore: _,
      isShowingMore: T,
      hasExhaustiveItems: $,
      canToggleShowMore: x
    }), r);
  };
}, fO = function(t) {
  var r = t || {}, n = r.container, i = r.attribute, a = r.operator, o = r.sortBy, s = r.limit, u = r.showMore, c = r.showMoreLimit, l = r.searchable, p = l === void 0 ? !1 : l, d = r.searchablePlaceholder, f = d === void 0 ? "Search..." : d, m = r.searchableEscapeFacetValues, v = m === void 0 ? !0 : m, h = r.searchableIsAlwaysActive, O = h === void 0 ? !0 : h, P = r.cssClasses, _ = P === void 0 ? {} : P, T = r.templates, $ = T === void 0 ? {} : T, x = r.transformItems;
  if (!n)
    throw new Error(cO("The `container` option is required."));
  var A = p ? Boolean(v) : !1, w = gt(n), R = {
    root: H(Ae(), _.root),
    noRefinementRoot: H(Ae({
      modifierName: "noRefinement"
    }), _.noRefinementRoot),
    list: H(Ae({
      descendantName: "list"
    }), _.list),
    item: H(Ae({
      descendantName: "item"
    }), _.item),
    selectedItem: H(Ae({
      descendantName: "item",
      modifierName: "selected"
    }), _.selectedItem),
    searchBox: H(Ae({
      descendantName: "searchBox"
    }), _.searchBox),
    label: H(Ae({
      descendantName: "label"
    }), _.label),
    checkbox: H(Ae({
      descendantName: "checkbox"
    }), _.checkbox),
    labelText: H(Ae({
      descendantName: "labelText"
    }), _.labelText),
    count: H(Ae({
      descendantName: "count"
    }), _.count),
    noResults: H(Ae({
      descendantName: "noResults"
    }), _.noResults),
    showMore: H(Ae({
      descendantName: "showMore"
    }), _.showMore),
    disabledShowMore: H(Ae({
      descendantName: "showMore",
      modifierName: "disabled"
    }), _.disabledShowMore),
    searchable: {
      root: H(Ze(), _.searchableRoot),
      form: H(Ze({
        descendantName: "form"
      }), _.searchableForm),
      input: H(Ze({
        descendantName: "input"
      }), _.searchableInput),
      submit: H(Ze({
        descendantName: "submit"
      }), _.searchableSubmit),
      submitIcon: H(Ze({
        descendantName: "submitIcon"
      }), _.searchableSubmitIcon),
      reset: H(Ze({
        descendantName: "reset"
      }), _.searchableReset),
      resetIcon: H(Ze({
        descendantName: "resetIcon"
      }), _.searchableResetIcon),
      loadingIndicator: H(Ze({
        descendantName: "loadingIndicator"
      }), _.searchableLoadingIndicator),
      loadingIcon: H(Ze({
        descendantName: "loadingIcon"
      }), _.searchableLoadingIcon)
    }
  }, j = lO({
    containerNode: w,
    cssClasses: R,
    templates: $,
    searchBoxTemplates: {
      submit: $.searchableSubmit,
      reset: $.searchableReset,
      loadingIndicator: $.searchableLoadingIndicator
    },
    renderState: {},
    searchable: p,
    searchablePlaceholder: f,
    searchableIsAlwaysActive: O,
    showMore: u
  }), E = Xb(j, function() {
    return Ie(null, w);
  });
  return Ds(Ds({}, E({
    attribute: i,
    operator: a,
    limit: s,
    showMore: u,
    showMoreLimit: c,
    sortBy: o,
    escapeFacetValues: A,
    transformItems: x
  })), {}, {
    $$widgetType: "ais.refinementList"
  });
};
const et = fO;
function en(e) {
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function Hs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hs(Object(r), !0).forEach(function(n) {
      pO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pO(e, t, r) {
  return t = dO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dO(e) {
  var t = hO(e, "string");
  return en(t) === "symbol" ? t : String(t);
}
function hO(e, t) {
  if (en(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (en(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mO = he({
  name: "search-box",
  connector: !0
}), gO = function(t, r) {
  return r(t);
}, vO = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, mO()), function(n) {
    var i = n || {}, a = i.queryHook, o = a === void 0 ? gO : a, s, u;
    return {
      $$type: "ais.searchBox",
      init: function(l) {
        var p = l.instantSearchInstance;
        t(ot(ot({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: p
        }), !0);
      },
      render: function(l) {
        var p = l.instantSearchInstance;
        t(ot(ot({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: p
        }), !1);
      },
      dispose: function(l) {
        var p = l.state;
        return r(), p.setQueryParameter("query", void 0);
      },
      getRenderState: function(l, p) {
        return ot(ot({}, l), {}, {
          searchBox: this.getWidgetRenderState(p)
        });
      },
      getWidgetRenderState: function(l) {
        var p = l.helper, d = l.searchMetadata, f = l.state;
        return s || (s = function(v) {
          o(v, function(h) {
            return p.setQuery(h).search();
          });
        }, u = function() {
          p.setQuery("").search();
        }), {
          query: f.query || "",
          refine: s,
          clear: u,
          widgetParams: n,
          isSearchStalled: d.isSearchStalled
        };
      },
      getWidgetUiState: function(l, p) {
        var d = p.searchParameters, f = d.query || "";
        return f === "" || l && l.query === f ? l : ot(ot({}, l), {}, {
          query: f
        });
      },
      getWidgetSearchParameters: function(l, p) {
        var d = p.uiState;
        return l.setQueryParameter("query", d.query || "");
      }
    };
  };
};
const yO = vO;
function tn(e) {
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
var bO = ["nbHits", "nbSortedHits", "cssClasses", "templateProps"];
function da() {
  return da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, da.apply(this, arguments);
}
function qs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function OO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qs(Object(r), !0).forEach(function(n) {
      SO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SO(e, t, r) {
  return t = wO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wO(e) {
  var t = PO(e, "string");
  return tn(t) === "symbol" ? t : String(t);
}
function PO(e, t) {
  if (tn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (tn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _O(e, t) {
  if (e == null)
    return {};
  var r = jO(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jO(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var RO = function(t) {
  var r = t.nbHits, n = t.nbSortedHits, i = t.cssClasses, a = t.templateProps, o = _O(t, bO);
  return q("div", {
    className: H(i.root)
  }, q(be, da({}, a, {
    templateKey: "text",
    rootTagName: "span",
    rootProps: {
      className: i.text
    },
    data: OO({
      hasManySortedResults: n && n > 1,
      hasNoSortedResults: n === 0,
      hasOneSortedResults: n === 1,
      hasManyResults: r > 1,
      hasNoResults: r === 0,
      hasOneResult: r === 1,
      nbHits: r,
      nbSortedHits: n,
      cssClasses: i
    }, o)
  })));
};
const IO = RO;
function rn(e) {
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function Ls(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ls(Object(r), !0).forEach(function(n) {
      EO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ls(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EO(e, t, r) {
  return t = $O(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $O(e) {
  var t = xO(e, "string");
  return rn(t) === "symbol" ? t : String(t);
}
function xO(e, t) {
  if (rn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (rn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var TO = he({
  name: "stats",
  connector: !0
}), AO = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
  return mt(t, TO()), function(n) {
    return {
      $$type: "ais.stats",
      init: function(a) {
        var o = a.instantSearchInstance;
        t(qt(qt({}, this.getWidgetRenderState(a)), {}, {
          instantSearchInstance: o
        }), !0);
      },
      render: function(a) {
        var o = a.instantSearchInstance;
        t(qt(qt({}, this.getWidgetRenderState(a)), {}, {
          instantSearchInstance: o
        }), !1);
      },
      dispose: function() {
        r();
      },
      getRenderState: function(a, o) {
        return qt(qt({}, a), {}, {
          stats: this.getWidgetRenderState(o)
        });
      },
      getWidgetRenderState: function(a) {
        var o = a.results, s = a.state;
        return o ? {
          hitsPerPage: o.hitsPerPage,
          nbHits: o.nbHits,
          nbSortedHits: o.nbSortedHits,
          areHitsSorted: typeof o.appliedRelevancyStrictness < "u" && o.appliedRelevancyStrictness > 0 && o.nbSortedHits !== o.nbHits,
          nbPages: o.nbPages,
          page: o.page,
          processingTimeMS: o.processingTimeMS,
          query: o.query,
          widgetParams: n
        } : {
          hitsPerPage: s.hitsPerPage,
          nbHits: 0,
          nbSortedHits: void 0,
          areHitsSorted: !1,
          nbPages: 0,
          page: s.page || 0,
          processingTimeMS: -1,
          query: s.query || "",
          widgetParams: n
        };
      }
    };
  };
};
const CO = AO;
function nn(e) {
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function Ws(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ws(Object(r), !0).forEach(function(n) {
      NO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ws(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NO(e, t, r) {
  return t = FO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FO(e) {
  var t = DO(e, "string");
  return nn(t) === "symbol" ? t : String(t);
}
function DO(e, t) {
  if (nn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HO = he({
  name: "stats"
}), ks = Ne("Stats"), qO = {
  text: function(t) {
    return "".concat(t.areHitsSorted ? LO(t) : WO(t), " found in ").concat(t.processingTimeMS, "ms");
  }
};
function LO(e) {
  var t = e.nbHits, r = e.hasNoSortedResults, n = e.hasOneSortedResults, i = e.hasManySortedResults, a = e.nbSortedHits, o = "sorted out of ".concat(Cr(t));
  return r ? "No relevant results ".concat(o) : n ? "1 relevant result ".concat(o) : i ? "".concat(Cr(a || 0), " relevant results ").concat(o) : "";
}
function WO(e) {
  var t = e.nbHits, r = e.hasNoResults, n = e.hasOneResult, i = e.hasManyResults;
  return r ? "No results" : n ? "1 result" : i ? "".concat(Cr(t), " results") : "";
}
var MO = function(t) {
  var r = t.renderState, n = t.cssClasses, i = t.containerNode, a = t.templates;
  return function(o, s) {
    var u = o.hitsPerPage, c = o.nbHits, l = o.nbSortedHits, p = o.areHitsSorted, d = o.nbPages, f = o.page, m = o.processingTimeMS, v = o.query, h = o.instantSearchInstance;
    if (s) {
      r.templateProps = Jt({
        defaultTemplates: qO,
        templatesConfig: h.templatesConfig,
        templates: a
      });
      return;
    }
    Ie(q(IO, {
      cssClasses: n,
      hitsPerPage: u,
      nbHits: c,
      nbSortedHits: l,
      areHitsSorted: p,
      nbPages: d,
      page: f,
      processingTimeMS: m,
      query: v,
      templateProps: r.templateProps
    }), i);
  };
}, kO = function(t) {
  var r = t || {}, n = r.container, i = r.cssClasses, a = i === void 0 ? {} : i, o = r.templates, s = o === void 0 ? {} : o;
  if (!n)
    throw new Error(HO("The `container` option is required."));
  var u = gt(n), c = {
    root: H(ks(), a.root),
    text: H(ks({
      descendantName: "text"
    }), a.text)
  }, l = MO({
    containerNode: u,
    cssClasses: c,
    templates: s,
    renderState: {}
  }), p = CO(l, function() {
    return Ie(null, u);
  });
  return Ms(Ms({}, p({})), {}, {
    $$widgetType: "ais.stats"
  });
};
const UO = kO;
ht(_v, "answers is no longer supported");
ht(ll, "use dynamicWidgets");
function vr(e) {
  return {
    current: e
  };
}
function Us(e, t) {
  var r = void 0;
  return function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    r && clearTimeout(r), r = setTimeout(function() {
      return e.apply(void 0, i);
    }, t);
  };
}
function BO(e, t) {
  return zO(e) || KO(e, t) || QO(e, t) || VO();
}
function VO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QO(e, t) {
  if (e) {
    if (typeof e == "string")
      return Bs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Bs(e, t);
  }
}
function Bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function KO(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, a = !1, o, s;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      a = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function zO(e) {
  if (Array.isArray(e))
    return e;
}
function ha(e) {
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function Kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  if (process.env.NODE_ENV === "production" || !e || ha(e) !== "object")
    return e;
  if (t.has(e))
    return "[Circular]";
  var r = t.add(e);
  return Array.isArray(e) ? e.map(function(n) {
    return Kn(n, r);
  }) : Object.fromEntries(Object.entries(e).map(function(n) {
    var i = BO(n, 2), a = i[0], o = i[1];
    return [a, Kn(o, r)];
  }));
}
function an(e) {
  return e.reduce(function(t, r) {
    return t.concat(r);
  }, []);
}
var JO = 0;
function bl() {
  return "autocomplete-".concat(JO++);
}
function on(e, t) {
  return t.reduce(function(r, n) {
    return r && r[n];
  }, e);
}
function sn(e) {
  return e.collections.length === 0 ? 0 : e.collections.reduce(function(t, r) {
    return t + r.items.length;
  }, 0);
}
function xt(e, t) {
  if (process.env.NODE_ENV !== "production" && !e)
    throw new Error("[Autocomplete] ".concat(typeof t == "function" ? t() : t));
}
var ma = function() {
}, Ol = "1.8.3", Sl = [{
  segment: "autocomplete-core",
  version: Ol
}], Vs = {
  current: {}
};
function er(e, t) {
  if (process.env.NODE_ENV !== "production" && !e) {
    var r = t.trim(), n = Vs.current[r];
    n || (Vs.current[r] = !0, console.warn("[Autocomplete] ".concat(r)));
  }
}
function GO(e) {
  process.env.NODE_ENV !== "production" && er(!e.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}
function xn(e, t) {
  var r = t;
  return {
    then: function(i, a) {
      return xn(e.then(Sn(i, r, e), Sn(a, r, e)), r);
    },
    catch: function(i) {
      return xn(e.catch(Sn(i, r, e)), r);
    },
    finally: function(i) {
      return i && r.onCancelList.push(i), xn(e.finally(Sn(i && function() {
        return r.onCancelList = [], i();
      }, r, e)), r);
    },
    cancel: function() {
      r.isCanceled = !0;
      var i = r.onCancelList;
      r.onCancelList = [], i.forEach(function(a) {
        a();
      });
    },
    isCanceled: function() {
      return r.isCanceled === !0;
    }
  };
}
function Qs(e) {
  return xn(e, {
    isCanceled: !1,
    onCancelList: []
  });
}
function Sn(e, t, r) {
  return e ? function(i) {
    return t.isCanceled ? i : e(i);
  } : r;
}
function YO() {
  var e = [];
  return {
    add: function(r) {
      return e.push(r), r.finally(function() {
        e = e.filter(function(n) {
          return n !== r;
        });
      });
    },
    cancelAll: function() {
      e.forEach(function(r) {
        return r.cancel();
      });
    },
    isEmpty: function() {
      return e.length === 0;
    }
  };
}
function XO() {
  var e = -1, t = -1, r = void 0;
  return function(i) {
    e++;
    var a = e;
    return Promise.resolve(i).then(function(o) {
      return r && a < t ? r : (t = a, r = o, o);
    });
  };
}
function Ks(e, t, r, n) {
  if (!r)
    return null;
  if (e < 0 && (t === null || n !== null && t === 0))
    return r + e;
  var i = (t === null ? -1 : t) + e;
  return i <= -1 || i >= r ? n === null ? null : 0 : i;
}
function zs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zs(Object(r), !0).forEach(function(n) {
      ZO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZO(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ga(e) {
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ga(e);
}
function eS(e, t) {
  var r = [];
  return Promise.resolve(e(t)).then(function(n) {
    return xt(Array.isArray(n), function() {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(ga(n)), `:

`).concat(JSON.stringify(Kn(n), null, 2));
    }), Promise.all(n.filter(function(i) {
      return Boolean(i);
    }).map(function(i) {
      if (xt(typeof i.sourceId == "string", "A source must provide a `sourceId` string."), r.includes(i.sourceId))
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(i.sourceId), " is not unique."));
      r.push(i.sourceId);
      var a = {
        getItemInputValue: function(u) {
          var c = u.state;
          return c.query;
        },
        getItemUrl: function() {
        },
        onSelect: function(u) {
          var c = u.setIsOpen;
          c(!1);
        },
        onActive: ma,
        onResolve: ma
      };
      Object.keys(a).forEach(function(s) {
        a[s].__default = !0;
      });
      var o = Js(Js({}, a), i);
      return Promise.resolve(o);
    }));
  });
}
function tS(e) {
  var t = e.collections.map(function(n) {
    return n.items.length;
  }).reduce(function(n, i, a) {
    var o = n[a - 1] || 0, s = o + i;
    return n.push(s), n;
  }, []), r = t.reduce(function(n, i) {
    return i <= e.activeItemId ? n + 1 : n;
  }, 0);
  return e.collections[r];
}
function rS(e) {
  for (var t = e.state, r = e.collection, n = !1, i = 0, a = 0; n === !1; ) {
    var o = t.collections[i];
    if (o === r) {
      n = !0;
      break;
    }
    a += o.items.length, i++;
  }
  return t.activeItemId - a;
}
function tr(e) {
  var t = tS(e);
  if (!t)
    return null;
  var r = t.items[rS({
    state: e,
    collection: t
  })], n = t.source, i = n.getItemInputValue({
    item: r,
    state: e
  }), a = n.getItemUrl({
    item: r,
    state: e
  });
  return {
    item: r,
    itemInputValue: i,
    itemUrl: a,
    source: n
  };
}
function nS(e, t) {
  return e === t || e.contains(t);
}
var iS = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function aS(e) {
  return Boolean(e && e.match(iS));
}
function Gs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gs(Object(r), !0).forEach(function(n) {
      oS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sS(e) {
  var t = e.map(function(r) {
    var n;
    return wn(wn({}, r), {}, {
      hits: (n = r.hits) === null || n === void 0 ? void 0 : n.map(function(i) {
        return wn(wn({}, i), {}, {
          __autocomplete_indexName: r.index,
          __autocomplete_queryID: r.queryID
        });
      })
    });
  });
  return {
    results: t,
    hits: t.map(function(r) {
      return r.hits;
    }).filter(Boolean),
    facetHits: t.map(function(r) {
      var n;
      return (n = r.facetHits) === null || n === void 0 ? void 0 : n.map(function(i) {
        return {
          label: i.value,
          count: i.count,
          _highlightResult: {
            label: {
              value: i.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}
function Ys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ys(Object(r), !0).forEach(function(n) {
      cS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ys(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lS(e, t, r) {
  var n = t.initialState;
  return {
    getState: function() {
      return n;
    },
    dispatch: function(a, o) {
      var s = uS({}, n);
      n = e(n, {
        type: a,
        props: t,
        payload: o
      }), r({
        state: n,
        prevState: s
      });
    },
    pendingRequests: YO()
  };
}
function Xs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xs(Object(r), !0).forEach(function(n) {
      fS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pS(e) {
  var t = e.store, r = function(c) {
    t.dispatch("setActiveItemId", c);
  }, n = function(c) {
    t.dispatch("setQuery", c);
  }, i = function(c) {
    var l = 0, p = c.map(function(d) {
      return Pn(Pn({}, d), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: an(d.items).map(function(f) {
          return Pn(Pn({}, f), {}, {
            __autocomplete_id: l++
          });
        })
      });
    });
    t.dispatch("setCollections", p);
  }, a = function(c) {
    t.dispatch("setIsOpen", c);
  }, o = function(c) {
    t.dispatch("setStatus", c);
  }, s = function(c) {
    t.dispatch("setContext", c);
  };
  return {
    setActiveItemId: r,
    setQuery: n,
    setCollections: i,
    setIsOpen: a,
    setStatus: o,
    setContext: s
  };
}
function dS(e) {
  return vS(e) || gS(e) || mS(e) || hS();
}
function hS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mS(e, t) {
  if (e) {
    if (typeof e == "string")
      return va(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return va(e, t);
  }
}
function gS(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function vS(e) {
  if (Array.isArray(e))
    return va(e);
}
function va(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Zs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zs(Object(r), !0).forEach(function(n) {
      yS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bS(e, t) {
  var r, n = typeof window < "u" ? window : {}, i = e.plugins || [];
  return Lt(Lt({
    debug: !1,
    openOnFocus: !1,
    placeholder: "",
    autoFocus: !1,
    defaultActiveItemId: null,
    stallThreshold: 300,
    environment: n,
    shouldPanelOpen: function(o) {
      var s = o.state;
      return sn(s) > 0;
    },
    reshape: function(o) {
      var s = o.sources;
      return s;
    }
  }, e), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (r = e.id) !== null && r !== void 0 ? r : bl(),
    plugins: i,
    // The following props need to be deeply defaulted.
    initialState: Lt({
      activeItemId: null,
      query: "",
      completion: null,
      collections: [],
      isOpen: !1,
      status: "idle",
      context: {}
    }, e.initialState),
    onStateChange: function(o) {
      var s;
      (s = e.onStateChange) === null || s === void 0 || s.call(e, o), i.forEach(function(u) {
        var c;
        return (c = u.onStateChange) === null || c === void 0 ? void 0 : c.call(u, o);
      });
    },
    onSubmit: function(o) {
      var s;
      (s = e.onSubmit) === null || s === void 0 || s.call(e, o), i.forEach(function(u) {
        var c;
        return (c = u.onSubmit) === null || c === void 0 ? void 0 : c.call(u, o);
      });
    },
    onReset: function(o) {
      var s;
      (s = e.onReset) === null || s === void 0 || s.call(e, o), i.forEach(function(u) {
        var c;
        return (c = u.onReset) === null || c === void 0 ? void 0 : c.call(u, o);
      });
    },
    getSources: function(o) {
      return Promise.all([].concat(dS(i.map(function(s) {
        return s.getSources;
      })), [e.getSources]).filter(Boolean).map(function(s) {
        return eS(s, o);
      })).then(function(s) {
        return an(s);
      }).then(function(s) {
        return s.map(function(u) {
          return Lt(Lt({}, u), {}, {
            onSelect: function(l) {
              u.onSelect(l), t.forEach(function(p) {
                var d;
                return (d = p.onSelect) === null || d === void 0 ? void 0 : d.call(p, l);
              });
            },
            onActive: function(l) {
              u.onActive(l), t.forEach(function(p) {
                var d;
                return (d = p.onActive) === null || d === void 0 ? void 0 : d.call(p, l);
              });
            },
            onResolve: function(l) {
              u.onResolve(l), t.forEach(function(p) {
                var d;
                return (d = p.onResolve) === null || d === void 0 ? void 0 : d.call(p, l);
              });
            }
          });
        });
      });
    },
    navigator: Lt({
      navigate: function(o) {
        var s = o.itemUrl;
        n.location.assign(s);
      },
      navigateNewTab: function(o) {
        var s = o.itemUrl, u = n.open(s, "_blank", "noopener");
        u == null || u.focus();
      },
      navigateNewWindow: function(o) {
        var s = o.itemUrl;
        n.open(s, "_blank", "noopener");
      }
    }, e.navigator)
  });
}
function eu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eu(Object(r), !0).forEach(function(n) {
      wl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OS(e) {
  var t = e.collections, r = e.props, n = e.state, i = t.reduce(function(u, c) {
    return _n(_n({}, u), {}, wl({}, c.source.sourceId, _n(_n({}, c.source), {}, {
      getItems: function() {
        return an(c.items);
      }
    })));
  }, {}), a = r.plugins.reduce(function(u, c) {
    return c.reshape ? c.reshape(u) : u;
  }, {
    sourcesBySourceId: i,
    state: n
  }), o = a.sourcesBySourceId, s = r.reshape({
    sourcesBySourceId: o,
    sources: Object.values(o),
    state: n
  });
  return an(s).filter(Boolean).map(function(u) {
    return {
      source: u,
      items: u.getItems()
    };
  });
}
function ya(e) {
  return ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ya(e);
}
function tu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tu(Object(r), !0).forEach(function(n) {
      SS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pl(e) {
  return jS(e) || _S(e) || PS(e) || wS();
}
function wS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PS(e, t) {
  if (e) {
    if (typeof e == "string")
      return ba(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ba(e, t);
  }
}
function _S(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function jS(e) {
  if (Array.isArray(e))
    return ba(e);
}
function ba(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function jn(e) {
  return Boolean(e.execute);
}
function RS(e) {
  return Boolean(e == null ? void 0 : e.execute);
}
function IS(e, t, r) {
  if (RS(e)) {
    var n = e.requesterId === "algolia" ? Object.assign.apply(Object, [{}].concat(Pl(Object.keys(r.context).map(function(i) {
      var a;
      return (a = r.context[i]) === null || a === void 0 ? void 0 : a.__algoliaSearchParameters;
    })))) : {};
    return Wt(Wt({}, e), {}, {
      requests: e.queries.map(function(i) {
        return {
          query: e.requesterId === "algolia" ? Wt(Wt({}, i), {}, {
            params: Wt(Wt({}, n), i.params)
          }) : i,
          sourceId: t,
          transformResponse: e.transformResponse
        };
      })
    });
  }
  return {
    items: e,
    sourceId: t
  };
}
function ES(e) {
  var t = e.reduce(function(n, i) {
    if (!jn(i))
      return n.push(i), n;
    var a = i.searchClient, o = i.execute, s = i.requesterId, u = i.requests, c = n.find(function(d) {
      return jn(i) && jn(d) && d.searchClient === a && Boolean(s) && d.requesterId === s;
    });
    if (c) {
      var l;
      (l = c.items).push.apply(l, Pl(u));
    } else {
      var p = {
        execute: o,
        requesterId: s,
        items: u,
        searchClient: a
      };
      n.push(p);
    }
    return n;
  }, []), r = t.map(function(n) {
    if (!jn(n))
      return Promise.resolve(n);
    var i = n, a = i.execute, o = i.items, s = i.searchClient;
    return a({
      searchClient: s,
      requests: o
    });
  });
  return Promise.all(r).then(function(n) {
    return an(n);
  });
}
function $S(e, t, r) {
  return t.map(function(n) {
    var i = e.filter(function(u) {
      return u.sourceId === n.sourceId;
    }), a = i.map(function(u) {
      var c = u.items;
      return c;
    }), o = i[0].transformResponse, s = o ? o(sS(a)) : a;
    return n.onResolve({
      source: n,
      results: a,
      items: s,
      state: r.getState()
    }), xt(Array.isArray(s), function() {
      return 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(ya(s)), `:

`).concat(JSON.stringify(Kn(s), null, 2), `.

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`);
    }), xt(s.every(Boolean), 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`)), {
      source: n,
      items: s
    };
  });
}
var xS = ["event", "nextState", "props", "query", "refresh", "store"];
function ru(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ru(Object(r), !0).forEach(function(n) {
      TS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AS(e, t) {
  if (e == null)
    return {};
  var r = CS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var hr = null, nu = XO();
function Bt(e) {
  var t = e.event, r = e.nextState, n = r === void 0 ? {} : r, i = e.props, a = e.query, o = e.refresh, s = e.store, u = AS(e, xS);
  hr && i.environment.clearTimeout(hr);
  var c = u.setCollections, l = u.setIsOpen, p = u.setQuery, d = u.setActiveItemId, f = u.setStatus;
  if (p(a), d(i.defaultActiveItemId), !a && i.openOnFocus === !1) {
    var m, v = s.getState().collections.map(function(P) {
      return dr(dr({}, P), {}, {
        items: []
      });
    });
    f("idle"), c(v), l((m = n.isOpen) !== null && m !== void 0 ? m : i.shouldPanelOpen({
      state: s.getState()
    }));
    var h = Qs(nu(v).then(function() {
      return Promise.resolve();
    }));
    return s.pendingRequests.add(h);
  }
  f("loading"), hr = i.environment.setTimeout(function() {
    f("stalled");
  }, i.stallThreshold);
  var O = Qs(nu(i.getSources(dr({
    query: a,
    refresh: o,
    state: s.getState()
  }, u)).then(function(P) {
    return Promise.all(P.map(function(_) {
      return Promise.resolve(_.getItems(dr({
        query: a,
        refresh: o,
        state: s.getState()
      }, u))).then(function(T) {
        return IS(T, _.sourceId, s.getState());
      });
    })).then(ES).then(function(_) {
      return $S(_, P, s);
    }).then(function(_) {
      return OS({
        collections: _,
        props: i,
        state: s.getState()
      });
    });
  }))).then(function(P) {
    var _;
    f("idle"), c(P);
    var T = i.shouldPanelOpen({
      state: s.getState()
    });
    l((_ = n.isOpen) !== null && _ !== void 0 ? _ : i.openOnFocus && !a && T || T);
    var $ = tr(s.getState());
    if (s.getState().activeItemId !== null && $) {
      var x = $.item, A = $.itemInputValue, w = $.itemUrl, R = $.source;
      R.onActive(dr({
        event: t,
        item: x,
        itemInputValue: A,
        itemUrl: w,
        refresh: o,
        source: R,
        state: s.getState()
      }, u));
    }
  }).finally(function() {
    f("idle"), hr && i.environment.clearTimeout(hr);
  });
  return s.pendingRequests.add(O);
}
var NS = ["event", "props", "refresh", "store"];
function iu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iu(Object(r), !0).forEach(function(n) {
      FS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DS(e, t) {
  if (e == null)
    return {};
  var r = HS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function qS(e) {
  var t = e.event, r = e.props, n = e.refresh, i = e.store, a = DS(e, NS);
  if (t.key === "ArrowUp" || t.key === "ArrowDown") {
    var o = function() {
      var m = r.environment.document.getElementById("".concat(r.id, "-item-").concat(i.getState().activeItemId));
      m && (m.scrollIntoViewIfNeeded ? m.scrollIntoViewIfNeeded(!1) : m.scrollIntoView(!1));
    }, s = function() {
      var m = tr(i.getState());
      if (i.getState().activeItemId !== null && m) {
        var v = m.item, h = m.itemInputValue, O = m.itemUrl, P = m.source;
        P.onActive(bt({
          event: t,
          item: v,
          itemInputValue: h,
          itemUrl: O,
          refresh: n,
          source: P,
          state: i.getState()
        }, a));
      }
    };
    t.preventDefault(), i.getState().isOpen === !1 && (r.openOnFocus || Boolean(i.getState().query)) ? Bt(bt({
      event: t,
      props: r,
      query: i.getState().query,
      refresh: n,
      store: i
    }, a)).then(function() {
      i.dispatch(t.key, {
        nextActiveItemId: r.defaultActiveItemId
      }), s(), setTimeout(o, 0);
    }) : (i.dispatch(t.key, {}), s(), o());
  } else if (t.key === "Escape")
    t.preventDefault(), i.dispatch(t.key, null), i.pendingRequests.cancelAll();
  else if (t.key === "Tab")
    i.dispatch("blur", null), i.pendingRequests.cancelAll();
  else if (t.key === "Enter") {
    if (i.getState().activeItemId === null || i.getState().collections.every(function(f) {
      return f.items.length === 0;
    })) {
      r.debug || i.pendingRequests.cancelAll();
      return;
    }
    t.preventDefault();
    var u = tr(i.getState()), c = u.item, l = u.itemInputValue, p = u.itemUrl, d = u.source;
    if (t.metaKey || t.ctrlKey)
      p !== void 0 && (d.onSelect(bt({
        event: t,
        item: c,
        itemInputValue: l,
        itemUrl: p,
        refresh: n,
        source: d,
        state: i.getState()
      }, a)), r.navigator.navigateNewTab({
        itemUrl: p,
        item: c,
        state: i.getState()
      }));
    else if (t.shiftKey)
      p !== void 0 && (d.onSelect(bt({
        event: t,
        item: c,
        itemInputValue: l,
        itemUrl: p,
        refresh: n,
        source: d,
        state: i.getState()
      }, a)), r.navigator.navigateNewWindow({
        itemUrl: p,
        item: c,
        state: i.getState()
      }));
    else if (!t.altKey) {
      if (p !== void 0) {
        d.onSelect(bt({
          event: t,
          item: c,
          itemInputValue: l,
          itemUrl: p,
          refresh: n,
          source: d,
          state: i.getState()
        }, a)), r.navigator.navigate({
          itemUrl: p,
          item: c,
          state: i.getState()
        });
        return;
      }
      Bt(bt({
        event: t,
        nextState: {
          isOpen: !1
        },
        props: r,
        query: l,
        refresh: n,
        store: i
      }, a)).then(function() {
        d.onSelect(bt({
          event: t,
          item: c,
          itemInputValue: l,
          itemUrl: p,
          refresh: n,
          source: d,
          state: i.getState()
        }, a));
      });
    }
  }
}
var LS = ["props", "refresh", "store"], WS = ["inputElement", "formElement", "panelElement"], MS = ["inputElement"], kS = ["inputElement", "maxLength"], US = ["sourceIndex"], BS = ["sourceIndex"], VS = ["item", "source", "sourceIndex"];
function au(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? au(Object(r), !0).forEach(function(n) {
      QS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : au(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ot(e, t) {
  if (e == null)
    return {};
  var r = KS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zS(e) {
  var t = e.props, r = e.refresh, n = e.store, i = Ot(e, LS), a = function(v) {
    var h = v.inputElement, O = v.formElement, P = v.panelElement, _ = Ot(v, WS);
    function T($) {
      var x = n.getState().isOpen || !n.pendingRequests.isEmpty();
      if (!(!x || $.target === h)) {
        var A = [O, P].some(function(w) {
          return nS(w, $.target);
        });
        A === !1 && (n.dispatch("blur", null), t.debug || n.pendingRequests.cancelAll());
      }
    }
    return we({
      // We do not rely on the native `blur` event of the input to close the
      // panel, but rather on a custom `touchstart`/`mousedown` event outside
      // of the autocomplete elements.
      // This ensures we don't mistakenly interpret interactions within the
      // autocomplete (but outside of the input) as a signal to close the panel.
      // For example, clicking reset button causes an input blur, but if
      // `openOnFocus=true`, it shouldn't close the panel.
      // On touch devices, scrolling results (`touchmove`) causes an input blur
      // but shouldn't close the panel.
      onTouchStart: T,
      onMouseDown: T,
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function(x) {
        n.getState().isOpen === !1 || h !== t.environment.document.activeElement || x.target === h || h.blur();
      }
    }, _);
  }, o = function(v) {
    return we({
      role: "combobox",
      "aria-expanded": n.getState().isOpen,
      "aria-haspopup": "listbox",
      "aria-owns": n.getState().isOpen ? "".concat(t.id, "-list") : void 0,
      "aria-labelledby": "".concat(t.id, "-label")
    }, v);
  }, s = function(v) {
    v.inputElement;
    var h = Ot(v, MS);
    return we({
      action: "",
      noValidate: !0,
      role: "search",
      onSubmit: function(P) {
        var _;
        P.preventDefault(), t.onSubmit(we({
          event: P,
          refresh: r,
          state: n.getState()
        }, i)), n.dispatch("submit", null), (_ = v.inputElement) === null || _ === void 0 || _.blur();
      },
      onReset: function(P) {
        var _;
        P.preventDefault(), t.onReset(we({
          event: P,
          refresh: r,
          state: n.getState()
        }, i)), n.dispatch("reset", null), (_ = v.inputElement) === null || _ === void 0 || _.focus();
      }
    }, h);
  }, u = function(v) {
    var h;
    function O(j) {
      (t.openOnFocus || Boolean(n.getState().query)) && Bt(we({
        event: j,
        props: t,
        query: n.getState().completion || n.getState().query,
        refresh: r,
        store: n
      }, i)), n.dispatch("focus", null);
    }
    var P = v || {};
    P.inputElement;
    var _ = P.maxLength, T = _ === void 0 ? 512 : _, $ = Ot(P, kS), x = tr(n.getState()), A = ((h = t.environment.navigator) === null || h === void 0 ? void 0 : h.userAgent) || "", w = aS(A), R = x != null && x.itemUrl && !w ? "go" : "search";
    return we({
      "aria-autocomplete": "both",
      "aria-activedescendant": n.getState().isOpen && n.getState().activeItemId !== null ? "".concat(t.id, "-item-").concat(n.getState().activeItemId) : void 0,
      "aria-controls": n.getState().isOpen ? "".concat(t.id, "-list") : void 0,
      "aria-labelledby": "".concat(t.id, "-label"),
      value: n.getState().completion || n.getState().query,
      id: "".concat(t.id, "-input"),
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      enterKeyHint: R,
      spellCheck: "false",
      autoFocus: t.autoFocus,
      placeholder: t.placeholder,
      maxLength: T,
      type: "search",
      onChange: function(E) {
        Bt(we({
          event: E,
          props: t,
          query: E.currentTarget.value.slice(0, T),
          refresh: r,
          store: n
        }, i));
      },
      onKeyDown: function(E) {
        qS(we({
          event: E,
          props: t,
          refresh: r,
          store: n
        }, i));
      },
      onFocus: O,
      // We don't rely on the `blur` event.
      // See explanation in `onTouchStart`/`onMouseDown`.
      // @MAJOR See if we need to keep this handler.
      onBlur: ma,
      onClick: function(E) {
        v.inputElement === t.environment.document.activeElement && !n.getState().isOpen && O(E);
      }
    }, $);
  }, c = function(v, h) {
    return typeof h < "u" ? "".concat(v, "-").concat(h) : v;
  }, l = function(v) {
    var h = v || {}, O = h.sourceIndex, P = Ot(h, US);
    return we({
      htmlFor: "".concat(c(t.id, O), "-input"),
      id: "".concat(c(t.id, O), "-label")
    }, P);
  }, p = function(v) {
    var h = v || {}, O = h.sourceIndex, P = Ot(h, BS);
    return we({
      role: "listbox",
      "aria-labelledby": "".concat(c(t.id, O), "-label"),
      id: "".concat(c(t.id, O), "-list")
    }, P);
  }, d = function(v) {
    return we({
      onMouseDown: function(O) {
        O.preventDefault();
      },
      onMouseLeave: function() {
        n.dispatch("mouseleave", null);
      }
    }, v);
  }, f = function(v) {
    var h = v.item, O = v.source, P = v.sourceIndex, _ = Ot(v, VS);
    return we({
      id: "".concat(c(t.id, P), "-item-").concat(h.__autocomplete_id),
      role: "option",
      "aria-selected": n.getState().activeItemId === h.__autocomplete_id,
      onMouseMove: function($) {
        if (h.__autocomplete_id !== n.getState().activeItemId) {
          n.dispatch("mousemove", h.__autocomplete_id);
          var x = tr(n.getState());
          if (n.getState().activeItemId !== null && x) {
            var A = x.item, w = x.itemInputValue, R = x.itemUrl, j = x.source;
            j.onActive(we({
              event: $,
              item: A,
              itemInputValue: w,
              itemUrl: R,
              refresh: r,
              source: j,
              state: n.getState()
            }, i));
          }
        }
      },
      onMouseDown: function($) {
        $.preventDefault();
      },
      onClick: function($) {
        var x = O.getItemInputValue({
          item: h,
          state: n.getState()
        }), A = O.getItemUrl({
          item: h,
          state: n.getState()
        }), w = A ? Promise.resolve() : Bt(we({
          event: $,
          nextState: {
            isOpen: !1
          },
          props: t,
          query: x,
          refresh: r,
          store: n
        }, i));
        w.then(function() {
          O.onSelect(we({
            event: $,
            item: h,
            itemInputValue: x,
            itemUrl: A,
            refresh: r,
            source: O,
            state: n.getState()
          }, i));
        });
      }
    }, _);
  };
  return {
    getEnvironmentProps: a,
    getRootProps: o,
    getFormProps: s,
    getLabelProps: l,
    getInputProps: u,
    getPanelProps: d,
    getListProps: p,
    getItemProps: f
  };
}
function ou(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function JS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ou(Object(r), !0).forEach(function(n) {
      _l(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GS(e) {
  var t, r, n, i, a = e.plugins, o = e.options, s = (t = (((r = o.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.userAgents) || [])[0]) === null || t === void 0 ? void 0 : t.segment, u = s ? _l({}, s, Object.keys(((n = o.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.options) || {})) : {};
  return {
    plugins: a.map(function(c) {
      return {
        name: c.name,
        options: Object.keys(c.__autocomplete_pluginOptions || [])
      };
    }),
    options: JS({
      "autocomplete-core": Object.keys(o)
    }, u),
    ua: Sl.concat(((i = o.__autocomplete_metadata) === null || i === void 0 ? void 0 : i.userAgents) || [])
  };
}
function YS(e) {
  var t, r, n = e.metadata, i = e.environment, a = (t = i.navigator) === null || t === void 0 || (r = t.userAgent) === null || r === void 0 ? void 0 : r.includes("Algolia Crawler");
  if (a) {
    var o = i.document.createElement("meta"), s = i.document.querySelector("head");
    o.name = "algolia:metadata", setTimeout(function() {
      o.content = JSON.stringify(n), s.appendChild(o);
    }, 0);
  }
}
function su(e) {
  var t, r = e.state;
  return r.isOpen === !1 || r.activeItemId === null ? null : ((t = tr(r)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function uu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uu(Object(r), !0).forEach(function(n) {
      XS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ZS = function(t, r) {
  switch (r.type) {
    case "setActiveItemId":
      return J(J({}, t), {}, {
        activeItemId: r.payload
      });
    case "setQuery":
      return J(J({}, t), {}, {
        query: r.payload,
        completion: null
      });
    case "setCollections":
      return J(J({}, t), {}, {
        collections: r.payload
      });
    case "setIsOpen":
      return J(J({}, t), {}, {
        isOpen: r.payload
      });
    case "setStatus":
      return J(J({}, t), {}, {
        status: r.payload
      });
    case "setContext":
      return J(J({}, t), {}, {
        context: J(J({}, t.context), r.payload)
      });
    case "ArrowDown": {
      var n = J(J({}, t), {}, {
        activeItemId: r.payload.hasOwnProperty("nextActiveItemId") ? r.payload.nextActiveItemId : Ks(1, t.activeItemId, sn(t), r.props.defaultActiveItemId)
      });
      return J(J({}, n), {}, {
        completion: su({
          state: n
        })
      });
    }
    case "ArrowUp": {
      var i = J(J({}, t), {}, {
        activeItemId: Ks(-1, t.activeItemId, sn(t), r.props.defaultActiveItemId)
      });
      return J(J({}, i), {}, {
        completion: su({
          state: i
        })
      });
    }
    case "Escape":
      return t.isOpen ? J(J({}, t), {}, {
        activeItemId: null,
        isOpen: !1,
        completion: null
      }) : J(J({}, t), {}, {
        activeItemId: null,
        query: "",
        status: "idle",
        collections: []
      });
    case "submit":
      return J(J({}, t), {}, {
        activeItemId: null,
        isOpen: !1,
        status: "idle"
      });
    case "reset":
      return J(J({}, t), {}, {
        activeItemId: (
          // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          r.props.openOnFocus === !0 ? r.props.defaultActiveItemId : null
        ),
        status: "idle",
        query: ""
      });
    case "focus":
      return J(J({}, t), {}, {
        activeItemId: r.props.defaultActiveItemId,
        isOpen: (r.props.openOnFocus || Boolean(t.query)) && r.props.shouldPanelOpen({
          state: t
        })
      });
    case "blur":
      return r.props.debug ? t : J(J({}, t), {}, {
        isOpen: !1,
        activeItemId: null
      });
    case "mousemove":
      return J(J({}, t), {}, {
        activeItemId: r.payload
      });
    case "mouseleave":
      return J(J({}, t), {}, {
        activeItemId: r.props.defaultActiveItemId
      });
    default:
      return xt(!1, "The reducer action ".concat(JSON.stringify(r.type), " is not supported.")), t;
  }
};
function cu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cu(Object(r), !0).forEach(function(n) {
      ew(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ew(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tw(e) {
  GO(e);
  var t = [], r = bS(e, t), n = lS(ZS, r, o), i = pS({
    store: n
  }), a = zS(St({
    props: r,
    refresh: s,
    store: n,
    navigator: r.navigator
  }, i));
  function o(u) {
    var c = u.prevState, l = u.state;
    r.onStateChange(St({
      prevState: c,
      state: l,
      refresh: s,
      navigator: r.navigator
    }, i));
  }
  function s() {
    return Bt(St({
      event: new Event("input"),
      nextState: {
        isOpen: n.getState().isOpen
      },
      props: r,
      navigator: r.navigator,
      query: n.getState().query,
      refresh: s,
      store: n
    }, i));
  }
  return r.plugins.forEach(function(u) {
    var c;
    return (c = u.subscribe) === null || c === void 0 ? void 0 : c.call(u, St(St({}, i), {}, {
      navigator: r.navigator,
      refresh: s,
      onSelect: function(p) {
        t.push({
          onSelect: p
        });
      },
      onActive: function(p) {
        t.push({
          onActive: p
        });
      },
      onResolve: function(p) {
        t.push({
          onResolve: p
        });
      }
    }));
  }), YS({
    metadata: GS({
      plugins: r.plugins,
      options: e
    }),
    environment: r.environment
  }), St(St({
    refresh: s,
    navigator: r.navigator
  }, a), i);
}
var rw = function(t) {
  var r = t.environment, n = r.document.createElementNS("http://www.w3.org/2000/svg", "svg");
  n.setAttribute("class", "aa-ClearIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "18"), n.setAttribute("height", "18"), n.setAttribute("fill", "currentColor");
  var i = r.document.createElementNS("http://www.w3.org/2000/svg", "path");
  return i.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"), n.appendChild(i), n;
};
function lu(e, t) {
  if (typeof t == "string") {
    var r = e.document.querySelector(t);
    return xt(r !== null, "The element ".concat(JSON.stringify(t), " is not in the document.")), r;
  }
  return t;
}
function nw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.reduce(function(n, i) {
    return Object.keys(i).forEach(function(a) {
      var o = n[a], s = i[a];
      o !== s && (n[a] = [o, s].filter(Boolean).join(" "));
    }), n;
  }, {});
}
function iw(e) {
  return uw(e) || sw(e) || ow(e) || aw();
}
function aw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ow(e, t) {
  if (e) {
    if (typeof e == "string")
      return Oa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Oa(e, t);
  }
}
function sw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function uw(e) {
  if (Array.isArray(e))
    return Oa(e);
}
function Oa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Sa(e) {
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sa(e);
}
var fu = function(t) {
  return t && Sa(t) === "object" && Object.prototype.toString.call(t) === "[object Object]";
};
function jl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.reduce(function(n, i) {
    return Object.keys(i).forEach(function(a) {
      var o = n[a], s = i[a];
      Array.isArray(o) && Array.isArray(s) ? n[a] = o.concat.apply(o, iw(s)) : fu(o) && fu(s) ? n[a] = jl(o, s) : n[a] = s;
    }), n;
  }, {});
}
function pu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function du(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pu(Object(r), !0).forEach(function(n) {
      Rl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cw(e, t) {
  return dw(e) || pw(e, t) || fw(e, t) || lw();
}
function lw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fw(e, t) {
  if (e) {
    if (typeof e == "string")
      return hu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hu(e, t);
  }
}
function hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function pw(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, a = !1, o, s;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      a = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function dw(e) {
  if (Array.isArray(e))
    return e;
}
function hw(e, t) {
  return Object.entries(e).reduce(function(r, n) {
    var i = cw(n, 2), a = i[0], o = i[1];
    return t({
      key: a,
      value: o
    }) ? du(du({}, r), {}, Rl({}, a, o)) : r;
  }, {});
}
var mw = ["ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel"];
function gw(e, t, r) {
  r === null ? e[t] = "" : typeof r != "number" ? e[t] = r : e[t] = r + "px";
}
function mu(e) {
  this._listeners[e.type](e);
}
function Il(e, t, r) {
  var n, i, a = e[t];
  if (t === "style")
    if (typeof r == "string")
      e.style = r;
    else if (r === null)
      e.style = "";
    else
      for (t in r)
        (!a || r[t] !== a[t]) && gw(e.style, t, r[t]);
  else
    t[0] === "o" && t[1] === "n" ? (n = t !== (t = t.replace(/Capture$/, "")), i = t.toLowerCase(), (i in e || mw.includes(i)) && (t = i), t = t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t] = r, r ? a || e.addEventListener(t, mu, n) : e.removeEventListener(t, mu, n)) : t !== "list" && t !== "tagName" && // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
    // setAttribute
    t !== "form" && t !== "type" && t !== "size" && t !== "download" && t !== "href" && t in e ? e[t] = r ?? "" : typeof r != "function" && t !== "dangerouslySetInnerHTML" && (r == null || r === !1 && // ARIA-attributes have a different notion of boolean values.
    // The value `false` is different from the attribute not
    // existing on the DOM, so we can't remove it. For non-boolean
    // ARIA-attributes we could treat false as a removal, but the
    // amount of exceptions would cost us too many bytes. On top of
    // that other VDOM frameworks also always stringify `false`.
    !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function El(e) {
  switch (e) {
    case "onChange":
      return "onInput";
    default:
      return e;
  }
}
function ke(e, t) {
  for (var r in t)
    Il(e, El(r), t[r]);
}
function gu(e, t) {
  for (var r in t)
    r[0] === "o" && r[1] === "n" || Il(e, El(r), t[r]);
}
var vw = ["children"];
function yw(e) {
  return ww(e) || Sw(e) || Ow(e) || bw();
}
function bw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ow(e, t) {
  if (e) {
    if (typeof e == "string")
      return wa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wa(e, t);
  }
}
function Sw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ww(e) {
  if (Array.isArray(e))
    return wa(e);
}
function wa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Pw(e, t) {
  if (e == null)
    return {};
  var r = _w(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _w(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $l(e) {
  return function(r, n) {
    var i = n.children, a = i === void 0 ? [] : i, o = Pw(n, vw), s = e.document.createElement(r);
    return ke(s, o), s.append.apply(s, yw(a)), s;
  };
}
var jw = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "isDetached", "state"];
function vu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vu(Object(r), !0).forEach(function(n) {
      Rw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rw(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Iw(e, t) {
  if (e == null)
    return {};
  var r = Ew(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ew(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var $w = function(t) {
  var r = t.autocompleteScopeApi, n = t.environment;
  t.classNames;
  var i = t.getInputProps, a = t.getInputPropsCore, o = t.isDetached, s = t.state, u = Iw(t, jw), c = $l(n), l = c("input", u), p = i(ji({
    state: s,
    props: a({
      inputElement: l
    }),
    inputElement: l
  }, r));
  return ke(l, ji(ji({}, p), {}, {
    onKeyDown: function(f) {
      o && f.key === "Tab" || p.onKeyDown(f);
    }
  })), l;
}, xw = function(t) {
  var r = t.environment, n = r.document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return n.setAttribute("class", "aa-LoadingIcon"), n.setAttribute("viewBox", "0 0 100 100"), n.setAttribute("width", "20"), n.setAttribute("height", "20"), n.innerHTML = `<circle
  cx="50"
  cy="50"
  fill="none"
  r="35"
  stroke="currentColor"
  stroke-dasharray="164.93361431346415 56.97787143782138"
  stroke-width="6"
>
  <animateTransform
    attributeName="transform"
    type="rotate"
    repeatCount="indefinite"
    dur="1s"
    values="0 50 50;90 50 50;180 50 50;360 50 50"
    keyTimes="0;0.40;0.65;1"
  />
</circle>`, n;
}, yu = function(t) {
  var r = t.environment, n = r.document.createElementNS("http://www.w3.org/2000/svg", "svg");
  n.setAttribute("class", "aa-SubmitIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "20"), n.setAttribute("height", "20"), n.setAttribute("fill", "currentColor");
  var i = r.document.createElementNS("http://www.w3.org/2000/svg", "path");
  return i.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"), n.appendChild(i), n;
};
function bu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bu(Object(r), !0).forEach(function(n) {
      Tw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tw(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Aw(e) {
  var t = e.autocomplete, r = e.autocompleteScopeApi, n = e.classNames, i = e.environment, a = e.isDetached, o = e.placeholder, s = o === void 0 ? "Search" : o, u = e.propGetters, c = e.setIsModalOpen, l = e.state, p = e.translations, d = $l(i), f = u.getRootProps(st({
    state: l,
    props: t.getRootProps({})
  }, r)), m = d("div", st({
    class: n.root
  }, f)), v = d("div", {
    class: n.detachedContainer,
    onMouseDown: function(K) {
      K.stopPropagation();
    }
  }), h = d("div", {
    class: n.detachedOverlay,
    children: [v],
    onMouseDown: function() {
      c(!1), t.setIsOpen(!1);
    }
  }), O = u.getLabelProps(st({
    state: l,
    props: t.getLabelProps({})
  }, r)), P = d("button", {
    class: n.submitButton,
    type: "submit",
    title: p.submitButtonTitle,
    children: [yu({
      environment: i
    })]
  }), _ = d("label", st({
    class: n.label,
    children: [P]
  }, O)), T = d("button", {
    class: n.clearButton,
    type: "reset",
    title: p.clearButtonTitle,
    children: [rw({
      environment: i
    })]
  }), $ = d("div", {
    class: n.loadingIndicator,
    children: [xw({
      environment: i
    })]
  }), x = $w({
    class: n.input,
    environment: i,
    state: l,
    getInputProps: u.getInputProps,
    getInputPropsCore: t.getInputProps,
    autocompleteScopeApi: r,
    isDetached: a
  }), A = d("div", {
    class: n.inputWrapperPrefix,
    children: [_, $]
  }), w = d("div", {
    class: n.inputWrapperSuffix,
    children: [T]
  }), R = d("div", {
    class: n.inputWrapper,
    children: [x]
  }), j = u.getFormProps(st({
    state: l,
    props: t.getFormProps({
      inputElement: x
    })
  }, r)), E = d("form", st({
    class: n.form,
    children: [A, R, w]
  }, j)), U = u.getPanelProps(st({
    state: l,
    props: t.getPanelProps({})
  }, r)), ee = d("div", st({
    class: n.panel
  }, U)), je = d("div", {
    class: n.detachedSearchButtonQuery,
    textContent: l.query
  }), G = d("div", {
    class: n.detachedSearchButtonPlaceholder,
    hidden: Boolean(l.query),
    textContent: s
  });
  if (process.env.NODE_ENV === "test" && ke(ee, {
    "data-testid": "panel"
  }), a) {
    var Le = d("div", {
      class: n.detachedSearchButtonIcon,
      children: [yu({
        environment: i
      })]
    }), oe = d("button", {
      type: "button",
      class: n.detachedSearchButton,
      onClick: function() {
        c(!0);
      },
      children: [Le, G, je]
    }), k = d("button", {
      type: "button",
      class: n.detachedCancelButton,
      textContent: p.detachedCancelButtonText,
      // Prevent `onTouchStart` from closing the panel
      // since it should be initiated by `onClick` only
      onTouchStart: function(K) {
        K.stopPropagation();
      },
      onClick: function() {
        t.setIsOpen(!1), c(!1);
      }
    }), B = d("div", {
      class: n.detachedFormContainer,
      children: [E, k]
    });
    v.appendChild(B), m.appendChild(oe);
  } else
    m.appendChild(E);
  return {
    detachedContainer: v,
    detachedOverlay: h,
    detachedSearchButtonQuery: je,
    detachedSearchButtonPlaceholder: G,
    inputWrapper: R,
    input: x,
    root: m,
    form: E,
    label: _,
    submitButton: P,
    clearButton: T,
    loadingIndicator: $,
    panel: ee
  };
}
function Cw() {
  var e = [], t = [];
  function r(n) {
    e.push(n);
    var i = n();
    t.push(i);
  }
  return {
    runEffect: r,
    cleanupEffects: function() {
      var i = t;
      t = [], i.forEach(function(a) {
        a();
      });
    },
    runEffects: function() {
      var i = e;
      e = [], i.forEach(function(a) {
        r(a);
      });
    }
  };
}
function Nw() {
  var e = [];
  return {
    reactive: function(r) {
      var n = r(), i = {
        _fn: r,
        _ref: {
          current: n
        },
        get value() {
          return this._ref.current;
        },
        set value(a) {
          this._ref.current = a;
        }
      };
      return e.push(i), i;
    },
    runReactives: function() {
      e.forEach(function(r) {
        r._ref.current = r._fn();
      });
    }
  };
}
var xl = "__aa-highlight__", Tl = "__/aa-highlight__";
function Fw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = e;
  return {
    get: function() {
      return t;
    },
    add: function(n) {
      var i = t[t.length - 1];
      (i == null ? void 0 : i.isHighlighted) === n.isHighlighted ? t[t.length - 1] = {
        value: i.value + n.value,
        isHighlighted: i.isHighlighted
      } : t.push(n);
    }
  };
}
function Al(e) {
  var t = e.highlightedValue, r = t.split(xl), n = r.shift(), i = Fw(n ? [{
    value: n,
    isHighlighted: !1
  }] : []);
  return r.forEach(function(a) {
    var o = a.split(Tl);
    i.add({
      value: o[0],
      isHighlighted: !0
    }), o[1] !== "" && i.add({
      value: o[1],
      isHighlighted: !1
    });
  }), i.get();
}
function Dw(e) {
  return Ww(e) || Lw(e) || qw(e) || Hw();
}
function Hw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qw(e, t) {
  if (e) {
    if (typeof e == "string")
      return Pa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pa(e, t);
  }
}
function Lw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ww(e) {
  if (Array.isArray(e))
    return Pa(e);
}
function Pa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Cl(e) {
  var t = e.hit, r = e.attribute, n = Array.isArray(r) ? r : [r], i = on(t, ["_highlightResult"].concat(Dw(n), ["value"]));
  return typeof i != "string" && (process.env.NODE_ENV !== "production" && er(!1, 'The attribute "'.concat(n.join("."), '" described by the path ').concat(JSON.stringify(n), " does not exist on the hit. Did you set it in `attributesToHighlight`?") + `
See https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/`), i = on(t, n) || ""), Al({
    highlightedValue: i
  });
}
var Mw = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, kw = new RegExp(/\w/i), Nl = /&(amp|quot|lt|gt|#39);/g, Uw = RegExp(Nl.source);
function Bw(e) {
  return e && Uw.test(e) ? e.replace(Nl, function(t) {
    return Mw[t];
  }) : e;
}
function Vw(e, t) {
  var r, n, i = e[t], a = ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) || !0, o = ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) || !0;
  return !kw.test(Bw(i.value)) && o === a ? o : i.isHighlighted;
}
function Ou(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ou(Object(r), !0).forEach(function(n) {
      Qw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qw(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fl(e) {
  return e.some(function(t) {
    return t.isHighlighted;
  }) ? e.map(function(t, r) {
    return Rn(Rn({}, t), {}, {
      isHighlighted: !Vw(e, r)
    });
  }) : e.map(function(t) {
    return Rn(Rn({}, t), {}, {
      isHighlighted: !1
    });
  });
}
function Kw(e) {
  return Fl(Cl(e));
}
function zw(e) {
  return Xw(e) || Yw(e) || Gw(e) || Jw();
}
function Jw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gw(e, t) {
  if (e) {
    if (typeof e == "string")
      return _a(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _a(e, t);
  }
}
function Yw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Xw(e) {
  if (Array.isArray(e))
    return _a(e);
}
function _a(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Dl(e) {
  var t = e.hit, r = e.attribute, n = Array.isArray(r) ? r : [r], i = on(t, ["_snippetResult"].concat(zw(n), ["value"]));
  return typeof i != "string" && (process.env.NODE_ENV !== "production" && er(!1, 'The attribute "'.concat(n.join("."), '" described by the path ').concat(JSON.stringify(n), " does not exist on the hit. Did you set it in `attributesToSnippet`?") + `
See https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/`), i = on(t, n) || ""), Al({
    highlightedValue: i
  });
}
function Zw(e) {
  return Fl(Dl(e));
}
function Su(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Su(Object(r), !0).forEach(function(n) {
      eP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Su(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tP(e, t) {
  function r(n) {
    return e({
      searchClient: n.searchClient,
      queries: n.requests.map(function(i) {
        return i.query;
      })
    }).then(function(i) {
      return i.map(function(a, o) {
        var s = n.requests[o], u = s.sourceId, c = s.transformResponse;
        return {
          items: a,
          sourceId: u,
          transformResponse: c
        };
      });
    });
  }
  return function(i) {
    return function(o) {
      return wu(wu({
        requesterId: t,
        execute: r
      }, i), o);
    };
  };
}
var rP = ["params"];
function Pu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pu(Object(r), !0).forEach(function(n) {
      nP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iP(e, t) {
  if (e == null)
    return {};
  var r = aP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function _u(e) {
  return cP(e) || uP(e) || sP(e) || oP();
}
function oP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sP(e, t) {
  if (e) {
    if (typeof e == "string")
      return ja(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ja(e, t);
  }
}
function uP(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function cP(e) {
  if (Array.isArray(e))
    return ja(e);
}
function ja(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lP(e) {
  var t = e.searchClient, r = e.queries, n = e.userAgents, i = n === void 0 ? [] : n;
  if (typeof t.addAlgoliaAgent == "function") {
    var a = [].concat(_u(Sl), _u(i));
    a.forEach(function(o) {
      var s = o.segment, u = o.version;
      t.addAlgoliaAgent(s, u);
    });
  }
  return t.search(r.map(function(o) {
    var s = o.params, u = iP(o, rP);
    return Ri(Ri({}, u), {}, {
      params: Ri({
        hitsPerPage: 5,
        highlightPreTag: xl,
        highlightPostTag: Tl
      }, s)
    });
  })).then(function(o) {
    return o.results;
  });
}
function fP(e) {
  var t = e.createElement, r = e.Fragment;
  function n(i) {
    var a = i.hit, o = i.attribute, s = i.tagName, u = s === void 0 ? "mark" : s;
    return t(r, {}, Cl({
      hit: a,
      attribute: o
    }).map(function(c, l) {
      return c.isHighlighted ? t(u, {
        key: l
      }, c.value) : c.value;
    }));
  }
  return n.__autocomplete_componentName = "Highlight", n;
}
function pP(e) {
  var t = e.createElement, r = e.Fragment;
  function n(i) {
    var a = i.hit, o = i.attribute, s = i.tagName, u = s === void 0 ? "mark" : s;
    return t(r, {}, Kw({
      hit: a,
      attribute: o
    }).map(function(c, l) {
      return c.isHighlighted ? t(u, {
        key: l
      }, c.value) : c.value;
    }));
  }
  return n.__autocomplete_componentName = "ReverseHighlight", n;
}
function dP(e) {
  var t = e.createElement, r = e.Fragment;
  function n(i) {
    var a = i.hit, o = i.attribute, s = i.tagName, u = s === void 0 ? "mark" : s;
    return t(r, {}, Zw({
      hit: a,
      attribute: o
    }).map(function(c, l) {
      return c.isHighlighted ? t(u, {
        key: l
      }, c.value) : c.value;
    }));
  }
  return n.__autocomplete_componentName = "ReverseSnippet", n;
}
function hP(e) {
  var t = e.createElement, r = e.Fragment;
  function n(i) {
    var a = i.hit, o = i.attribute, s = i.tagName, u = s === void 0 ? "mark" : s;
    return t(r, {}, Dl({
      hit: a,
      attribute: o
    }).map(function(c, l) {
      return c.isHighlighted ? t(u, {
        key: l
      }, c.value) : c.value;
    }));
  }
  return n.__autocomplete_componentName = "Snippet", n;
}
var mP = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];
function ju(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ju(Object(r), !0).forEach(function(n) {
      gP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ju(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vP(e, t) {
  if (e == null)
    return {};
  var r = yP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var bP = {
  clearButton: "aa-ClearButton",
  detachedCancelButton: "aa-DetachedCancelButton",
  detachedContainer: "aa-DetachedContainer",
  detachedFormContainer: "aa-DetachedFormContainer",
  detachedOverlay: "aa-DetachedOverlay",
  detachedSearchButton: "aa-DetachedSearchButton",
  detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
  detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
  detachedSearchButtonQuery: "aa-DetachedSearchButtonQuery",
  form: "aa-Form",
  input: "aa-Input",
  inputWrapper: "aa-InputWrapper",
  inputWrapperPrefix: "aa-InputWrapperPrefix",
  inputWrapperSuffix: "aa-InputWrapperSuffix",
  item: "aa-Item",
  label: "aa-Label",
  list: "aa-List",
  loadingIndicator: "aa-LoadingIndicator",
  panel: "aa-Panel",
  panelLayout: "aa-PanelLayout aa-Panel--scrollable",
  root: "aa-Autocomplete",
  source: "aa-Source",
  sourceFooter: "aa-SourceFooter",
  sourceHeader: "aa-SourceHeader",
  sourceNoResults: "aa-SourceNoResults",
  submitButton: "aa-SubmitButton"
}, OP = function(t, r) {
  var n = t.children, i = t.render;
  i(n, r);
}, SP = {
  createElement: q,
  Fragment: ir,
  render: Ie
};
function wP(e) {
  var t, r = e.classNames, n = e.container, i = e.getEnvironmentProps, a = e.getFormProps, o = e.getInputProps, s = e.getItemProps, u = e.getLabelProps, c = e.getListProps, l = e.getPanelProps, p = e.getRootProps, d = e.panelContainer, f = e.panelPlacement, m = e.render, v = e.renderNoResults, h = e.renderer, O = e.detachedMediaQuery, P = e.components, _ = e.translations, T = vP(e, mP), $ = typeof window < "u" ? window : {}, x = lu($, n);
  xt(x.tagName !== "INPUT", "The `container` option does not support `input` elements. You need to change the container to a `div`."), process.env.NODE_ENV !== "production" && er(!(m && h && !(h != null && h.render)), "You provided the `render` option but did not provide a `renderer.render`. Since v1.6.0, you can provide a `render` function directly in `renderer`.\nTo get rid of this warning, do any of the following depending on your use case.\n- If you are using the `render` option only to override Autocomplete's default `render` function, pass the `render` function into `renderer` and remove the `render` option.\n- If you are using the `render` option to customize the layout, pass your `render` function into `renderer` and use it from the provided parameters of the `render` option.\n- If you are using the `render` option to work with React 18, pass an empty `render` function into `renderer`.\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-render"), process.env.NODE_ENV !== "production" && er(!h || m || h.Fragment && h.createElement && h.render, "You provided an incomplete `renderer` (missing: ".concat([!(h != null && h.createElement) && "`renderer.createElement`", !(h != null && h.Fragment) && "`renderer.Fragment`", !(h != null && h.render) && "`renderer.render`"].filter(Boolean).join(", "), "). This can cause rendering issues.") + `
See https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-renderer`);
  var A = ut(ut({}, SP), h), w = {
    Highlight: fP(A),
    ReverseHighlight: pP(A),
    ReverseSnippet: dP(A),
    Snippet: hP(A)
  }, R = {
    clearButtonTitle: "Clear",
    detachedCancelButtonText: "Cancel",
    submitButtonTitle: "Submit"
  };
  return {
    renderer: {
      classNames: nw(bP, r ?? {}),
      container: x,
      getEnvironmentProps: i ?? function(j) {
        var E = j.props;
        return E;
      },
      getFormProps: a ?? function(j) {
        var E = j.props;
        return E;
      },
      getInputProps: o ?? function(j) {
        var E = j.props;
        return E;
      },
      getItemProps: s ?? function(j) {
        var E = j.props;
        return E;
      },
      getLabelProps: u ?? function(j) {
        var E = j.props;
        return E;
      },
      getListProps: c ?? function(j) {
        var E = j.props;
        return E;
      },
      getPanelProps: l ?? function(j) {
        var E = j.props;
        return E;
      },
      getRootProps: p ?? function(j) {
        var E = j.props;
        return E;
      },
      panelContainer: d ? lu($, d) : $.document.body,
      panelPlacement: f ?? "input-wrapper-width",
      render: m ?? OP,
      renderNoResults: v,
      renderer: A,
      detachedMediaQuery: O ?? getComputedStyle($.document.documentElement).getPropertyValue("--aa-detached-media-query"),
      components: ut(ut({}, w), P),
      translations: ut(ut({}, R), _)
    },
    core: ut(ut({}, T), {}, {
      id: (t = T.id) !== null && t !== void 0 ? t : bl(),
      environment: $
    })
  };
}
function PP(e) {
  var t = e.panelPlacement, r = e.container, n = e.form, i = e.environment, a = r.getBoundingClientRect(), o = i.pageYOffset || i.document.documentElement.scrollTop || i.document.body.scrollTop || 0, s = o + a.top + a.height;
  switch (t) {
    case "start":
      return {
        top: s,
        left: a.left
      };
    case "end":
      return {
        top: s,
        right: i.document.documentElement.clientWidth - (a.left + a.width)
      };
    case "full-width":
      return {
        top: s,
        left: 0,
        right: 0,
        width: "unset",
        maxWidth: "unset"
      };
    case "input-wrapper-width": {
      var u = n.getBoundingClientRect();
      return {
        top: s,
        left: u.left,
        right: i.document.documentElement.clientWidth - (u.left + u.width),
        width: "unset",
        maxWidth: "unset"
      };
    }
    default:
      throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(t), " is not valid."));
  }
}
function zn() {
  return zn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zn.apply(this, arguments);
}
function Ru(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ru(Object(r), !0).forEach(function(n) {
      _P(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ru(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _P(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jP(e) {
  var t = e.autocomplete, r = e.autocompleteScopeApi, n = e.dom, i = e.propGetters, a = e.state;
  gu(n.root, i.getRootProps(Ut({
    state: a,
    props: t.getRootProps({})
  }, r))), gu(n.input, i.getInputProps(Ut({
    state: a,
    props: t.getInputProps({
      inputElement: n.input
    }),
    inputElement: n.input
  }, r))), ke(n.label, {
    hidden: a.status === "stalled"
  }), ke(n.loadingIndicator, {
    hidden: a.status !== "stalled"
  }), ke(n.clearButton, {
    hidden: !a.query
  }), ke(n.detachedSearchButtonQuery, {
    textContent: a.query
  }), ke(n.detachedSearchButtonPlaceholder, {
    hidden: Boolean(a.query)
  });
}
function RP(e, t) {
  var r = t.autocomplete, n = t.autocompleteScopeApi, i = t.classNames, a = t.html, o = t.dom, s = t.panelContainer, u = t.propGetters, c = t.state, l = t.components, p = t.renderer;
  if (!c.isOpen) {
    s.contains(o.panel) && s.removeChild(o.panel);
    return;
  }
  !s.contains(o.panel) && c.status !== "loading" && s.appendChild(o.panel), o.panel.classList.toggle("aa-Panel--stalled", c.status === "stalled");
  var d = c.collections.filter(function(v) {
    var h = v.source, O = v.items;
    return h.templates.noResults || O.length > 0;
  }).map(function(v, h) {
    var O = v.source, P = v.items;
    return p.createElement("section", {
      key: h,
      className: i.source,
      "data-autocomplete-source-id": O.sourceId
    }, O.templates.header && p.createElement("div", {
      className: i.sourceHeader
    }, O.templates.header({
      components: l,
      createElement: p.createElement,
      Fragment: p.Fragment,
      items: P,
      source: O,
      state: c,
      html: a
    })), O.templates.noResults && P.length === 0 ? p.createElement("div", {
      className: i.sourceNoResults
    }, O.templates.noResults({
      components: l,
      createElement: p.createElement,
      Fragment: p.Fragment,
      source: O,
      state: c,
      html: a
    })) : p.createElement("ul", zn({
      className: i.list
    }, u.getListProps(Ut({
      state: c,
      props: r.getListProps({
        sourceIndex: h
      })
    }, n))), P.map(function(_) {
      var T = r.getItemProps({
        item: _,
        source: O,
        sourceIndex: h
      });
      return p.createElement("li", zn({
        key: T.id,
        className: i.item
      }, u.getItemProps(Ut({
        state: c,
        props: T
      }, n))), O.templates.item({
        components: l,
        createElement: p.createElement,
        Fragment: p.Fragment,
        item: _,
        state: c,
        html: a
      }));
    })), O.templates.footer && p.createElement("div", {
      className: i.sourceFooter
    }, O.templates.footer({
      components: l,
      createElement: p.createElement,
      Fragment: p.Fragment,
      items: P,
      source: O,
      state: c,
      html: a
    })));
  }), f = p.createElement(p.Fragment, null, p.createElement("div", {
    className: i.panelLayout
  }, d), p.createElement("div", {
    className: "aa-GradientBottom"
  })), m = d.reduce(function(v, h) {
    return v[h.props["data-autocomplete-source-id"]] = h, v;
  }, {});
  e(Ut(Ut({
    children: f,
    state: c,
    sections: d,
    elements: m
  }, p), {}, {
    components: l,
    html: a
  }, n), o.panel);
}
var Hl = [{
  segment: "autocomplete-js",
  version: Ol
}], IP = ["components"];
function EP(e, t) {
  if (e == null)
    return {};
  var r = $P(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $P(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Iu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iu(Object(r), !0).forEach(function(n) {
      ql(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ql(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xP(e) {
  var t = Cw(), r = t.runEffect, n = t.cleanupEffects, i = t.runEffects, a = Nw(), o = a.reactive, s = a.runReactives, u = vr(!1), c = vr(e), l = vr(void 0), p = o(function() {
    return wP(c.current);
  }), d = o(function() {
    return p.value.core.environment.matchMedia(p.value.renderer.detachedMediaQuery).matches;
  }), f = o(function() {
    return tw(wt(wt({}, p.value.core), {}, {
      onStateChange: function(R) {
        var j, E, U;
        u.current = R.state.collections.some(function(ee) {
          return ee.source.templates.noResults;
        }), (j = l.current) === null || j === void 0 || j.call(l, R), (E = (U = p.value.core).onStateChange) === null || E === void 0 || E.call(U, R);
      },
      shouldPanelOpen: c.current.shouldPanelOpen || function(w) {
        var R = w.state;
        if (d.value)
          return !0;
        var j = sn(R) > 0;
        if (!p.value.core.openOnFocus && !R.query)
          return j;
        var E = Boolean(u.current || p.value.renderer.renderNoResults);
        return !j && E || j;
      },
      __autocomplete_metadata: {
        userAgents: Hl,
        options: e
      }
    }));
  }), m = vr(wt({
    collections: [],
    completion: null,
    context: {},
    isOpen: !1,
    query: "",
    activeItemId: null,
    status: "idle"
  }, p.value.core.initialState)), v = {
    getEnvironmentProps: p.value.renderer.getEnvironmentProps,
    getFormProps: p.value.renderer.getFormProps,
    getInputProps: p.value.renderer.getInputProps,
    getItemProps: p.value.renderer.getItemProps,
    getLabelProps: p.value.renderer.getLabelProps,
    getListProps: p.value.renderer.getListProps,
    getPanelProps: p.value.renderer.getPanelProps,
    getRootProps: p.value.renderer.getRootProps
  }, h = {
    setActiveItemId: f.value.setActiveItemId,
    setQuery: f.value.setQuery,
    setCollections: f.value.setCollections,
    setIsOpen: f.value.setIsOpen,
    setStatus: f.value.setStatus,
    setContext: f.value.setContext,
    refresh: f.value.refresh,
    navigator: f.value.navigator
  }, O = o(function() {
    return al.bind(p.value.renderer.renderer.createElement);
  }), P = o(function() {
    return Aw({
      autocomplete: f.value,
      autocompleteScopeApi: h,
      classNames: p.value.renderer.classNames,
      environment: p.value.core.environment,
      isDetached: d.value,
      placeholder: p.value.core.placeholder,
      propGetters: v,
      setIsModalOpen: A,
      state: m.current,
      translations: p.value.renderer.translations
    });
  });
  function _() {
    ke(P.value.panel, {
      style: d.value ? {} : PP({
        panelPlacement: p.value.renderer.panelPlacement,
        container: P.value.root,
        form: P.value.form,
        environment: p.value.core.environment
      })
    });
  }
  function T(w) {
    m.current = w;
    var R = {
      autocomplete: f.value,
      autocompleteScopeApi: h,
      classNames: p.value.renderer.classNames,
      components: p.value.renderer.components,
      container: p.value.renderer.container,
      html: O.value,
      dom: P.value,
      panelContainer: d.value ? P.value.detachedContainer : p.value.renderer.panelContainer,
      propGetters: v,
      state: m.current,
      renderer: p.value.renderer.renderer
    }, j = !sn(w) && !u.current && p.value.renderer.renderNoResults || p.value.renderer.render;
    jP(R), RP(j, R);
  }
  r(function() {
    var w = f.value.getEnvironmentProps({
      formElement: P.value.form,
      panelElement: P.value.panel,
      inputElement: P.value.input
    });
    return ke(p.value.core.environment, w), function() {
      ke(p.value.core.environment, Object.keys(w).reduce(function(R, j) {
        return wt(wt({}, R), {}, ql({}, j, void 0));
      }, {}));
    };
  }), r(function() {
    var w = d.value ? p.value.core.environment.document.body : p.value.renderer.panelContainer, R = d.value ? P.value.detachedOverlay : P.value.panel;
    return d.value && m.current.isOpen && A(!0), T(m.current), function() {
      w.contains(R) && w.removeChild(R);
    };
  }), r(function() {
    var w = p.value.renderer.container;
    return w.appendChild(P.value.root), function() {
      w.removeChild(P.value.root);
    };
  }), r(function() {
    var w = Us(function(R) {
      var j = R.state;
      T(j);
    }, 0);
    return l.current = function(R) {
      var j = R.state, E = R.prevState;
      if (d.value && E.isOpen !== j.isOpen && A(j.isOpen), !d.value && j.isOpen && !E.isOpen && _(), j.query !== E.query) {
        var U = p.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable");
        U.forEach(function(ee) {
          ee.scrollTop !== 0 && (ee.scrollTop = 0);
        });
      }
      w({
        state: j
      });
    }, function() {
      l.current = void 0;
    };
  }), r(function() {
    var w = Us(function() {
      var R = d.value;
      d.value = p.value.core.environment.matchMedia(p.value.renderer.detachedMediaQuery).matches, R !== d.value ? x({}) : requestAnimationFrame(_);
    }, 20);
    return p.value.core.environment.addEventListener("resize", w), function() {
      p.value.core.environment.removeEventListener("resize", w);
    };
  }), r(function() {
    if (!d.value)
      return function() {
      };
    function w(U) {
      P.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", U);
    }
    function R(U) {
      w(U.matches);
    }
    var j = p.value.core.environment.matchMedia(getComputedStyle(p.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
    w(j.matches);
    var E = Boolean(j.addEventListener);
    return E ? j.addEventListener("change", R) : j.addListener(R), function() {
      E ? j.removeEventListener("change", R) : j.removeListener(R);
    };
  }), r(function() {
    return requestAnimationFrame(_), function() {
    };
  });
  function $() {
    n();
  }
  function x() {
    var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n();
    var R = p.value.renderer, j = R.components, E = EP(R, IP);
    c.current = jl(E, p.value.core, {
      // We need to filter out default components so they can be replaced with
      // a new `renderer`, without getting rid of user components.
      // @MAJOR Deal with registering components with the same name as the
      // default ones. If we disallow overriding default components, we'd just
      // need to pass all `components` here.
      components: hw(j, function(U) {
        var ee = U.value;
        return !ee.hasOwnProperty("__autocomplete_componentName");
      }),
      initialState: m.current
    }, w), s(), i(), f.value.refresh().then(function() {
      T(m.current);
    });
  }
  function A(w) {
    requestAnimationFrame(function() {
      var R = p.value.core.environment.document.body.contains(P.value.detachedOverlay);
      w !== R && (w ? (p.value.core.environment.document.body.appendChild(P.value.detachedOverlay), p.value.core.environment.document.body.classList.add("aa-Detached"), P.value.input.focus()) : (p.value.core.environment.document.body.removeChild(P.value.detachedOverlay), p.value.core.environment.document.body.classList.remove("aa-Detached")));
    });
  }
  return wt(wt({}, h), {}, {
    update: x,
    destroy: $
  });
}
function Eu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eu(Object(r), !0).forEach(function(n) {
      TP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var AP = tP(function(e) {
  return lP($u($u({}, e), {}, {
    userAgents: Hl
  }));
}, "algolia"), CP = AP({
  transformResponse: function(t) {
    return t.hits;
  }
});
function NP(e) {
  var t = e.onTapAhead;
  return {
    item: function(n) {
      var i = n.item, a = n.createElement, o = n.components;
      return i.__autocomplete_qsCategory ? a("div", {
        className: "aa-ItemWrapper"
      }, a("div", {
        className: "aa-ItemContent aa-ItemContent--indented"
      }, a("div", {
        className: "aa-ItemContentSubtitle aa-ItemContentSubtitle--standalone"
      }, a("span", {
        className: "aa-ItemContentSubtitleIcon"
      }), a("span", null, "in", " ", a("span", {
        className: "aa-ItemContentSubtitleCategory"
      }, i.__autocomplete_qsCategory))))) : a("div", {
        className: "aa-ItemWrapper"
      }, a("div", {
        className: "aa-ItemContent"
      }, a("div", {
        className: "aa-ItemIcon aa-ItemIcon--noBorder"
      }, a("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, a("path", {
        d: "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
      }))), a("div", {
        className: "aa-ItemContentBody"
      }, a("div", {
        className: "aa-ItemContentTitle"
      }, a(o.ReverseHighlight, {
        hit: i,
        attribute: "query"
      })))), a("div", {
        className: "aa-ItemActions"
      }, a("button", {
        className: "aa-ItemActionButton",
        title: 'Fill query with "'.concat(i.query, '"'),
        onClick: function(u) {
          u.preventDefault(), u.stopPropagation(), t(i);
        }
      }, a("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, a("path", {
        d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
      })))));
    }
  };
}
function xu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xu(Object(r), !0).forEach(function(n) {
      FP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DP(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = HP(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var c = r.next();
    return a = c.done, c;
  }, e: function(c) {
    o = !0, s = c;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (o)
        throw s;
    }
  } };
}
function HP(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tu(e, t);
  }
}
function Tu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function qP(e) {
  var t = LP(e), r = t.searchClient, n = t.indexName, i = t.getSearchParams, a = t.transformSource, o = t.categoryAttribute, s = t.itemsWithCategories, u = t.categoriesPerItem;
  return {
    name: "aa.querySuggestionsPlugin",
    getSources: function(l) {
      var p = l.query, d = l.setQuery, f = l.refresh, m = l.state;
      function v(h) {
        d("".concat(h.query, " ")), f();
      }
      return [a({
        source: {
          sourceId: "querySuggestionsPlugin",
          getItemInputValue: function(O) {
            var P = O.item;
            return P.query;
          },
          getItems: function() {
            return CP({
              searchClient: r,
              queries: [{
                indexName: n,
                query: p,
                params: i({
                  state: m
                })
              }],
              transformResponse: function(P) {
                var _ = P.hits, T = _[0];
                if (!p || !o)
                  return T;
                var $ = 0;
                return T.reduce(function(x, A) {
                  var w = [A];
                  if ($ < s) {
                    var R = (on(A, Array.isArray(o) ? o : [o]) || []).map(function(ee) {
                      return ee.value;
                    }).slice(0, u);
                    R.length > 0 && $++;
                    var j = DP(R), E;
                    try {
                      for (j.s(); !(E = j.n()).done; ) {
                        var U = E.value;
                        w.push(Ll({
                          __autocomplete_qsCategory: U
                        }, A));
                      }
                    } catch (ee) {
                      j.e(ee);
                    } finally {
                      j.f();
                    }
                  }
                  return x.push.apply(x, w), x;
                }, []);
              }
            });
          },
          templates: NP({
            onTapAhead: v
          })
        },
        onTapAhead: v,
        state: m
      })];
    },
    __autocomplete_pluginOptions: e
  };
}
function LP(e) {
  return Ll({
    getSearchParams: function() {
      return {};
    },
    transformSource: function(r) {
      var n = r.source;
      return n;
    },
    itemsWithCategories: 1,
    categoriesPerItem: 1
  }, e);
}
function Au(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Au(Object(r), !0).forEach(function(n) {
      WP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Au(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nu(e) {
  var t = e.item, r = e.query;
  return Cu(Cu({}, t), {}, {
    _highlightResult: {
      label: {
        value: r ? t.label.replace(new RegExp(r.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi"), function(n) {
          return "__aa-highlight__".concat(n, "__/aa-highlight__");
        }) : t.label
      }
    }
  });
}
var MP = "AUTOCOMPLETE_RECENT_SEARCHES", Fu = "__AUTOCOMPLETE_RECENT_SEARCHES_PLUGIN_TEST_KEY__";
function kP() {
  try {
    return localStorage.setItem(Fu, ""), localStorage.removeItem(Fu), !0;
  } catch {
    return !1;
  }
}
function UP(e) {
  var t = e.key;
  return kP() ? {
    setItem: function(n) {
      return window.localStorage.setItem(t, JSON.stringify(n));
    },
    getItem: function() {
      var n = window.localStorage.getItem(t);
      return n ? JSON.parse(n) : [];
    }
  } : {
    setItem: function() {
    },
    getItem: function() {
      return [];
    }
  };
}
function BP(e) {
  return zP(e) || KP(e) || QP(e) || VP();
}
function VP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QP(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ra(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ra(e, t);
  }
}
function KP(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function zP(e) {
  if (Array.isArray(e))
    return Ra(e);
}
function Ra(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function JP(e) {
  var t = e.key, r = e.limit, n = e.search, i = UP({
    key: t
  });
  return {
    onAdd: function(o) {
      i.setItem([o].concat(BP(i.getItem())));
    },
    onRemove: function(o) {
      i.setItem(i.getItem().filter(function(s) {
        return s.id !== o;
      }));
    },
    getAll: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n({
        query: o,
        items: i.getItem(),
        limit: r
      }).slice(0, r);
    }
  };
}
function GP(e) {
  return {
    addItem: function(r) {
      e.onRemove(r.id), e.onAdd(r);
    },
    removeItem: function(r) {
      e.onRemove(r);
    },
    getAll: function(r) {
      return e.getAll(r);
    }
  };
}
function YP(e) {
  var t = e.onRemove, r = e.onTapAhead;
  return {
    item: function(i) {
      var a = i.item, o = i.createElement, s = i.components;
      return o("div", {
        className: "aa-ItemWrapper"
      }, o("div", {
        className: "aa-ItemContent"
      }, o("div", {
        className: "aa-ItemIcon aa-ItemIcon--noBorder"
      }, o("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, o("path", {
        d: "M12.516 6.984v5.25l4.5 2.672-0.75 1.266-5.25-3.188v-6h1.5zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"
      }))), o("div", {
        className: "aa-ItemContentBody"
      }, o("div", {
        className: "aa-ItemContentTitle"
      }, o(s.ReverseHighlight, {
        hit: a,
        attribute: "label"
      }), a.category && o("span", {
        className: "aa-ItemContentSubtitle aa-ItemContentSubtitle--inline"
      }, o("span", {
        className: "aa-ItemContentSubtitleIcon"
      }), " in", " ", o("span", {
        className: "aa-ItemContentSubtitleCategory"
      }, a.category))))), o("div", {
        className: "aa-ItemActions"
      }, o("button", {
        className: "aa-ItemActionButton",
        title: "Remove this search",
        onClick: function(c) {
          c.preventDefault(), c.stopPropagation(), t(a.id);
        }
      }, o("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, o("path", {
        d: "M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"
      }))), o("button", {
        className: "aa-ItemActionButton",
        title: 'Fill query with "'.concat(a.label, '"'),
        onClick: function(c) {
          c.preventDefault(), c.stopPropagation(), r(a);
        }
      }, o("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, o("path", {
        d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
      })))));
    }
  };
}
function Du(e) {
  return t0(e) || e0(e) || ZP(e) || XP();
}
function XP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZP(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ia(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ia(e, t);
  }
}
function e0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function t0(e) {
  if (Array.isArray(e))
    return Ia(e);
}
function Ia(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Hu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hu(Object(r), !0).forEach(function(n) {
      r0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n0(e) {
  return function(r) {
    var n = r.onSelect;
    n(function(i) {
      var a = i.item, o = i.state, s = i.source, u = s.getItemInputValue({
        item: a,
        state: o
      });
      if (s.sourceId === "querySuggestionsPlugin" && u) {
        var c = {
          id: u,
          label: u,
          category: a.__autocomplete_qsCategory
        };
        e.addItem(c);
      }
    });
  };
}
function i0(e) {
  var t = a0(e), r = t.storage, n = t.transformSource, i = t.subscribe, a = GP(r), o = vr([]);
  return {
    name: "aa.recentSearchesPlugin",
    subscribe: i ?? n0(a),
    onSubmit: function(u) {
      var c = u.state, l = c.query;
      if (l) {
        var p = {
          id: l,
          label: l
        };
        a.addItem(p);
      }
    },
    getSources: function(u) {
      var c = u.query, l = u.setQuery, p = u.refresh, d = u.state;
      o.current = a.getAll(c);
      function f(v) {
        a.removeItem(v), p();
      }
      function m(v) {
        l(v.label), p();
      }
      return Promise.resolve(o.current).then(function(v) {
        return v.length === 0 ? [] : [n({
          source: {
            sourceId: "recentSearchesPlugin",
            getItemInputValue: function(O) {
              var P = O.item;
              return P.label;
            },
            getItems: function() {
              return v;
            },
            templates: YP({
              onRemove: f,
              onTapAhead: m
            })
          },
          onRemove: f,
          onTapAhead: m,
          state: d
        })];
      });
    },
    data: yr(yr({}, a), {}, {
      // @ts-ignore SearchOptions `facetFilters` is ReadonlyArray
      getAlgoliaSearchParams: function() {
        var u, c, l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Array.isArray(o.current) ? yr(yr({}, l), {}, {
          facetFilters: [].concat(Du((u = l.facetFilters) !== null && u !== void 0 ? u : []), Du(o.current.map(function(p) {
            return ["objectID:-".concat(p.label)];
          }))),
          hitsPerPage: Math.max(1, ((c = l.hitsPerPage) !== null && c !== void 0 ? c : 10) - o.current.length)
        }) : (process.env.NODE_ENV !== "production" && er(!1, "The `getAlgoliaSearchParams` function is not supported with storages that return promises in `getAll`."), l);
      }
    }),
    __autocomplete_pluginOptions: e
  };
}
function a0(e) {
  return yr({
    transformSource: function(r) {
      var n = r.source;
      return n;
    }
  }, e);
}
function o0(e) {
  var t = e.query, r = e.items, n = e.limit;
  return t ? r.filter(function(i) {
    return i.label.toLowerCase().includes(t.toLowerCase());
  }).slice(0, n).map(function(i) {
    return Nu({
      item: i,
      query: t
    });
  }) : r.slice(0, n).map(function(i) {
    return Nu({
      item: i,
      query: t
    });
  });
}
function qu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qu(Object(r), !0).forEach(function(n) {
      s0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u0(e) {
  var t = c0(e), r = t.key, n = t.limit, i = t.transformSource, a = t.search, o = t.subscribe, s = JP({
    key: [MP, r].join(":"),
    limit: n,
    search: a
  }), u = i0({
    transformSource: i,
    storage: s,
    subscribe: o
  });
  return Ea(Ea({}, u), {}, {
    name: "aa.localStorageRecentSearchesPlugin",
    __autocomplete_pluginOptions: e
  });
}
function c0(e) {
  return Ea({
    limit: 5,
    search: o0,
    transformSource: function(r) {
      var n = r.source;
      return n;
    }
  }, e);
}
async function l0(e) {
  return await (await (await Lu(e.algoliaApplicationId, e.algoliaApiKey)).initIndex(e.customerCollection)).exists();
}
function f0(e, t) {
  const r = Lu(e.algoliaApplicationId, e.algoliaApiKey), n = Nc();
  r.initIndex(e.customerCollection);
  const i = Wm({
    indexName: e.customerCollection,
    searchClient: r,
    routing: !0
  });
  var a = document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#stats"), o = document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#banner"), s = document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#hits"), u = document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#clear");
  const c = yO(() => {
  });
  i.addWidgets([
    c({}),
    UO({
      container: a
    }),
    iy({
      container: u
    }),
    Vb({
      container: o,
      templates: {
        default: `
              {{#items}}
                <a href="{{link}}">
                <img src={{banner_image}} />
                </a>
              {{/items}}
            `
      }
    }),
    ib({
      container: s,
      templates: {
        item: (O, P) => `
            <a href="${O.link}" ${P("click", O, "pdp clicked")}>
            <div class="card">
            
            
            ${O.image_link ? '<img class="zoom" style="max-width: 100%; max-height: 300px" src=' + O.image_link + ">" : ""}
            ${O.alt_image ? '<img class="zoom" style="max-width: 100%; max-height: 300px" src=' + O.alt_image + ">" : ""}

            ${O.productGroupCode === "Outrunning" ? '<span class="btn-text white-txt uppercase space-no-wrap" style="background-color:#FFA500; padding: 0 16px; color: white;">' + O.productGroupCode + "</span>" : ""}
            ${O.productGroupCode === "Pre-Sale" ? '<span class="btn-text white-txt uppercase space-no-wrap" style="background-color:#ff7a7a; padding: 0 16px; color: white;">' + O.productGroupCode + "</span>" : ""}
            ${O.productGroupCode === "On-Stock", ""}
          

             <div>
             <h1>${O._highlightResult.title.value}</h1>            
              <p class="price">${O.productID} - ${O.colorCode}</p>
              <p class="price">WSP: ${O.currencyCode} ${O.wholesalePrice} - RSP: ${O.currencyCode} ${O.retailPrice}</p>
            </div>
            </a>
          `,
        empty: `<div>We are sorry but there are no results for your search <strong>"{{ query }}"</strong></div>
          <br>
          <div class="js-no-result-search-suggestion">
            <div class="offset-1 flex--col">
                <div class="flex--col ">
                    <h2>Suggestions</h2>
                </div>
                <button class="flex flex--coll">
                    <a href="?PL_TriumphTEST%5Bquery%5D=amourette">Amourette</a>
                </button>
                 <button class="flex flex--coll">
                    <a href="?PL_TriumphTEST%5Bquery%5D=signature%20sheer">Signature Sheer</a>
                </button>
                 <button class="flex flex--coll">
                    <a href="?PL_TriumphTEST%5Bquery%5D=lift%20smart">Lift Smart</a>
                </button>
                <br>
                <a href="#">
                <img style="margin-top:30px;" src=https://images.cmft.io/1115457393585688576/1575458344662081536/1575458344683053056/Frame_1518.jpg />
                </a>     
            </div>
        </div>
          `
      }
    }),
    ll({
      container: document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#dynamic-widgets"),
      fallbackWidget: ({ container: O, attribute: P }) => at({ templates: { header: P } })(
        et
      )({ container: O, attribute: P }),
      widgets: [
        (O) => at({ templates: { header: "Sub-Brand" } })(
          et
        )({
          container: O,
          attribute: "collectionId"
        }),
        (O) => at({ templates: { header: "Series" } })(
          et
        )({
          container: O,
          attribute: "userDefinedField2",
          showMore: !0,
          showMoreLimit: 150
        }),
        (O) => at({ templates: { header: "Lifecycle" } })(
          et
        )({
          container: O,
          attribute: "productGroupCode"
        }),
        (O) => at({ templates: { header: "Segment" } })(
          et
        )({
          container: O,
          attribute: "collectionDesc"
        }),
        (O) => at({ templates: { header: "Product Line" } })(
          et
        )({
          container: O,
          attribute: "categories"
        }),
        (O) => at({ templates: { header: "Color" } })(
          et
        )({
          container: O,
          attribute: "simpleColor",
          limit: 20
        }),
        (O) => at({ templates: { header: "Sizes" } })(
          et
        )({
          container: O,
          attribute: "sizes",
          showMore: !0,
          showMoreLimit: 80
        }),
        (O) => et({
          container: O,
          attribute: "lifecycle",
          cssClasses: { checkbox: "lala" }
        })
      ]
    })
  ]), i.start();
  function l(O) {
    i.setUiState((P) => ({
      ...P,
      [e.customerCollection]: {
        ...P[e.customerCollection],
        // We reset the page when the search state changes.
        page: 1,
        ...O
      }
    }));
  }
  function p() {
    const O = n.read();
    return O && O[e.customerCollection] || {};
  }
  const d = p();
  let f = !1;
  const m = qP({
    searchClient: r,
    indexName: e.customerCollection + "_query_suggestions",
    getSearchParams({ state: O }) {
      return { hitsPerPage: (O.query, 5) };
    }
  }), v = u0({
    key: "RECENT_SEARCH",
    limit: 5
  }), { setQuery: h } = xP({
    container: document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#autocomplete"),
    placeholder: "Search for products",
    plugins: [m, v],
    openOnFocus: !0,
    //debug: true,
    detachedMediaQuery: "none",
    initialState: {
      query: d.query || ""
    },
    onSubmit({ state: O }) {
      l({ query: O.query });
    },
    onReset() {
      l({ query: "" });
    },
    onStateChange({ prevState: O, state: P }) {
      !f && O.query !== P.query && (l({ query: P.query }), i.helper.clearRefinements().search()), f = !1;
    }
  });
  window.addEventListener("popstate", () => {
    var O;
    f = !0, h(((O = i.helper) == null ? void 0 : O.state.query) || "");
  }), document.addEventListener("DOMContentLoaded", function(O) {
    d.query && (document.querySelector(".a4f-searchquery-container").shadowRoot.querySelector("#acm-modal").style.display = "block");
  });
}
async function p0(e, t) {
  await Uf(), console.log("Finished building the modal, starting up Algolia now"), f0(t);
}
class d0 {
  constructor(t, r) {
    l0(r).then((n) => {
      n ? p0(t, r) : console.log("Index not found on Algolia - search field not overriden");
    });
  }
}
window.Search = d0;
export {
  d0 as Search,
  d0 as default
};
