import mongoose from 'mongoose'

let isConnected = false   //track the connection 

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
}

if(isConnected) {
  console.log('mongoDB ya esta conectado')
  return
}

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    DBname: 'share_prompt',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  isConnected = true
  console.log('mongoDB conectado')

} catch (error) {
console.log(error)
  
}