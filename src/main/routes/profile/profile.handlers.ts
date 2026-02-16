/**
 * @file contains all the handlers related to profile
 */
import { EXAMPLE_DATA } from '../../../common/constants/global.constants'
import { AppRouteHandler } from '../../types'
import { GetProfileRoute } from './profile.routes'

// handler for getting profile data
export const getProfile: AppRouteHandler<GetProfileRoute> = async (c) => {
  // get the profile data
  return c.json(EXAMPLE_DATA, 200)
}
