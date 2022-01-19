let taskbar = document.getElementsByClassName("taskbar");
[0];
let windows11 = document.getElementById("windows");
let startmenu = document.getElementsByClassName("startmenu");
[0];
let explorer = document.getElementById("explorer");
let explorerwin = document.getElementsByClassName("explorer")[0];
let startmenu_open = false;
let home = document.getElementsByClassName("home")[0];
let chodai = screen.width;
let slider = document.getElementsByClassName("slider")[0];
let explorer_open = false;
// let dev_in_pro = document.getElementsByClassName("appnotfound");
let dev_in_baap = document.getElementById("msg");
let isNew = true;
let wallimg = document.getElementsByClassName("walls")[0];
const body = document.querySelector("body");
let devproH = ``;


// body.onload(alert("welcom to Windows"))


windows11.addEventListener("click", function () {
  console.log("clicked");
  if (startmenu[0].style.bottom == "50px") {
    startmenu[0].style.bottom = "-655px";
    startmenu[0].style.height = "1vh";
    startmenu_open = false;
  } else {
    startmenu_open = true;
    startmenu[0].style.bottom = "50px";
    startmenu[0].style.height = "fit-content";
  }
});

function Explorer() {
  console.log("clicked!");
  console.log(startmenu_open);
  if (explorerwin.style.bottom == "50px") {
    explorerwin.style.bottom = "-655px";
    explorerwin.style.height = "1vh";
  }
  if ((explorerwin.style.bottom !== "50px") & startmenu_open) {
    explorer_open = true;
    console.log(startmenu_open);
    explorerwin.style.bottom = "50px";
    explorerwin.style.height = "85vh";
    startmenu[0].style.bottom = "-655px";
    startmenu[0].style.height = "1vh";
    startmenu_open = false;
  } else {
    explorerwin.style.bottom = "50px";
    explorerwin.style.height = "85vh";
  }
}

explorer.addEventListener("click", function () {
  console.log("clicked!");
  if (explorerwin.style.bottom == "50px") {
    explorer_open = false;
    explorerwin.style.bottom = "-655px";
    explorerwin.style.height = "1vh";
  } else if ((explorerwin.style.bottom !== "50px") & startmenu_open) {
    explorer_open = true;
    explorerwin.style.bottom = "50px";
    explorerwin.style.height = "85vh";
    startmenu[0].style.bottom = "-655px";
    startmenu[0].style.height = "1vh";
    startmenu_open = false;
  } else {
    explorer_open = true;
    explorerwin.style.bottom = "50px";
    explorerwin.style.height = "85vh";
  }
});


function devInPro(){
  devproH = `<div class="appnotfound">
                <P>Development Underway!!</P>
            </div>`;
  dev_in_baap.innerHTML += `<div class="appnotfound">
  <P>Development Underway!!</P>
</div>`;
    startmenu[0].style.bottom = "-655px";
    // startmenu[0].style.height = "1vh";
    startmenu_open = false;

  
  setTimeout(() =>{
    dev_in_baap.innerHTML = '';
  }, 4000);
}



home.addEventListener("mousemove", function (e) {
  if (e.offsetX > chodai - 5) {
    home.style.background = "rgba(0,0,0,0.507)";
    slider.style.right = "0px";
  } else {
    home.style.background = "#f3f3f300";
    slider.style.right = "-400px";
  }
  //   console.log();
});


function background(event) {
  // console.log(event.target);
  const imgTag = event.target;

  body.style.background = "url(" + imgTag.src + ")";
  body.style.backgroundSize = "cover";
  console.log(imgTag.src);
}


