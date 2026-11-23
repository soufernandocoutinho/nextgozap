/* Documentação: comportamento e interações da página. */

(function () {
  var base = "https://nextgoagenda.com/fcsolucoesdigitais?serviceId=25201";
  var prefixes = ["utm_", "gclid", "gbraid", "wbraid", "fbclid", "msclkid"];
  var q = new URLSearchParams(location.search),
    tracking = new URLSearchParams();
  q.forEach(function (v, k) {
    if (
      prefixes.some(function (p) {
        return k === p || k.indexOf(p) === 0;
      })
    )
      tracking.set(k, v);
  });
  if (!tracking.toString()) return;
  document.querySelectorAll('a[href^="' + base + '"]').forEach(function (a) {
    var u = new URL(base);
    tracking.forEach(function (v, k) {
      u.searchParams.set(k, v);
    });
    a.href = u.toString();
  });
})();
