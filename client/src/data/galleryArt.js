/** 30 placeholder thumbnails (Unsplash) — replace with originals */
export const CATEGORIES = ['All', 'Abstract', 'Portrait', 'Landscape', 'Wall Art'];

/** @typedef {'portrait' | 'landscape'} ArtOrientation */

/**
 * Build Unsplash URL sized for masonry orientation
 * @param {string} photoId - photo path after unsplash.com/
 * @param {ArtOrientation} orientation
 */
function artImage(photoPath, orientation) {
  const base = `https://images.unsplash.com/${photoPath}`;
  if (orientation === 'landscape') {
    return `${base}?w=960&h=640&fit=crop`;
  }
  return `${base}?w=720&h=960&fit=crop`;
}

/** @type {Array<{id:number,title:string,category:string,orientation:ArtOrientation,image:string,artist:string}>} */
const raw = [
  { id: 1, title: 'Nepalese Traditional Portrait', category: 'Portrait', orientation: 'portrait', photo: 'photo-1541961017774-22349e4a1262' },
  { id: 2, title: 'Focus each other', category: 'Abstract', orientation: 'landscape', photo: 'photo-1578301978693-85fa9c0320b9' },
  { id: 3, title: 'work for living', category: 'Wall Art', orientation: 'portrait', photo: 'photo-1506905925346-21bda4d32df4' },
  { id: 4, title: 'Paragliders Dream', category: 'Landscape', orientation: 'landscape', photo: 'photo-1513364776144-60967b0f800f' },
  { id: 5, title: 'Silent Scenic', category: 'Landscape', orientation: 'landscape', photo: 'photo-1549490349-8643362247b7' },
  { id: 6, title: 'Newa Culture', category: 'Portrait', orientation: 'portrait', photo: 'photo-1579783902614-a3fb3927b6a5' },
  { id: 7, title: 'Somewhere I want to be', category: 'Landscape', orientation: 'landscape', photo: 'photo-1470071459604-3b5ec3a7fe05' },
  { id: 8, title: 'Maicha Dance', category: 'Portrait', orientation: 'portrait', photo: 'photo-1460661414737-f34d21bf7429' },
  { id: 9, title: 'Sustainable Mountain', category: 'Landscape', orientation: 'portrait', photo: 'photo-1549887534-1541e9326642' },
  { id: 10, title: 'Ink & Light', category: 'Portrait', orientation: 'portrait', photo: 'photo-1515405295571-93ad2c4a4b1e' },
  { id: 11, title: 'Autumn Ridge', category: 'Landscape', orientation: 'landscape', photo: 'photo-1441974231531-c6227db76b6e' },
  { id: 12, title: 'Little Explorer', category: 'Wall Art', orientation: 'portrait', photo: 'photo-1513364776144-60967b0f800f' },
  { id: 13, title: 'Prism Soul', category: 'Abstract', orientation: 'landscape', photo: 'photo-1561214115-f2f134cc4912' },
  { id: 14, title: 'Ethereal Profile', category: 'Portrait', orientation: 'portrait', photo: 'photo-1515405295571-93ad2c4a4b1e' },
  { id: 15, title: 'Northern Lights', category: 'Landscape', orientation: 'landscape', photo: 'photo-1531366936337-7c912a4589a7' },
  { id: 16, title: 'Cloud Kingdom', category: 'Wall Art', orientation: 'portrait', photo: 'photo-1579783901580-d073472fc2e9' },
  { id: 17, title: 'Liquid Gold', category: 'Abstract', orientation: 'landscape', photo: 'photo-1547826039-b3905cc6b0b3' },
  { id: 18, title: 'Studio Reverie', category: 'Portrait', orientation: 'portrait', photo: 'photo-1513364776144-60967b0f800f' },
  { id: 19, title: 'Desert Bloom', category: 'Landscape', orientation: 'landscape', photo: 'photo-1509316975850-ff9cdeb0b8d0' },
  { id: 20, title: 'Forest Friends', category: 'Wall Art', orientation: 'portrait', photo: 'photo-1518837695005-2083093ee35b' },
  { id: 21, title: 'Nocturne Blue', category: 'Abstract', orientation: 'landscape', photo: 'photo-1579783902614-a3fb3927b6a5' },
  { id: 22, title: 'Warm Contours', category: 'Portrait', orientation: 'portrait', photo: 'photo-1549887534-1541e9326642' },
  { id: 23, title: 'Lake Serenity', category: 'Landscape', orientation: 'landscape', photo: 'photo-1439066615861-d1af74d74000' },
  { id: 24, title: 'Starlight Nursery', category: 'Wall Art', orientation: 'portrait', photo: 'photo-1518837695005-2083093ee35b' },
  { id: 25, title: 'Ember Waves', category: 'Abstract', orientation: 'landscape', photo: 'photo-1549490349-8643362247b7' },
  { id: 26, title: 'Classic Study', category: 'Portrait', orientation: 'portrait', photo: 'photo-1578301978693-85fa9c0320b9' },
  { id: 27, title: 'Mountain Echo', category: 'Landscape', orientation: 'landscape', photo: 'photo-1464822759023-fed622ff2c3b' },
  { id: 28, title: 'Rainbow Safari', category: 'Wall Art', orientation: 'portrait', photo: 'photo-1460661414737-f34d21bf7429' },
  { id: 29, title: 'Saffron Drift', category: 'Abstract', orientation: 'portrait', photo: 'photo-1541961017774-22349e4a1262' },
  { id: 30, title: 'Horizon Line', category: 'Landscape', orientation: 'landscape', photo: 'photo-1506905925346-21bda4d32df4' },
];

export const galleryArt = raw.map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  orientation: item.orientation,
  image: artImage(item.photo, item.orientation),
  artist: 'Dhonjen Thakuri',
}));
