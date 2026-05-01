const generalEquipmentGallery = Array.from({ length: 24 }, (_, index) => index + 1)
  .filter((index) => index !== 21 && index !== 24)
  .map((index) => ({
    image: `/assets/portfolio/general/general-${String(index).padStart(2, '0')}.jpg`,
    alt: `ET ART project photo ${index}`,
  }));

const visualizationGallery = Array.from({ length: 4 }, (_, index) => ({
  image: `/assets/portfolio/3d/visualization-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `ET ART 3D visualization ${index + 1}`,
}));

const brandingGallery = Array.from({ length: 12 }, (_, index) => ({
  image: `/assets/portfolio/branding/branding-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `ET ART branding project ${index + 1}`,
}));

export const portfolioSections = [
  {
    title: null,
    items: generalEquipmentGallery,
  },
  {
    title: '3D-визуализация',
    items: visualizationGallery,
  },
  {
    title: 'Брендинг',
    items: brandingGallery,
  },
];
