import mongoose from "mongoose";


const databaseConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

export {databaseConnection}