import React from 'react';
import { useState, useContext } from 'react';
import { OffersType } from '../types/offers-types';

const HoverHandlerContext = React.createContext();
const HoverHandlerUpdateContext = React.createContext();

export function useHover() {
  return useContext(HoverHandlerContext);
}

export function useHoverUpdate() {
  return useContext(HoverHandlerContext);
}

export default function HandleHover() {

  const [hoveredOfferId, setHoveredOfferId] = useState <
  OffersType['id'] | null
  > (null);

  function handleCardHover(offerId:OffersType['id']|null){
    setHoveredOfferId(offerId);
  }

  return(
    <HoverHandlerContext.Provider value = {hoveredOfferId}>
      <HoverHandlerUpdateContext.Provider value = {handleCardHover}>
        <h1>children</h1>
      </HoverHandlerUpdateContext.Provider>
    </HoverHandlerContext.Provider>
  );
}
