/**
 * @file contains all the handlers related to profile
 */
import { EXAMPLE_DATA } from '../../../common/constants/global.constants'

export const getProfile = async (c) => {
  // get the profile data
  return c.json(EXAMPLE_DATA)
}
