$(document).ready(function () {
  $('#navBar').load('/components/navbar.html', function () {
    const content = $('#navBar').html();
    $("#navBar").replaceWith(content);

    // setelah navbar dimuat, tambahkan fungsionalitas scroll
    const navbar = document.getElementById("navbar");
    let lastScroll = 0;
    let hideTimeout;

    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // scroll ke bawah 🐧
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          navbar.classList.replace("top-0", "-top-25");
        }, 0);
      } else {
        // scroll ke atas 🐧
        clearTimeout(hideTimeout);
        navbar.classList.replace("-top-25", "top-0");
      }
      lastScroll = currentScroll
    });

    // Set active nav link berdasarkan path saat ini
    const path = window.location.pathname;
    $('.nav-link').each(function () {
      const href = $(this).attr('href');
      if (path === href) {
        $(this).addClass('active');
      }
    });
  });

  $('#footer').load('/components/footer.html', function () {
    const content = $('#footer').html();
    $("footer").replaceWith(content);
  });
});