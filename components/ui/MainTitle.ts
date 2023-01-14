import {h} from "vue";

export default(props, context) => h("h1", {
  class: "text-xl sm:text-4xl md:text-5xl md:leading-normal slg:text-6xl slg:leading-relaxed font-theme font-extrabold text-head_text text-transparent bg-clip-text bg-head_text",
}, [context.slots.default(), h("span", {class: "text-link_text_hover"}, ".")])