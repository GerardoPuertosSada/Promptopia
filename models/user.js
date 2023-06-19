import { Schema, model, models } from 'mongoose'

const UserSchema =  newSchema({
  email: {
    type: string,

    required: true,
  }
})