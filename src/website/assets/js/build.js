const app = Vue.createApp({
    data() {
        return {
            loggedin: false,
            darkmode: false,
            lightmode: true
        }
    },

    methods: {
        switchMode(newMode) {
            if (newMode == 'dark') {
                this.darkmode = true;
                this.lightmode = false;
                document.querySelector("html").setAttribute("data-theme", newMode);
            } else {
                this.darkmode = false;
                this.lightmode = true;
                document.querySelector("html").setAttribute("data-theme", newMode);
            }
        }
    },
}).mount('#app')