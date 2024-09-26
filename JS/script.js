//turn pages when click next or prev button
const pageTurnBtns = document.querySelectorAll(".nextprev-btn");
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");
const backProfileBtn = document.querySelector(".back-profile");
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

pageTurnBtns.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");

      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// فتح الغلاف الأيمن بعد 1.5 ثانية
setTimeout(() => {
  coverRight.classList.add("turn"); // إضافة فئة التدوير
}, 1500); // أقل من 2.1 ثانية لتسريع الفتح

// تغيير z-index للغلاف الأيمن بعد 2.5 ثانية
setTimeout(() => {
  coverRight.style.zIndex = -1; // إرساله إلى الخلف
}, 2500); // أقل من 2.8 ثانية

// فتح الصفحة اليسرى بعد 2.5 ثانية
setTimeout(() => {
  pageLeft.style.zIndex = 20; // جعل الصفحة اليسرى في المقدمة
}, 2500); // يتوافق مع الوقت السابق

//opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
