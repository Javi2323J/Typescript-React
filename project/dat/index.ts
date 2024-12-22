import { connect, disconnect } from 'mongoose'
import { User } from './models/index.js'
import { TUser } from './types/index.js'

const db = {
    connect,
    disconnect,
}

export default db

export {
    User,
    TUser,
}