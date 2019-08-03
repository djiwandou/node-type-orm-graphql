import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '~/modules/Auth/entities/User'
import { crypto } from '~/modules/Auth/services/crypto'
import { Session } from '~/modules/Auth/entities/Session'

@Resolver()
export class LoginResolver {
  @Mutation(() => Session, { nullable: true })
  async login(@Arg('email') email: string, @Arg('password') password: string): Promise<Session> {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return null
    }

    const valid = await crypto.comparePasswords(password, user.password)

    if (!valid) {
      return null
    }

    return {
      user,
      accessToken: crypto.generateAccessToken(user),
      refreshToken: await crypto.generateRefreshToken(user),
    }
  }
}
