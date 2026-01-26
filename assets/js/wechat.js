// WeChat QR Code Bubble Handler
document.addEventListener('DOMContentLoaded', function() {
  var wechatModal = document.getElementById("wechat-modal") || document.getElementById("WeChatMod");
  var wechatBtns = document.querySelectorAll('.wechat-toggle, [id="WeChatBtn"]');

  if (wechatModal && wechatBtns.length > 0) {
    // Add click handler to all WeChat buttons
    wechatBtns.forEach(function(btn) {
      btn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Toggle display
        if (wechatModal.style.display === "block") {
          wechatModal.style.display = "none";
        } else {
          wechatModal.style.display = "block";
        }
      };
    });

    // Close bubble when clicking outside
    document.addEventListener('click', function(event) {
      if (wechatModal.style.display === "block" &&
          !wechatModal.contains(event.target) &&
          !Array.from(wechatBtns).some(btn => btn.contains(event.target))) {
        wechatModal.style.display = "none";
      }
    });

    // Prevent closing when clicking the bubble itself
    wechatModal.onclick = function(e) {
      e.stopPropagation();
    };
  }
});
