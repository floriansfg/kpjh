import { _ as __nuxt_component_0 } from './DefaultView-96f97d93.mjs';
import { _ as _export_sfc, d as useRoute, e as useAsyncQuery, u as useState, a as useFetch, f as __nuxt_component_0$3, b as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, toDisplayString, createCommentVNode, createTextVNode, nextTick, resolveComponent } from 'vue';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './Diashow-30a26dea.mjs';
import pkg from 'file-saver';
import { gql } from 'graphql-tag';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'ohash';
import 'destr';
import 'defu';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'jsonwebtoken';
import 'ipx';
import 'vue3-carousel/dist/carousel.js';
import 'vue3-carousel';

const _sfc_main$2 = {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  props: {
    location: {
      type: Array,
      default: () => [0, 0]
    }
  },
  data() {
    return {
      zoom: 10,
      showMap: false,
      timer: void 0,
      center: this.location
    };
  },
  async mounted() {
    await nextTick();
    setTimeout(() => {
      this.showMap = true;
    }, 1e3);
  },
  methods: {
    mapChangeZoom(e) {
      this.zoom = e;
      this.reset();
    },
    mapChangeLocation(e) {
      this.center = e;
      this.reset();
    },
    reset() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.zoom = 14;
        this.center = this.location;
      }, 2500);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_l_map = resolveComponent("l-map");
  const _component_l_tile_layer = resolveComponent("l-tile-layer");
  const _component_l_marker = resolveComponent("l-marker");
  const _component_l_icon = resolveComponent("l-icon");
  if ($data.showMap) {
    _push(ssrRenderComponent(_component_l_map, mergeProps({
      ref: "map",
      "use-global-leaflet": false,
      zoom: $data.zoom,
      center: $data.center,
      options: {
        dragging: true,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        attributionControl: false
      },
      "onUpdate:zoom": $options.mapChangeZoom,
      "onUpdate:center": $options.mapChangeLocation
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_l_tile_layer, { url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" }, null, _parent2, _scopeId));
          if ($props.location) {
            _push2(ssrRenderComponent(_component_l_marker, { "lat-lng": $props.location }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_l_icon, {
                    "icon-url": "/images/location.svg",
                    "icon-size": [35, 35]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_l_icon, {
                      "icon-url": "/images/location.svg",
                      "icon-size": [35, 35]
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createVNode(_component_l_tile_layer, { url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" }),
            $props.location ? (openBlock(), createBlock(_component_l_marker, {
              key: 0,
              "lat-lng": $props.location
            }, {
              default: withCtx(() => [
                createVNode(_component_l_icon, {
                  "icon-url": "/images/location.svg",
                  "icon-size": [35, 35]
                })
              ]),
              _: 1
            }, 8, ["lat-lng"])) : createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Map.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const { saveAs } = pkg;
const _sfc_main$1 = {
  props: {
    folderId: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      folders: [],
      images: [],
      openedChild: null,
      showImageModal: false,
      loading: false,
      clickedImage: 0
    };
  },
  watch: {
    // It listens to the change in prop name
    open: function() {
      this.loadFolder();
    }
  },
  created() {
    if (this.open)
      this.loadFolder();
  },
  methods: {
    async loadFolder() {
      if (useState("loggedIn").value && this.folders.length === 0 && this.images.length === 0) {
        const {
          data: {
            value: { files }
          }
        } = await useFetch("/api/listImages?id=" + this.folderId, "$7Ikf9HeTqT");
        if (files) {
          this.folders = files.filter(
            (file) => file.mimeType === "application/vnd.google-apps.folder"
          );
          this.images = files.filter(
            (file) => file.mimeType !== "application/vnd.google-apps.folder"
          );
        }
      }
    },
    async openImage(index) {
      this.clickedImage = index;
      this.showImageModal = true;
      await this.loadImage(index);
      if (index + 1 < this.images.length)
        await this.loadImage(index + 1);
      if (index - 1 >= 0)
        await this.loadImage(index - 1);
    },
    async getImageUrl(id) {
      try {
        const response = await fetch("/api/image?id=" + id);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch images (${response.status} ${response.statusText})`
          );
        }
        const array = await response.arrayBuffer();
        const blob = new Blob([array], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        return url;
      } catch (error) {
        console.error(error);
      }
    },
    async loadImage(index) {
      let url = null;
      if (!this.images[index].loaded)
        url = await this.getImageUrl(this.images[index].id);
      if (url) {
        this.images[index].thumbnailLink = url;
        this.images[index].loaded = true;
      }
    },
    prevImage(index) {
      if (index - 1 >= 0) {
        this.loadImage(index - 1);
        this.clickedImage--;
      }
    },
    nextImage(index) {
      if (index + 1 < this.images.length) {
        this.loadImage(index + 1);
        this.clickedImage++;
      }
    },
    downloadImage(index) {
      saveAs(this.images[index].thumbnailLink, this.images[index].name);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Folder = __nuxt_component_3;
  const _component_Modal = __nuxt_component_0$2;
  const _component_Diashow = __nuxt_component_0$1;
  _push(`<!--[--><div class="accordion accordion-flush" data-v-e6d2e32a><!--[-->`);
  ssrRenderList($data.folders, (folder, index) => {
    _push(`<div class="accordion-item" data-v-e6d2e32a><h2 class="accordion-header" data-v-e6d2e32a><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#" + folder.id)} aria-expanded="false" data-v-e6d2e32a>${ssrInterpolate(folder.name)}</button></h2><div${ssrRenderAttr("id", folder.id)} class="accordion-collapse collapse" data-v-e6d2e32a>`);
    if (folder.id) {
      _push(`<div class="accordion-body" data-v-e6d2e32a>`);
      _push(ssrRenderComponent(_component_Folder, {
        "folder-id": folder.id,
        open: $data.openedChild == index
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
  if ($data.images) {
    _push(`<div class="photoGrid" data-v-e6d2e32a><!--[-->`);
    ssrRenderList($data.images, (image, index) => {
      _push(`<img${ssrRenderAttr("src", image.thumbnailLink)} referrerpolicy="no-referrer" data-v-e6d2e32a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Modal, {
    show: $data.showImageModal,
    onClose: ($event) => $data.showImageModal = false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Diashow, {
          "first-image-id": $data.clickedImage,
          images: $data.images.map((image) => image.thumbnailLink),
          width: "80vw",
          onNextImage: $options.nextImage,
          onPrevImage: $options.prevImage
        }, null, _parent2, _scopeId));
        if (!$data.images[$data.clickedImage].loaded) {
          _push2(`<div class="loader" data-v-e6d2e32a${_scopeId}></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="white" class="downloadButton" fill="currentColor" viewBox="-1 -1 19 19" data-v-e6d2e32a${_scopeId}><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" data-v-e6d2e32a${_scopeId}></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" data-v-e6d2e32a${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode(_component_Diashow, {
            "first-image-id": $data.clickedImage,
            images: $data.images.map((image) => image.thumbnailLink),
            width: "80vw",
            onNextImage: $options.nextImage,
            onPrevImage: $options.prevImage
          }, null, 8, ["first-image-id", "images", "onNextImage", "onPrevImage"]),
          !$data.images[$data.clickedImage].loaded ? (openBlock(), createBlock("div", {
            key: 0,
            class: "loader"
          })) : createCommentVNode("", true),
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "stroke-width": "1.5",
            stroke: "white",
            class: "downloadButton",
            fill: "currentColor",
            viewBox: "-1 -1 19 19",
            onClick: ($event) => $options.downloadImage($data.clickedImage)
          }, [
            createVNode("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
            createVNode("path", { d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" })
          ], 8, ["onClick"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/photos/Folder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e6d2e32a"]]);
const useLogin = () => {
  useState("showLogin").value = true;
};
const _sfc_main = {
  emits: ["back"],
  async setup() {
    const query = gql`
            query getAlbum($id: String!) {
                album(id: $id) {
                    title
                    eventType
                    eventDate
                    location {
                        lat
                        lon
                    }
                    folderId
                }
            }
        `;
    const variables = { id: useRoute().params.id };
    const {
      data: {
        value: { album }
      }
    } = await useAsyncQuery(query, variables);
    return { album };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DefaultView = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_Map = __nuxt_component_2;
  const _component_Folder = __nuxt_component_3;
  _push(ssrRenderComponent(_component_DefaultView, mergeProps({ titel: "Fotos" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<head data-v-8eb39a68${_scopeId}><title data-v-8eb39a68${_scopeId}>KPJH - Fotos</title></head><div class="wrapper" data-v-8eb39a68${_scopeId}><h3 class="title" data-v-8eb39a68${_scopeId}>${ssrInterpolate($setup.album.eventType)} ${ssrInterpolate($setup.album.title)}</h3>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "backButton",
          to: "/fotos"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<svg viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8eb39a68${_scopeId2}><path d="M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z" fill="#3D5C6D" fill-opacity="0.4" data-v-8eb39a68${_scopeId2}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 39",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z",
                    fill: "#3D5C6D",
                    "fill-opacity": "0.4"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<h3 data-v-8eb39a68${_scopeId}>${ssrInterpolate($setup.album.eventDate)}</h3><div class="map" data-v-8eb39a68${_scopeId}>`);
        if ($setup.album.location) {
          _push2(ssrRenderComponent(_component_Map, {
            location: [$setup.album.location.lat, $setup.album.location.lon]
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (("useState" in _ctx ? _ctx.useState : unref(useState))("loggedIn").value) {
          _push2(`<div class="photos" data-v-8eb39a68${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Folder, {
            "folder-id": $setup.album.folderId,
            open: true
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div class="contentLocked" data-v-8eb39a68${_scopeId}><svg viewBox="0 0 34 41" xmlns="http://www.w3.org/2000/svg" fill="#304C5C" data-v-8eb39a68${_scopeId}><path d="M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z" data-v-8eb39a68${_scopeId}></path></svg><p data-v-8eb39a68${_scopeId}>Bitte melde dich an um<br data-v-8eb39a68${_scopeId}>alle Bilder sehen zu k\xF6nnen:</p><button class="btn btn-primary" data-v-8eb39a68${_scopeId}> Anmelden </button></div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("head", null, [
            createVNode("title", null, "KPJH - Fotos")
          ]),
          createVNode("div", { class: "wrapper" }, [
            createVNode("h3", { class: "title" }, toDisplayString($setup.album.eventType) + " " + toDisplayString($setup.album.title), 1),
            createVNode(_component_NuxtLink, {
              class: "backButton",
              to: "/fotos"
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 39",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z",
                    fill: "#3D5C6D",
                    "fill-opacity": "0.4"
                  })
                ]))
              ]),
              _: 1
            }),
            createVNode("h3", null, toDisplayString($setup.album.eventDate), 1),
            createVNode("div", { class: "map" }, [
              $setup.album.location ? (openBlock(), createBlock(_component_Map, {
                key: 0,
                location: [$setup.album.location.lat, $setup.album.location.lon]
              }, null, 8, ["location"])) : createCommentVNode("", true)
            ]),
            ("useState" in _ctx ? _ctx.useState : unref(useState))("loggedIn").value ? (openBlock(), createBlock("div", {
              key: 0,
              class: "photos"
            }, [
              createVNode(_component_Folder, {
                "folder-id": $setup.album.folderId,
                open: true
              }, null, 8, ["folder-id"])
            ])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "contentLocked"
            }, [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 34 41",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#304C5C"
              }, [
                createVNode("path", { d: "M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z" })
              ])),
              createVNode("p", null, [
                createTextVNode("Bitte melde dich an um"),
                createVNode("br"),
                createTextVNode("alle Bilder sehen zu k\xF6nnen:")
              ]),
              createVNode("button", {
                class: "btn btn-primary",
                onClick: ($event) => ("useLogin" in _ctx ? _ctx.useLogin : unref(useLogin))()
              }, " Anmelden ", 8, ["onClick"])
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fotos/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8eb39a68"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-6658b560.mjs.map
