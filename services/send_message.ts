import { FormData } from "../types/components/reusables/contact_form"
import { postRequest } from "./default.service"

export const sendMessage = (payload: FormData) => {
  return postRequest(`${process.env.NEXT_PUBLIC_GCP_API_BASE_URL}/sendMessage/send-message`, payload)
}