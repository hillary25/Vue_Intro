// To do => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // Mock up the user here - this will eventually come from the database UMS (user management system)
    user: {
      isAdmin: false,
      avatar: null, 
      // Make avatar "thor.png" above if you want to see avatar picture
      isLoggedIn: true
    },
    // Object properties need to be seperated by a comma, like above


    // This data should come from a database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    showDetails: false
  },

  methods: {
    setUserPrefs() {
      // This is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    },

    userLogin() {
      // Call the login reoute, and / or load the login component
      console.log('do login / logout on click');

      // This is a ternary statement -> shorthand for if / else
      // The expression evaluates to true or false - if it's true, set the value equal to the left of the colon. If it's false, set the value equal to the right.
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    }
  }
});
