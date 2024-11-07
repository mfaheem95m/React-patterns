import React from 'react';
import { Listing } from './Listing.tsx';
import { ListingsGrid } from './ListingsGrid.tsx';

export default function Listings({listings}) {
  console.log(listings,"listings");
  
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
