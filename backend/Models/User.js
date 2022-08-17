const mongoose = require("mongoose");
const byt = require("bcryptjs");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please Type Your Name Here To"],
      maxLength: [40, "Your name must be at Maximum 40 characters long"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "Please Type Your LAst Name Here To"],
      maxLength: [40, "Your name must be at Maximum 40 characters long"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "Please Type Your LAst Name Here To"],
      maxLength: [40, "Your name must be at Maximum 40 characters long"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Type Your Email"],
      unique: [true, "This Email Has Been Taken"],
      validate: [validator.isEmail, "Please enter a valid email address"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please Type Your Password"],
      minlength: [5, "Your password must Longer than 5 characters"],
      select: false,
    },
    picture: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ["Single", "In a relationship", "Married", "Divorced"],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await byt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await byt.compare(candidatePassword, userPassword);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
