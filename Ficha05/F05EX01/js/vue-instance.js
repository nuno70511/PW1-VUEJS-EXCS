const vm = new Vue({
    el: "#intro",
    data: {
        msg: "Programação Web I"
    },
    methods: {
        showMsg(event) {
            alert(this.msg);
            console.log(`nome do elemento: ${event.target.tagName}`);
            console.log(`tipo de evento: ${event.target.type}`);
        },
        showMessage(msg, event) {
            alert(msg);
            console.log(`nome do elemento: ${event.target.tagName}`);
            console.log(`tipo de evento: ${event.target.type}`);
        }
    }
});