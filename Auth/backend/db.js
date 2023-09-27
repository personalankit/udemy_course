import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Auth:bI8IHu9tuhxuVkb1@cluster0.uyiyojo.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("its an error");
  }
};

export default mongoDB;
