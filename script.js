const getRandomUser = async() => {
    try {
    let resData = await fetch("https://randomuser.me/api/")
    let  data = await resData.json()
    return data
        
    } catch (error) {
        console.log(error);
    }
    
}

const addStorage = (addDAta) =>{
    
}


getRandomUser()
.then((data)=> show(data))

const show = ()=> {
    document.getElementById("")
}