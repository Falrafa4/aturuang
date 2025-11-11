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

    // fungsionalitas tombol toggle menu mobile
    const toggleBtn = $('#toggleMenu');
    const mobileMenu = $('#mobileMenu');
    const icon = $('#icon');

    let isOpen = false;

    toggleBtn.on('click', function () {
      if (!isOpen) {
        mobileMenu.removeClass('-translate-y-[130%]');
        mobileMenu.addClass('translate-y-0');
        icon.text('close');
        isOpen = true;
      }
      else {
        mobileMenu.removeClass('translate-y-0');
        mobileMenu.addClass('-translate-y-[130%]');
        icon.text('menu');
        isOpen = false;
      }
    });

    // khusus halaman artikel (ubah warna navbar saat scroll)
    if ($('body').attr('id') === 'artikelPage') {
      // ubah warna navbar
      $('#navbar').removeClass('text-primary bg-secondary').addClass('text-secondary bg-transparent');

      $(window).on('scroll', function () {
          const scroll = $(this).scrollTop();
          const navbar = $('#navbar');
          const headerHeight = $('header').outerHeight();

          $(window).on('scroll', function () {
            if (scroll > headerHeight - 50) {
              // udah lewatin header
              navbar.removeClass('text-secondary bg-transparent').addClass('text-primary bg-secondary');
            } else {
              // masih di atas
              navbar.removeClass('text-primary bg-secondary').addClass('text-secondary bg-transparent');
            }
          });
      });
    }
  });

  $('#footer').load('/components/footer.html', function () {
    const content = $('#footer').html();
    $("footer").replaceWith(content);
  });
});