/**
 * @file contains all the handlers related to profile
 */
import { EXAMPLE_DATA } from '../../../common/constants/global.constants'
import { AppRouteHandler } from '../../types'
import { GetProfileRoute } from './profile.routes'
import * as HTTP_STATUS_CODES from '../../constants/http-status-codes.constants'

// handler for getting profile data
export const getProfile: AppRouteHandler<GetProfileRoute> = async (c) => {
  // get the profile data
  return c.json(
    {
      data: EXAMPLE_DATA
    },
    HTTP_STATUS_CODES.OK
  )
}
