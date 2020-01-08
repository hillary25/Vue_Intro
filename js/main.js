import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

// Set up a viewmodel and use the Vue framework
// NO CODE can go above the import statement that is above

const my_vm = (() => {
    // Variables can go here, or define components...whatever!
   
    // Define keys and values below

    let vue_VM = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                {name: "Joe", role: "Prof"},
                {name: "John", role: "Prof"},
                {name: "Jarrod", role: "Prof"}
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element!');
            }
        }
    }).$mount("#app"); // Look for element with ID of app, and connect and mount to it (watch for everything in the element and apply it)
})();