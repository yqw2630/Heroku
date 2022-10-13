const path = require('path');
const express = require("express");
const axios = require('axios');

const apiKey = '';
const options = {
  headers: {
    "x-Api-Key": apiKey,
  }
}
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.status(200).json({message: "Hello From Cat Wiki"});
});

app.get('/api/top4', async(req,res) => {
  try {
    const fetchString = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='
    const ids = ['abys', 'sibe', 'rblu', 'soma']
    const response = []

    for(let i = 0; i < ids.length; i++) {
      const r = await axios.get(fetchString + ids[i], options)
      const name =  r.data[0].breeds[0].name
      const url = r.data[0].url

      response.push({name: name, url: url})
    }res.status(200).send(response)
  }catch(error){console.log(error)}
})

app.get('/api/top10', async(req,res) => {
  try {
    const fetchString = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='
    const ids = ['abys', 'sibe', 'rblu', 'soma', 'aege', 'asho', 'jbob', 'bali', 'acur', 'bamb']
    const response = []

    for(let i = 0; i < ids.length; i++) {
      const r = await axios.get(fetchString + ids[i], options)
      const name =  r.data[0].breeds[0].name
      const url = r.data[0].url
      const desc = r.data[0].breeds[0].description

      response.push({name: name, url: url, desc: desc})
    }res.status(200).send(response)
  }catch(error){console.log(error)}
})

app.get('/api/details/:name', async(req, res, next) => {
  try {
    const breedName = req.params.name

    const r = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, options)
    const obj = r.data[0]

    const breedInfo = {
      photos: ['', ''], 
        name: obj.name,
        description: obj.description,
        temperament: obj.temperament,
        origin: obj.origin, 
        life_span: obj.life_span, 
        adaptability: obj.adaptability, 
        affection_level: obj.affection_level, 
        child_friendly: obj.child_friendly, 
        grooming: obj.grooming, 
        intelligence: obj.intelligence, 
        health_issues: obj.health_issues, 
        social_needs: obj.social_needs,
        stranger_friendly: obj.stranger_friendly,
        id: obj.id 
    }

    res.locals.breedInfo = breedInfo
    next()
  }catch(e){res.status(404).send(e.message)}
},
  async function(req,res) {
    const breedInfo = res.locals.breedInfo
    const breedID = breedInfo.id

    try {
      const photoObj = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breedID}`)
      breedInfo.photos = photoObj.data.map(obj => obj.url)

      res.status(200).send(breedInfo)
    }catch(e){console.log(e)}
  }
)

app.get('/api/get-all', async(req, res, next) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    const names = response.data.map(breed => breed.name)
    res.locals.names = names
    next()
  }catch(e){console.log(e)}
},
async function (req,res) {
  const names = res.locals.names
  res.status(200).send(names)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
