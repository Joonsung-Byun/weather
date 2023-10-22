const nav = document.querySelector('#primaryNav')
const main = document.querySelector('#primaryMain')

const myKey = '0faea1bcbe374ee78de51a6c71250944'
const myPath = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${myKey}`


fetch(myPath)
  .then((response) => response.json())
  .then((allData) => {
    const articles = allData.articles;

    for (let i = 0; i < articles.length; i++) {
      if (articles[i].urlToImage !== null) {
        let card = document.createElement('div');
        card.className = 'card';
        card.key = i;
        card.dataset.url = articles[i].url; // 데이터 속성에 URL 저장

        let img = document.createElement('img');
        img.src = articles[i].urlToImage;
        card.appendChild(img);

        let title = document.createElement('p');
        title.textContent = articles[i].title;
        card.appendChild(title);

        main.appendChild(card);
      }
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const url = card.dataset.url;
        location.href = url; // 클릭 시 URL로 이동
      });
    });
  });




