import dynamic from 'next/dynamic';

const AliceCarousel = dynamic(() =>
  import("react-alice-carousel"), { ssr: false }
);

export default function Carousel({ ...props }) {
  return (
    <AliceCarousel {...props} />
  )
}
