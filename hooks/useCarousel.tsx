import { RefObject, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";

// This is an experimental feature. Use with caution!!!

// Type declaration for the 'responsive' prop of the Alice Carousel component
export type Breakpoints = {
  [key: string]: {
    items: number;
  }
}

export default function useCarousel(items: any[], breakpoints: Breakpoints, ref: RefObject<AliceCarousel>) {
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  const element = ref.current;
  const activeIndex = element?.state?.activeIndex;

  // Determine the gap between consecutive slides based on the number of items displayed at once
  const determineIndexGap = (breakpoints: Breakpoints) => {
    // Calculate the available width of the screen
    const availWidth = screen.availWidth;
    // Determine the possible breakpoint matches based on the breakpoints provided in the 'responsive' prop of the AliceCarousel component
    // Ideally, any breakpoint below the available width should be a possible match
    // The exact match is the breakpoint lower than and closest to the available screen width
    const possibleMatches = Object.keys(breakpoints).filter(breakpoint => +breakpoint <= availWidth);
    const exactMatch = possibleMatches[possibleMatches.length - 1];
    return breakpoints[exactMatch].items;
  }

  const handleNext = (gap: number) => {
    // If the computation for the next index in the slide is greater than the index of the last slide item (in the array), continue count from the front of the array
    // This helps to achieve infinite scrolling for the slide
    if (activeIndex) {
      if (activeIndex + gap > items.length - 1) {
        const nextIndex = (activeIndex + gap) - items.length;
        element.slideTo(nextIndex);
        // setActiveIndex(nextIndex);
        return;
      }
      element.slideTo(activeIndex + gap);
      // setActiveIndex(activeIndex + gap);
    }
  }

  // If the computation for the next index in the slide is less than the index of the first slide item (in the array), continue count from the end of the array
  // This helps to achieve infinite scrolling for the slide
  const handlePrevious = (gap: number) => {
    if (activeIndex) {
      if (activeIndex - gap < 0) {
        const nextIndex = items.length + (activeIndex - gap);
        element.slideTo(nextIndex);
        // setActiveIndex(nextIndex);
        return;
      }
      element.slideTo(activeIndex - gap);
      // setActiveIndex(activeIndex - gap);
    }
  }

  const handleNavigation = (trigger: string) => {
    const gap = determineIndexGap(breakpoints);
    // if (ref.current) {
      if (trigger === 'prev') {
        handlePrevious(gap);
      }
      else if (trigger === 'next') {
        handleNext(gap);
      }
    // }
  }
  
  return ({
    handleNavigation
  })
}
