import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@heroicons/react/solid";
import useSearch from "../../hooks/useSearch";
import { QuestionsProps } from "../../types/components/faqs/questions";

export default function Questions({ questions, category, color, max, search=true }: QuestionsProps) {
  const { searchQuery, updateSearchQuery } = useSearch();

  return (
    <>
      {search &&
        <InputGroup mb={7}>
          <InputLeftElement pointerEvents='none' color='#B2BBB6'>
            <Icon as={SearchIcon} fontSize='1.2em' mt={0.5} />
          </InputLeftElement>
          <Input type='text' bg='white' placeholder='Search question by title' _placeholder={{fontSize: 13}}
            focusBorderColor='brand.lime.500' onChange={updateSearchQuery}
          />
        </InputGroup>
      }

      <Accordion w='full' mb={4} allowMultiple defaultIndex={[0]}>
        {questions.filter((question) => question.user_type === category)
         .sort((a,b) => a.order - b.order)
         .slice(0, max)
         .filter(question => question.question.toLowerCase().includes(searchQuery.toLowerCase()))
         .map((question, index) => (
          <AccordionItem key={question.user_type+index+1} mb={7} pb={10} color={`rgb(${color})`} borderTop='none' borderBottom={`0.5px solid rgba(${color}, 0.5)`}>
            <h2>
              <AccordionButton p={0} _hover={{bg: 'none'}}>
                <Box flex='1' textAlign='left' fontSize={20}>{question.question}</Box>
                <AccordionIcon textAlign='right' />
              </AccordionButton>
            </h2>
            <AccordionPanel opacity={0.8} pt={5} pb={0} px={0}>
              {question.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
