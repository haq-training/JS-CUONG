// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// API URL: https://gatsby-potterapi.netlify.app/page-data/index/page-data.json

// const api_url = 
//       "./hp-data.json";


//     async function getApi(url) {
//         const response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//         hpCharacters = data;
//     }


(async function () {
  const charactersList = document.getElementById("charactersList");
  const searchBar = document.getElementById("searchBar");
  let hpCharacters = [];

  // API URL: https://gatsby-potterapi.netlify.app/page-data/index/page-data.json

  const pageData = async () => {
    return await fetch("./hp-data.json")
      .then((res) => {
        return res.json();
      })
      .then((loadData) => {
        return loadData;
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getData = await pageData();
  const getCharacterInfo = getData.result.data.chars.nodes;

  const displayCharacters = (e) => {
    const htmlString = e
      .map((character) => {
        const house = character.house ? character.house.name : "Unknown";
        return `<li class="character">
      <h2>${character.name}</h2>
      <p>House:${house} </p>
      <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/8/7/photo-1-16598585055221194256003.jpg"></img>
      </li>`;
      })
      .join("");
    charactersList.innerHTML = htmlString;
  };

  displayCharacters(getCharacterInfo);

  searchBar.addEventListener("keyup", (e) => {
    const searching = e.target.value.toLowerCase();
    const select =
      searching != ""
        ? (filterCharacter = getCharacterInfo.filter((e) => {
            return e.name.toLowerCase().includes(searching);
          }))
        : getCharacterInfo;
    displayCharacters(select);
  });
})();
