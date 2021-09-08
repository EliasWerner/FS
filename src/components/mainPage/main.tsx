import * as React from "react";
import { BestOffers } from "../best-offers/best-offers";
import { OffersGallery } from "../offers-galery/offers-galery";

export const Main = () => {
  return (
    <div>
      <OffersGallery />
      <BestOffers />
    </div>
  );
};
