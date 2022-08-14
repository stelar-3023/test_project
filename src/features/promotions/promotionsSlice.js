import { PROMOTIONS } from '../../app/shared/PROMOTIONS.js';

export const selectFeaturedPromotion = () => {
  return PROMOTIONS.find((promotion) => promotion.featured);
};
