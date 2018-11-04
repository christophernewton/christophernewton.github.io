;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    141: function(e, t, n) {
      var o = n(147)
      'string' == typeof o && (o = [[e.i, o, '']]),
        o.locals && (e.exports = o.locals)
      ;(0, n(28).default)('28c0ad17', o, !0, { sourceMap: !1 })
    },
    142: function(e, t, n) {
      var o = n(149)
      'string' == typeof o && (o = [[e.i, o, '']]),
        o.locals && (e.exports = o.locals)
      ;(0, n(28).default)('32f73acc', o, !0, { sourceMap: !1 })
    },
    143: function(e, t, n) {
      var o = n(151)
      'string' == typeof o && (o = [[e.i, o, '']]),
        o.locals && (e.exports = o.locals)
      ;(0, n(28).default)('14b1c0b7', o, !0, { sourceMap: !1 })
    },
    144: function(e, t, n) {
      var o = n(153)
      'string' == typeof o && (o = [[e.i, o, '']]),
        o.locals && (e.exports = o.locals)
      ;(0, n(28).default)('900e05d6', o, !0, { sourceMap: !1 })
    },
    146: function(e, t, n) {
      'use strict'
      var o = n(141),
        a = n.n(o)
      t.default = a.a
    },
    147: function(e, t, n) {
      ;(t = e.exports = n(27)(!1)).push([
        e.i,
        '\n.box_MlF7D{width:100%;height:100%;pointer-events:none\n}\n.box_MlF7D,.image_3Xu0J{position:absolute;z-index:5\n}\n.image_3Xu0J{width:300px;height:300px;top:50%;left:50%;-webkit-transform:translate(calc(-50% - 6px),-50%);transform:translate(calc(-50% - 6px),-50%)\n}\n.enter_1RIE5{color:#fff\n}',
        '',
      ]),
        (t.locals = {
          box: 'box_MlF7D',
          image: 'image_3Xu0J',
          enter: 'enter_1RIE5',
        })
    },
    148: function(e, t, n) {
      'use strict'
      var o = n(142)
      n.n(o).a
    },
    149: function(e, t, n) {
      ;(e.exports = n(27)(!1)).push([
        e.i,
        '\n:root{--block-blue:#2ab7ca;--block-red:#e01a4f;--block-yellow:#2a2d34;--block-green:#16db93\n}\n.blockBlue{background:#2ab7ca;background:var(--block-blue);left:0\n}\n.blockBlue,.blockRed{color:#fff;position:absolute;top:0;width:50%;height:50%\n}\n.blockRed{background:#e01a4f;background:var(--block-red);right:0\n}\n.blockYellow{background:#2a2d34;background:var(--block-yellow);left:0\n}\n.blockGreen,.blockYellow{color:#fff;position:absolute;bottom:0;width:50%;height:50%\n}\n.blockGreen{background:#16db93;background:var(--block-green);right:0\n}\n.letters{display:inline-block;font-size:24px;font-weight:700;position:relative;z-index:2\n}\n.block:hover{cursor:pointer\n}\n.block{justify-content:center\n}\n.block,.content{display:flex;align-items:center\n}\n.content{position:absolute\n}\n.full-true{z-index:10\n}\n.full-false{overflow:hidden\n}\n.container{max-width:990px;margin:auto;padding:40px 20px\n}\n.container,.containerblockBlue{background:#2ab7ca;background:var(--block-blue)\n}\n.containerblockRed{background:#e01a4f;background:var(--block-red)\n}\n.containerblockYellow{background:#2a2d34;background:var(--block-yellow)\n}\n.containerblockGreen{background:#16db93;background:var(--block-green)\n}',
        '',
      ])
    },
    150: function(e, t, n) {
      'use strict'
      var o = n(143),
        a = n.n(o)
      t.default = a.a
    },
    151: function(e, t, n) {
      ;(t = e.exports = n(27)(!1)).push([
        e.i,
        '\n.title_3lvoG{font-size:24px\n}\n.title_3lvoG,h2{font-family:Fredoka One;font-family:var(--font-family-secondary);font-weight:400\n}\np{margin-bottom:24px\n}\na{color:hsla(0,0%,100%,.7);font-weight:700\n}',
        '',
      ]),
        (t.locals = { title: 'title_3lvoG' })
    },
    152: function(e, t, n) {
      'use strict'
      var o = n(144),
        a = n.n(o)
      t.default = a.a
    },
    153: function(e, t, n) {
      ;(e.exports = n(27)(!1)).push([e.i, '', ''])
    },
    154: function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n(145),
        a = {
          components: {
            Box: o.a.div({
              visible: { scale: 1, opacity: 1 },
              hidden: {
                scale: 0,
                opacity: 0,
                transition: {
                  default: { type: 'spring', stiffness: 100, duration: 600 },
                },
              },
            }),
          },
          computed: {
            showLogo: function() {
              return this.$store.state.showLogo
            },
          },
        },
        i = n(146),
        s = n(14)
      var l = Object(s.a)(
        a,
        function() {
          var e = this.$createElement,
            t = this._self._c || e
          return t(
            'box',
            {
              class: '' + this.$style.box,
              attrs: { pose: this.showLogo ? 'visible' : 'hidden' },
            },
            [
              t(
                'svg',
                {
                  class: '' + this.$style.image,
                  attrs: {
                    width: '385px',
                    height: '217px',
                    viewBox: '0 0 385 217',
                    version: '1.1',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                  },
                },
                [
                  t('desc', [this._v('Created with Sketch.')]),
                  this._v(' '),
                  t('defs'),
                  this._v(' '),
                  t(
                    'g',
                    {
                      attrs: {
                        id: 'Welcome',
                        stroke: 'none',
                        'stroke-width': '1',
                        fill: 'none',
                        'fill-rule': 'evenodd',
                      },
                    },
                    [
                      t('g', { attrs: { id: 'Group', fill: '#FFFFFF' } }, [
                        t('path', {
                          attrs: {
                            id: 'Mask',
                            d:
                              'M136.424,158.704 L141.608,154.96 C148.136033,151.119981 152.743987,149.2 155.432,149.2 C161.38403,149.2 167.815965,154.575946 174.728,165.328 C178.952021,172.048034 181.064,177.42398 181.064,181.456 C181.064,185.48802 179.768013,188.847987 177.176,191.536 C174.583987,194.224013 171.560017,196.623989 168.104,198.736 C164.647983,200.848011 161.336016,202.86399 158.168,204.784 C154.999984,206.70401 148.520049,209.199985 138.728,212.272 C128.935951,215.344015 119.480046,216.88 110.36,216.88 C101.239954,216.88 92.0240466,215.680012 82.712,213.28 C73.3999534,210.879988 63.8000494,206.848028 53.912,201.184 C44.0239506,195.519972 35.1440394,188.608041 27.272,180.448 C19.3999606,172.287959 12.9200254,161.824064 7.832,149.056 C2.74397456,136.287936 0.2,122.416075 0.2,107.44 C0.2,92.4639251 2.69597504,78.880061 7.688,66.688 C12.680025,54.495939 19.0639611,44.4160398 26.84,36.448 C34.6160389,28.4799602 43.4959501,21.8080269 53.48,16.432 C72.2960941,6.06394816 91.207905,0.88 110.216,0.88 C119.240045,0.88 128.407953,2.27198608 137.72,5.056 C147.032047,7.84001392 154.087976,10.6719856 158.888,13.552 L165.8,17.584 C169.256017,19.6960106 171.94399,21.4239933 173.864,22.768 C178.856025,26.8000202 181.352,31.3599746 181.352,36.448 C181.352,41.5360254 179.33602,46.8639722 175.304,52.432 C167.815963,62.8000518 161.09603,67.984 155.144,67.984 C151.687983,67.984 146.792032,65.8720211 140.456,61.648 C132.39196,55.1199674 121.640067,51.856 108.2,51.856 C95.7199376,51.856 83.4320605,56.1759568 71.336,64.816 C65.5759712,69.0400211 60.7760192,74.9919616 56.936,82.672 C53.0959808,90.3520384 51.176,99.0399515 51.176,108.736 C51.176,118.432048 53.0959808,127.119962 56.936,134.8 C60.7760192,142.480038 65.6719702,148.527978 71.624,152.944 C83.3360586,161.392042 95.5279366,165.616 108.2,165.616 C114.15203,165.616 119.767974,164.848008 125.048,163.312 C130.328026,161.775992 134.119988,160.240008 136.424,158.704 Z',
                          },
                        }),
                        this._v(' '),
                        t('path', {
                          attrs: {
                            id: 'Mask',
                            d:
                              'M336.296,11.824 C338.21601,8.36798272 340.999982,6.06400576 344.648,4.912 C348.296018,3.75999424 352.855973,3.184 358.328,3.184 C363.800027,3.184 368.215983,3.6639952 371.576,4.624 C374.936017,5.5840048 377.431992,6.73599328 379.064,8.08 C380.696008,9.42400672 381.895996,11.4399866 382.664,14.128 C383.816006,17.2000154 384.392,22.0959664 384.392,28.816 L384.392,188.656 C384.392,193.264023 384.248001,196.623989 383.96,198.736 C383.671999,200.848011 382.760008,203.343986 381.224,206.224 C378.535987,211.408026 371.048061,214 358.76,214 C351.271963,214 346.088014,213.424006 343.208,212.272 C340.327986,211.119994 337.92801,209.296012 336.008,206.8 C292.807784,149.199712 264.392068,111.568088 250.76,93.904 L250.76,188.656 C250.76,193.264023 250.616001,196.623989 250.328,198.736 C250.039999,200.848011 249.128008,203.343986 247.592,206.224 C244.903987,211.408026 237.416061,214 225.128,214 C213.22394,214 205.928013,211.408026 203.24,206.224 C201.703992,203.343986 200.792001,200.752012 200.504,198.448 C200.215999,196.143988 200.072,192.784022 200.072,188.368 L200.072,27.664 C200.072,20.3679635 200.983991,15.0400168 202.808,11.68 C204.632009,8.3199832 207.367982,6.06400576 211.016,4.912 C214.664018,3.75999424 219.367971,3.184 225.128,3.184 C230.888029,3.184 235.447983,3.71199472 238.808,4.768 C242.168017,5.82400528 244.519993,7.02399328 245.864,8.368 C246.632004,8.94400288 248.839982,11.4399779 252.488,15.856 C293.000203,70.9602755 320.071932,107.343912 333.704,125.008 L333.704,27.664 C333.704,20.3679635 334.567991,15.0880163 336.296,11.824 Z',
                          },
                        }),
                      ]),
                    ]
                  ),
                ]
              ),
            ]
          )
        },
        [],
        !1,
        function(e) {
          this.$style = i.default.locals || i.default
        },
        null,
        null
      )
      l.options.__file = 'Logo.vue'
      var r = l.exports,
        c = (n(22),
        n(59),
        {
          components: {
            Box: o.a.div({
              visible: { staggerChildren: 25 },
              hidden: { staggerChildren: 0 },
            }),
            Content: o.a.div({
              fullscreen: {
                width: '100vw',
                height: '100vh',
                transition: { ease: [0.86, 0, 0.07, 1] },
                flip: !0,
                opacity: 1,
                scale: 1,
                zIndex: 10,
              },
              thumbnail: {
                width: '100%',
                height: '100%',
                transition: { ease: [0.86, 0, 0.07, 1] },
                flip: !0,
                opacity: 0,
                scale: 1,
                zIndex: 1,
              },
            }),
            Item: o.a.div({
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }),
          },
          props: {
            text: { type: Array, default: null },
            color: { type: String, default: null },
          },
          data: function() {
            return { isVisible: !1, isFullscreen: !1 }
          },
          methods: {
            mouseOver: function() {
              this.isVisible = !0
            },
            mouseLeave: function() {
              this.isVisible = !1
            },
            fullScreen: function() {
              ;(this.isVisible = !1),
                (this.isFullscreen = !this.isFullscreen),
                this.$store.dispatch('showLogo'),
                console.log
            },
          },
        }),
        u = (n(148),
        Object(s.a)(
          c,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              'div',
              {
                class: 'block ' + e.color,
                on: { mouseover: e.mouseOver, mouseleave: e.mouseLeave },
              },
              [
                n(
                  'Box',
                  { attrs: { pose: e.isVisible ? 'visible' : 'hidden' } },
                  e._l(e.text, function(t, o) {
                    return n('Item', {
                      key: o,
                      staticClass: 'letters',
                      domProps: { innerHTML: e._s(t) },
                    })
                  })
                ),
                e._v(' '),
                n(
                  'Content',
                  {
                    class: 'content ' + e.color + ' full-' + e.isFullscreen,
                    attrs: {
                      pose: e.isFullscreen ? 'fullscreen' : 'thumbnail',
                    },
                    nativeOn: {
                      click: function(t) {
                        return e.fullScreen(t)
                      },
                    },
                  },
                  [
                    n(
                      'div',
                      { class: 'container container' + e.color },
                      [e._t('default')],
                      2
                    ),
                  ]
                ),
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ))
      u.options.__file = 'Block.vue'
      var d = {
          components: { Block: u.exports },
          methods: {
            spanWrap: function(e) {
              var t = []
              return (
                e.split('').forEach(function(e) {
                  t.push(''.concat(e))
                }),
                t
              )
            },
          },
        },
        p = n(150)
      var v = Object(s.a)(
        d,
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            [
              n(
                'block',
                { attrs: { text: e.spanWrap('About'), color: 'blockBlue' } },
                [
                  n('h1', { class: e.$style.title }, [e._v('About')]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'Born and raised in Wodonga Victoria, I worked with WEB MATRIX for 11\n    years working remotely from different locations around Australia. I\n    moved on to head of development for Bwired located in Prahran where\n    my responsibilities shifted to overseeing local and overseas teams. My\n    skill base extended to helping with build tools as well as '
                    ),
                    n('strong', [e._v('cross-browser\n    compatibility')]),
                    e._v(
                      ' and strong knowledge of building templates for\n    desktop/mobile on open source solutions like '
                    ),
                    n('strong', [
                      e._v('Dot Net Nuke, Joomla,\n    Wordpress & Drupal'),
                    ]),
                    e._v('. I have experience with '),
                    n('strong', [e._v('React, React Native')]),
                    e._v(' and '),
                    n('strong', [e._v('Angular')]),
                    e._v(' on\n    personal projects and '),
                    n('strong', [e._v('Vue')]),
                    e._v(
                      ' on commercial projects and would love to\n    expand my knowledge in all of these.'
                    ),
                  ]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'My most recent position is with Loyalty Corp where we hired and built a\n    front end team from the ground up whilst rebuilding the platform.\n    I enjoy the challenges that come with being a front end developer,\n    especially with complex and large jobs. I find it satisfying to work out\n    ways to find the most efficient and best solutions possible.'
                    ),
                  ]),
                  e._v(' '),
                  n('h1', { class: e.$style.title }, [e._v('What I love')]),
                  e._v(' '),
                  n('ul', [
                    n('li', [e._v('My wife')]),
                    e._v(' '),
                    n('li', [e._v('Sketch')]),
                    e._v(' '),
                    n('li', [e._v('Animation (achieveing 60fps)')]),
                    e._v(' '),
                    n('li', [e._v('Interesting approaches to UI/UX')]),
                  ]),
                  e._v(' '),
                  n('br'),
                  e._v(' '),
                  n('h1', { class: e.$style.title }, [e._v('What I know')]),
                  e._v(' '),
                  n('em', [
                    e._v(
                      'Html, Css, Cross browser compatibility, Sass/Less, Gulp, Webpack, Git, React, React Native, Angular, Vue, Nuxt, PHP, Wordpress, Drupal, Dotnet Nuke, Coredna'
                    ),
                  ]),
                  e._v(' '),
                  n('br'),
                  e._v(' '),
                  n('br'),
                  e._v(' '),
                  n('h1', { class: e.$style.title }, [e._v('Contact Me')]),
                  e._v(' '),
                  n('p', [e._v('christopherjnewton [at] gmail [dot] com')]),
                ]
              ),
              e._v(' '),
              n(
                'block',
                {
                  attrs: {
                    text: e.spanWrap('Nintendo.com.au'),
                    color: 'blockRed',
                  },
                },
                [
                  n('h1', { class: e.$style.title }, [e._v('Nintendo.com.au')]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'Working with a team of 7 people, together we built a new site from the ground up using Coredna. My responsibilities for this project include '
                    ),
                  ]),
                  e._v(' '),
                  n('ul', [
                    n('li', [
                      e._v('Communicating with marketing and design teams. '),
                    ]),
                    e._v(' '),
                    n('li', [e._v('Code standards and quality assurance')]),
                    e._v(' '),
                    n('li', [e._v('Delegating tasks to remote employees')]),
                    e._v(' '),
                    n('li', [e._v('Making sure time lines are kept')]),
                  ]),
                  e._v(' '),
                  n('br'),
                  e._v(' '),
                  n('h2', [e._v('Challenges')]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'This project launched in multiple phases with the homepage, Wii U and 3ds pages launching first and then continuing work on support, help and games catalogue.'
                    ),
                  ]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'The approval process was lengthy with each phase so management of branches and sandboxes were key to making sure each phase launched successfully.'
                    ),
                  ]),
                  e._v(' '),
                  n(
                    'a',
                    {
                      attrs: {
                        href: 'http://www.nintendo.com.au/',
                        target: '_blank',
                      },
                    },
                    [e._v('Visit nintendo.com.au')]
                  ),
                ]
              ),
              e._v(' '),
              n(
                'block',
                {
                  attrs: {
                    text: e.spanWrap('Wodongatafe.edu.au'),
                    color: 'blockYellow',
                  },
                },
                [
                  n('h1', { class: e.$style.title }, [
                    e._v('Wodongatafe.edu.au'),
                  ]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'Built on top of DNN and legacy modules, my responsibilities for this project include '
                    ),
                  ]),
                  e._v(' '),
                  n('ul', [
                    n('li', [
                      e._v('Creating tickets and handing tasks over to team. '),
                    ]),
                    e._v(' '),
                    n('li', [e._v('Code standards and quality assurance')]),
                    e._v(' '),
                    n('li', [
                      e._v(
                        'Making sure time lines are kept and mvp was delivered'
                      ),
                    ]),
                    e._v(' '),
                    n('li', [
                      e._v(
                        'Creating webpack tooling to help the team enter the project faster'
                      ),
                    ]),
                  ]),
                  e._v(' '),
                  n('br'),
                  e._v(' '),
                  n('h2', [e._v('Challenges')]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'This project had a quick turn around of 4 weeks so organisation was important. We sat down and created tickets with the team to get to MVP within the timeline.'
                    ),
                  ]),
                  e._v(' '),
                  n(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.wodongatafe.edu.au/',
                        target: '_blank',
                      },
                    },
                    [e._v('Visit wodongatafe.edu.au')]
                  ),
                ]
              ),
              e._v(' '),
              n(
                'block',
                {
                  attrs: {
                    text: e.spanWrap('Benefits.suncorp.com.au'),
                    color: 'blockGreen',
                  },
                },
                [
                  n('h1', { class: e.$style.title }, [
                    e._v('Benefits.suncorp.com.au'),
                  ]),
                  e._v(' '),
                  n('p', [
                    e._v(
                      'Full remake of the front end converting legacy laravel blade templates over to Vue, my responsibilities for this project include '
                    ),
                  ]),
                  e._v(' '),
                  n('ul', [
                    n('li', [
                      e._v(
                        'Communicating to product owner on timelines and tech choices'
                      ),
                    ]),
                    e._v(' '),
                    n('li', [
                      e._v(
                        'Working with designers to create a consistant design language'
                      ),
                    ]),
                    e._v(' '),
                    n('li', [
                      e._v(
                        'Creating webpack tooling to generate theming and unique styles for each client'
                      ),
                    ]),
                    e._v(' '),
                    n('li', [e._v('Code standards and quality assurance')]),
                  ]),
                  e._v(' '),
                  n('br'),
                  e._v(' '),
                  n(
                    'a',
                    {
                      attrs: {
                        href: 'https://benefits.suncorp.com.au/',
                        target: '_blank',
                      },
                    },
                    [e._v('Visit benefits.suncorp.com.au')]
                  ),
                ]
              ),
            ],
            1
          )
        },
        [],
        !1,
        function(e) {
          this.$style = p.default.locals || p.default
        },
        null,
        null
      )
      v.options.__file = 'Grid.vue'
      var h = { components: { Logo: r, Grid: v.exports } },
        f = n(152)
      var g = Object(s.a)(
        h,
        function() {
          var e = this.$createElement,
            t = this._self._c || e
          return t(
            'section',
            [t('logo', { ref: 'logo' }), this._v(' '), t('grid')],
            1
          )
        },
        [],
        !1,
        function(e) {
          this.$style = f.default.locals || f.default
        },
        null,
        null
      )
      g.options.__file = 'index.vue'
      t.default = g.exports
    },
  },
])
