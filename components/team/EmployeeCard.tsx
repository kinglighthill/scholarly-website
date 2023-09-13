import { GridItem, VStack, Flex, Icon, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import { TeamMember } from "../../types/data";

export interface EmployeeCardProps {
  employee: TeamMember;
  colSpan: number;
  showEmployeeDetails: (employee: TeamMember) => void;
}

export default function EmployeeCard({ employee, colSpan, showEmployeeDetails }: EmployeeCardProps) {
  const { name, position, picture } = employee;

  return (
    <GridItem as='button' colSpan={[6, 3, colSpan]} bg='white' p={4} borderRadius={8}
      boxShadow='0px 8px 31px -6px rgba(121, 136, 151, 0.08), 0px 14px 64px -4px rgba(121, 136, 151, 0.08)'
      aria-label={`Read more about ${name}`} onClick={() => showEmployeeDetails(employee)}
    >
      <VStack spacing={4} align='start'>
        <Image src={picture} alt={`Picture of ${name}`} style={{borderRadius: 4, objectFit: 'cover', height: colSpan === 3 ? 337 : 236}} />
        <Flex justify='space-between' align='center' w='full' px={3}>
          <VStack spacing={1.5} align='start' flexBasis='80%'>
            <Text color='brand.lime.700' fontSize='1.125rem' fontWeight='semibold' noOfLines={1} textAlign='left'>{name}</Text>
            <Text color='#798897' fontSize='0.875rem' fontWeight='medium' lineHeight={7} noOfLines={1} textAlign='left'>{position}</Text>
          </VStack>
          <Icon as={ArrowRightIcon} boxSize='1.3em' color='brand.red.500' />
        </Flex>
      </VStack>
    </GridItem>
  )
}
