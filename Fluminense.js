window.onclick = function (event) {
  if (!event.target.matches('.dropb')) {
    var dropdowns = document.getElementsByClassName('drop-itens');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};
