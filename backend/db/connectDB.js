import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connect("mongodb+srv://kiranbusari2208:2dioeeShcYzLv1KY@cluster0.whdq8zr.mongodb.net/Paytm")
        .then(() => console.log("DB Connected Successfully..!"))
        .catch((err) => console.log(err))
}

export { connectDB };