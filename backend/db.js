const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/blackcoffer?retryWrites=true&w=majority';

const mongoDb = async () => {
  try {
    // Establish MongoDB connection
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
    // Get reference to the collection "foodData2" and fetch data
    const fetch_data = await mongoose.connection.db.collection("mdbdata").find({}).toArray()
    
    global.json_data=fetch_data;
    // console.log(json_data);
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  } 
};

module.exports = mongoDb;

