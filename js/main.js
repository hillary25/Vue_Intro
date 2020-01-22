// To do: => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

Vue.component('player', {
  // Container for data to flow into component
  props: ['movie'],

  template: `
  <div>
    <h3 class="movie-title">{{ movie.vidtitle }}</h3>
    <video :src="'video/' + movie.vidsource" controls autoplay></video>
    <div class="movie-details">
      <p>{{ movie.videodescription }}</p>
    </div>
  </div>
  `
})

var vm = new Vue({
  el: "#app",

  data: {

    // Mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isLoggedIn: true,
      settings: {}
    },


    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    movie: {
      vidtitle: "video title goes here",
      vidsource: "",
      videodescription: "video description here"
    },

    showDetails: false
  },

  created: function() {
    // Run a fetch call and get the user data
    console.log('created lifecycle hook fired here, go get user data');
    this.getUserData();
  },

  methods: {
    getUserData() {
      // Do a fetch call here and get the user from the DB
      const url = './includes/index.php?getUser=1';

      fetch(url) // Get data from the DB
      .then(res => res.json()) // Translate JSON from DB to plain object
      .then(data => { // Use the plain data object (the user)
        console.log(data); // Log it to the console (testing)

        // Put our DB data into Vue
        this.user.settings = data[0];
      })
      .catch((error) => console.error(error))
    },

    setUserPrefs() {
      // This is the preferences control, hit the API when ready (or use a component)
      console.log('set user prefs here');
    },

    userLogin() {
      // Call the login route, and / or load the login component
      console.log('do login  / logout on click');

      // This is a ternary statement -> shorthand for if / else
      // The expression evaluates to true or false - if it's true, set the value equal to the left of the colon, if it's false set the value equal to the right
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    showMovieDetails({name, vidsource, description}) {
      //console.log('show these details: ', movie);

      this.movie.vidtitle = name;
      this.movie.vidsource = vidsource;
      this.movie.videodescription = description;

      // Make the movie details show up
      this.showDetails = true;
    }
  }
});
