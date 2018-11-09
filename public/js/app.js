window.onload = function () {
    var topMenu = document.querySelectorAll(".menu > ul > li");
    if (topMenu) {
      [...topMenu].forEach(element => {
        element.addEventListener("click", mapEventsMenus);
      });
    }
    document.querySelector("nav .toggle img").addEventListener("click", () => { 
        var menu = document.querySelector("nav");
        menu.classList.add("smartphone");
      })
  }

  mapEventsMenus = function (e) {
    e.preventDefault();
    var li = e.target.closest("li");
    clearMenu();
    var submenu = li.querySelector(".sub-menu");
    if(submenu){
        li.classList.add("has-menu")    
    }
    li.classList.add("active")
  }

  document.addEventListener("mouseup", function (e) {
    clearMenu();
  });

  clearMenu = function () {
    var topMenu = document.querySelectorAll(".menu > ul > li");

    [...topMenu].forEach(element => {
      element.classList.remove("active")
    });
  }
  