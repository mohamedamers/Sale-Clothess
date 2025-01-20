$(document).ready(() => {
  $(window).scroll(function () {
    let x = $(window).scrollTop();

    if (x >= window.innerHeight) {
      $(".navbar").css({
        background: "lightgray",
      });

      $(".arow").fadeIn(1000);
    } else {
      $(".navbar").css({
        background: "white",
      });
      $(".arow").fadeOut(1000);
    }
  });

  $(".arow").click(function () {
    $(window).scrollTop(0);
  });
});

//Shop
let btn1 = document.getElementById("one");
let btn2 = document.getElementById("tow");
let btn3 = document.getElementById("three");
let btn_next = document.getElementById("next");

btn1.addEventListener(click, function () {
  btn1.style.background = "black";
  btn2.style.background = "none";
  btn3.style.background = "none";
});
btn2.addEventListener(click, function () {
  btn2.style.background = "black";
  btn1.style.background = "none";
  btn3.style.background = "none";
});
btn3.addEventListener(click, function () {
  btn3.style.background = "black";
  btn2.style.background = "none";
  btn1.style.background = "none";
});

// document.addEventListener("DOMContentLoaded", function () {
//   const paginationItems = document.querySelectorAll(".page-item");
//   let currentPage = 1; // الصفحة الحالية تبدأ من 1

//   // إضافة حدث النقر لكل عنصر
//   paginationItems.forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault(); // منع إعادة تحميل الصفحة

//       const clickedItem = item; // العنصر الذي تم النقر عليه
//       const link = clickedItem
//         .querySelector("a.page-link")
//         .getAttribute("href");

//       // التوجيه إلى الصفحة إذا كان الرابط صالحًا
//       if (link && link !== "#") {
//         window.location.href = link;
//         return; // إيقاف الكود بعد التوجيه
//       }

//       // التعامل مع "Previous" و"Next"
//       if (clickedItem.textContent.trim() === "Previous" && currentPage > 1) {
//         currentPage--;
//       } else if (
//         clickedItem.textContent.trim() === "Next" &&
//         currentPage < paginationItems.length - 2
//       ) {
//         currentPage++;
//       } else if (
//         !clickedItem.classList.contains("page-item-disabled") &&
//         clickedItem.classList.contains("page-link")
//       ) {
//         currentPage = parseInt(clickedItem.textContent.trim());
//       }

//       // تحديث الفئة "active"
//       paginationItems.forEach((el) => el.classList.remove("active")); // إزالة الفئة "active" من الجميع
//       clickedItem.classList.add("active"); // إضافة الفئة "active" للعنصر الحالي

//       // تحديث العرض
//       updatePagination();
//     });
//   });

//   // تحديث الحالة النشطة
//   function updatePagination() {
//     paginationItems.forEach((item, index) => {
//       // إزالة الفئة "active" من الجميع
//       item.classList.remove("active");

//       // تحديث الفئة "active" للصفحة الحالية
//       if (parseInt(item.textContent.trim()) === currentPage) {
//         item.classList.add("active");
//       }

//       // تحديث أزرار "Previous" و"Next"
//       if (index === 0) {
//         item.classList.toggle("disabled", currentPage === 1); // تعطيل "Previous" إذا كانت الصفحة الأولى
//       } else if (index === paginationItems.length - 1) {
//         item.classList.toggle(
//           "disabled",
//           currentPage === paginationItems.length - 2 // تعطيل "Next" إذا كانت الصفحة الأخيرة
//         );
//       }
//     });

//     // يمكن وضع تحديث المحتوى الديناميكي هنا
//     console.log(`Page ${currentPage} content is displayed.`);
//   }

//   // استدعاء التحديث في البداية
//   updatePagination();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const paginationItems = document.querySelectorAll(".page-item");
//   let currentPage = -1;

//   // تحديث الصفحات عند النقر
//   paginationItems.forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault(); // منع إعادة تحميل الصفحة

//       const clickedItem = item; // العنصر الذي تم النقر عليه

//       // استخراج الرابط من العنصر
//       const link = clickedItem
//         .querySelector("a.page-link")
//         .getAttribute("href");

//       // توجيه المستخدم إلى الصفحة المحددة إذا كان الرابط صالحًا
//       if (link && link !== "#") {
//         window.location.href = link;
//         return; // وقف تنفيذ باقي الكود إذا تم التوجيه
//       }

//       // التعامل مع "Previous" و"Next"
//       if (clickedItem.textContent.trim() === "Previous" && currentPage > 1) {
//         currentPage--;
//       } else if (
//         clickedItem.textContent.trim() === "Next" &&
//         currentPage < paginationItems.length - 2
//       ) {
//         currentPage++;
//       } else if (
//         !clickedItem.classList.contains("page-item-disabled") &&
//         clickedItem.classList.contains("page-link")
//       ) {
//         currentPage = parseInt(clickedItem.textContent.trim());
//       }

//       // تحديث العرض
//       updatePagination();
//     });
//   });

//   // تحديث الحالة النشطة
//   function updatePagination() {
//     paginationItems.forEach((item, index) => {
//       // إزالة الحالة النشطة
//       item.classList.remove("active");

//       // تحديث الزر السابق واللاحق
//       if (index === 0) {
//         item.classList.toggle("disabled", currentPage === 1);
//       } else if (index === paginationItems.length - 1) {
//         item.classList.toggle(
//           "disabled",
//           currentPage === paginationItems.length - 2
//         );
//       } else {
//         // تحديث رقم الصفحة
//         if (parseInt(item.textContent.trim()) === currentPage) {
//           item.classList.add("active");
//         }
//       }
//     });

//     // تحديث المحتوى الخاص بالصفحة
//     console.log(`Page ${currentPage} content is displayed.`);
//   }

//   // استدعاء التحديث في البداية
//   updatePagination();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const paginationItems = document.querySelectorAll(".page-item");
//   let currentPage = 1; // الصفحة الحالية

//   // تحديث الصفحات عند النقر
//   paginationItems.forEach((item, index) => {
//     item.addEventListener("click", function (e) {
//       e.preventDefault(); // منع إعادة تحميل الصفحة
//       const clickedItem = this;

//       // إذا كان "Previous"
//       if (clickedItem.textContent.trim() === "Previous" && currentPage > 1) {
//         currentPage--;
//       }
//       // إذا كان "Next"
//       else if (
//         clickedItem.textContent.trim() === "Next" &&
//         currentPage < paginationItems.length - 2
//       ) {
//         currentPage++;
//       }
//       // رقم صفحة معين
//       else if (
//         !clickedItem.classList.contains("page-item-disabled") &&
//         !clickedItem.classList.contains("page-link")
//       ) {
//         currentPage = parseInt(clickedItem.textContent.trim());
//       }

//       // تحديث العرض
//       updatePagination();
//     });
//   });

//   // دالة لتحديث الحالة النشطة
//   function updatePagination() {
//     paginationItems.forEach((item, index) => {
//       // إزالة الحالة النشطة
//       item.classList.remove("active");

//       // تحديث الزر السابق والتالي
//       if (index === 0) {
//         item.classList.toggle("disabled", currentPage === 1);
//       } else if (index === paginationItems.length - 1) {
//         item.classList.toggle(
//           "disabled",
//           currentPage === paginationItems.length - 2
//         );
//       } else {
//         // تحديث رقم الصفحة
//         if (parseInt(item.textContent.trim()) === currentPage) {
//           item.classList.add("active");
//         }
//       }
//     });

//     // تحديث المحتوى الخاص بالصفحة
//     console.log(`Page ${currentPage} content is displayed.`);
//     // يمكنك هنا استبدال `console.log` بأي تحديث للمحتوى الديناميكي
//   }

//   // استدعاء التحديث في البداية
//   updatePagination();
// });
