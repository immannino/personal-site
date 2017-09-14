let pageContent = [{
    isEnabled: false,
    id: "#home-content"
  }, {
    isEnabled: false,
    id: "#about-content"
}, {
  isEnabled: false,
  id: "#email-content"
}, {
  isEnabled: false,
  id: "#linkedin-content"
}];

$(document).ready(function () {

  $("#title").click(function () {
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      }
    }
  });

  $(".about").hover(function () {
    $("body").css("background-color", "red");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      } else if (page.id === "#about-content") {
        page.isEnabled = true;
        $(page.id).toggle();
      }
    }
  }, function () {
    $("body").css("background-color", "white");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      }
    }
  });

  $(".linkedin").hover(function () {
    $("body").css("background-color", "#0080ff");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      } else if (page.id === "#linkedin-content") {
        page.isEnabled = true;
        $(page.id).toggle();
      }
    }
  }, function () {
    $("body").css("background-color", "white");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      }
    }
  });

  $(".home").hover(function () {
    $("body").css("background-color", "yellow");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      } else if (page.id === "#home-content") {
        page.isEnabled = true;
        $(page.id).toggle();
      }
    }
  }, function () {
    $("body").css("background-color", "white");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      }
    }
  });

  $(".email").hover(function () {
    $("body").css("background-color", "#80ff7f");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      } else if (page.id === "#email-content") {
        page.isEnabled = true;
        $(page.id).toggle();
      }
    }
  }, function () {
    $("body").css("background-color", "white");
    for (let page of pageContent) {
      if (page.isEnabled) {
        page.isEnabled = false;
        $(page.id).toggle();
      }
    }
  });

  $(".tldr").hover(function () {
    $(".tldr").css("color", "white");
    $(".tldr").css("border", "hidden");
    $("body").css("background-color", "black");
  }, function () {
    $(".tldr").css("color", "black");
    $(".tldr").css("border", "none");
    $("body").css("background-color", "white");
  });
});