// content js
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

// content js end

// navbar js start
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
// navbar js end








// topic image zoom js start
function image_open(e) {
    const imgID = e.id
    const id_num = imgID && imgID.split("-")
    span_id = id_num[1]
    var modal = document.getElementById(`myModal${id_num[1]}`);

    // console.log(id_num[1])
    const img = imgID && document.getElementById(imgID);
    // console.log(img.src);
    const modal_image = img && document.getElementById(`img${id_num[1]}`)
    // console.log(modal_image);
    modal.style.display = "block";
    modal_image.src = img.src;
    // captionText.innerHTML = this.alt;
    // onsole.log(modal_image)

    var span = document.getElementsByClassName("close")[span_id-1];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}