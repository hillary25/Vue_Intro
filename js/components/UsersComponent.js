// imports come first
import UserComponent from "./UserComponent.js";

export default {
    template: `
    <div class="container"> <!-- Using Bootstrap -->
        <div class="row">
            <div class="col-sm-12">
                <h1 class="user-message"> {{ message }} </h1>

                <!-- Render out users here -->
                <user v-for="user in userList" :liveuser="user"></user>
            </div>
        </div>
    </div>
    `,

    data: function() {
        return {
            message: "Who's Using Roku?",
            userList: []
        }
    },

    created: function() {
        // This will fire when the component gets built
        this.fetchAllUsers();
    },

    methods: {
        fetchAllUsers() {
            let url = `./includes/index.php?getUsers=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
            .catch((err) => {console.error(err)})
        }
    },

    components: {
        user: UserComponent
    }
}