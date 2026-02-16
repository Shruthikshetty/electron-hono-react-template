/**
 * @file contains all the handlers related to profile
 */
import { EXAMPLE_DATA } from '../../../common/constants/global.constants'
import { AppRouteHandler } from '../../types'
import { GetProfileRoute, UpdateProfileRoute } from './profile.routes'
import * as HTTP_STATUS_CODES from '../../constants/http-status-codes.constants'

// handler for getting profile data
export const getProfile: AppRouteHandler<GetProfileRoute> = async (c) => {
  // get the profile data
  return c.json(
    {
      data: EXAMPLE_DATA,
      success: true
    },
    HTTP_STATUS_CODES.OK
  )
}

// handler for updating profile data
export const updateProfile: AppRouteHandler<UpdateProfileRoute> = async (c) => {
  // get the data from the route
  const data = c.req.valid('json')
  console.log('here', data)
  // update the profile data
  EXAMPLE_DATA.age = data.age
  EXAMPLE_DATA.name = data.name
  EXAMPLE_DATA.city = data.city
  // return the updated profile data
  return c.json(
    {
      data: EXAMPLE_DATA,
      success: true
    },
    HTTP_STATUS_CODES.OK
  )
}
