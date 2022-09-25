import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Flex, HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import classes from '../../styles/Students.module.css';
import notes from '../../public/notes.webp';
import scholarly_students_demo2 from '../../public/scholarly_students_demo2.webp';
import syllabus from '../../public/syllabus.webp';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SliderDetail } from '../../types/components/students/slider';

const sliderDetails: SliderDetail[] = [
  { title: "Notes", headline: "Better Explanation to Topics", description: "Well-explained topics and notes based on the accredited syllabus.", image: notes },
  { title: "Past Questions", headline: "Access Thousands of Past Questions and Answers", description: "Find Scholarly-approved CBT centers nationwide to practice for your next exam.", image: scholarly_students_demo2 },
  { title: "Syllabus", headline: "Study only what is Relevant", description: "Our syllabus is designed to be easy to use. Find topics that are relevant to you and study on the go.", image: syllabus },
]

const sliderItems = sliderDetails.map(item => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => e.preventDefault();

  return (
  <Flex key={item.title} align='center' flexDir={{base: 'column-reverse', md: 'row'}} onDragStart={handleDragStart}>
    <VStack spacing={8} align='start' flexBasis='42%'>
      <Text as='h2' color='brand.lime.700' fontSize={{base: 31, md: 25, lg: 31}} fontWeight='bold'>{item.headline}</Text>
      <Text color='brand.lime.700'>{item.description}</Text>
      <Link href='/apps/android'>
        <a>
          <Button type='button' variant="solid" iconSpacing={5} rightIcon={<Icon as={ArrowNarrowRightIcon} mt={0.5} />}>
            Download App
          </Button>
        </a>
      </Link>
    </VStack>
    <Spacer />
    <Box flexBasis='54%' mb={{base: 8, md: 0}}>
      <Image src={item.image} alt="A Demo of the Scholarly Students App" priority />
    </Box>
  </Flex>
)});

export default function Slider() {
  const [active, setActive] = useState<number>(1);
  const carousel = useRef<AliceCarousel>(null);

  const handleNavigation = (index: number) => {
    carousel.current?.slideTo(index);
    setActive(index);
  }

  return (
    <Box as='section' className={classes.slider_container} bgColor='brand.nearWhite'>
      <HStack spacing={[5, 9]} mb={12} justify={{base: 'center', md: 'start'}}>
        {sliderDetails.map((item, index) => (
          <Text as='h1' key={item.title} fontSize={13} color='brand.lime.700' cursor='pointer'
            textTransform='capitalize' onClick={() => handleNavigation(index)}
            className={index === active ? classes.active : undefined}
          >
            {item.title}
          </Text>
        ))}
      </HStack>
      
      <AliceCarousel items={sliderItems} activeIndex={1} disableButtonsControls disableDotsControls
        autoPlay autoPlayStrategy='all' autoPlayInterval={4000} infinite ref={carousel}
        keyboardNavigation touchTracking={false} onSlideChanged={(e) => setActive(e.slide)} 
      />
    </Box>
  )
}
