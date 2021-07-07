const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please give a name!"],
  },
  email: {
    type: String,
    required: [true, "Please give a email!"],
    unique: [true, "Please give a uniq email!"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, //email regex
      "Please provide a valid email!", //regexle eşleşmezse fırlatılacak mesaj.
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"], //bu alana sadece bu iki değer gelebilir anlamına gelir
  },
  password: {
    type: String,
    minlength: [6, "Please provide a password with minlength 6"],
    required: [true, "Please provide a password"],
    select: false, //get isteklerinde parolanın gelmemesini sağlar.
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  place: {
    type: String,
  },
  website: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
