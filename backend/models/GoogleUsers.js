const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const GoogleUsersSchema = mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    googleName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    cart: {
      items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
    // You can add additional fields specific to Google users here
    // For example, profile picture, access token, etc.
    profilePicture: String,
    accessToken: String,
    refreshToken: String,
    // Other fields you may need
  },
  { timestamps: true }
); // Add timestamps for createdAt and updatedAt
GoogleUsersSchema.plugin(findOrCreate);

module.exports = mongoose.model("GoogleUsers", GoogleUsersSchema);
