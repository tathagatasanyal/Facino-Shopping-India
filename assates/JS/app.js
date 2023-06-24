// Special Coutdown


// Scroll Back To Top


// nav hide

// slider
$('.slider_slick').slick({
    slidesToShow: 4,
    dots:true,
    slidesToScroll: 1,
    autoplay: true,
    speed:800,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-angle-left  left_arrow">',
    nextArrow:'<i class="fa-solid fa-angle-right  right_arrow">',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  // category
  const items = document.querySelectorAll("ul li");
  const products = document.querySelectorAll(".products .product");
  
  items.forEach((item) => {
    // Active
    item.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
  
      // Filter
      const valueAttr = item.getAttribute("data-filter");
      products.forEach((item) => {
        item.style.display = "none";
        if (
          item.getAttribute("data-filter").toLowerCase() ==
            valueAttr.toLowerCase() ||
          valueAttr == "all"
        ) {
          item.style.display = "flex";
        }
      });
    });
  });
  
  // Countdown
  let daysItem = document.querySelector("#days");
  let hoursItem = document.querySelector("#hours");
  let minItem = document.querySelector("#min");
  let secItem = document.querySelector("#sec");

  let Countdown = () => {
    let futureDate = new Date("30 June 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000 ) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
  }

  Countdown()
  setInterval(Countdown, 1000)


  // scroll to top

  function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
      var scroll = document.documentElement.scrollTop;
      if(scroll >= 150){
        scrollTopButton.classList.add('scrollActive');
      } else{
        scrollTopButton.classList.remove('scrollActive');
      }
    }
  }
  scrollTopBack();

