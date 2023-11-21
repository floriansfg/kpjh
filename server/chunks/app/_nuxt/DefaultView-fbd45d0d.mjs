import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: ["titel"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "view" }, _attrs))} data-v-a408b730><div class="header" data-v-a408b730><svg viewBox="0 0 1440 139" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" data-v-a408b730><path d="M381.765 99.5C236.064 99.5 70.549 125.567 0 138.6V0H1440V114.522C1373.95 109.515 1255.77 138.6 1021.21 138.6C728.005 138.6 563.892 99.5 381.765 99.5Z" fill="var(--primaryBg)" data-v-a408b730></path></svg> ${ssrInterpolate($props.titel)}</div><div class="content" data-v-a408b730>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layoutComponents/DefaultView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a408b730"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=DefaultView-fbd45d0d.mjs.map
