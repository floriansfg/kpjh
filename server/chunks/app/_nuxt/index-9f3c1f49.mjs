import { p as publicAssetsURL, b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Diashow-932098a7.mjs';
import { _ as _export_sfc, e as useAsyncQuery, b as __nuxt_component_0$2 } from '../server.mjs';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import pkg from 'file-saver';
import gql from 'graphql-tag';
import { Carousel, Slide } from 'vue3-carousel';
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
import 'vue3-carousel/dist/carousel.js';
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

const _sfc_main$3 = {
  components: { RichTextRenderer },
  props: ["event"],
  data() {
    return {
      showEvent: false
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
        _push2(`<div class="eventDetail" data-v-1d1a96d0${_scopeId}><img class="icon"${ssrRenderAttr("src", $props.event.icon.url)} data-v-1d1a96d0${_scopeId}><h4 class="text-center" data-v-1d1a96d0${_scopeId}><strong data-v-1d1a96d0${_scopeId}>${ssrInterpolate($props.event.title)}</strong></h4>`);
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
  _push(`<img class="icon"${ssrRenderAttr("src", $props.event.icon.url)} data-v-1d1a96d0><div class="content" data-v-1d1a96d0><b data-v-1d1a96d0>${ssrInterpolate($props.event.dateDisplay)}</b><div class="" data-v-1d1a96d0>${ssrInterpolate($props.event.title)}</div>`);
  _push(ssrRenderComponent(_component_RichTextRenderer, {
    document: $props.event.description.json
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Event.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-1d1a96d0"]]);
const { saveAs } = pkg;
const _sfc_main$2 = {
  props: ["downloads"],
  methods: {
    downloadPdf(pdfToDownload) {
      saveAs(pdfToDownload.pdf.url, pdfToDownload.title);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f33ade00><div class="text-center pb-2" data-v-f33ade00><h3 data-v-f33ade00>Aktuelle Downloads</h3></div><!--[-->`);
  ssrRenderList($props.downloads, (download) => {
    _push(`<div class="downloads" data-v-f33ade00><div class="download-grid" data-v-f33ade00><p${ssrRenderAttr("href", download.pdf.url)} data-v-f33ade00>${ssrInterpolate(download.title)}</p><svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="lightgrey" class="downloadButton" fill="currentColor" viewBox="-1 -1 19 19" data-v-f33ade00><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" data-v-f33ade00></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" data-v-f33ade00></path></svg></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/Downloads.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f33ade00"]]);
const _imports_0 = "" + publicAssetsURL("images/buellingen.jpg");
const _imports_1 = "" + publicAssetsURL("images/Lagerwochenende-225.jpg");
const _imports_2 = "" + publicAssetsURL("images/Irrel2018_12_Party.jpg");
const _imports_3 = "" + publicAssetsURL("images/Zeltlager2017_Feuer.jpg");
const _imports_4 = "" + buildAssetsURL("kjg_kpjh_logo.523b7780.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "b-container" }, _attrs))} data-v-c9d32e5e><div class="text-center" data-v-c9d32e5e><h2 data-v-c9d32e5e>Das sind wir</h2><h3 data-v-c9d32e5e>Echte Fr\xF6nde stonnt tesaame...</h3></div><div class="grid-container" data-v-c9d32e5e><div class="grid header" data-v-c9d32e5e> .....unter diesem Motto steht die Katholische Pfarrjugend H\xFCls seit 1978. Spielerisch lernen unsere jungen Mitglieder durch verschiedene Aktivit\xE4ten die Bedeutung von Freundschaft, Zusammenhalt und Verantwortung. Neben unseren w\xF6chentlichen Gruppenstunden organisiert die Leiterrunde \xFCber das Jahr verteilt verschiedene Aktivit\xE4ten. </div><div class="grid pic-1" data-v-c9d32e5e><img class="grid-pic"${ssrRenderAttr("src", _imports_0)} data-v-c9d32e5e></div><div class="grid text-1" data-v-c9d32e5e> Jeden November k\xF6nnen sich Kinder ab der vierten Klassen in neu entstehende M\xE4dchen- bzw. Jungengruppen einteilen lassen oder jederzeit in eine gleichaltrige Gruppe eintreten. Die Gruppen treffen sich w\xF6chentlich f\xFCr 90 Minuten mit ihren Leiter:innen im Heinrich-Joeppen-Haus, um zu spielen, kochen, backen, basteln, toben und viel zu lachen. Dies st\xE4rkt ganz besonders den Zusammenhalt, sodass aus der anfangs bunten Truppe meist ein enger Freundeskreis wird. </div><div class="grid pic-2" data-v-c9d32e5e><img class="grid-pic"${ssrRenderAttr("src", _imports_1)} data-v-c9d32e5e></div><div class="grid text-2" data-v-c9d32e5e> \xDCber das Jahr verteilt organisiert die Leiterrunde verschiedene Ausfl\xFCge ins Spa\xDFbad oder den Freizeitpark sowie das Kartoffelfeuer mit einer Rallye oder Fahrradtour und Nachtwanderung mit anschlie\xDFendem Lagerfeuer. Highlight des Jahres ist unser Zeltlager in der vierten und f\xFCnften Woche der Sommerferien. Die Favoriten im Programm sind sicher der Singsang am Lagerfeuer, die verschiedenen Stafetten und das Brennball-Turnier, aber auch der gemeinsame K\xFCchen-, Toiletten- oder Ordnungsdienst macht eine Menge Spa\xDF. </div><div class="grid pic-3" data-v-c9d32e5e><img class="grid-pic"${ssrRenderAttr("src", _imports_2)} data-v-c9d32e5e></div><div class="grid text-3" data-v-c9d32e5e> Seit 2022 sind wir als Ortsgruppe \u201EKjG Pfarrjugend H\xFCls\u201C der Katholischen jungen Gemeinde (KjG) im Bistum Aachen aktiv. Dies erm\xF6glicht uns spezielle Angebote f\xFCr unsere Kindergruppen und Leiter:innen wie Gruppenstundenangebote, Erlebniswochenenden oder Fortbildungen anzubieten. </div><div class="grid pic-4" data-v-c9d32e5e><img class="grid-pic"${ssrRenderAttr("src", _imports_3)} data-v-c9d32e5e></div><div class="grid footer" data-v-c9d32e5e> Hast du Lust bekommen, ein Teil der KPJH zu werden? Dann besuch uns doch mal oder fordere mehr Infos \xFCber unser Kontaktformular an. </div></div><div class="text-center" data-v-c9d32e5e><h3 data-v-c9d32e5e>Unser Vorstand</h3></div><div class="board" data-v-c9d32e5e><img class="logo"${ssrRenderAttr("src", _imports_4)} data-v-c9d32e5e><div class="board-members" data-v-c9d32e5e><div data-v-c9d32e5e>1. Vorsitzende: Lorena Sch\xFCnke</div><div data-v-c9d32e5e>2. Vorsitzender: Paul Vornhusen</div><div data-v-c9d32e5e>Kassiererin: Janine F\xFChrmann</div><div data-v-c9d32e5e>Materialw\xE4rterin: Rebekka Schiffers</div><div data-v-c9d32e5e>Beisitzerin: Lea Gielen</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/AboutUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c9d32e5e"]]);
const _sfc_main = {
  components: {
    Carousel,
    Slide
  },
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
                diashow: homepageCollection(limit: 0) {
                    items {
                        images: diashowCollection(limit: 0) {
                            items {
                                url(
                                    transform: {
                                        format: JPG_PROGRESSIVE
                                        quality: 80
                                    }
                                )
                            }
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
          diashow: { items: diashows },
          downloads: { items: downloads }
        }
      }
    } = await useAsyncQuery(query);
    diashows = diashows ? diashows : [];
    return { events, diashows, downloads };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Diashow = __nuxt_component_0;
  const _component_Event = __nuxt_component_1;
  const _component_Downloads = __nuxt_component_2;
  const _component_AboutUs = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-587fdc16><head data-v-587fdc16><title data-v-587fdc16>KPJH</title></head><svg class="svg" data-v-587fdc16><clipPath id="wave" clipPathUnits="objectBoundingBox" data-v-587fdc16><path id="path272" d="M 1,0 H 0 V 1 0.999 0.953 C 0.07338835,0.962484 0.16696688,0.9876246 0.24601002,0.9905464 0.41720789,0.9968744 0.56553662,0.96840898 0.70699957,0.9527569 0.86558789,0.93520999 0.9115516,0.94172711 1,0.953 V 0" data-v-587fdc16></path></clipPath></svg><header data-v-587fdc16><!--[-->`);
  ssrRenderList($setup.diashows, (diashow, index2) => {
    _push(ssrRenderComponent(_component_Diashow, {
      key: index2,
      images: diashow.images.items.map((image) => image.url),
      "first-image-id": 3,
      height: "500px",
      transition: 800,
      repeat: ""
    }, null, _parent));
  });
  _push(`<!--]--></header><section data-v-587fdc16><h4 class="text-center" data-v-587fdc16>Aktuelles</h4><div class="timeline" data-v-587fdc16>`);
  if ($setup.events) {
    _push(`<!--[-->`);
    ssrRenderList($setup.events, (event) => {
      _push(`<div class="event" data-v-587fdc16>`);
      if (event) {
        _push(ssrRenderComponent(_component_Event, { event }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Downloads, { downloads: $setup.downloads }, null, _parent));
  _push(`<svg class="wave" viewBox="0 0 1440 139" fill="var(--secondaryBg)" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" data-v-587fdc16><path d="M381.765 99.5C236.064 99.5 70.549 125.567 0 138.6V0H1440V114.522C1373.95 109.515 1255.77 138.6 1021.21 138.6C728.005 138.6 563.892 99.5 381.765 99.5Z" data-v-587fdc16></path></svg></section>`);
  _push(ssrRenderComponent(_component_AboutUs, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-587fdc16"]]);

export { index as default };
//# sourceMappingURL=index-9f3c1f49.mjs.map
