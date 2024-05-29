// сетка для студии

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageUrls = [
        // Add your image URLs here
        "  https://i.pinimg.com/236x/9a/b2/c4/9ab2c45a5de3b1bcb85a820107dde0fe.jpg",
        " https://i.pinimg.com/236x/19/eb/51/19eb5191ce6e4748ca6847816f4729fd.jpg  ",
        "  https://i.pinimg.com/236x/77/2f/df/772fdfa9dec286a0634abebcb9dc44e7.jpg ",
        " https://i.pinimg.com/236x/60/0b/1f/600b1f8ecd9ee056eaeb441861ffdc23.jpg  ",
        " https://i.pinimg.com/236x/d8/d2/4f/d8d24f392275bea6a1927fc7bc68a5c1.jpg  ",
        " https://i.pinimg.com/236x/13/89/ce/1389ce19c4c4d7652f832fdbf500efbf.jpg  ",
        " https://i.pinimg.com/564x/59/8c/af/598caf63318c7c701f5c3183bb4b0cb7.jpg " ,
        "  https://i.pinimg.com/236x/e9/9e/c4/e99ec45f3cbe434fe84bcd9c1629fd06.jpg "
        
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


