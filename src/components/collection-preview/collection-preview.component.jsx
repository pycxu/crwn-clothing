import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title"><a href={`/shop/${title}`}>{title.toUpperCase()}</a></h1>
        <div className="preview">
            {
                items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemProps}) => (
                            <CollectionItem key={id} {...otherItemProps}  />
                    )
                )
            }
        </div>
    </div>
);

export default CollectionPreview;

/* <div key={item.id}>{item.name}</div> */