// сетка для студии

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageUrls = [
        // Add your image URLs here
        "https://i.pinimg.com/236x/46/36/b8/4636b8c0760f96c1c99e33c096db4689.jpg",
        "     https://i.pinimg.com/236x/21/9d/ab/219dab708faf37a0ef511fc749458ae7.jpg      ",
        "   https://i.pinimg.com/236x/4c/13/b0/4c13b018a16f1bec43bb1e64dbe73a26.jpg                ",
        "      https://i.pinimg.com/236x/c5/3f/22/c53f22dc1660f840895bdc2fd7357704.jpg             ",
        "         https://i.pinimg.com/236x/a5/1e/91/a51e9146dd0da7368933fd3982e492a9.jpg       ",
        "      https://i.pinimg.com/236x/2d/f3/d0/2df3d09ea0bb04d9b9a0f78508d9d2de.jpg     ",
        "      https://i.pinimg.com/236x/33/11/bb/3311bbecdd532c3bee0ea8eb3dd9f37b.jpg      ",
        "           https://i.pinimg.com/564x/06/9f/4e/069f4e775debf037aa32f98fded7a32b.jpg  "
        
        
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


