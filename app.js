async function getResponse() {

  let response = await fetch('dbHeroes.json')
  let content = await response.json()
  content = content.splice(0, 50)

  let heroes = document.querySelector('.cards')
  let key

  for (key in content) {
    list.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="cards-block">
            <div class="card">
              <img src="${content[key].photo}" width="260">
              <div class="card-body">
                <h3>${content[key].name}</h3>
                <h4>${content[key].realName}</h4>
                <p class="card-text">
                ${content[key].status}
                <h5>${content[key].actors}</h5>
                ${content[key].movies}
                </p>
              </div>
            </div>
          </div>
        </div>
        `
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  let heroAll = heroes.querySelectorAll('.card')
  heroAll.forEach(el => {
    el.classList.add(getRandomInt(1, 4))
  })

  const buttons = document.querySelectorAll('.button')
  const filter = (category, items) => {
    items.forEach(item => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === "all"
      if (isItemFiltered && !isShowAll) {
        item.classList.add('hide')

      } else {
        item.classList.remove('hide')

      }
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter
      filter(currentCategory, heroAll)
    })
  })

}
getResponse()
