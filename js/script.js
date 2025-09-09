

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter(() => {
    highlightActiveLink();
    initHeaderBehavior();
    initMobileNavToggle();
    document.querySelector(".year").textContent = new Date().getFullYear();
  });
});

// Load Header and Footer
function loadHeaderFooter(callback) {
  document.getElementById("header").innerHTML = `
        <div id="main-header">
            <nav class="mynavbar bg-light">
              <div class="container header">
                <a class="brandLogo" href="index.html">
                  <img src="image/BrandLogo.webp" alt="your Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu ms-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close">
                      <span class="close-btn">+</span>
                    </button>
                  </li>
                  <li class="navLi">
                    <a class="navLink" href="index.html">Home</a>
                  </li>
                  <li class="navLi">
                    <a class="navLink" href="aboutUs.html">About</a>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">Our Locations <span class="toggleSub">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd" stroke-width="0.5" stroke="currentColor"/></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi">
                        <a href="RiyaRevtiPartyPlot.html" class="navLink">Riya Revti Party Plot</a>
                      </li>
                      <li class="navLi">
                        <a href="RudrakshPartyPlotAndBanquet.html" class="navLink">Rudraksh Party Plot & Banquet</a>
                      </li>
                      <li class="navLi">
                        <a href="DwarkeshFarmBanquetHallAndPartyPlot.html" class="navLink">Dwarkesh Farm Banquet Hall & Party Plot</a>
                      </li>
                      <li class="navLi">
                        <a href="GangotriPartyPlotAndMarriageHall.html" class="navLink">Gangotri Party Plot & Marriage Hall</a>
                      </li>
                      <li class="navLi">
                        <a href="JamnotriPartyPlot.html" class="navLink">Jamnotri Party Plot</a>
                      </li>
                      <li class="navLi">
                        <a href="SaraswatiFarm.html" class="navLink">Saraswati Farm</a>
                      </li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="gallery.html" class="navLink">Gallery</a>
                  </li>
                  <li class="navLi">
                    <a href="contact.html" class="navLink">Contact</a>
                  </li>
                     <li class="navLi extraBtn">
                     <a class="Gradientbutton" href="contact.html">
                       book Your Event
                      <span class="gradient-container">
                        <span class="gradient"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>`; // Keep your current header HTML here

  document.getElementById("footer").innerHTML = `<div class="container">
        <div class="footWrap defaultPadding">
          <div class="LogoAndSocial">
              <a class="footer-brand" href="index.html">
              <img loading="lazy" src="image/BrandLogo.webp" alt="yourLogo">
              </a>
              <div class="social-icons">
                <a target="_blank" href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>

                </div>
                </div>
          <div class="row">
          <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
            
              <p>
              We create unforgettable experiences that bring people together. From birthday parties to weddings and social gatherings, we plan every detail with care and creativity. Let’s make your next event extraordinary.
              </p>
             
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
            <h5 class="fourthH">Quick Links</h5>
            <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="aboutUs.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>About Us</a>
                  </li>
                <li>
                <a class="footerLinks" href="gallery.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Gallery</a>
                </li>
                <li>
                <a class="footerLinks" href="contact.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact</a>
                    </li>
              </ul>
              </div>
              <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH ">Explore Link</h5>
              <ul>   
              <li><a href="weddingAndReception.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Wedding & Reception</a></li> 
              <li><a href="babyShower.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Baby Shower</a></li> 
              <li><a href="DJ_AndDance.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> DJ & Dance</a></li> 
              <li><a href="birthdayParties.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Birthday Party</a></li> 

                 </ul>
                 </div>
                 <div class="col-md-6 col-lg-auto mb-4 mb-md-0">
                 <h5 class="fourthH ">Contact Us</h5>
                 <ul class="contact-info">
                <li>
                <a class="locationLink footerLinks" target="_blank" href="https://maps.app.goo.gl/KCjhggPh8MBU2fQXA">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
<pre class="mb-0">
Saurabh Park, Laxmipura,
Subhanpura, Vadodara, 
Gujarat 390021
</pre>
                      </a>
                      </li>
                      <li>
                      <a href="tel:+918200482291" class="footerLinks">
                      <i class="fa-solid fa-phone"></i>+91 82004 82291</a>
                      </li>
                <li>
                <a class="emailAnchor footerLinks" href="mailto:youremail">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>youremail</a>
                    </li>
                    </ul>
            </div>
          
            <!-- Contact Info -->
          </div>
        </div>
       
      </div>
      <div class="f-bottom effect">
      <div class="container">
      <div class="row ">
      <div class="col-12">
      <div class="inner">
      <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Shriii Events | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
      <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                  </div>
              </div>
              </div>
          </div>
          </div>
          </div> `; // Keep your current footer HTML here

    document.getElementById("fabContainer").innerHTML = ` <!-- whatsapp FAB icon -->
    <div class="fab-container">
      <a class="set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=918200482291">
        <svg xmlns="http://www.w3.org/2000/svg" width="59.54px" height="60px" viewBox="0 0 256 258">
          <defs>
            <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#1faf38"></stop>
              <stop offset="100%" stop-color="#60d669"></stop>
            </linearGradient>
            <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#f9f9f9"></stop>
              <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path>
          <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path>
          <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path>
        </svg>
      </a>
    </div>
    <!-- Call FAB icon -->
    <div class="Call-fab-container">
      <a rel="noopener" target="_blank" href="tel:+918200482291">
        <img loading="lazy" style="height: 60px; width: 60px" src="image/phone-call.png" alt="phone icon" />
      </a>
    </div>`// Keep your current Fab HTML here
  callback?.();
  }

// Highlight current page in navbar
function highlightActiveLink() {
  const current = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  document.querySelectorAll(".navLink").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.closest(".dropdownList")?.closest(".navLi")?.querySelector(".navLink")?.classList.add("active");
    }
  });
}

// Sticky Header on Scroll
function initHeaderBehavior() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const stickyStart = header.offsetTop + header.offsetHeight + 5;
    const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

    if (scrollTop > stickyStart) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");
    } else if (scrollTop < resetPoint) {
      header.classList.remove("sticky-header", "visible");
      header.classList.add("headerAnimate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
}

// Mobile Nav Toggle and Submenu
function initMobileNavToggle() {
  const toggleBtn = document.querySelector(".navToggle");
  const navMenu = document.querySelector(".navMenu");
  const closeBtn = document.querySelector(".btn-nav-close");

  toggleBtn?.addEventListener("click", () => navMenu.classList.toggle("active"));
  closeBtn?.addEventListener("click", () => navMenu.classList.remove("active"));

  document.querySelectorAll(".toggleSub").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const submenu = toggle.closest(".navLi").querySelector(".dropdownList");

      // Close all others
      document.querySelectorAll(".dropdownList.open").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("open");
      });

      submenu?.classList.toggle("open");
    });
  });
}


// WhatsApp URL Adjuster (Device-based Detection)
(function () {
  const mobileLink = "https://api.whatsapp.com/send?phone=numberHere";
  const desktopLink = "https://web.whatsapp.com/send?phone=numberHere";

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateWhatsAppLink() {
    const isMobile = isMobileDevice();
    const targetLink = isMobile ? mobileLink : desktopLink;

    document.querySelectorAll(".set-url-target").forEach(el => {
      el.setAttribute("href", targetLink);
    });
  }

  window.addEventListener("resize", updateWhatsAppLink);
  window.addEventListener("load", updateWhatsAppLink);
})();


