import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getOrganizationData } from './OrganizationDetail.actions'
import { getIsFetching, getOrganizationInfo } from './OrganizationDetail.selectors'

export const mapStateToProps = (state: IStore) => ({
  isFetching: getIsFetching(state),
  organizationInfo: getOrganizationInfo(state)
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetOrganizationData: bindActionCreators(getOrganizationData, dispatch)
})
