import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectISCollectionsLoaded} from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from './collection.component';

import {compose} from 'redux';;

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectISCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;