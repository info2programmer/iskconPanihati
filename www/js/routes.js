routes = [
  {
    path: "/",
    url: "./index.html"
  },
  {
    path: "/about/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/content_page/1",
        {},
        function(data) {
          if (language == "hin") {
            pageName = data.result.page_title_hindi;
            pageContent = data.result.page_content_hindi;
          } else if (language == "bn") {
            pageName = data.result.page_title_bengali;
            pageContent = data.result.page_content_bengali;
          } else {
            pageName = data.result.page_title_english;
            pageContent = data.result.page_content_english;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/about.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/templeFacility/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/content_page/4",
        {},
        function(data) {
          if (language == "hin") {
            pageName = data.result.page_title_hindi;
            pageContent = data.result.page_content_hindi;
          } else if (language == "bn") {
            pageName = data.result.page_title_bengali;
            pageContent = data.result.page_content_bengali;
          } else {
            pageName = data.result.page_title_english;
            pageContent = data.result.page_content_english;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/templeFacility.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/prabhuPada/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/content_page/5",
        {},
        function(data) {
          if (language == "hin") {
            pageName = data.result.page_title_hindi;
            pageContent = data.result.page_content_hindi;
          } else if (language == "bn") {
            pageName = data.result.page_title_bengali;
            pageContent = data.result.page_content_bengali;
          } else {
            pageName = data.result.page_title_english;
            pageContent = data.result.page_content_english;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/prabhuPada.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/prabhuPada/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/content_page/5",
        {},
        function(data) {
          if (language == "hin") {
            pageName = data.result.page_title_hindi;
            pageContent = data.result.page_content_hindi;
          } else if (language == "bn") {
            pageName = data.result.page_title_bengali;
            pageContent = data.result.page_content_bengali;
          } else {
            pageName = data.result.page_title_english;
            pageContent = data.result.page_content_english;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/prabhuPada.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/privacyPolicy/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/content_page/2",
        {},
        function(data) {
          if (language == "hin") {
            pageName = data.result.page_title_hindi;
            pageContent = data.result.page_content_hindi;
          } else if (language == "bn") {
            pageName = data.result.page_title_bengali;
            pageContent = data.result.page_content_bengali;
          } else {
            pageName = data.result.page_title_english;
            pageContent = data.result.page_content_english;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/privacyPolicy.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/termsAndCondition/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/content_page/3",
        {},
        function(data) {
          if (language == "hin") {
            pageName = data.result.page_title_hindi;
            pageContent = data.result.page_content_hindi;
          } else if (language == "bn") {
            pageName = data.result.page_title_bengali;
            pageContent = data.result.page_content_bengali;
          } else {
            pageName = data.result.page_title_english;
            pageContent = data.result.page_content_english;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/termsAndCondition.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/contactPage/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/contact/",
        {},
        function(data) {
          pageContent = data.result;
          if (language == "hin") {
            pageName = `संपर्क करें`;
          } else if (language == "bn") {
            pageName = `যোগাযোগ`;
          } else {
            pageName = `Contact`;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/contactUs.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/language/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/contact/",
        {},
        function(data) {
          pageContent = data.result;
          if (language == "hin") {
            pageName = `भाषा`;
          } else if (language == "bn") {
            pageName = `ভাষা`;
          } else {
            pageName = `Language`;
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/language.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: language
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  // Temple Schedule
  {
    path: "/templeSchedule/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/daily_schedule",
        {},
        function(data) {
          pageContent = "";
          if (language == "hin") {
            pageName = `आरती और दर्शन का समय`;
          } else if (language == "bn") {
            pageName = `আরতি ও দর্শনের সময়`;
          } else {
            pageName = `ARATI & DARSHAN TIMING`;
          }

          for (list in data.result) {
            if (language == "hin") {
              pageContent += `<div class="card card-expandable">
            <div class="card-content">
              <div class="bg-color-red" style="height: 300px">
                <div class="card-header text-color-white display-block">
                  ${data.result[list].title_hindi}
                  <br />
                </div>
                <a
                  href="#"
                  class="link card-close card-opened-fade-in color-white"
                  style="position: absolute; right: 15px; top: 15px"
                >
                  <i class="material-icons">close</i>
                </a>
              </div>
              <div class="card-content-padding">
                <p>
                  Start Time : ${data.result[list].start_time}
                </p>
                <p>
                  End Time : ${data.result[list].end_time}
                </p>
              </div>
            </div>
          </div>`;
            } else if (language == "bn") {
              pageContent += `<div class="card card-expandable">
              <div class="card-content">
                <div class="bg-color-red" style="height: 300px">
                  <div class="card-header text-color-white display-block">
                  ${data.result[list].title_bengali}
                  </div>
                  <a
                    href="#"
                    class="link card-close card-opened-fade-in color-white"
                    style="position: absolute; right: 15px; top: 15px"
                  >
                    <i class="material-icons">close</i>
                  </a>
                </div>
                <div class="card-content-padding">
                <p>
                Start Time : ${data.result[list].start_time}
              </p>
              <p>
                End Time : ${data.result[list].end_time}
              </p>
                </div>
              </div>
            </div>`;
            } else {
              pageContent += `<div class="card card-expandable">
            <div class="card-content">
              <div class="bg-color-red" style="height: 300px">
                <div class="card-header text-color-white display-block">
                ${data.result[list].title_english}
                </div>
                <a
                  href="#"
                  class="link card-close card-opened-fade-in color-white"
                  style="position: absolute; right: 15px; top: 15px"
                >
                  <i class="material-icons">close</i>
                </a>
              </div>
              <div class="card-content-padding">
              <p>
              Start Time : ${data.result[list].start_time}
            </p>
            <p>
              End Time : ${data.result[list].end_time}
            </p>
              </div>
            </div>
          </div>`;
            }
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/templeSchedule.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  // Vaisav Calender
  {
    path: "/vaisavCalender/",
    async: function(routeTo, routeFrom, resolve, reject) {
      app.preloader.show();
      let language = localStorage.getItem("localLanguage");
      let pageName = "";
      let pageContent = "";
      app.request.get(
        "https://iskconpanihatiapp.in/api/calender",
        {},
        function(data) {
          pageContent = "";
          if (language == "hin") {
            pageName = `वैष्णव कैलेंडर`;
          } else if (language == "bn") {
            pageName = `বৈষ্ণৱ ক্যালেন্ডার`;
          } else {
            pageName = `Vaisav Calender`;
          }

          for (list in data.result) {
            if (language == "hin") {
              pageContent += `<div class="card card-expandable">
            <div class="card-content">
              <div class="bg-color-red" style="height: 300px">
                <div class="card-header text-color-white display-block">
                  ${data.result[list].title_hindi}
                  <br />
                  <small style="opacity: 0.7">${data.result[list].event_date}</small>
                </div>
                <a
                  href="#"
                  class="link card-close card-opened-fade-in color-white"
                  style="position: absolute; right: 15px; top: 15px"
                >
                  <i class="material-icons">close</i>
                </a>
              </div>
              <div class="card-content-padding">
              <p>
              ${data.result[list].description_hindi}
            </p>
              </div>
            </div>
          </div>`;
            } else if (language == "bn") {
              pageContent += `<div class="card card-expandable">
              <div class="card-content">
                <div class="bg-color-red" style="height: 300px">
                  <div class="card-header text-color-white display-block">
                  ${data.result[list].title_bengali}
                  <br>
                  <small style="opacity: 0.7">${data.result[list].event_date_bangla}</small>
                  </div>
                  <a
                    href="#"
                    class="link card-close card-opened-fade-in color-white"
                    style="position: absolute; right: 15px; top: 15px"
                  >
                    <i class="material-icons">close</i>
                  </a>
                </div>
                <div class="card-content-padding">
                <p>
                  ${data.result[list].description_bengali}
                </p>
                </div>
              </div>
            </div>`;
            } else {
              pageContent += `<div class="card card-expandable">
            <div class="card-content">
              <div class="bg-color-red" style="height: 300px">
                <div class="card-header text-color-white display-block">
                ${data.result[list].title_english}
                <br>
                <small style="opacity: 0.7">${data.result[list].event_date}</small>
                </div>
                <a
                  href="#"
                  class="link card-close card-opened-fade-in color-white"
                  style="position: absolute; right: 15px; top: 15px"
                >
                  <i class="material-icons">close</i>
                </a>
              </div>
              <div class="card-content-padding">
              <p>
                ${data.result[list].description_english}
              </p>

              </div>
            </div>
          </div>`;
            }
          }

          setTimeout(function() {
            app.preloader.hide();
            resolve(
              {
                componentUrl: "./pages/vaishnavCalender.html"
              },
              {
                context: {
                  pageName: pageName,
                  pageContent: pageContent
                }
              }
            );
          }, 1000);
        },
        function() {},
        "json"
      );
    }
  },

  {
    path: "/form/",
    url: "./pages/form.html"
  },
  // Left View Pages
  {
    path: "/left-page-1/",
    url: "./pages/left-page-1.html"
  },
  {
    path: "/left-page-2/",
    url: "./pages/left-page-2.html"
  },
  // Page Loaders & Router
  {
    path: "/page-loader-template7/:user/:userId/:posts/:postId/",
    templateUrl: "./pages/page-loader-template7.html"
  },
  {
    path: "/page-loader-component/:user/:userId/:posts/:postId/",
    componentUrl: "./pages/page-loader-component.html"
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function(routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function() {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io"
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io"
            }
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: "./pages/request-and-load.html"
          },
          {
            context: {
              user: user
            }
          }
        );
      }, 1000);
    }
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    url: "./pages/404.html"
  }
];
