const axios = require('axios').default
const { error } = require('console')
const fs = require('fs')

const cep = 11704450
const viacep=(async()=>{
    const {data}= await axios(`https://viacep.com.br/ws/${cep}/json`) 
      fs.writeFile('local.json', JSON.stringify(data, null, 2), err =>{
        if(err) throw new Error('Deu ruim...')
        console.log('tudo numa boa')
      })
})()
