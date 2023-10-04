document.addEventListener("DOMContentLoaded", function() {
    var reviewsTrain = document.querySelector('.reviews-train');
    reviewsTrain.addEventListener('mouseenter', function() {
        reviewsTrain.classList.add('paused');
    });
    reviewsTrain.addEventListener('mouseleave', function() {
        reviewsTrain.classList.remove('paused');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imageModal");
    var images = document.querySelectorAll('.reviews-train img');
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    var span = document.getElementById("closeModal");
    span.onclick = function() {
        modal.style.display = "none";
    }
});