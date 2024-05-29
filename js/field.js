// сетка для студии

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageUrls = [
        // Add your image URLs here
        "          https://i.pinimg.com/474x/94/78/a5/9478a551891103c6fec62549d5129780.jpg   ",
        "         https://i.pinimg.com/236x/1b/af/f6/1baff6408c00c37333c77a907d5f1dbd.jpg    ",
        "        https://i.pinimg.com/474x/9f/8e/88/9f8e8891d7527e520b84137d279cd7da.jpg     ",
        "  https://i.pinimg.com/474x/b8/df/e6/b8dfe62eb9f41566215d84051e1b36cd.jpg           ",
        "    https://i.pinimg.com/236x/6d/7a/5d/6d7a5dfc03109b544fe3e772dc572626.jpg         ",
        "   https://i.pinimg.com/236x/6d/03/7b/6d037be1b02e7fb279adade6e55a9f47.jpg          ",
        "          https://i.pinimg.com/236x/f3/c3/7e/f3c37ec78d120dd065ddefbc2af7f40c.jpg   ",
        "      https://i.pinimg.com/236x/fb/5e/44/fb5e4410032789ad9c4cd4df0f3d1e78.jpg       "
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


