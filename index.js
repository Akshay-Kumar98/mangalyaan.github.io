function myway() {

  setTimeout(function () {
    document.getElementById('loading').style.display = "none";
  }, 1000);
}

$(document).ready(function () {
  $("#menubar").click(function () {
    $("#mynav").toggleClass("main");
  });
});

var state = false;

function dare() {
  if (state) {
    document.getElementById("pswd").setAttribute("type", "Password");

    document.getElementById("text").innerHTML =
      '<i class="fas fa-eye-slash"></i>';
    state = false;
  } else {
    document.getElementById("pswd").setAttribute("type", "text");

    document.getElementById("text").innerHTML = '<i class="fas fa-eye"></i>';
    state = true;
  }
}

//   var i = 0;
// var path = new Array();

// path[0] = "images/banner-01.png";
// path[1] = "images/Untitled-1.jpg";
// path[2] = "images/mars-inside.jpg";
// path[3] = "images/trajectory-01.png";
// // path[4] = "images/news-110513b-lg.jpg";

// function changeImg(){
//     document.getElementById('change').src = path[i];
//     if(i < path.length - 1) i++;

//     else  i=0;

//     setTimeout("changeImg()",2000);
// }

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2000);

function check() {
  if (document.contactform.text.value == "") {
    alert("Please Provide Your Name First");
    document.contactform.text.focus();
    return false;
  }

  if (document.contactform.email.value == "") {
    alert("Please Provide Your Email");
    document.contactform.email.focus();
    return false;
  }

  if (document.contactform.phone.value == "") {
    alert("Please Provide Your Phone Number");
    document.contactform.phone.focus();
    return false;
  }

  return true;
}

$(document).ready(function () {
  $("#click").click(function () {
    $("#scroll").toggleClass("my");
  });
});

function rahu() {
  document.getElementById("wireframe").style.transform = "translateX(0)";

  document.getElementById("hook").style.transform = "translateX(0)";

  document.getElementById("robert").style.transform = "translateX(0)";

  document.getElementById("hyper").style.transform = "translateX(0)";
}

function myfunction(x) {
  if (x.matches) {
    $(window).scroll(function () {
      if ($(window).scrollTop()) {
        $(".scroll_tab").addClass("toget");
      } else {
        $(".scroll_tab").removeClass("toget");
      }
    });

    $(window).scroll(function () {
      if ($(window).scrollTop()) {
        $(".rocket_content").addClass("black");
      } else {
        $(".rocket_content").removeClass("black");
      }
    });
  }
}

var x = window.matchMedia("(min-width: 1025px)");

myfunction(x);

x.addListener(myfunction);

function high() {
  window.scrollTo(0, 0);
}


$(document).ready(function () {
$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("#anchor").fadeIn(3000);
  } else {
    $("#anchor").fadeOut(1000);
  }
});
  
});

$(document).ready(function () {
  $(".tag ul li").hover(function () {
    $(this).toggleClass("neo");
  });
});

$(document).ready(function () {
  $(".tagline ul li").hover(function () {
    $(this).toggleClass("neo");
  });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


$(document).ready(function () {
  $(".makeit").click(function () {
    $(".page").toggleClass("better");
  });
});

$(document).ready(function () {
  $(".talking").click(function () {
    $(".page").toggleClass("better");
  });
});
