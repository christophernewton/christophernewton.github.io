/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    114: function(t, e) {
      function n(t) {
        var e = new Error("Cannot find module '" + t + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(n.keys = function() {
        return []
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 114)
    },
    116: function(t, e, n) {
      'use strict'
      var r = n(38)
      n.n(r).a
    },
    117: function(t, e, n) {
      ;(t.exports = n(27)(!1)).push([
        t.i,
        '\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}',
        '',
      ])
    },
    128: function(t, e, n) {
      'use strict'
      var r = n(39)
      n.n(r).a
    },
    129: function(t, e, n) {
      ;(t.exports = n(27)(!1)).push([
        t.i,
        '\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}',
        '',
      ])
    },
    130: function(t, e, n) {
      var r = n(131)
      'string' == typeof r && (r = [[t.i, r, '']]),
        r.locals && (t.exports = r.locals)
      ;(0, n(28).default)('1856e9fd', r, !0, { sourceMap: !1 })
    },
    131: function(t, e, n) {
      ;(t.exports = n(27)(!1)).push([
        t.i,
        ':root{--font-family-primary:"Source Sans Pro";--font-family-secondary:"Fredoka One"}body{font-family:Source Sans Pro;font-family:var(--font-family-primary)}',
        '',
      ])
    },
    132: function(t, e, n) {
      'use strict'
      var r = n(40)
      n.n(r).a
    },
    133: function(t, e, n) {
      ;(t.exports = n(27)(!1)).push([
        t.i,
        '\nhtml{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box\n}\n*,:after,:before{box-sizing:border-box;margin:0\n}',
        '',
      ])
    },
    138: function(t, e, n) {
      var r = { './index.js': 139 }
      function o(t) {
        var e = a(t)
        return n(e)
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) {
          var n = new Error("Cannot find module '" + t + "'")
          throw ((n.code = 'MODULE_NOT_FOUND'), n)
        }
        return e
      }
      ;(o.keys = function() {
        return Object.keys(r)
      }),
        (o.resolve = a),
        (t.exports = o),
        (o.id = 138)
    },
    139: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(26)
      e.default = function() {
        return new r.a.Store({
          state: function() {
            return { showLogo: !0 }
          },
          actions: {
            showLogo: function(t) {
              ;(0, t.commit)('setLogo')
            },
          },
          mutations: {
            setLogo: function(t) {
              t.showLogo = !t.showLogo
            },
          },
        })
      }
    },
    140: function(t, e, n) {
      'use strict'
      n.r(e)
      n(60), n(47), n(48)
      var r = n(20),
        o = n.n(r),
        a = (n(36), n(51), n(94), n(3)),
        i = n.n(a),
        s = (n(71), n(72), n(75), n(22), n(54), n(76), n(98), n(110), n(0)),
        u = (n(56), n(114)),
        c = u.keys()
      function p(t) {
        var e = u(t)
        return e.default || e
      }
      var l = {},
        f = !0,
        d = !1,
        h = void 0
      try {
        for (
          var m, v = c[Symbol.iterator]();
          !(f = (m = v.next()).done);
          f = !0
        ) {
          var x = m.value
          l[x.replace(/^\.\//, '').replace(/\.(js|mjs)$/, '')] = p(x)
        }
      } catch (t) {
        ;(d = !0), (h = t)
      } finally {
        try {
          f || null == v.return || v.return()
        } finally {
          if (d) throw h
        }
      }
      var g = l,
        y = n(21),
        w = n.n(y),
        b = n(83),
        _ = n.n(b),
        C = n(58),
        k = function() {
          return Promise.all([n.e(4), n.e(2)])
            .then(n.bind(null, 154))
            .then(function(t) {
              return t.default || t
            })
        }
      s.a.use(C.a), (window.history.scrollRestoration = 'manual')
      var $ = function(t, e, n) {
        var r = !1
        return (
          t.matched.length < 2
            ? (r = { x: 0, y: 0 })
            : t.matched.some(function(t) {
                return t.components.default.options.scrollToTop
              }) && (r = { x: 0, y: 0 }),
          n && (r = n),
          new Promise(function(e) {
            window.$nuxt.$once('triggerScroll', function() {
              if (t.hash) {
                var n = t.hash
                void 0 !== window.CSS &&
                  void 0 !== window.CSS.escape &&
                  (n = '#' + window.CSS.escape(n.substr(1)))
                try {
                  document.querySelector(n) && (r = { selector: n })
                } catch (t) {
                  console.warn(
                    'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                  )
                }
              }
              e(r)
            })
          })
        )
      }
      var E = n(84),
        R = n.n(E).a,
        S = {
          name: 'nuxt-child',
          functional: !0,
          props: ['keepAlive', 'keepAliveProps'],
          render: function(t, e) {
            var n = e.parent,
              r = e.data,
              o = e.props
            r.nuxtChild = !0
            for (
              var a = n,
                i = n.$nuxt.nuxt.transitions,
                s = n.$nuxt.nuxt.defaultTransition,
                u = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && u++, (n = n.$parent)
            r.nuxtChildDepth = u
            var c = i[u] || s,
              p = {}
            j.forEach(function(t) {
              void 0 !== c[t] && (p[t] = c[t])
            })
            var l = {}
            T.forEach(function(t) {
              'function' == typeof c[t] && (l[t] = c[t].bind(a))
            })
            var f = l.beforeEnter
            l.beforeEnter = function(t) {
              if (
                (window.$nuxt.$nextTick(function() {
                  window.$nuxt.$emit('triggerScroll')
                }),
                f)
              )
                return f.call(a, t)
            }
            var d = [t('router-view', r)]
            return (
              void 0 !== o.keepAlive &&
                (d = [t('keep-alive', { props: o.keepAliveProps }, d)]),
              t('transition', { props: p, on: l }, d)
            )
          },
        },
        j = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass',
        ],
        T = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled',
        ],
        A = {
          name: 'nuxt-link',
          functional: !0,
          render: function(t, e) {
            return t('router-link', e.data, e.children)
          },
        },
        N = {
          name: 'nuxt-error',
          props: ['error'],
          head: function() {
            return {
              title: this.message,
              meta: [
                {
                  name: 'viewport',
                  content:
                    'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
                },
              ],
            }
          },
          computed: {
            statusCode: function() {
              return (this.error && this.error.statusCode) || 500
            },
            message: function() {
              return this.error.message || 'Error'
            },
          },
        },
        O = (n(116), n(14)),
        L = Object(O.a)(
          N,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: '__nuxt-error-page' }, [
              n('div', { staticClass: 'error' }, [
                n(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '90',
                      height: '90',
                      fill: '#DBE1EC',
                      viewBox: '0 0 48 48',
                    },
                  },
                  [
                    n('path', {
                      attrs: {
                        d:
                          'M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z',
                      },
                    }),
                  ]
                ),
                t._v(' '),
                n('div', { staticClass: 'title' }, [t._v(t._s(t.message))]),
                t._v(' '),
                404 === t.statusCode
                  ? n(
                      'p',
                      { staticClass: 'description' },
                      [
                        n(
                          'nuxt-link',
                          { staticClass: 'error-link', attrs: { to: '/' } },
                          [t._v('Back to the home page')]
                        ),
                      ],
                      1
                    )
                  : t._e(),
                t._v(' '),
                t._m(0),
              ]),
            ])
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'logo' }, [
                e(
                  'a',
                  {
                    attrs: {
                      href: 'https://nuxtjs.org',
                      target: '_blank',
                      rel: 'noopener',
                    },
                  },
                  [this._v('Nuxt.js')]
                ),
              ])
            },
          ],
          !1,
          null,
          null,
          null
        )
      L.options.__file = 'nuxt-error.vue'
      var M = L.exports,
        P = (n(59),
        n(118),
        n(119),
        n(121),
        n(123),
        n(124),
        n(127),
        function() {
          return {}
        })
      function U(t, e) {
        var n = t.options.data || P
        ;(!e && t.options.hasAsyncData) ||
          ((t.options.hasAsyncData = !0),
          (t.options.data = function() {
            var r = n.call(this)
            return (
              this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
              w()({}, r, e)
            )
          }),
          t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data))
      }
      function q(t) {
        return t.options && t._Ctor === t
          ? t
          : (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = s.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file),
            t)
      }
      function D(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).map(function(r) {
              return e && e.push(n), t.components[r]
            })
          })
        )
      }
      function z(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).reduce(function(r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              )
            }, [])
          })
        )
      }
      function I(t) {
        return Promise.all(
          z(
            t,
            (function() {
              var t = i()(
                regeneratorRuntime.mark(function t(e, n, r, o) {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof e || e.options) {
                              t.next = 4
                              break
                            }
                            return (t.next = 3), e()
                          case 3:
                            e = t.sent
                          case 4:
                            return t.abrupt('return', (r.components[o] = q(e)))
                          case 5:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )
              return function(e, n, r, o) {
                return t.apply(this, arguments)
              }
            })()
          )
        )
      }
      function B(t) {
        return F.apply(this, arguments)
      }
      function F() {
        return (F = i()(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), I(e)
                    case 2:
                      return t.abrupt(
                        'return',
                        w()({}, e, {
                          meta: D(e).map(function(t) {
                            return t.options.meta || {}
                          }),
                        })
                      )
                    case 3:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      function J(t, e) {
        return H.apply(this, arguments)
      }
      function H() {
        return (H = i()(
          regeneratorRuntime.mark(function t(e, n) {
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (n.to ? n.to : n.route,
                        e.context ||
                          ((e.context = {
                            isStatic: !0,
                            isDev: !1,
                            isHMR: !1,
                            app: e,
                            store: e.store,
                            payload: n.payload,
                            error: n.error,
                            base: '/christophernewton.github.io/',
                            env: {},
                          }),
                          n.req && (e.context.req = n.req),
                          n.res && (e.context.res = n.res),
                          (e.context.redirect = function(t, n, r) {
                            if (t) {
                              e.context._redirected = !0
                              var a = o()(n)
                              if (
                                ('number' == typeof t ||
                                  ('undefined' !== a && 'object' !== a) ||
                                  ((r = n || {}),
                                  (n = t),
                                  (a = o()(n)),
                                  (t = 302)),
                                'object' === a &&
                                  (n = e.router.resolve(n).href),
                                !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))
                              )
                                throw ((n = tt(n, r)),
                                window.location.replace(n),
                                new Error('ERR_REDIRECT'))
                              e.context.next({ path: n, query: r, status: t })
                            }
                          }),
                          (e.context.nuxtState = window.__NUXT__)),
                        (e.context.next = n.next),
                        (e.context._redirected = !1),
                        (e.context._errored = !1),
                        (e.context.isHMR = !!n.isHMR),
                        !n.route)
                      ) {
                        t.next = 10
                        break
                      }
                      return (t.next = 9), B(n.route)
                    case 9:
                      e.context.route = t.sent
                    case 10:
                      if (
                        ((e.context.params = e.context.route.params || {}),
                        (e.context.query = e.context.route.query || {}),
                        !n.from)
                      ) {
                        t.next = 16
                        break
                      }
                      return (t.next = 15), B(n.from)
                    case 15:
                      e.context.from = t.sent
                    case 16:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      function K(t, e) {
        var n
        return (
          ((n =
            2 === t.length
              ? new Promise(function(n) {
                  t(e, function(t, r) {
                    t && e.error(t), n((r = r || {}))
                  })
                })
              : t(e)) &&
            (n instanceof Promise || 'function' == typeof n.then)) ||
            (n = Promise.resolve(n)),
          n
        )
      }
      function Q(t, e) {
        var n = window.location.pathname
        return 'hash' === e
          ? window.location.hash.replace(/^#\//, '')
          : (t && 0 === n.indexOf(t) && (n = n.slice(t.length)),
            (n || '/') + window.location.search + window.location.hash)
      }
      function X(t, e) {
        return (function(t) {
          for (var e = new Array(t.length), n = 0; n < t.length; n++)
            'object' === o()(t[n]) &&
              (e[n] = new RegExp('^(?:' + t[n].pattern + ')$'))
          return function(n, r) {
            for (
              var o = '',
                a = n || {},
                i = r || {},
                s = i.pretty ? W : encodeURIComponent,
                u = 0;
              u < t.length;
              u++
            ) {
              var c = t[u]
              if ('string' != typeof c) {
                var p,
                  l = a[c.name]
                if (null == l) {
                  if (c.optional) {
                    c.partial && (o += c.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + c.name + '" to be defined')
                }
                if (Array.isArray(l)) {
                  if (!c.repeat)
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        '`'
                    )
                  if (0 === l.length) {
                    if (c.optional) continue
                    throw new TypeError(
                      'Expected "' + c.name + '" to not be empty'
                    )
                  }
                  for (var f = 0; f < l.length; f++) {
                    if (((p = s(l[f])), !e[u].test(p)))
                      throw new TypeError(
                        'Expected all "' +
                          c.name +
                          '" to match "' +
                          c.pattern +
                          '", but received `' +
                          JSON.stringify(p) +
                          '`'
                      )
                    o += (0 === f ? c.prefix : c.delimiter) + p
                  }
                } else {
                  if (
                    ((p = c.asterisk
                      ? encodeURI(l).replace(/[?#]/g, function(t) {
                          return (
                            '%' +
                            t
                              .charCodeAt(0)
                              .toString(16)
                              .toUpperCase()
                          )
                        })
                      : s(l)),
                    !e[u].test(p))
                  )
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received "' +
                        p +
                        '"'
                    )
                  o += c.prefix + p
                }
              } else o += c
            }
            return o
          }
        })(
          (function(t, e) {
            var n,
              r = [],
              o = 0,
              a = 0,
              i = '',
              s = (e && e.delimiter) || '/'
            for (; null != (n = G.exec(t)); ) {
              var u = n[0],
                c = n[1],
                p = n.index
              if (((i += t.slice(a, p)), (a = p + u.length), c)) i += c[1]
              else {
                var l = t[a],
                  f = n[2],
                  d = n[3],
                  h = n[4],
                  m = n[5],
                  v = n[6],
                  x = n[7]
                i && (r.push(i), (i = ''))
                var g = null != f && null != l && l !== f,
                  y = '+' === v || '*' === v,
                  w = '?' === v || '*' === v,
                  b = n[2] || s,
                  _ = h || m
                r.push({
                  name: d || o++,
                  prefix: f || '',
                  delimiter: b,
                  optional: w,
                  repeat: y,
                  partial: g,
                  asterisk: !!x,
                  pattern: _ ? Z(_) : x ? '.*' : '[^' + Y(b) + ']+?',
                })
              }
            }
            a < t.length && (i += t.substr(a))
            i && r.push(i)
            return r
          })(t, e)
        )
      }
      function V(t, e) {
        var n = {},
          r = w()({}, t, e)
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0)
        return n
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(t) {
          window.onNuxtReadyCbs.push(t)
        })
      var G = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      )
      function W(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function Y(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
      }
      function Z(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1')
      }
      function tt(t, e) {
        var n,
          r = t.indexOf('://')
        ;-1 !== r
          ? ((n = t.substring(0, r)), (t = t.substring(r + 3)))
          : t.startsWith('//') && (t = t.substring(2))
        var o,
          a = t.split('/'),
          i = (n ? n + '://' : '//') + a.shift(),
          s = a.filter(Boolean).join('/')
        return (
          2 === (a = s.split('#')).length && ((s = a[0]), (o = a[1])),
          (i += s ? '/' + s : ''),
          e &&
            '{}' !== JSON.stringify(e) &&
            (i +=
              (2 === t.split('?').length ? '&' : '?') +
              (function(t) {
                return Object.keys(t)
                  .sort()
                  .map(function(e) {
                    var n = t[e]
                    return null == n
                      ? ''
                      : Array.isArray(n)
                        ? n
                            .slice()
                            .map(function(t) {
                              return [e, '=', t].join('')
                            })
                            .join('&')
                        : e + '=' + n
                  })
                  .filter(Boolean)
                  .join('&')
              })(e)),
          (i += o ? '#' + o : '')
        )
      }
      var et = {
          name: 'nuxt',
          props: ['nuxtChildKey', 'keepAlive'],
          render: function(t) {
            return this.nuxt.err
              ? t('nuxt-error', { props: { error: this.nuxt.err } })
              : t('nuxt-child', { key: this.routerViewKey, props: this.$props })
          },
          beforeCreate: function() {
            s.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt)
          },
          computed: {
            routerViewKey: function() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  X(this.$route.matched[0].path)(this.$route.params)
                )
              var t =
                this.$route.matched[0] &&
                this.$route.matched[0].components.default
              return t && t.options && t.options.key
                ? 'function' == typeof t.options.key
                  ? t.options.key(this.$route)
                  : t.options.key
                : this.$route.path
            },
          },
          components: { NuxtChild: S, NuxtError: M },
        },
        nt = {
          name: 'nuxt-loading',
          data: function() {
            return {
              percent: 0,
              show: !1,
              canSuccess: !0,
              throttle: 200,
              duration: 5e3,
              height: '2px',
              color: '#fff',
              failedColor: 'red',
            }
          },
          methods: {
            start: function() {
              var t = this
              return (
                (this.canSuccess = !0),
                this._throttle && clearTimeout(this._throttle),
                this._timer &&
                  (clearInterval(this._timer),
                  (this._timer = null),
                  (this.percent = 0)),
                (this._throttle = setTimeout(function() {
                  ;(t.show = !0),
                    (t._cut = 1e4 / Math.floor(t.duration)),
                    (t._timer = setInterval(function() {
                      t.increase(t._cut * Math.random()),
                        t.percent > 95 && t.finish()
                    }, 100))
                }, this.throttle)),
                this
              )
            },
            set: function(t) {
              return (
                (this.show = !0),
                (this.canSuccess = !0),
                (this.percent = Math.floor(t)),
                this
              )
            },
            get: function() {
              return Math.floor(this.percent)
            },
            increase: function(t) {
              return (this.percent = this.percent + Math.floor(t)), this
            },
            decrease: function(t) {
              return (this.percent = this.percent - Math.floor(t)), this
            },
            finish: function() {
              return (this.percent = 100), this.hide(), this
            },
            pause: function() {
              return clearInterval(this._timer), this
            },
            hide: function() {
              var t = this
              return (
                clearInterval(this._timer),
                (this._timer = null),
                clearTimeout(this._throttle),
                (this._throttle = null),
                setTimeout(function() {
                  ;(t.show = !1),
                    s.a.nextTick(function() {
                      setTimeout(function() {
                        t.percent = 0
                      }, 200)
                    })
                }, 500),
                this
              )
            },
            fail: function() {
              return (this.canSuccess = !1), this
            },
          },
        },
        rt = (n(128),
        Object(O.a)(
          nt,
          function() {
            var t = this.$createElement
            return (this._self._c || t)('div', {
              staticClass: 'nuxt-progress',
              style: {
                width: this.percent + '%',
                height: this.height,
                'background-color': this.canSuccess
                  ? this.color
                  : this.failedColor,
                opacity: this.show ? 1 : 0,
              },
            })
          },
          [],
          !1,
          null,
          null,
          null
        ))
      rt.options.__file = 'nuxt-loading.vue'
      var ot = rt.exports,
        at = (n(130),
        n(132),
        Object(O.a)(
          {},
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e('div', [e('nuxt')], 1)
          },
          [],
          !1,
          null,
          null,
          null
        ))
      at.options.__file = 'default.vue'
      var it = { _default: at.exports },
        st = {
          head: {
            title: 'chrisnewton',
            meta: [
              { charset: 'utf-8' },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
              {
                hid: 'description',
                name: 'description',
                content: 'Portfolio of work',
              },
            ],
            link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
              {
                rel: 'stylesheet',
                href:
                  'https://fonts.googleapis.com/css?family=Fredoka+One|Source+Sans+Pro',
              },
            ],
            style: [],
            script: [],
          },
          render: function(t, e) {
            var n = t('nuxt-loading', { ref: 'loading' }),
              r = t(this.layout || 'nuxt'),
              o = t(
                'div',
                { domProps: { id: '__layout' }, key: this.layoutName },
                [r]
              ),
              a = t(
                'transition',
                { props: { name: 'layout', mode: 'out-in' } },
                [o]
              )
            return t('div', { domProps: { id: '__nuxt' } }, [n, a])
          },
          data: function() {
            return { layout: null, layoutName: '' }
          },
          beforeCreate: function() {
            s.a.util.defineReactive(this, 'nuxt', this.$options.nuxt)
          },
          created: function() {
            ;(s.a.prototype.$nuxt = this),
              'undefined' != typeof window && (window.$nuxt = this),
              (this.error = this.nuxt.error)
          },
          mounted: function() {
            this.$loading = this.$refs.loading
          },
          watch: { 'nuxt.err': 'errorChanged' },
          methods: {
            errorChanged: function() {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(),
                this.$loading.finish && this.$loading.finish())
            },
            setLayout: function(t) {
              return (
                (t && it['_' + t]) || (t = 'default'),
                (this.layoutName = t),
                (this.layout = it['_' + t]),
                this.layout
              )
            },
            loadLayout: function(t) {
              return (
                (t && it['_' + t]) || (t = 'default'),
                Promise.resolve(it['_' + t])
              )
            },
          },
          components: { NuxtLoading: ot },
        },
        ut = (n(134), n(26))
      s.a.use(ut.a)
      var ct = n(138),
        pt = ct.keys(),
        lt = {},
        ft = pt.find(function(t) {
          return t.includes('./index.')
        })
      if ((ft && (lt = Nt(ft)), 'function' != typeof lt)) {
        lt.modules || (lt.modules = {})
        var dt = !0,
          ht = !1,
          mt = void 0
        try {
          for (
            var vt, xt = pt[Symbol.iterator]();
            !(dt = (vt = xt.next()).done);
            dt = !0
          ) {
            var gt = vt.value,
              yt = gt.replace(/^\.\//, '').replace(/\.(js|mjs)$/, '')
            if ('index' !== yt) {
              var wt = yt.split(/\//)
              if (
                ((yt = wt[wt.length - 1]),
                ['state', 'getters', 'actions', 'mutations'].includes(yt))
              ) {
                Lt(Ot(lt, wt, !0), gt, yt)
              } else {
                var bt = 'index' === yt
                bt && wt.pop()
                var _t = Ot(lt, wt),
                  Ct = Nt(gt)
                if (((_t[(yt = wt.pop())] = _t[yt] || {}), bt)) {
                  var kt = {}
                  if (_t[yt].appends) {
                    kt.appends = _t[yt].appends
                    var $t = !0,
                      Et = !1,
                      Rt = void 0
                    try {
                      for (
                        var St, jt = _t[yt].appends[Symbol.iterator]();
                        !($t = (St = jt.next()).done);
                        $t = !0
                      ) {
                        var Tt = St.value
                        kt[Tt] = _t[yt][Tt]
                      }
                    } catch (t) {
                      ;(Et = !0), (Rt = t)
                    } finally {
                      try {
                        $t || null == jt.return || jt.return()
                      } finally {
                        if (Et) throw Rt
                      }
                    }
                  }
                  ;(_t[yt] = Object.assign({}, _t[yt], Ct, kt)),
                    (_t[yt].namespaced = !0)
                } else
                  (_t[yt] = Object.assign({}, Ct, _t[yt])),
                    (_t[yt].namespaced = !0)
              }
            }
          }
        } catch (t) {
          ;(ht = !0), (mt = t)
        } finally {
          try {
            dt || null == xt.return || xt.return()
          } finally {
            if (ht) throw mt
          }
        }
      }
      var At =
        lt instanceof Function
          ? lt
          : function() {
              return new ut.a.Store(
                Object.assign({ strict: !1 }, lt, {
                  state: lt.state instanceof Function ? lt.state() : {},
                })
              )
            }
      function Nt(t) {
        var e = ct(t),
          n = e.default || e
        if (n.commit)
          throw new Error(
            '[nuxt] store/' +
              t.replace('./', '') +
              ' should export a method which returns a Vuex instance.'
          )
        if (n.state && 'function' != typeof n.state)
          throw new Error(
            '[nuxt] state should be a function in store/' + t.replace('./', '')
          )
        return n
      }
      function Ot(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        if (1 === e.length) return n ? t : t.modules
        var r = e.shift()
        return (
          (t.modules[r] = t.modules[r] || {}),
          (t.modules[r].namespaced = !0),
          (t.modules[r].modules = t.modules[r].modules || {}),
          Ot(t.modules[r], e, n)
        )
      }
      function Lt(t, e, n) {
        var r = ct(e)
        ;(t.appends = t.appends || []),
          t.appends.push(n),
          (t[n] = r.default || r)
      }
      s.a.component(R.name, R),
        s.a.component(S.name, S),
        s.a.component(A.name, A),
        s.a.component(et.name, et),
        s.a.use(_.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid',
        })
      var Mt = {
        name: 'page',
        mode: 'out-in',
        appear: !1,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to',
      }
      function Pt() {
        return (Pt = i()(
          regeneratorRuntime.mark(function t(e) {
            var n, r, o, a, i, u, c
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        new C.a({
                          mode: 'history',
                          base: '/christophernewton.github.io/',
                          linkActiveClass: 'nuxt-link-active',
                          linkExactActiveClass: 'nuxt-link-exact-active',
                          scrollBehavior: $,
                          routes: [{ path: '/', component: k, name: 'index' }],
                          fallback: !1,
                        })
                      )
                    case 2:
                      return (
                        (n = t.sent),
                        ((r = At(e)).$router = n),
                        (o = r.registerModule),
                        (r.registerModule = function(t, e, n) {
                          return o.call(
                            r,
                            t,
                            e,
                            Object.assign({ preserveState: !0 }, n)
                          )
                        }),
                        (a = w()(
                          {
                            router: n,
                            store: r,
                            nuxt: {
                              defaultTransition: Mt,
                              transitions: [Mt],
                              setTransitions: function(t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function(t) {
                                    return (t = t
                                      ? 'string' == typeof t
                                        ? Object.assign({}, Mt, { name: t })
                                        : Object.assign({}, Mt, t)
                                      : Mt)
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                )
                              },
                              err: null,
                              dateErr: null,
                              error: function(t) {
                                ;(t = t || null),
                                  (a.context._errored = !!t),
                                  'string' == typeof t &&
                                    (t = { statusCode: 500, message: t })
                                var n = this.nuxt || this.$options.nuxt
                                return (
                                  (n.dateErr = Date.now()),
                                  (n.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                )
                              },
                            },
                          },
                          st
                        )),
                        (r.app = a),
                        (i = e
                          ? e.next
                          : function(t) {
                              return a.router.push(t)
                            }),
                        e
                          ? (u = n.resolve(e.url).route)
                          : ((c = Q(n.options.base)), (u = n.resolve(c).route)),
                        (t.next = 13),
                        J(a, {
                          route: u,
                          next: i,
                          error: a.nuxt.error.bind(a),
                          store: r,
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        })
                      )
                    case 13:
                      ;(function(t, e) {
                        if (!t)
                          throw new Error(
                            'inject(key, value) has no key provided'
                          )
                        if (!e)
                          throw new Error(
                            'inject(key, value) has no value provided'
                          )
                        ;(a[(t = '$' + t)] = e), (r[t] = a[t])
                        var n = '__nuxt_' + t + '_installed__'
                        s.a[n] ||
                          ((s.a[n] = !0),
                          s.a.use(function() {
                            s.a.prototype.hasOwnProperty(t) ||
                              Object.defineProperty(s.a.prototype, t, {
                                get: function() {
                                  return this.$root.$options[t]
                                },
                              })
                          }))
                      },
                        window.__NUXT__ &&
                          window.__NUXT__.state &&
                          r.replaceState(window.__NUXT__.state),
                        (t.next = 18))
                      break
                    case 18:
                      return t.abrupt('return', { app: a, router: n, store: r })
                    case 19:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      var Ut,
        qt,
        Dt = [],
        zt = window.__NUXT__ || {}
      function It(t, e, n) {
        var r = function(t) {
          var r =
            (function(t, e) {
              if (!t || !t.options || !t.options[e]) return {}
              var n = t.options[e]
              if ('function' == typeof n) {
                for (
                  var r = arguments.length,
                    o = new Array(r > 2 ? r - 2 : 0),
                    a = 2;
                  a < r;
                  a++
                )
                  o[a - 2] = arguments[a]
                return n.apply(void 0, o)
              }
              return n
            })(t, 'transition', e, n) || {}
          return 'string' == typeof r ? { name: r } : r
        }
        return t.map(function(t) {
          var e = Object.assign({}, r(t))
          if (n && n.matched.length && n.matched[0].components.default) {
            var o = r(n.matched[0].components.default)
            Object.keys(o)
              .filter(function(t) {
                return o[t] && t.toLowerCase().includes('leave')
              })
              .forEach(function(t) {
                e[t] = o[t]
              })
          }
          return e
        })
      }
      function Bt(t, e, n) {
        return Ft.apply(this, arguments)
      }
      function Ft() {
        return (Ft = i()(
          regeneratorRuntime.mark(function t(e, n, r) {
            var o,
              a,
              i = this
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this._pathChanged =
                          !!Ut.nuxt.err || n.path !== e.path),
                        (this._queryChanged =
                          JSON.stringify(e.query) !== JSON.stringify(n.query)),
                        (this._diffQuery = this._queryChanged
                          ? V(e.query, n.query)
                          : []),
                        this._pathChanged &&
                          this.$loading.start &&
                          !this.$loading.manual &&
                          this.$loading.start(),
                        (t.prev = 4),
                        (t.next = 7),
                        I(e)
                      )
                    case 7:
                      ;(o = t.sent),
                        !this._pathChanged &&
                          this._queryChanged &&
                          o.some(function(t) {
                            var e = t.options.watchQuery
                            return (
                              !0 === e ||
                              (!!Array.isArray(e) &&
                                e.some(function(t) {
                                  return i._diffQuery[t]
                                }))
                            )
                          }) &&
                          this.$loading.start &&
                          !this.$loading.manual &&
                          this.$loading.start(),
                        r(),
                        (t.next = 19)
                      break
                    case 12:
                      ;(t.prev = 12),
                        (t.t0 = t.catch(4)),
                        (t.t0 = t.t0 || {}),
                        (a =
                          t.t0.statusCode ||
                          t.t0.status ||
                          (t.t0.response && t.t0.response.status) ||
                          500),
                        this.error({ statusCode: a, message: t.t0.message }),
                        this.$nuxt.$emit('routeChanged', e, n, t.t0),
                        r(!1)
                    case 19:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this,
              [[4, 12]]
            )
          })
        )).apply(this, arguments)
      }
      function Jt(t, e) {
        return zt.serverRendered && e && U(t, e), (t._Ctor = t), t
      }
      function Ht(t, e, n) {
        var r = this,
          o = [],
          a = !1
        if (
          (void 0 !== n &&
            ((o = []),
            n.middleware && (o = o.concat(n.middleware)),
            t.forEach(function(t) {
              t.options.middleware && (o = o.concat(t.options.middleware))
            })),
          (o = o.map(function(t) {
            return 'function' == typeof t
              ? t
              : ('function' != typeof g[t] &&
                  ((a = !0),
                  r.error({
                    statusCode: 500,
                    message: 'Unknown middleware ' + t,
                  })),
                g[t])
          })),
          !a)
        )
          return (function t(e, n) {
            return !e.length || n._redirected || n._errored
              ? Promise.resolve()
              : K(e[0], n).then(function() {
                  return t(e.slice(1), n)
                })
          })(o, e)
      }
      function Kt(t, e, n) {
        return Qt.apply(this, arguments)
      }
      function Qt() {
        return (Qt = i()(
          regeneratorRuntime.mark(function t(e, n, r) {
            var o,
              a,
              i,
              u,
              c,
              p,
              l,
              f,
              d,
              h,
              m,
              v,
              x,
              g,
              y,
              w,
              b = this
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !1 !== this._pathChanged ||
                        !1 !== this._queryChanged
                      ) {
                        t.next = 2
                        break
                      }
                      return t.abrupt('return', r())
                    case 2:
                      return (
                        (Dt =
                          e === n
                            ? []
                            : D(n, (o = [])).map(function(t, e) {
                                return X(n.matched[o[e]].path)(n.params)
                              })),
                        (a = !1),
                        (i = function(t) {
                          n.path === t.path &&
                            b.$loading.finish &&
                            b.$loading.finish(),
                            n.path !== t.path &&
                              b.$loading.pause &&
                              b.$loading.pause(),
                            a || ((a = !0), r(t))
                        }),
                        (t.next = 7),
                        J(Ut, { route: e, from: n, next: i.bind(this) })
                      )
                    case 7:
                      if (
                        ((this._dateLastError = Ut.nuxt.dateErr),
                        (this._hadError = !!Ut.nuxt.err),
                        (c = D(e, (u = []))).length)
                      ) {
                        t.next = 25
                        break
                      }
                      return (t.next = 14), Ht.call(this, c, Ut.context)
                    case 14:
                      if (!a) {
                        t.next = 16
                        break
                      }
                      return t.abrupt('return')
                    case 16:
                      return (
                        (t.next = 18),
                        this.loadLayout(
                          'function' == typeof M.layout
                            ? M.layout(Ut.context)
                            : M.layout
                        )
                      )
                    case 18:
                      return (
                        (p = t.sent),
                        (t.next = 21),
                        Ht.call(this, c, Ut.context, p)
                      )
                    case 21:
                      if (!a) {
                        t.next = 23
                        break
                      }
                      return t.abrupt('return')
                    case 23:
                      return (
                        Ut.context.error({
                          statusCode: 404,
                          message: 'This page could not be found',
                        }),
                        t.abrupt('return', r())
                      )
                    case 25:
                      return (
                        c.forEach(function(t) {
                          t._Ctor &&
                            t._Ctor.options &&
                            ((t.options.asyncData = t._Ctor.options.asyncData),
                            (t.options.fetch = t._Ctor.options.fetch))
                        }),
                        this.setTransitions(It(c, e, n)),
                        (t.prev = 27),
                        (t.next = 30),
                        Ht.call(this, c, Ut.context)
                      )
                    case 30:
                      if (!a) {
                        t.next = 32
                        break
                      }
                      return t.abrupt('return')
                    case 32:
                      if (!Ut.context._errored) {
                        t.next = 34
                        break
                      }
                      return t.abrupt('return', r())
                    case 34:
                      return (
                        'function' == typeof (l = c[0].options.layout) &&
                          (l = l(Ut.context)),
                        (t.next = 38),
                        this.loadLayout(l)
                      )
                    case 38:
                      return (
                        (l = t.sent),
                        (t.next = 41),
                        Ht.call(this, c, Ut.context, l)
                      )
                    case 41:
                      if (!a) {
                        t.next = 43
                        break
                      }
                      return t.abrupt('return')
                    case 43:
                      if (!Ut.context._errored) {
                        t.next = 45
                        break
                      }
                      return t.abrupt('return', r())
                    case 45:
                      ;(f = !0),
                        (t.prev = 46),
                        (d = !0),
                        (h = !1),
                        (m = void 0),
                        (t.prev = 50),
                        (v = c[Symbol.iterator]())
                    case 52:
                      if ((d = (x = v.next()).done)) {
                        t.next = 64
                        break
                      }
                      if ('function' == typeof (g = x.value).options.validate) {
                        t.next = 56
                        break
                      }
                      return t.abrupt('continue', 61)
                    case 56:
                      return (t.next = 58), g.options.validate(Ut.context)
                    case 58:
                      if ((f = t.sent)) {
                        t.next = 61
                        break
                      }
                      return t.abrupt('break', 64)
                    case 61:
                      ;(d = !0), (t.next = 52)
                      break
                    case 64:
                      t.next = 70
                      break
                    case 66:
                      ;(t.prev = 66), (t.t0 = t.catch(50)), (h = !0), (m = t.t0)
                    case 70:
                      ;(t.prev = 70),
                        (t.prev = 71),
                        d || null == v.return || v.return()
                    case 73:
                      if (((t.prev = 73), !h)) {
                        t.next = 76
                        break
                      }
                      throw m
                    case 76:
                      return t.finish(73)
                    case 77:
                      return t.finish(70)
                    case 78:
                      t.next = 84
                      break
                    case 80:
                      return (
                        (t.prev = 80),
                        (t.t1 = t.catch(46)),
                        this.error({
                          statusCode: t.t1.statusCode || '500',
                          message: t.t1.message,
                        }),
                        t.abrupt('return', r())
                      )
                    case 84:
                      if (f) {
                        t.next = 87
                        break
                      }
                      return (
                        this.error({
                          statusCode: 404,
                          message: 'This page could not be found',
                        }),
                        t.abrupt('return', r())
                      )
                    case 87:
                      return (
                        (t.next = 89),
                        Promise.all(
                          c.map(function(t, n) {
                            if (
                              ((t._path = X(e.matched[u[n]].path)(e.params)),
                              (t._dataRefresh = !1),
                              (b._pathChanged && b._queryChanged) ||
                                t._path !== Dt[n])
                            )
                              t._dataRefresh = !0
                            else if (!b._pathChanged && b._queryChanged) {
                              var r = t.options.watchQuery
                              !0 === r
                                ? (t._dataRefresh = !0)
                                : Array.isArray(r) &&
                                  (t._dataRefresh = r.some(function(t) {
                                    return b._diffQuery[t]
                                  }))
                            }
                            if (!b._hadError && b._isMounted && !t._dataRefresh)
                              return Promise.resolve()
                            var o = [],
                              a =
                                t.options.asyncData &&
                                'function' == typeof t.options.asyncData,
                              i = !!t.options.fetch,
                              s = a && i ? 30 : 45
                            if (a) {
                              var c = K(t.options.asyncData, Ut.context).then(
                                function(e) {
                                  U(t, e),
                                    b.$loading.increase &&
                                      b.$loading.increase(s)
                                }
                              )
                              o.push(c)
                            }
                            if (
                              ((b.$loading.manual = !1 === t.options.loading),
                              i)
                            ) {
                              var p = t.options.fetch(Ut.context)
                              ;(p &&
                                (p instanceof Promise ||
                                  'function' == typeof p.then)) ||
                                (p = Promise.resolve(p)),
                                p.then(function(t) {
                                  b.$loading.increase && b.$loading.increase(s)
                                }),
                                o.push(p)
                            }
                            return Promise.all(o)
                          })
                        )
                      )
                    case 89:
                      a ||
                        (this.$loading.finish &&
                          !this.$loading.manual &&
                          this.$loading.finish(),
                        r()),
                        (t.next = 111)
                      break
                    case 92:
                      if (((t.prev = 92), (t.t2 = t.catch(27)), t.t2)) {
                        t.next = 98
                        break
                      }
                      ;(t.t2 = {}), (t.next = 100)
                      break
                    case 98:
                      if ('ERR_REDIRECT' !== t.t2.message) {
                        t.next = 100
                        break
                      }
                      return t.abrupt(
                        'return',
                        this.$nuxt.$emit('routeChanged', e, n, t.t2)
                      )
                    case 100:
                      return (
                        (Dt = []),
                        (y = t.t2.response && t.t2.response.status),
                        (t.t2.statusCode =
                          t.t2.statusCode || t.t2.status || y || 500),
                        (_ = t.t2),
                        s.a.config.errorHandler && s.a.config.errorHandler(_),
                        'function' == typeof (w = M.layout) &&
                          (w = w(Ut.context)),
                        (t.next = 108),
                        this.loadLayout(w)
                      )
                    case 108:
                      this.error(t.t2),
                        this.$nuxt.$emit('routeChanged', e, n, t.t2),
                        r(!1)
                    case 111:
                    case 'end':
                      return t.stop()
                  }
                var _
              },
              t,
              this,
              [[27, 92], [46, 80], [50, 66, 70, 78], [71, , 73, 77]]
            )
          })
        )).apply(this, arguments)
      }
      function Xt(t, e) {
        z(t, function(t, e, n, r) {
          return (
            'object' !== o()(t) ||
              t.options ||
              (((t = s.a.extend(t))._Ctor = t), (n.components[r] = t)),
            t
          )
        })
      }
      function Vt(t) {
        this._hadError &&
          this._dateLastError === this.$options.nuxt.dateErr &&
          this.error()
        var e = this.$options.nuxt.err
          ? M.layout
          : t.matched[0].components.default.options.layout
        'function' == typeof e && (e = e(Ut.context)), this.setLayout(e)
      }
      function Gt(t, e) {
        var n = this
        ;(!1 === this._pathChanged && !1 === this._queryChanged) ||
          s.a.nextTick(function() {
            var e = [],
              r = (function(t) {
                var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1]
                return Array.prototype.concat.apply(
                  [],
                  t.matched.map(function(t, n) {
                    return Object.keys(t.instances).map(function(r) {
                      return e && e.push(n), t.instances[r]
                    })
                  })
                )
              })(t, e),
              o = D(t, e)
            r.forEach(function(t, e) {
              if (
                t &&
                t.constructor._dataRefresh &&
                o[e] === t.constructor &&
                'function' == typeof t.constructor.options.data
              ) {
                var n = t.constructor.options.data.call(t)
                for (var r in n) s.a.set(t.$data, r, n[r])
              }
            }),
              Vt.call(n, t)
          })
      }
      function Wt(t) {
        window.onNuxtReadyCbs.forEach(function(e) {
          'function' == typeof e && e(t)
        }),
          'function' == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
          qt.afterEach(function(e, n) {
            s.a.nextTick(function() {
              return t.$nuxt.$emit('routeChanged', e, n)
            })
          })
      }
      function Yt() {
        return (Yt = i()(
          regeneratorRuntime.mark(function t(e) {
            var n, r, o, a
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (Ut = e.app),
                        (qt = e.router),
                        e.store,
                        (t.next = 5),
                        Promise.all(
                          ((c = void 0),
                          (c = Q((u = qt).options.base, u.options.mode)),
                          z(
                            u.match(c),
                            (function() {
                              var t = i()(
                                regeneratorRuntime.mark(function t(
                                  e,
                                  n,
                                  r,
                                  o,
                                  a
                                ) {
                                  var i
                                  return regeneratorRuntime.wrap(
                                    function(t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (
                                              'function' != typeof e ||
                                              e.options
                                            ) {
                                              t.next = 4
                                              break
                                            }
                                            return (t.next = 3), e()
                                          case 3:
                                            e = t.sent
                                          case 4:
                                            return (
                                              (i = Jt(
                                                q(e),
                                                zt.data ? zt.data[a] : null
                                              )),
                                              (r.components[o] = i),
                                              t.abrupt('return', i)
                                            )
                                          case 7:
                                          case 'end':
                                            return t.stop()
                                        }
                                    },
                                    t,
                                    this
                                  )
                                })
                              )
                              return function(e, n, r, o, a) {
                                return t.apply(this, arguments)
                              }
                            })()
                          ))
                        )
                      )
                    case 5:
                      return (
                        (n = t.sent),
                        (r = new s.a(Ut)),
                        (o = zt.layout || 'default'),
                        (t.next = 10),
                        r.loadLayout(o)
                      )
                    case 10:
                      if (
                        (r.setLayout(o),
                        (a = function() {
                          r.$mount('#__nuxt'),
                            s.a.nextTick(function() {
                              Wt(r)
                            })
                        }),
                        (r.setTransitions = r.$options.nuxt.setTransitions.bind(
                          r
                        )),
                        n.length &&
                          (r.setTransitions(It(n, qt.currentRoute)),
                          (Dt = qt.currentRoute.matched.map(function(t) {
                            return X(t.path)(qt.currentRoute.params)
                          }))),
                        (r.$loading = {}),
                        zt.error && r.error(zt.error),
                        qt.beforeEach(Bt.bind(r)),
                        qt.beforeEach(Kt.bind(r)),
                        qt.afterEach(Xt),
                        qt.afterEach(Gt.bind(r)),
                        !zt.serverRendered)
                      ) {
                        t.next = 23
                        break
                      }
                      return a(), t.abrupt('return')
                    case 23:
                      Kt.call(r, qt.currentRoute, qt.currentRoute, function(t) {
                        if (!t)
                          return (
                            Xt(qt.currentRoute, qt.currentRoute),
                            Vt.call(r, qt.currentRoute),
                            void a()
                          )
                        qt.push(
                          t,
                          function() {
                            return a()
                          },
                          function(t) {
                            if (!t) return a()
                            console.error(t)
                          }
                        )
                      })
                    case 24:
                    case 'end':
                      return t.stop()
                  }
                var u, c
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      Object.assign(s.a.config, { silent: !0, performance: !1 }),
        (function(t) {
          return Pt.apply(this, arguments)
        })()
          .then(function(t) {
            return Yt.apply(this, arguments)
          })
          .catch(function(t) {
            console.error('[nuxt] Error while initializing app', t)
          })
    },
    27: function(t, e) {
      t.exports = function(t) {
        var e = []
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var n = (function(t, e) {
                var n = t[1] || '',
                  r = t[3]
                if (!r) return n
                if (e && 'function' == typeof btoa) {
                  var o = ((i = r),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                      ' */'),
                    a = r.sources.map(function(t) {
                      return '/*# sourceURL=' + r.sourceRoot + t + ' */'
                    })
                  return [n]
                    .concat(a)
                    .concat([o])
                    .join('\n')
                }
                var i
                return [n].join('\n')
              })(e, t)
              return e[2] ? '@media ' + e[2] + '{' + n + '}' : n
            }).join('')
          }),
          (e.i = function(t, n) {
            'string' == typeof t && (t = [[null, t, '']])
            for (var r = {}, o = 0; o < this.length; o++) {
              var a = this[o][0]
              'number' == typeof a && (r[a] = !0)
            }
            for (o = 0; o < t.length; o++) {
              var i = t[o]
              ;('number' == typeof i[0] && r[i[0]]) ||
                (n && !i[2]
                  ? (i[2] = n)
                  : n && (i[2] = '(' + i[2] + ') and (' + n + ')'),
                e.push(i))
            }
          }),
          e
        )
      }
    },
    28: function(t, e, n) {
      'use strict'
      function r(t, e) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
          var a = e[o],
            i = a[0],
            s = { id: t + ':' + o, css: a[1], media: a[2], sourceMap: a[3] }
          r[i] ? r[i].parts.push(s) : n.push((r[i] = { id: i, parts: [s] }))
        }
        return n
      }
      n.r(e),
        n.d(e, 'default', function() {
          return h
        })
      var o = 'undefined' != typeof document
      if ('undefined' != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        )
      var a = {},
        i = o && (document.head || document.getElementsByTagName('head')[0]),
        s = null,
        u = 0,
        c = !1,
        p = function() {},
        l = null,
        f = 'data-vue-ssr-id',
        d =
          'undefined' != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
      function h(t, e, n, o) {
        ;(c = n), (l = o || {})
        var i = r(t, e)
        return (
          m(i),
          function(e) {
            for (var n = [], o = 0; o < i.length; o++) {
              var s = i[o]
              ;(u = a[s.id]).refs--, n.push(u)
            }
            e ? m((i = r(t, e))) : (i = [])
            for (o = 0; o < n.length; o++) {
              var u
              if (0 === (u = n[o]).refs) {
                for (var c = 0; c < u.parts.length; c++) u.parts[c]()
                delete a[u.id]
              }
            }
          }
        )
      }
      function m(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e],
            r = a[n.id]
          if (r) {
            r.refs++
            for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o])
            for (; o < n.parts.length; o++) r.parts.push(x(n.parts[o]))
            r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
          } else {
            var i = []
            for (o = 0; o < n.parts.length; o++) i.push(x(n.parts[o]))
            a[n.id] = { id: n.id, refs: 1, parts: i }
          }
        }
      }
      function v() {
        var t = document.createElement('style')
        return (t.type = 'text/css'), i.appendChild(t), t
      }
      function x(t) {
        var e,
          n,
          r = document.querySelector('style[' + f + '~="' + t.id + '"]')
        if (r) {
          if (c) return p
          r.parentNode.removeChild(r)
        }
        if (d) {
          var o = u++
          ;(r = s || (s = v())),
            (e = w.bind(null, r, o, !1)),
            (n = w.bind(null, r, o, !0))
        } else
          (r = v()),
            (e = function(t, e) {
              var n = e.css,
                r = e.media,
                o = e.sourceMap
              r && t.setAttribute('media', r)
              l.ssrId && t.setAttribute(f, e.id)
              o &&
                ((n += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */'))
              if (t.styleSheet) t.styleSheet.cssText = n
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild)
                t.appendChild(document.createTextNode(n))
              }
            }.bind(null, r)),
            (n = function() {
              r.parentNode.removeChild(r)
            })
        return (
          e(t),
          function(r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return
              e((t = r))
            } else n()
          }
        )
      }
      var g,
        y = ((g = []),
        function(t, e) {
          return (g[t] = e), g.filter(Boolean).join('\n')
        })
      function w(t, e, n, r) {
        var o = n ? '' : r.css
        if (t.styleSheet) t.styleSheet.cssText = y(e, o)
        else {
          var a = document.createTextNode(o),
            i = t.childNodes
          i[e] && t.removeChild(i[e]),
            i.length ? t.insertBefore(a, i[e]) : t.appendChild(a)
        }
      }
    },
    38: function(t, e, n) {
      var r = n(117)
      'string' == typeof r && (r = [[t.i, r, '']]),
        r.locals && (t.exports = r.locals)
      ;(0, n(28).default)('45b1ddea', r, !0, { sourceMap: !1 })
    },
    39: function(t, e, n) {
      var r = n(129)
      'string' == typeof r && (r = [[t.i, r, '']]),
        r.locals && (t.exports = r.locals)
      ;(0, n(28).default)('fd547dac', r, !0, { sourceMap: !1 })
    },
    40: function(t, e, n) {
      var r = n(133)
      'string' == typeof r && (r = [[t.i, r, '']]),
        r.locals && (t.exports = r.locals)
      ;(0, n(28).default)('371b8fbf', r, !0, { sourceMap: !1 })
    },
    84: function(t, e, n) {
      'use strict'
      var r = {
        name: 'no-ssr',
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: 'div' },
        },
        render: function(t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            a = r(),
            i = a.default,
            s = a.placeholder
          return n._isMounted
            ? i
            : (n.$once('hook:mounted', function() {
                n.$forceUpdate()
              }),
              t(
                o.placeholderTag,
                { class: ['no-ssr-placeholder'] },
                o.placeholder || s
              ))
        },
      }
      t.exports = r
    },
    85: function(t, e, n) {
      t.exports = n(140)
    },
  },
  [[85, 3, 1]],
])
