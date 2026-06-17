/* connectunited.guide — site.js */

document.addEventListener('DOMContentLoaded', function () {

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answer = this.nextElementSibling;

      // close all others
      document.querySelectorAll('.faq-question').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });

      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.add('open');
      }
    });
  });

  /* ── Active nav link ── */
  var path = window.location.pathname.replace(/\/$/, '').replace(/\.html$/, '');
  document.querySelectorAll('.nav-links a, .cluster-tab').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var hpath = href.replace(/\/$/, '').replace(/\.html$/, '');
    if (hpath && path.endsWith(hpath)) {
      a.classList.add('active');
    }
  });

  /* ── Mobile nav toggle (simple) ── */
  var toggle = document.querySelector('.nav-mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '56px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#0B1E3D';
      navLinks.style.padding = '12px 24px 20px';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
      navLinks.style.zIndex = '99';
    });
  }

});
