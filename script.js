//  All Right Reserved By Arafat Hossain Ar


document.addEventListener("DOMContentLoaded", () => {
  let navButton = document.querySelector("#nav-menu-button");
  let navUl = document.querySelector(".nav-ul");
  let body = document.body;
  let link_color = document.querySelectorAll(".mode-color");
  let mode_btn = document.querySelector("#mode_btn");
  let getLink = document.querySelector("#btn");
  let setOutput = document.querySelector("#output");
  let copyText = document.querySelector("#copy");

  const nav_controller = () => {
    const toggleMobileMenu = () => {
      navUl.classList.toggle("hide-ul");
    };
    navButton.onclick = toggleMobileMenu;
  };
  nav_controller();

  const night_mode = () => {
    body.classList.toggle("dark-mode");
    link_color.forEach((a) => {
      a.classList.toggle("dark-link");
    });
  };
  mode_btn.addEventListener("click", night_mode);


  // API CALLING
  const get_short_link = () => {
    let getInput = document.querySelector("#input").value;
    let url = "https://api.shrtco.de/v2/shorten?url=";

    fetch(url + getInput)
      .then((res) => res.json())
      .then((out) => {
        setOutput.innerHTML = out.result.short_link2;
        Toastify({
          text: "Success!",
          duration: 3000,
          gravity: "bottom", 
          position: "center", 
          stopOnFocus: true, 
          style: {
            background: "#5cb85c",
          }
        }).showToast();
      })
      .catch((error) => {
        setOutput.innerHTML = "Invalid Link";
        Toastify({
          text: "Failed!",
          duration: 3000,
          gravity: "bottom", 
          position: "center", 
          stopOnFocus: true, 
          style: {
            background: "#f0ad4e",
          }
        }).showToast();
      });
  };

  getLink.addEventListener("click", get_short_link);
  get_short_link();

  const copy_link = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("output"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    Toastify({
      text: "Copied!",
      duration: 3000,
      gravity: "bottom", 
      position: "center", 
      stopOnFocus: true, 
      style: {
        background: "#5bc0de",
      }
    }).showToast();
  };
  copyText.addEventListener("click", copy_link);
});
