Vue.component("game-soccer-card", {
    props: ["game"],
    template:
    `
        <p>{{ game.teamHome }} - {{ game.teamAway }}</p>
    `
});

const vm = new Vue({
    el: "#app",
    data: {
        games: []
    },
    created() {
        this.games = [
            {
                id: 1,
                date: "12-12-2019",
                stadiumName: "Estádio do Varzim SC",
                stadiumLink: "https://www.google.com/search?q=estadio+varzim&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj6146AitPlAhX7AWMBHRPBApAQ_AUIEigB&cshid=1572957168155481&biw=1536&bih=722&dpr=1.25#imgrc=qpQ9_-kp_wqASM:",
                teamHome: "Varzim",
                teamAway: "Rio Ave",
                goals: [
                    {
                        name: "Ricardo Barros",
                        minute: 3,
                        team: "Varzim"
                    },
                    {
                        name: "Rui Coentrão",
                        minute: 23,
                        team: "Varzim"
                    },
                    {
                        name: "Ricardo Barros",
                        minute: 72,
                        team: "Varzim"
                    },
                    {
                        name: "Tarantini",
                        minute: 92,
                        team: "Rio Ave"
                    }
                ]
            },
            {
                id: 2,
                date: "12-12-2019",
                stadiumName: "Estádio do Dragão",
                stadiumLink: "https://www.google.com/search?q=drag%C3%A3o+est%C3%A1dio&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjYq-qci9PlAhX1DmMBHUngB4IQ_AUIEigB&biw=1536&bih=722&dpr=1.25#imgrc=sEnMBbtG5JQinM:",
                teamHome: "Porto",
                teamAway: "Aves",
                goals: [
                    {
                        name: "Marcano",
                        minute: 13,
                        team: "Porto"
                    }
                ]
            }
        ]
    }
});