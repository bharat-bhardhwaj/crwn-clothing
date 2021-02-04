import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectcollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-overview.styles.scss';


const collectionOverview =({collections}) => (
    <div className='collection-overview'>

         {
             collections.map( ({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
         }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectcollectionsForPreview
})

export default connect (mapStateToProps)(collectionOverview)