document.addEventListener("DOMContentLoaded", function () {
  const papers = document.querySelectorAll(".paper");

  papers.forEach(paper => {
    let isDragging = false;
    let offsetX, offsetY;

    // Mouse Events
    paper.addEventListener("mousedown", function (e) {
      isDragging = true;
      offsetX = e.clientX - paper.getBoundingClientRect().left;
      offsetY = e.clientY - paper.getBoundingClientRect().top;
      paper.style.position = "absolute";
      paper.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", function (e) {
      if (!isDragging) return;
      paper.style.left = e.clientX - offsetX + "px";
      paper.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", function () {
      isDragging = false;
      paper.style.zIndex = "1";
    });

    // Touch Events (For Mobile)
    paper.addEventListener("touchstart", function (e) {
      isDragging = true;
      let touch = e.touches[0];
      offsetX = touch.clientX - paper.getBoundingClientRect().left;
      offsetY = touch.clientY - paper.getBoundingClientRect().top;
      paper.style.position = "absolute";
      paper.style.zIndex = "1000";
    });

    document.addEventListener("touchmove", function (e) {
      if (!isDragging) return;
      let touch = e.touches[0];
      paper.style.left = touch.clientX - offsetX + "px";
      paper.style.top = touch.clientY - offsetY + "px";
    });

    document.addEventListener("touchend", function () {
      isDragging = false;
      paper.style.zIndex = "1";
    });
  });
});
