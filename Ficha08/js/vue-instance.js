const vm = new Vue({
    el: "#app",
    data: {
        castles: [],
        formCastle: "",
        formPhoto: "",
        selectedCastle: {
            name: "",
            photo: ""
        },
        isDialogOpen: false,
        searchedCastle: "",
        areCastlesAscending: true,
        castlesMean: "",
        doesCastleExist: "",
        myCastles: ""
    },
    methods: {
        addCastle() {
            this.castles.push(
                {
                    name: this.formCastle,
                    photo: this.formPhoto
                }
            );
        },
        viewCastle(i) {
            for ([k, v] of Object.entries(this.castles[i])) {
                this.selectedCastle[k] = v;
            }

            this.isDialogOpen = !this.isDialogOpen;
        },
        sortCastles() {
            this.areCastlesAscending ? this.castles.sort((a, b) => (a.name > b.name) ? 1 : -1)
                : this.castles.sort((a, b) => (a.name < b.name) ? 1 : -1);

            this.areCastlesAscending = !this.areCastlesAscending;
        },
        removeCastle(i) {
            if (confirm(`Tem a certeza que deseja remover o castelo: ${this.castles[i].name}`)) {
                this.castles.splice(i, 1);
            }
        },
        arrMap() {
            this.castles = this.castles.map(castle => {
                castle.name = castle.name.replace(/castelo /i, "");
                return castle;
            });
        },
        arrReduce() {
            this.castlesMean = this.castles.reduce((acc, cur) => acc + cur.yearBuilt, 0) / this.castles.length;
        },
        arrSome(search) {
            this.doesCastleExist = this.castles.some(castle => castle.name.toLowerCase().includes(search.toLowerCase()));
        },
        arrFilter(substr) {
            this.myCastles = this.castles.filter(castle => castle.name.slice(11).startsWith(substr));
        }
    },
    computed: {
        filteredCastles() {
            return this.castles.filter(castle => this.searchedCastle === "" ||
                castle.name.toLowerCase().includes(this.searchedCastle.toLowerCase()));
        }
    },
    created() {
        this.castles = [
            {
                name: "Castelo de Bragança",
                photo: "http://fortalezas.org/midias/jpg_originais/01157_007672.jpg",
                yearBuilt: 1200
            },
            {
                name: "Castelo de Almourol",
                photo: "https://i.ytimg.com/vi/vF8yGHIqnDM/maxresdefault.jpg",
                yearBuilt: 1201
            },
            {
                name: "Castelo de Marvão",
                photo: "https://i.ytimg.com/vi/pwcziTIhJ0o/maxresdefault.jpg",
                yearBuilt: 1202
            },
            {
                name: "Castelo de Montalegre",
                photo: "",
                yearBuilt: 1203
            },
            {
                name: "Castelo de Sortelha",
                photo: "",
                yearBuilt: 1204
            },
            {
                name: "Castelo de Arraiolos",
                photo: "",
                yearBuilt: 1205
            },
            {
                name: "Castelo de Santa Maria da Feira",
                photo: "",
                yearBuilt: 1206
            },
            {
                name: "Castelo de Lindoso",
                photo: "",
                yearBuilt: 1207
            },
            {
                name: "Castelo dos Mouros",
                photo: "",
                yearBuilt: 1208
            },
            {
                name: "Castelo de Guimarães",
                photo: "",
                yearBuilt: 1209
            }
        ]
    }
});