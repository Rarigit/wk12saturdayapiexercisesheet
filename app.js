function getDogs(){
    axios.request({
        url: "https://dog.ceo/api/breeds/image/random",
    }).then(dogWin).catch(dogFail);
}

function dogWin(response){
    let dogData = response.data.message;
    divCrate.insertAdjacentHTML(`beforeend`,`<img src="${dogData}">`);
}

function dogFail(error){
    divCrate.insertAdjacentHTML(`beforeend`,`<h1>ERROR!!</h1>`);
}


//Containers
const divCrate = document.getElementById(`displayCrate`);

//Event Listeners
document.getElementById(`getDog`).addEventListener(`click`,getDogs);