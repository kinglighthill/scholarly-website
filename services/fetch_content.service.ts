import { getRequest } from "./default.service"

export const fetchContent = (extension: string) => {
  return getRequest(`${process.env.NEXT_PUBLIC_GCP_API_BASE_URL}/${extension}`)
}