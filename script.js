let listContainer = document.querySelector(".listContainer");
let addBtn = document.querySelector(".addBtn");
let addInput = document.querySelector("#addInput");

// const list  = [ "sfsd", "siufy"];
let list = [
//   {
//     id: 123,
//     text: "hello",
//   },
//   {
//     id: 12364,
//     text: "hello ji kaisde ho aap sab",
//   },
];

function renderlist(arr) {
  listContainer.innerHTML = '';
  arr.map((obj) => {
    let divelem = document.createElement("div");
    divelem.classList.add("list");
    divelem.innerHTML = `  
          <p>${obj.text}</p>
         `
    let buttonElem = document.createElement("button");
    buttonElem.innerHTML = "delete";
    divelem.appendChild(buttonElem);

    divelem.onclick = () => {
        handleRemoveList(obj.id)
    }
    listContainer.append(divelem);
  });
}

renderlist(list);

function handleAddList() {
  let obj = {
    id: Date.now(),
    text: addInput.value
  };
  list.unshift(obj);
  console.log(addInput.value)
  console.log(list)
  renderlist(list);
}

function handleRemoveList(id){
    let filteredList = list.filter(obj => {
       return obj.id !== id
       
    })
    list = filteredList
    renderlist(list)
    // console.log(id);
}

// handleAddList();
addBtn.addEventListener('click', handleAddList);
