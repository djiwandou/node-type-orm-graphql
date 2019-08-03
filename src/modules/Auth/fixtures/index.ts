import * as R from 'ramda'
import faker from 'faker'
import { User } from '~/modules/Auth/entities/User'
import { crypto } from '~/modules/Auth/services/crypto'
import { RefreshToken } from '~/modules/Auth/entities/RefreshToken'
import { ResetPasswordToken } from '~/modules/Auth/entities/ResetPasswordToken'

export interface IDefaultUserData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const FAKE_PASSWORD = 'password1234'

export const createUser = async (data?: IDefaultUserData) => {
  const user = new User()
  user.firstName = R.prop('firstName')(data) || faker.name.findName()
  user.lastName = R.prop('lastName')(data) || faker.name.lastName()
  user.email = R.prop('email')(data) || faker.internet.email()
  user.password = R.prop('password')(data) || (await crypto.hashPassword(FAKE_PASSWORD))

  return user
}

export interface IDefaultRefreshToken {
  token: string
}

export const createRefreshToken = (data?: IDefaultRefreshToken) => {
  const refreshToken = new RefreshToken()
  refreshToken.token = R.prop('token')(data) || faker.random.uuid()

  return refreshToken
}

export interface IDefaultResetPasswordToken {
  token: string
  expires: string
}

export const createResetPasswordToken = (data?: IDefaultResetPasswordToken) => {
  const resetPasswordToken = new ResetPasswordToken()
  resetPasswordToken.token = R.prop('token')(data) || faker.random.uuid()
  resetPasswordToken.expires = data ? new Date(data.expires) : new Date()

  return resetPasswordToken
}
