import mongoose from "mongoose";

// mongodb+srv://rizqi:Cr6ftyFsQJaKfbWg@atlascluster.yccwwdp.mongodb.net/demo_auth1?retryWrites=true&w=majority&appName=AtlasCluster

// mongodb+srv://rizqi:<password>@atlascluster.yccwwdp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster

export async function connectDB() {
  const username = process.env.DB_USER as string;
  const password = process.env.DB_PASS as string;
  const collection = process.env.DB_COLLECTION_ALLPROJECT as string;
  const db = await mongoose.connect(
    `mongodb+srv://${username}:${password}@atlascluster.yccwwdp.mongodb.net/${collection}?retryWrites=true&w=majority`
  );
  mongoose.Promise = global.Promise;
  return db;
}
