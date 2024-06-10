import pkg from 'file-saver';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const { saveAs } = pkg;
const _sfc_main = {
  props: {
    downloads: {
      type: Array,
      required: true
    }
  },
  methods: {
    downloadPdf(pdfToDownload) {
      saveAs(pdfToDownload.pdf.url, pdfToDownload.title);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-2bad31d7><!--[-->`);
  ssrRenderList($props.downloads, (download, index) => {
    _push(`<div class="downloads" data-v-2bad31d7><div class="download-grid" data-v-2bad31d7><p${ssrRenderAttr("href", download.pdf.url)} data-v-2bad31d7>${ssrInterpolate(download.title)}</p><svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="lightgrey" class="downloadButton" fill="currentColor" viewBox="-1 -1 19 19" data-v-2bad31d7><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" data-v-2bad31d7></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" data-v-2bad31d7></path></svg></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/Downloads.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2bad31d7"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Downloads-dd65f142.mjs.map
