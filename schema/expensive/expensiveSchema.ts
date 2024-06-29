import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "@/lib/connectdb";

// const username = process.env.NEXT_PUBLIC_MONGODBUSERNAME as string;
// const password = process.env.NEXT_PUBLIC_MONGODBPASSWORD as string;
// const collection = process.env.NEXT_PUBLIC_MONGODBCOLLECTION as string;

// const url = `mongodb+srv://${username}:${password}@atlascluster.yccwwdp.mongodb.net/${collection}?retryWrites=true&w=majority&appName=AtlasCluster`;
// mongoose.connect(url || "");
// mongoose.Promise = global.Promise;

connectDB()
  .then(() => console.log("success db connect"))
  .catch((e) => console.log(e));

interface IExpensive extends Document {
  title: string;
  amount: number;
  date: Date;
}

const expensiveSchema = new Schema<IExpensive>({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Expensives = mongoose.models.expensives || mongoose.model<IExpensive>("expensives", expensiveSchema);

export default Expensives;
