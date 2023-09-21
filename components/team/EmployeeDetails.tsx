import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Button, VStack, Icon, Text, Box, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ModalProps } from "../../types/generics/modal";
import { TeamMember } from "../../types/data";
import Image from "next/image";

export default function EmployeeDetails({ isOpen, onClose, employee }: ModalProps & {employee: TeamMember}) {
  const { name, position, picture, bio, duration } = employee;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='full' scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton my={3} mx={7} />
        <ModalBody px='9vw' py='72px'>
          <Button variant='outline' size='sm' aria-label="Close modal" onClick={onClose}
            mb={6} iconSpacing={3.5} leftIcon={<Icon as={ArrowLeftIcon} />}
          >
            Back
          </Button>
          <Flex gap={8} justify='space-between' align='start' flexWrap={{base: 'wrap', md: 'initial'}}>
            <VStack spacing={6} align='start' flexBasis={{base: '100%', md: '40.2%'}}>
              <Box>
                <Image src={picture} alt={`Picture of ${name}`} style={{borderRadius: 4, objectFit: 'cover', height: 300}} />
              </Box>
              <VStack spacing={3} align='start'>
                <Text color='brand.lime.700' fontSize='1.125rem' fontWeight='semibold'>{name}</Text>
                <Text color='#798897' fontSize='0.875rem' fontWeight='medium' lineHeight={7}>{position}</Text>
                <Text color='#798897' fontSize='0.875rem' fontWeight='medium' lineHeight={7}>{duration}</Text>
              </VStack>
            </VStack>
            <Text flexBasis={{base: '100%', md: '49%'}} color='brand.lime.700' fontSize='0.875rem' fontWeight='medium'
              lineHeight={7} textAlign='justify'
            >
              {bio}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
