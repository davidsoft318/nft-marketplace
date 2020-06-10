import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { RootState } from '../../modules/reducer'
import { getAuthorizations } from '../../modules/authorization/selectors'
import { executeOrderRequest } from '../../modules/order/actions'
import { MapStateProps, MapDispatchProps, MapDispatch } from './BuyPage.types'
import BuyPage from './BuyPage'

const mapState = (state: RootState): MapStateProps => ({
  authorizations: getAuthorizations(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path)),
  onExecuteOrder: (order, nft, fingerprint) =>
    dispatch(executeOrderRequest(order, nft, fingerprint))
})

export default connect(mapState, mapDispatch)(BuyPage)
