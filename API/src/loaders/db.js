const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://leandro:7950@fatecnode.hgm31f1.mongodb.net/test');
}

module.exports = startDB;