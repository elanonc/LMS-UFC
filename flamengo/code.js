   const contadores = {
    'btnClick1': 'contador',
    'btnClick2': 'contadorrr'
  };

  function likeNlike(buttonId, counterId) {
    const contador = document.getElementById(counterId);
    contador.innerText = parseInt(contador.innerText) + 1 + (parseInt(contador.innerText) === 0 ? '' : '');
  }