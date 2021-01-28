import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../../components/collection-overview/collection-overview.component'

import CollectionPage from '../collection/collection.component'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapShot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4a57d/databases/(default)/documents/collections').then(res => res.json())
    // .then(collection => console.log(collection))
    collectionRef.get().then( (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
    
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionID`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})
export default connect(null, mapDispatchToProps)(ShopPage)
