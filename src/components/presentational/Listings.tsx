import React from 'react';
import { Listing } from './Listing.tsx';
import { ListingsGrid } from './ListingsGrid.tsx';
import WithLoader from '../hoc/WithLoader.tsx';

 
 function Listings(props) {
  console.log(props,"listings");
  
  return (
    <ListingsGrid>
      {props.data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default WithLoader(
  Listings,
  'https://house-lydiahallie.vercel.app/api/listings'
);
