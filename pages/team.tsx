import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import EmployeeCard from '../components/team/EmployeeCard';
import EmployeeDetails from '../components/team/EmployeeDetails';
import Page from '../components/reusables/Page';
import { team } from '../data';
import useEmployeeDisclosure from '../hooks/useEmployeeDisclosure';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { TeamMember } from '../types/data';

const Team: NextPage = () => {
  const router = useRouter();
  const { isOpen, onClose, employee, showEmployeeDetails } = useEmployeeDisclosure();

  const calculateColSpan = (maxColItems: number, arrayLength: number, itemIndex: number) => {
    // maxColItems must be equal to 3 for this logic to work correctly.
    const remainder = arrayLength%maxColItems;
    if (remainder === 0) {
      return 2;
    } else if (remainder === 1) {
      return itemIndex < 2 || itemIndex >= arrayLength - 2 ? 3 : 2
    } else {
      return itemIndex < 2 ? 3 : 2;
    }
  }
  
  useEffect(() => {
    if (router.query.name) {
      const query: string = (router.query.name as string).toLowerCase();
      const matchingEmployee: TeamMember | undefined = team.find(member => member.name.toLowerCase() === query);
      if (matchingEmployee) {
        showEmployeeDetails(matchingEmployee);
      }
    }
  }, [router.query.name])

  return (
    <Page title='Meet the team at Scholarly Africa' description='Learn more about the people that make things happen at Scholarly Africa.'>
      <Box as='section' px={{base: '4vw', lg: '9vw'}} py='60px'>
        <VStack spacing={1} align='start'>
          <Text as='h1' w='full' color='brand.lime.700' textAlign={['center', 'left']}
            fontSize={['1.250rem', '1.625rem']} fontWeight='bold'
          >
            Meet our team
          </Text>
          <Text w='full' color='#798897' fontSize={['0.875rem', '1rem']} fontWeight='medium'
            lineHeight={7} textAlign={['center', 'left']}
          >
            Learn more about the people that make things happen.
          </Text>
        </VStack>
        <Grid templateColumns='repeat(6, 1fr)' rowGap={8} columnGap={5} mt={12}>
          {team.map((member, index, array) => {
            const colSpan = calculateColSpan(3, array.length, index);
            return (
              <EmployeeCard key={member.name+index} employee={member} colSpan={colSpan} showEmployeeDetails={showEmployeeDetails} />
            )
          })}
        </Grid>
        <EmployeeDetails isOpen={isOpen} onClose={onClose} employee={employee} />
      </Box>
    </Page>
  )
}

export default Team;
