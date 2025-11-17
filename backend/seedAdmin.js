// seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "./models/User.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("MONGO_URI not found in .env");
  process.exit(1);
}

async function seedAdmin() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB for seeding.");

    const ADMIN_EMAIL = "admin@ethnoverse.local";    // <- change if you like
    const ADMIN_PLAIN_PASSWORD = "adminpassword";    // <- change to a secure password

    // check if admin already exists
    const existing = await User.findOne({ email: ADMIN_EMAIL });
    if (existing) {
      console.log("Admin already exists:", existing.email);
      await mongoose.disconnect();
      return;
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(ADMIN_PLAIN_PASSWORD, saltRounds);

    const admin = new User({
      name: "EthnoVerse Admin",
      email: ADMIN_EMAIL,
      passwordHash,
      role: "admin"
    });

    await admin.save();
    console.log("✅ Admin user created:", ADMIN_EMAIL);
    console.log("(Use your chosen password to login):", ADMIN_PLAIN_PASSWORD);

    await mongoose.disconnect();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seedAdmin();
