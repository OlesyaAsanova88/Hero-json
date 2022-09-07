async function getResponse() {
  let response = await fetch('dbHeroes.json')
  let content = await response.json()
  content = content.splice(0, 50)

  let list = document.querySelector('.cards')
  let key

  for (key in content) {
    list.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
      <div class=cards-block>
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
}
getResponse()