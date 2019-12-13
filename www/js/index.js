var phonegapApp = {
  // Application Constructor
  initialize: function() {
    // this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    // document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    phonegapApp.appLoading();
  },
  // Update DOM on a Received Event

  //  This Function For App Launch Component
  appLoading: function() {
    let language = localStorage.getItem("localLanguage");

    if (language == "") {
      localStorage.setItem("localLanguage", "en");
    }

    switch (language) {
      case "en":
        $("#homePageTitle").html(`Home`);
        $("#lblTemplaeSchedule").html(`Temple schedule`);
        $("#lblDailyProsad").html(`Daily Prosad`);
        $("#lblSpecialProsad").html(`Special Prosad`);
        $("#lblTodayEvent").html(`Today Event`);
        $("#lblVaisavCalender").html(`Vaisav Calender`);
        $("#lblNityaSeba").html(`Nitya Seba`);
        $("#btnVideo").html(`Videos`);
        $("#btnPhotos").html(`Photos`);
        break;

      case "bn":
        $("#homePageTitle").html(`হোম`);
        $("#lblTemplaeSchedule").html(`মন্দিরের সময়সূচী`);
        $("#lblDailyProsad").html(`দৈনিক প্রসাদ`);
        $("#lblSpecialProsad").html(`বিশেষ প্রসাদ`);
        $("#lblTodayEvent").html(`আজ ইভেন্ট`);
        $("#lblVaisavCalender").html(`বৈষ্ণৱ ক্যালেন্ডার`);
        $("#lblNityaSeba").html(`নিত্য সেবা`);
        $("#btnVideo").html(`ভিডিও`);
        $("#btnPhotos").html(`ফটো`);
        break;

      case "hin":
        $("#homePageTitle").html(`होम`);
        $("#lblTemplaeSchedule").html(`मंदिर का कार्यक्रम`);
        $("#lblDailyProsad").html(`दैनिक पेशेवरों`);
        $("#lblSpecialProsad").html(`बिसेष अभियोजन`);
        $("#lblTodayEvent").html(`आज घटना`);
        $("#lblVaisavCalender").html(`वैष्णव कैलेंडर`);
        $("#lblNityaSeba").html(`नित्य सेबा`);
        $("#btnVideo").html(`वीडियो`);
        $("#btnPhotos").html(`फोटो`);
        break;
      default:
        break;
    }

    //phonegapApp.loadBanner();
  },

  // This function for load banner
  loadBanner: function() {
    $.ajax({
      type: "get",
      url: "https://iskconpanihatiapp.in/api/banner_image",
      data: {},
      dataType: "json",
      success: function(response) {
        banners = "";
        for (list in response.result) {
          banners += `<div class="swiper-slide"><img src="${response.result[list].image}" width="100%"/></div>`;
        }
        $("#bannerImages").html(banners);
      }
    });
  }

  // This Function For Get Temple Schedule
  // templeSchedule: function(result) {
  //   let language = localStorage.getItem("localLanguage");
  //   timeing = ''
  //   for (list in result) {
  //     if (language == "hin") {
  //       timeing += `<div class="card card-expandable">
  //     <div class="card-content">
  //       <div class="bg-color-red" style="height: 300px">
  //         <div class="card-header text-color-white display-block">
  //           Framework7
  //           <br />
  //           <small style="opacity: 0.7">Build Mobile Apps</small>
  //         </div>
  //         <a
  //           href="#"
  //           class="link card-close card-opened-fade-in color-white"
  //           style="position: absolute; right: 15px; top: 15px"
  //         >
  //           <i class="icon f7-icons">multiply_circle_fill</i>
  //         </a>
  //       </div>
  //       <div class="card-content-padding">
  //         <p>
  //           Framework7 - is a free and open source HTML mobile framework to
  //           develop hybrid mobile apps or web apps with iOS or Android
  //           (Material) native look and feel. It is also an indispensable
  //           prototyping apps tool to show working app prototype as soon as
  //           possible in case you need to.
  //         </p>
  //       </div>
  //     </div>
  //   </div>`
  //     } else if (language == "bn") {
  //       timeing += `<div class="card card-expandable">
  //       <div class="card-content">
  //         <div class="bg-color-red" style="height: 300px">
  //           <div class="card-header text-color-white display-block">
  //             Framework7
  //             <br />
  //             <small style="opacity: 0.7">Build Mobile Apps</small>
  //           </div>
  //           <a
  //             href="#"
  //             class="link card-close card-opened-fade-in color-white"
  //             style="position: absolute; right: 15px; top: 15px"
  //           >
  //             <i class="icon f7-icons">multiply_circle_fill</i>
  //           </a>
  //         </div>
  //         <div class="card-content-padding">
  //           <p>
  //             Framework7 - is a free and open source HTML mobile framework to
  //             develop hybrid mobile apps or web apps with iOS or Android
  //             (Material) native look and feel. It is also an indispensable
  //             prototyping apps tool to show working app prototype as soon as
  //             possible in case you need to.
  //           </p>
  //         </div>
  //       </div>
  //     </div>`
  //     } else {
  //       timeing += `<div class="card card-expandable">
  //     <div class="card-content">
  //       <div class="bg-color-red" style="height: 300px">
  //         <div class="card-header text-color-white display-block">
  //           Framework7
  //           <br />
  //           <small style="opacity: 0.7">Build Mobile Apps</small>
  //         </div>
  //         <a
  //           href="#"
  //           class="link card-close card-opened-fade-in color-white"
  //           style="position: absolute; right: 15px; top: 15px"
  //         >
  //           <i class="icon f7-icons">multiply_circle_fill</i>
  //         </a>
  //       </div>
  //       <div class="card-content-padding">
  //         <p>
  //           Framework7 - is a free and open source HTML mobile framework to
  //           develop hybrid mobile apps or web apps with iOS or Android
  //           (Material) native look and feel. It is also an indispensable
  //           prototyping apps tool to show working app prototype as soon as
  //           possible in case you need to.
  //         </p>
  //       </div>
  //     </div>
  //   </div>`
  //     }

  //   }
  // }
};
