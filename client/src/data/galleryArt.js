/** Gallery images in client/public/images/gallery/ */
export const CATEGORIES = ['All', 'Abstract', 'Portrait', 'Landscape', 'Wall Art'];

/** @typedef {'portrait' | 'landscape'} ArtOrientation */

const CATS = ['Abstract', 'Portrait', 'Landscape', 'Wall Art'];

/** Your files — sorted by number in the filename */
const GALLERY_FILES = [
  'Dhonjen (1).jpg',
  'Dhonjen (2).jpg',
  'Dhonjen (3).jpg',
  'Dhonjen (5).jpg',
  'Dhonjen (6).jpg',
  'Dhonjen (8).jpg',
  'Dhonjen (9).jpg',
  'Dhonjen (10).jpg',
  'Dhonjen (11).jpg',
  'Dhonjen (12).jpg',
  'Dhonjen (13).jpg',
  'Dhonjen (14).jpg',
  'Dhonjen (15).jpg',
  'Dhonjen (16).jpg',
  'Dhonjen (18).jpg',
  'Dhonjen (19).jpg',
  'Dhonjen (20).jpg',
  'Dhonjen (22).jpg',
  'Dhonjen (23).jpg',
  'Dhonjen (24).jpg',
  'Dhonjen (25).jpg',
  'Dhonjen (29).jpg',
  'Dhonjen (30).jpg',
  'Dhonjen (31).jpg',
  'Dhonjen (32).jpg',
  'Dhonjen (33).jpg',
  'Dhonjen (34).jpg',
  'Dhonjen (35).jpg',
  'Dhonjen (36).jpg',
  'Dhonjen (37).jpg',
  'Dhonjen (38).jpg',
  'Dhonjen (39).jpg',
  'Dhonjen (40).jpg',
  'Dhonjen (41).jpg',
  'Dhonjen (42).jpg',
  'Dhonjen (43).jpg',
  'Dhonjen (44).jpg',
  'Dhonjen (45).jpg',
  'Dhonjen (46).jpg',
  'Dhonjen (47).jpg',
  'Dhonjen (48).jpg',
  'Dhonjen (49).jpg',
];

const TITLES = [
  'Nepalese Traditional Portrait',
  'Focus each other',
  'work for living',
  'Paragliders Dream',
  'Silent Scenic',
  'Newa Culture',
  'Somewhere I want to be',
  'Maicha Dance',
  'Sustainable Mountain',
  'Ink & Light',
  'Autumn Ridge',
  'Little Explorer',
  'Prism Soul',
  'Ethereal Profile',
  'Northern Lights',
  'Cloud Kingdom',
  'Liquid Gold',
  'Studio Reverie',
  'Desert Bloom',
  'Forest Friends',
  'Nocturne Blue',
  'Warm Contours',
  'Lake Serenity',
  'Starlight Nursery',
  'Ember Waves',
  'Classic Study',
  'Mountain Echo',
  'Rainbow Safari',
  'Saffron Drift',
  'Horizon Line',
];

const galleryImage = (filename) =>
  `/images/gallery/${encodeURIComponent(filename)}`;

export const galleryArt = GALLERY_FILES.map((file, index) => {
  const id = index + 1;
  const num = file.match(/\((\d+)\)/)?.[1] ?? String(id);

  return {
    id,
    title: TITLES[index] ?? `Artwork ${num}`,
    category: CATS[index % CATS.length],
    orientation: index % 3 === 0 ? 'landscape' : 'portrait',
    image: galleryImage(file),
    artist: 'Dhonjen Thakuri',
  };
});
