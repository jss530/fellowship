function sortByStrings(s,t) {
  return s.split('').sort(function (a, b) {
      if (t.indexOf(a) === t.indexOf(b)) {
          return 0;
      } else {
          return t.indexOf(a) > t.indexOf(b) ? 1 : -1;
      }
  }).join('');
}
