// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: "#app", // App root element
  id: "io.framework7.testapp", // App bundle ID
  name: "Framework7", // App name
  theme: "auto", // Automatic theme detection
  // App root data
  data: function() {
    return {
      user: {
        firstName: "John",
        lastName: "Doe"
      }
    };
  },
  // App root methods
  methods: {
    helloWorld: function() {
      app.dialog.alert("Hello World!");
    }
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    swipe: true,
    leftBreakpoint: 960
  }
});

var swiper = app.swiper.create(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  autoplay: true
});

// Init/Create left panel view
var leftView = app.views.create(".view-left", {
  url: "/"
});

// Init/Create main view
var mainView = app.views.create(".view-main", {
  url: "/"
});

// Login Screen Demo
$$("#my-login-screen .login-button").on("click", function() {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close("#my-login-screen");

  // Alert username and password
  app.dialog.alert("Username: " + username + "<br>Password: " + password);
});

var myPhotoBrowserPopupDark = app.photoBrowser.create({
  photos: [
    {
      html:
        '<iframe src="https://www.youtube.com/embed/YoGRcDB-fn4" frameborder="0" allowfullscreen></iframe>',
      caption: "Woodkid - Run Boy Run (Official HD Video)"
    },
    {
      html:
        '<iframe src="//www.youtube.com/embed/C396EinEs3Y" frameborder="0" allowfullscreen></iframe>',
      caption: "Second Caption Text"
    },
    {
      html:
        '<iframe src="//www.youtube.com/embed/lmc21V-zBq0" frameborder="0" allowfullscreen></iframe>'
    }
  ],
  theme: "dark",
  type: "standalone"
});

// App Loading Code
phonegapApp.appLoading();
