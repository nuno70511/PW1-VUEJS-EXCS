const vm = new Vue({
    el: "#app",
    data: {
        travels: [
            {
                country: "Portugal",
                continent: "europe",
                mainVisitedCities: [
                    "Póvoa de Varzim",
                    "Vila do Conde"
                ],
                desc: "boas férias",
                departureDate: "2019-11-04",
                arrivalDate: "2019-11-14",
                type: "vacation",
                photo: "https://www.mundoportugues.pt/wp-content/uploads/sites/3/2019/01/povoa-de-varzim-largo_david_alves.jpg"
            }
        ],
        formCountry: "",
        formContinent: "",
        formMainVisitedCities: [],
        formCity: "",
        formDesc: "",
        formDeparture: "",
        formArrival: "",
        formType: "vacation",
        formPhoto: "",
        selectedContinent: "",
        selectedDeparture: "",
        selectedArrival: "",
        selectedType: "vacation",
        areCountriesDescending: true,
        areDeparturesDescending: true,
        stylesBtnDelete: {
            color: "red",
            cursor: "pointer"
        },
        stylesBtnHeader: {
            fontFamily: "Trebuchet MS",
            fontSize: "105%",
            paddingTop: "12px",
            paddingBottom: "12px",
            textAlign: "left",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer"
        }
    },
    methods: {
        toLocalContinentName(continent) {
            switch (continent) {
                case "europe":
                    return "Europa";
                case "africa":
                    return "Africa";
                case "north-america":
                    return "América do Norte";
                case "south-america":
                    return "América do Sul";
                case "asia":
                    return "Asia";
                case "oceania":
                    return "Oceania";
                case "antarctica":
                    return "Antártida";
                default:
                    return "";
            }
        },
        toLocalTypeName(type) {
            switch (type) {
                case "vacation":
                    return "Férias";
                case "business":
                    return "Negócios";
                default:
                    return "";
            }
        },
        scheduleTravel() {
            this.travels.push({
                country: this.formCountry,
                continent: this.formContinent,
                mainVisitedCities: this.formMainVisitedCities,
                desc: this.formDesc,
                departureDate: this.formDeparture,
                arrivalDate: this.formArrival,
                type: this.formType,
                photo: this.formPhoto
            });

            this.formCountry = "";
            this.formContinent = "";
            this.formMainVisitedCities = [];
            this.formDesc = "";
            this.formDeparture = "";
            this.formArrival = "";
            this.formType = "vacation";
            this.formPhoto = "";
        },
        deleteTravel(index) {
            if (confirm("Tem a certeza de que pretende remover a viagem?")) {
                this.travels.splice(index, 1);
            }
        },
        addMainVisitedCity() {
            if (this.formCity === "") {
                return;
            }

            if (!this.formMainVisitedCities.some(city => city === this.formCity)) {
                this.formMainVisitedCities.push(this.formCity);
                this.formCity = "";
            } else {
                alert("Cidade já adicionada!");
            }
        },
        removeMainVisitedCity(index) {
            this.formMainVisitedCities.splice(index, 1);
        },
        sortCountries() {
            this.areCountriesDescending ? this.travels.sort((a, b) => (a.country > b.country) ? 1 : -1) :
                                          this.travels.sort((a, b) => (a.country < b.country) ? 1 : -1)

            this.areCountriesDescending = !this.areCountriesDescending;
        },
        sortDepartures() {
            this.areDeparturesDescending ? this.travels.sort((a, b) => (a.departuredDate > b.departuredDate) ? 1 : -1) :
                                           this.travels.sort((a, b) => (a.departuredDate < b.departuredDate) ? 1 : -1)

            this.areDeparturesDescending = !this.areDeparturesDescending;
        },
        saveLocally() {
            localStorage.setItem("travels", JSON.stringify(this.travels));
        }
    },
    computed: {
        filteredTravels() {
            return this.travels.filter(travel =>
                this.selectedContinent === "" || travel.continent === this.selectedContinent &&
                this.selectedDeparture === "" || travel.departureDate === this.selectedDeparture &&
                this.selectedArrival === "" || travel.arrivalDate === this.selectedArrival &&
                travel.type === this.selectedType
            );
        }
    },
    created() {
        const stored = JSON.parse(localStorage.getItem("travels"));

        if (stored)
            this.travels = stored;

        window.addEventListener("unload", this.saveLocally);
    }
});