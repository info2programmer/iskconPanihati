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
  }
};
