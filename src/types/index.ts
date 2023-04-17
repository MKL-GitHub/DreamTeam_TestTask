export type ImageType = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TourType = {
  image: ImageType;
  heading: string;
  content: string;
};

export type RadioOptionType = {
  value: string;
  label: string;
}