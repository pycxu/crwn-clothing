import React from 'react';

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor () {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.collections.map(({ id, ...otherSectionProps }) => (
                        <CollectionPreview key={id} {...otherSectionProps }/>
                     ))
                }
            </div>
        );
    }
}

export default ShopPage;

