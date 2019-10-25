const vm = new Vue({
    el: "#app",
    data: {
        name: "",
        age: 16,
        gender: "f",
        course: "",
        languages: [],
        motivation: ""
    },
    methods: {
        showMsg() {
            dialogMsg();
        }
    },
    computed: {
        score() {
            let score = 0;
            
            score += this.course.length ? 5 : 0;

            score += (this.age <= 22) ? 3 :
                (this.age <= 35) ? 5 : 1

            score += this.languages.length * 2;

            return score;
        }
    }
});

function dialogMsg() {
    const dialog = document.querySelector("dialog");

    dialog.innerHTML = `O candidato ${vm.name}, com ${vm.age} anos de idade, do sexo `

    dialog.innerHTML += (vm.gender === "f") ? `feminino ` : `masculino `

    const course = (vm.course) ?
    (vm.course === "inf") ? "informática" :
    (vm.course === "data") ? "dados" : "web" : null

    dialog.innerHTML += course ? `possui uma licenciatura em ${course}. ` :  `não possui uma licenciatura. `

    if (vm.languages.length) {
        dialog.innerHTML += `O candidato domina as linguagens: `
    
        for (let i = 0; i < vm.languages.length - 1; i++) {
            dialog.innerHTML += vm.languages[i] + (", ");
        }
        dialog.innerHTML += vm.languages[vm.languages.length - 1]
    } else {
        dialog.innerHTML += `O candidato não domina nenhuma linguagem. `
    }

    dialog.innerHTML += (vm.motivation.length) ? `. A motivação para esta candidatura é ${vm.motivation}. ` : `. Não há uma motivação especial. `
    
    dialog.innerHTML += `Pontuação final: ${vm.score}.`

    dialog.show();
}