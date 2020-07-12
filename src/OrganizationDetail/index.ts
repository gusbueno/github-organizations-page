import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './OrganizationDetail.connector'
import OrganizationDetail from './OrganizationDetail'

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetail)
