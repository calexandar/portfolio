import {h} from 'vue';

export default (props, context) => h("h3",
        {class: "font-bold text-base md:text-xl lg:text-2xl text-head_text"},
        context.slots.default())