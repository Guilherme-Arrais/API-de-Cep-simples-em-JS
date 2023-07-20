(async()=>{
    const responta= await fetch('./local.json')
    const data = await response.json()
    
    for (var item in data){
        document.querySelector('.container').innerHTML+= (`<li>${data[item]}</li>`)
    }
})()