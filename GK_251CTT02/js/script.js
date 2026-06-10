document.addEventListener("DOMContentLoaded", function () {
  // Hàm hiển thị thông báo đơn giản
  function showMessage(text) {
    var box = document.createElement("section");
    box.textContent = text;
    box.style.position = "fixed";
    box.style.top = "20px";
    box.style.right = "20px";
    box.style.backgroundColor = "#333";
    box.style.color = "#fff";
    box.style.padding = "10px 12px";
    box.style.borderRadius = "4px";
    box.style.zIndex = "9999";
    document.body.appendChild(box);
    setTimeout(function () {
      document.body.removeChild(box);
    }, 2000);
  }

  // Hiển thị menu đang chọn
  var menuItems = document.querySelectorAll("nav a");
  var selectedMenu = document.getElementById("selected-menu");

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function (event) {
      event.preventDefault();
      for (var j = 0; j < menuItems.length; j++) {
        menuItems[j].style.backgroundColor = "";
        menuItems[j].style.color = "";
      }
      this.style.backgroundColor = "#32e213";
      this.style.color = "#000";
      if (selectedMenu) {
        selectedMenu.textContent = this.textContent.trim();
      }
      showMessage("Menu đã chọn: " + this.textContent.trim());
    });
  }

  // Hiển thị chi tiết sản phẩm
  var detailBox = document.createElement("div");
  detailBox.style.border = "1px solid #ccc";
  detailBox.style.padding = "12px";
  detailBox.style.margin = "20px 0";
  detailBox.innerHTML =
    "<h2>Chi tiết sản phẩm</h2>" +
    '<p id="detail-name">Chưa chọn sách</p>' +
    '<p id="detail-price"></p>';

  var mainSection = document.querySelector("main");
  if (mainSection) {
    mainSection.insertBefore(detailBox, mainSection.firstChild);
  }

  var detailName = document.getElementById("detail-name");
  var detailPrice = document.getElementById("detail-price");
  var detailButtons = document.querySelectorAll(".book-list .book button");

  for (var k = 0; k < detailButtons.length; k++) {
    detailButtons[k].addEventListener("click", function () {
      var card = this.parentElement;
      if (!card) return;
      var title = card.querySelector("h3").textContent;
      var price = card.querySelector("p").textContent;
      if (detailName) {
        detailName.textContent = "Tên sách: " + title;
      }
      if (detailPrice) {
        detailPrice.textContent = "Giá: " + price;
      }
      showMessage("Đã hiển thị chi tiết: " + title);
    });
  }

  showMessage("Chào mừng đến Nhà Sách Tìm Đường");
});
