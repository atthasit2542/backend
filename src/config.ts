import * as dotenv from 'dotenv'

/**
 * default is .env
 */
dotenv.config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  mongodb: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/Ultimate'
  },
  secret: {
    accessToken: process.env.SECRET_ACCESS_TOKEN || ''
  }
}

export default config