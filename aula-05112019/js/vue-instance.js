Vue.component("show-page", {
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    template: "<a :href='link' target='_blank'>{{ text }}</a>"
});

const vm = new Vue({
    el: "#app",
});