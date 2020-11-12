const ajax = (url, callback, method = "GET") => {
    if (!url) return console.error("Request Required");
    if (!callback) return console.error("Callback Required");
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (evt) => {
      let req = evt.target;
      if (req.readyState !== 4) return;
      if (req.status === 200) return callback(req.response);
      callback("");
    });
    request.open(method, url);
    request.send();
  };
  let r  = ajax("https://dog.ceo/api/breeds/list/all",(r,input)=>{
      console.log(r);
      addBreeds(r);
      
      return JSON.parse(r);
  });
let addBreeds = (res)=>{
    let breedList = res.message;

    let dogs = document.getElementById("breeds");
    for (let key in breedList){
        let listItems = document.createElement("li");
        listItems.innerText = key;
        dogs.appendChild(listItems);
    }
    console.log(breedList);
};
fetch("https://dog.ceo/api/breeds/list/all")
    .then((response)=> response.json())
    .then((data)=> addBreeds(data));