import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, e as useAsyncQuery, b as __nuxt_component_0$2 } from '../server.mjs';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_3 } from './Downloads-dd65f142.mjs';
import { gql } from 'graphql-tag';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'jsonwebtoken';
import 'ipx';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'file-saver';

const _sfc_main$1 = {
  components: { RichTextRenderer },
  props: {
    event: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      showEvent: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = __nuxt_component_0$2;
  const _component_RichTextRenderer = resolveComponent("RichTextRenderer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Modal, {
    show: $data.showEvent,
    "button-color": "black",
    onClose: ($event) => $data.showEvent = false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="eventDetail" data-v-d7bd2241${_scopeId}><img class="icon"${ssrRenderAttr("src", $props.event.icon.url)} data-v-d7bd2241${_scopeId}><h4 class="text-center" data-v-d7bd2241${_scopeId}><strong data-v-d7bd2241${_scopeId}>${ssrInterpolate($props.event.title)}</strong></h4>`);
        _push2(ssrRenderComponent(_component_RichTextRenderer, {
          document: $props.event.description.json
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "eventDetail" }, [
            createVNode("img", {
              class: "icon",
              src: $props.event.icon.url
            }, null, 8, ["src"]),
            createVNode("h4", { class: "text-center" }, [
              createVNode("strong", null, toDisplayString($props.event.title), 1)
            ]),
            createVNode(_component_RichTextRenderer, {
              document: $props.event.description.json
            }, null, 8, ["document"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img class="icon"${ssrRenderAttr("src", $props.event.icon.url)} data-v-d7bd2241><div class="content" data-v-d7bd2241><b data-v-d7bd2241>${ssrInterpolate($props.event.dateDisplay)}</b><div class="" data-v-d7bd2241>${ssrInterpolate($props.event.title)}</div>`);
  _push(ssrRenderComponent(_component_RichTextRenderer, {
    document: $props.event.description.json
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Event.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d7bd2241"]]);
const _imports_0 = "" + publicAssetsURL("images/kpjh-website.gif");
const _sfc_main = {
  async setup() {
    const query = gql`
            query {
                events: eventsCollection(limit: 0, order: [date_ASC]) {
                    items {
                        title
                        icon {
                            url
                        }
                        dateDisplay
                        description {
                            json
                        }
                        additionalInfo {
                            json
                        }
                    }
                }
                downloads: downloadsCollection(limit: 0) {
                    items {
                        title
                        pdf {
                            url
                        }
                    }
                }
            }
        `;
    let {
      data: {
        value: {
          events: { items: events },
          downloads: { items: downloads }
        }
      }
    } = await useAsyncQuery(query);
    events = events || [];
    downloads = downloads || [];
    return { events, downloads };
  },
  methods: {
    scrollDown() {
      window.scrollBy({
        top: window.innerHeight / 2,
        behavior: "smooth"
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Event = __nuxt_component_0;
  const _component_Downloads = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-88b4565f><head data-v-88b4565f><title data-v-88b4565f>KPJH</title></head><svg class="svg" data-v-88b4565f><clipPath id="wave" clipPathUnits="objectBoundingBox" data-v-88b4565f><path id="path272" d="M 1,0 H 0 V 1 0.999 0.953 C 0.07338835,0.962484 0.16696688,0.9876246 0.24601002,0.9905464 0.41720789,0.9968744 0.56553662,0.96840898 0.70699957,0.9527569 0.86558789,0.93520999 0.9115516,0.94172711 1,0.953 V 0" data-v-88b4565f></path></clipPath></svg><header data-v-88b4565f><img${ssrRenderAttr("src", _imports_0)} class="responsive-gif" data-v-88b4565f><svg class="arrow-down" viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg" data-v-88b4565f><path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z" data-v-88b4565f></path></svg></header><section data-v-88b4565f><h4 class="text-center" data-v-88b4565f>Aktuelles</h4><div class="timeline" data-v-88b4565f><!--[-->`);
  ssrRenderList($setup.events, (event, index2) => {
    _push(`<div class="event" data-v-88b4565f>`);
    if (event) {
      _push(ssrRenderComponent(_component_Event, { event }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="text-center mt-5" data-v-88b4565f><h4 data-v-88b4565f>Aktuelle Downloads</h4></div>`);
  _push(ssrRenderComponent(_component_Downloads, {
    downloads: $setup.downloads,
    class: "mb-5"
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-88b4565f"]]);

export { index as default };
//# sourceMappingURL=index-de335a77.mjs.map
