window.onload = function() {
  var topMenu = document.querySelectorAll(".menu > ul > li");
  if (topMenu) {
    [...topMenu].forEach(element => {
      var li = element.closest("li");
      var submenu = li.querySelector(".sub-menu");
      if (submenu) {
        li.classList.add("has-menu");
      }
      element.addEventListener("click", mapEventsMenus);
    });
  }
  var container = document.querySelector(".container");
  container.addEventListener("click", function(e) {
    clearMenu(e.target);
  });
};

toogleMenu = function(state) {
  var menu = document.querySelector("nav");
  if (state) {
    menu.classList.add("smartphone-active-menu");
  } else {
    menu.classList.remove("smartphone-active-menu");
  }
};

mapEventsMenus = function(e) {
  e.preventDefault();
  var li = e.target.closest("li");
  if (li.classList.contains("active")) {
    li.classList.remove("active");
  } else {
    li.classList.add("active");
  }
  clearMenu(li,e);
};

clearMenu = function(elementTarget,e) {
  var topMenu = document.querySelectorAll(".menu > ul > li");
  [...topMenu].forEach(element => {
    if (elementTarget != element) {
      element.classList.remove("active");
    }
  });
  if ((elementTarget.closest(".container") && elementTarget.closest(".container").classList.contains("container")) || (e && e.target.classList.contains("item"))) {
    var nav = document.querySelector("nav");
    if (nav.classList.contains("smartphone-active-menu")) {
      nav.classList.remove("smartphone-active-menu");
    }
  }
};
