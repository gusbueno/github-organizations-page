import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getOrganizationData } from './OrganizationDetail.actions'

export const mapStateToProps = () => ({ })

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetOrganizationData: bindActionCreators(getOrganizationData, dispatch)
})
