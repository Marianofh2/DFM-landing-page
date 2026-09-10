document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        if (filter === 'todos' || card.getAttribute('data-status') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
