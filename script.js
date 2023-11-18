let userData = []
let oneUser;
const getRandomUser = async () => {
  try {
    let resdata = await fetch("https://randomuser.me/api/")
    let data = await resdata.json()
    return data.results[0]
  } catch (error) {
    console.log(error);
  }

}

const addStorage = (addData) => {
  localStorage.user = JSON.stringify(addData)
}
const getStorage = () => {
  if (localStorage?.user) {
    return JSON.parse(localStorage?.user)
  } else {
    return []
  }
}

const setQS = (selector) => {
  return document.querySelector(selector)
}



const addUser = (res) => {
  userData.push({firstname:res.name.first,lastname:res.name.last,email:res.email,cell:res.cell,picture:res.picture.medium})

  addStorage(userData)
  //showAll(getStorage()) 
}

const show = (res) => {
  setQS(".oneUsers").innerHTML = `
  <div class="card" style="width: 18rem;">
  <img id="cardImg"src="${res.picture.medium}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${res.name.first} ${res.name.last}</h5>
    </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${res.email}</li>
    <li class="list-group-item">${res.cell}</li>
   
  <div class="">
  
  </div>
</div>

  `
  oneUser = res

} 



setQS("#getUser").addEventListener("click",()=>{
  getRandomUser()
  .then((res) => show(res) )

})

setQS("#addUser").addEventListener("click",()=>{
  addUser(oneUser)
  showAll()
  console.log("object");
})

const showAll = () =>{
  let allUsers = getStorage()
  allUsers.forEach(item => {
    setQS(".allUsers").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img id="cardImg"src="${item.picture}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${item.firstname} ${item.lastname}</h5>
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.email}</li>
      <li class="list-group-item">${item.cell}</li>
     
    <div class="">
    
    </div>
  </div>
  
    `
  });
}

getRandomUser()
  .then((res) => show(res) )

showAll()