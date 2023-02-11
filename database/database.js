const mongoose = require('mongoose');

const MONGODB_URL = process.env;

// db password = kj6DY3Ciw1J3pZk4
//db username = authAdmin
exports.connect = () =>{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
        .then()
        .catch((error) => {
            console.log(`DB connection FAILED`);
            console.log(error);
            process.exit(1);
        });
}