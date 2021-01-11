/*var sha1 = require('sha1')
var name = sha1("Dinesh")
console.log(name)*/
const axios = require('axios')
async function make() {
    const data = await axios.get('https://anapioficeandfire.com/api/characters/583');
    return data;
  }
