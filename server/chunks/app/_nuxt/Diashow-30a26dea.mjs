import { Carousel as Carousel$1, Slide as Slide$1 } from 'vue3-carousel/dist/carousel.js';
import { _ as _export_sfc } from '../server.mjs';
import { Carousel, Slide } from 'vue3-carousel';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  components: {
    Carousel,
    Slide
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    firstImageId: {
      type: Number,
      default: 0
    },
    repeat: Boolean,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    transition: {
      type: Number,
      default: 0
    }
  },
  emits: ["prevImage", "nextImage"],
  data() {
    return {
      currentImg: this.firstImageId
    };
  },
  mounted() {
    if (this.firstImageId) {
      this.$refs.myCarousel.slideTo(this.firstImageId);
    }
  },
  methods: {
    nextImage() {
      this.$refs.myCarousel.next();
      this.currentImg++;
      this.$emit("nextImage", this.currentImg);
    },
    prevImage() {
      this.$refs.myCarousel.prev();
      this.currentImg--;
      this.$emit("prevImage", this.currentImg);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = Carousel$1;
  const _component_Slide = Slide$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pictures" }, _attrs))} data-v-e7591d54>`);
  if ($props.images.length > 1) {
    _push(`<div class="prevButton" data-v-e7591d54><svg viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg" data-v-e7591d54><path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z" data-v-e7591d54></path></svg></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "myCarousel",
    "wrap-around": "",
    autoplay: 7e3,
    transition: $props.transition,
    style: { width: $props.width, height: "height" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.images, (image, index) => {
          _push2(ssrRenderComponent(_component_Slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("srcset", `${image}&w=480 480w, ${image}&w=800 800w, ${image}&w=1200 1200w`)}${ssrRenderAttr("sizes", `(max-width: 600px) 480px, (max-width: 1000px) 800px, (max-width: 1800px) 1200px, 2000px`)}${ssrRenderAttr("src", image)} class="slideImg" style="${ssrRenderStyle({ width: $props.width, height: $props.height })}" data-v-e7591d54${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    srcset: `${image}&w=480 480w, ${image}&w=800 800w, ${image}&w=1200 1200w`,
                    sizes: `(max-width: 600px) 480px, (max-width: 1000px) 800px, (max-width: 1800px) 1200px, 2000px`,
                    src: image,
                    class: "slideImg",
                    style: { width: $props.width, height: $props.height }
                  }, null, 12, ["srcset", "sizes", "src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.images, (image, index) => {
            return openBlock(), createBlock(_component_Slide, { key: index }, {
              default: withCtx(() => [
                createVNode("img", {
                  srcset: `${image}&w=480 480w, ${image}&w=800 800w, ${image}&w=1200 1200w`,
                  sizes: `(max-width: 600px) 480px, (max-width: 1000px) 800px, (max-width: 1800px) 1200px, 2000px`,
                  src: image,
                  class: "slideImg",
                  style: { width: $props.width, height: $props.height }
                }, null, 12, ["srcset", "sizes", "src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="nextButton" data-v-e7591d54>`);
  if ($props.images.length > 1) {
    _push(`<svg viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg" data-v-e7591d54><path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z" data-v-e7591d54></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Diashow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e7591d54"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Diashow-30a26dea.mjs.map
