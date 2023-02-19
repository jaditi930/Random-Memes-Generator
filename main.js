function get(){
    async function getMemes(){
    let response=await fetch('https://meme-api.com/gimme')
    let data=await response.json()
    return data;
}
getMemes().then(data=>{
    console.log(data["preview"][2])
    document.getElementById("meme").src=`${data["preview"][2]}`
    document.getElementById("dwld").href=`${data["preview"][2]}`
  })
}