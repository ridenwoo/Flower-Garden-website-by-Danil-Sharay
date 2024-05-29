// сетка для студии

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageUrls = [
        // Add your image URLs here
        " https://i.pinimg.com/236x/4c/4e/37/4c4e37d907cf7212664eab89357c654e.jpg",
        "https://i.pinimg.com/236x/28/17/bb/2817bba08001d4963ab6017a0158a11b.jpg",
        "https://i.pinimg.com/236x/5b/19/00/5b1900312a2bdbf7c528343fba6bc05c.jpg",
        "https://i.pinimg.com/236x/e1/3e/f3/e13ef3628fea87aa729f8e43d6463ae0.jpg",
        "https://i.pinimg.com/236x/55/e6/6a/55e66a5b81f3425dd9706e558adf1aae.jpg",
        "https://i.pinimg.com/474x/25/30/f8/2530f8fef1790e0f2ce8e2ce4bcad6b0.jpg",
        "https://i.pinimg.com/236x/c4/f6/5e/c4f65ea488c3ed2b7003f2589a972d89.jpg",
        "https://i.pinimg.com/474x/5c/4a/93/5c4a9330f3730bc30ab8fe609e6d1a8c.jpg",
        
        
        // Add more URLs as needed
    ];
  
    imageUrls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Image";
        imageContainer.appendChild(img);
    });
  });

  window.onscroll = () => {
    const navbar = document.querySelector('.navbar');
    const y = window.scrollY

    if (y >750) {
        navbar.classList.add('navbar-fixed')
        
    } else if (y <750) {
        navbar.classList.remove('navbar-fixed')
    }
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы модальных окон и кнопок
    var callbackModal = document.getElementById("callbackModal");
    var messageModal = document.getElementById("messageModal");

    var callbackLinks = document.querySelectorAll(".callback");
    var contactLink = document.getElementById("contactLink");

    var closeBtns = document.querySelectorAll(".close");

    var submitCallbackBtn = document.querySelector(".submit-btn");
    var submitMsgBtn = document.querySelector(".submit-msg-btn");

    // Открываем модальное окно для обратного звонка
    callbackLinks.forEach(function(link) {
        link.onclick = function(event) {
            event.preventDefault();
            callbackModal.style.display = "block";
        }
    });

    // Открываем модальное окно для сообщения
    if (contactLink) {
        contactLink.onclick = function(event) {
            event.preventDefault();
            messageModal.style.display = "block";
        }
    }

    // Закрываем модальные окна при клике на кнопку закрытия
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            var modal = btn.closest('.modal');
            modal.style.display = "none";
        }
    });

    // Закрываем модальное окно для обратного звонка при отправке формы
    if (submitCallbackBtn) {
        submitCallbackBtn.onclick = function() {
            callbackModal.style.display = "none";
        }
    }

    // Закрываем модальное окно для сообщения при отправке формы
    if (submitMsgBtn) {
        submitMsgBtn.onclick = function() {
            messageModal.style.display = "none";
        }
    }

    // Закрываем модальные окна при клике вне их области
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }
});


