import { combineReducers } from 'redux'

import organizationDetail from './OrganizationDetail/OrganizationDetail.reducer'

const rootReducer = () => combineReducers({
  organizationDetail
})

export default rootReducer
