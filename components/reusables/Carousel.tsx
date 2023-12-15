import dynamic from 'next/dynamic';
import 'react-alice-carousel/lib/alice-carousel.css';

const AliceCarousel = dynamic(() =>
  import("react-alice-carousel"), { ssr: false }
);

export default function Carousel({ ...props }) {
  return (
    <AliceCarousel {...props} />
  )
}
