const vm = new Vue({
    el: "#app",
    data: {
        tasks: [
            {
                desc: "Criar a instância Vue",
                taskEnd: "w",
                isCompleted: true
            },
            {
                desc: "Fazer a ficha 6",
                taskEnd: "w",
                isCompleted: false
            },
            {
                desc: "Fazer mais qq coisa",
                taskEnd: "p",
                isCompleted: false
            }
        ],
        newTask: "",
        taskEnd: "p",
        taskView: "",
        deleteStyles: {
            color: "red",
            fontSize: 20 + "px",
            fontWeight: "bold",
            cursor: "pointer"
        }
    },
    methods: {
        addTask() {
            this.tasks.push({ desc: this.newTask, taskEnd: this.taskEnd, isCompleted: false });
        },
        deleteTask(i) {
            this.tasks.splice(i, 1);
        },
        saveLocally() {
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
    },
    computed: {
        filterTasks() {
            if (this.taskView === "")
                return this.tasks;

            return this.tasks.filter(
                task => task.taskEnd === this.taskView
            );
        }
    },
    created() {
        const stored = JSON.parse(localStorage.getItem("tasks"));

        if (stored)
            this.tasks = stored;

        window.addEventListener("unload", this.saveLocally);
    }
});