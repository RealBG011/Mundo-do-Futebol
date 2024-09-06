function pesquisar() {
  let section = document.getElementById('resultados-pesquisa')

  let campoPesquisa = document.getElementById('campo-pesquisa').value

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultado = ''
  let name = ''
  let tags = ''

  for (let dado of dados) {
    name = dado.name.toLowerCase()
    description = dado.description.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (name.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultado += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">
            ${dado.name}
          </a>
        </h2>
        <p class="descricao-meta">
          ${dado.description}
        </p>
        <a href="${dado.link}" target="_blank">
          Mais informações
        </a>
      </div>
      `
    }

    if (!campoPesquisa) {
      return alert('Por favor pesquise o nome de um jogardor')
    }

    section.innerHTML = resultado
  }

  if (!resultado) {
    return section.innerHTML = `<p>Parece que o jogador que você está procurando ainda não foi incluído no nosso sistema, por favor digite o nome de outro jogador.</p>
    
    <img 
      src='https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-icon-download-in-svg-png-gif-file-formats--drive-full-storage-empty-state-pack-miscellaneous-icons-1662569.png?f=webp&w=256'
      alt='Not found image'
    />
    `
  }
}
