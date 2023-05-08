document.addEventListener('keyup', e => {
    if (e.target.matches('#InputSearch')) {
        document.querySelectorAll('.card').forEach(Pokepoke => {
            Pokepoke.textContent.toLowerCase().includes(e.target.value)
            ? Pokepoke.classList.remove('filtro')
            : Pokepoke.classList.add('filtro')
        })
    }
})