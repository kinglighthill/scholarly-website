import { Box, Icon, IconButton, Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { EventObject, Props } from "react-alice-carousel";
import Carousel from "../reusables/Carousel";
import marketing_campaign_slide_1 from "../../public/marketing_campaign_slide_1.webp";
import marketing_campaign_slide_2 from "../../public/marketing_campaign_slide_2.webp";
import marketing_campaign_slide_3 from "../../public/marketing_campaign_slide_3.webp";
import marketing_campaign_slide_4 from "../../public/marketing_campaign_slide_4.webp";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const handleDragStart = (e: any) => e.preventDefault();

const slider_images = [marketing_campaign_slide_1, marketing_campaign_slide_2, marketing_campaign_slide_3, marketing_campaign_slide_4];

const responsive = {
  0: {
    items: 1.15,
  },
  768: {
    items: 1.3
  }
}

export default function Slider() {
  // const [loaded, setLoaded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   setLoaded(true);
  // }, []);
  
  const slider_items = slider_images.map((image, index) => (
    <Box key={`demo${index+1}`} fontSize={0}
      h={{base: activeIndex === index ? 213 : 175, md: activeIndex === index ? 333 : 290}}
    >
      <Image src={image} alt="JAMB 2024 CBT App Demo" onDragStart={handleDragStart}
        objectFit='contain' layout="fill" height='100%'
      />
    </Box>
  ))

  const renderPrevButton: Props['renderPrevButton'] = ({ isDisabled }) => {
    return (
      <IconButton isRound variant='solid' color='white' bg='#B2BBB6' h={10} isDisabled={isDisabled}
        fontSize='22px' aria-label='Back to previous page' icon={<Icon as={ChevronLeftIcon} />}
        _hover={{bg: 'brand.gray'}} pos='absolute' top='35%' left={{base: -2.5, md: 0}} zIndex={2}
      />
    )
  }

  const renderNextButton: Props['renderNextButton'] = ({ isDisabled }) => {
    return (
      <IconButton isRound variant='solid' color='white' bg='#B2BBB6' h={10} isDisabled={isDisabled}
        fontSize='22px' aria-label='Back to previous page' icon={<Icon as={ChevronRightIcon} />}
        _hover={{bg: 'brand.gray'}} pos='absolute' top='35%' right={{base: '8%', md: '20%'}} zIndex={2}
      />
    )
  }

  const updateActiveIndex = (e: EventObject) => {
    setActiveIndex(e.item);
  }
  
  return (
    // <Skeleton isLoaded={loaded} fadeDuration={2} h="333px">
      <Carousel items={slider_items} disableDotsControls activeIndex={activeIndex}
        autoPlay autoPlayStrategy='all' autoPlayInterval={4000} onSlideChanged={updateActiveIndex}
        renderNextButton={renderNextButton} renderPrevButton={renderPrevButton}
        keyboardNavigation mouseTracking responsive={responsive}
      />
    // {/* </Skeleton> */}
  )
}
