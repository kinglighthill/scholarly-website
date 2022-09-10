import { useToast } from '@chakra-ui/react'

export default function useCustomToast() {
  const toast = useToast();

  const makeToast = (title: string, description: string, status?: "info" | "warning" | "success" | "error" | "loading") => {
    return toast({
      title: title,
      description: description,
      status: status || 'success',
      duration: 3000,
      isClosable: true,
    });
  }

  return makeToast;
}
