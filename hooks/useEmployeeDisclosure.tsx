import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { EmployeeCardProps } from "../components/team/EmployeeCard";
import { TeamMember } from "../types/data";

export default function useEmployeeDisclosure() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [employee, setEmployee] = useState<TeamMember>({name: '', position: '', picture: '', bio: '', duration: ''});

  const showEmployeeDetails: EmployeeCardProps['showEmployeeDetails'] = (employee) => {
    setEmployee(employee);
    onOpen();
  }
  
  return ({
    isOpen,
    onClose,
    employee,
    showEmployeeDetails
  })
}
