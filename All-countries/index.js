(async function () {
    const loadData = async () => {
        return await fetch("./all-countries.json")
        .then((res) => {
            return res.json();
        })
        .then((loadedData) => {
            return loadedData;
        })
        .catch((err) =>{
            console.error(err);
        });
    };
    const getData = await loadData();
    console.log("thong tin tat ca ca nuoc",getData);
    const allCoutriesNames = getData.map(function (countrie) {
        return countrie.name.common;
    });
    
    const europe = getData.filter((st) => (st.region==='Europe'))
    const europeName = europe.map((st) => (st.name.common))
    console.log('europeName',europeName);

    const VN = getData.filter((st) => (st.name.common === 'Vietnam'))
    console.log('VN',VN);

    console.log("ten tat ca cac nuoc",allCoutriesNames);

    
})();