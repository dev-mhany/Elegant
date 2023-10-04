document.addEventListener("DOMContentLoaded", function() {
    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
});
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
    // Get the modal
    var modal = document.getElementById("imageModal");

    // Get the image and insert it inside the modal
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

    // Get the <span> element that closes the modal
    var span = document.getElementById("closeModal");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
});
