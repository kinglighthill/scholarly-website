import { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Button, Flex, HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import classes from '../../styles/Students.module.css';
import notes from '../../public/notes.webp';
import scholarly_students_demo2 from '../../public/scholarly_students_demo2.webp';
import syllabus from '../../public/syllabus.webp';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SliderDetail } from '../../types/components/students/slider';
import Link from 'next/link';

const sliderDetails: SliderDetail[] = [
  { title: "Notes", headline: "Better Explanation to Topics", description: "Well-explained topics and notes based on the accredited syllabus.", image: notes },
  { title: "Past Questions", headline: "Access Thousands of Past Questions and Answers", description: "Find Scholarly-approved CBT centers nationwide to practice for your next exam.", image: scholarly_students_demo2 },
  { title: "Syllabus", headline: "Study only what is Relevant", description: "Our syllabus is designed to be easy to use. Find topics that are relevant to you and study on the go.", image: syllabus },
]

const sliderItems = sliderDetails.map(item => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => e.preventDefault();

  return (
  <Flex key={item.title} align='center' flexDir={['column-reverse', 'row']} onDragStart={handleDragStart}>
    <VStack spacing={8} align='start' flexBasis='35%'>
      <Text as='h2' color='brand.lime.700' fontSize={[31, 25, 25, 31]} fontWeight='bold'>{item.headline}</Text>
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
    <Box flexBasis='50%'>
      <Image src={item.image} alt="A Demo of the Scholarly Students App" priority />
    </Box>
  </Flex>
)});

export default function Slider() {
  const [active, setActive] = useState<string>('Past Questions');
  const carousel = useRef<AliceCarousel>(null);

  const handleNavigation = (index: number) => {
    carousel.current?.slideTo(index);
  }

  const setActiveSection = (index: number, item: string) => {
    handleNavigation(index);
    setActive(item);
  }

  return (
    <Box as='section' className={classes.slider_container} bgColor='brand.nearWhite'>
      <HStack spacing={[5, 9]} mb={12}>
        {sliderDetails.map((item, index) => (
          <Text as='h1' key={item.title} fontSize={13} color='brand.lime.700' cursor='pointer'
            textTransform='capitalize' onClick={() => setActiveSection(index, item.title)}
            className={item.title === active ? classes.active : undefined}
          >
            {item.title}
          </Text>
        ))}
      </HStack>
      
      <AliceCarousel items={sliderItems} activeIndex={1} mouseTracking ref={carousel} disableButtonsControls disableDotsControls />
    </Box>
  )
}
