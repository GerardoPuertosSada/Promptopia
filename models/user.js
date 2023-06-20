import { Schema, model, models } from 'mongoose'

const UserSchema =  newSchema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is requiered!']
  },
  username: {
    type: String,
    required: [true, 'Username is requiered!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String
  }
})