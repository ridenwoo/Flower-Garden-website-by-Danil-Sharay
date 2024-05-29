// сетка для студии

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageUrls = [
        // Add your image URLs here
        "   https://i.pinimg.com/236x/09/b5/08/09b508a1f7c7d1d3b96711fb0004bdd6.jpg      ",
        "      https://i.pinimg.com/236x/2d/c1/a9/2dc1a9bdd84edb9b7a51cf217c80ac8b.jpg   ",
        "   https://i.pinimg.com/236x/d1/a7/28/d1a728b215ca23beda2f3e45c024b717.jpg      ",
        "     https://i.pinimg.com/236x/e7/d7/7b/e7d77bf672a37f821633cc5db7e7553d.jpg    ",
        "       https://i.pinimg.com/236x/3d/de/b2/3ddeb294f863159edc4a2adf3abd2803.jpg  ",
        "  https://i.pinimg.com/236x/13/1a/1d/131a1d861351338aedb6de9c2af9a75a.jpg       ",
        "     https://i.pinimg.com/236x/10/0e/ab/100eabf513138ba1ba33d88c0ecc7eaa.jpg    ",
        "     https://i.pinimg.com/236x/95/39/3b/95393b5e5c4258dd4f782ad0d2f5f89a.jpg    ",
        
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


