$('#navbar a, .btn').on('click', function (e) {
  if (this.hash != '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );

    const navClass = hash.substring(1);
    $('.index, .home-members, .home-work, .home-gallery').removeClass(
      'current'
    );
    $(`.${navClass}`).addClass('current');
  }
});

window.addEventListener('load', function () {
  if (window.location.hash != '') {
    const hash = window.location.hash.replace('#', '');
    $('.index, .home-members, .home-work, .home-gallery').removeClass(
      'current'
    );
    $(`.${hash}`).addClass('current');
  }
});
