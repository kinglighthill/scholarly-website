import { postRequest } from "./default.service"

export const notifyUser = (payload: object) => {
  return postRequest(`${process.env.NEXT_PUBLIC_GCP_API_BASE_URL}/joinWaitlist/join-waitlist`, payload)
}