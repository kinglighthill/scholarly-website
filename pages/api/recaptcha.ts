import type { NextApiRequest, NextApiResponse } from "next";
import { postRequest } from "../../services/default.service";

export interface RequestBody {
  token: string;
  urlPath: string;
  formData: object;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { token, urlPath, ...formData }: RequestBody = req.body;
    const data = await verifyRecaptcha(token);

    if (data.success && data.score > 0.5) {
      const response = await submitFormData(urlPath, formData);
      return showResponse(res, response.status);
    }
    return showResponse(res, 401);
  }
  catch (error) {
    console.log("An error occurred in recaptcha.ts: " + error)
    return showResponse(res, 401);
  } 
}

const verifyRecaptcha = async (token: string) => {
  const secret_key = process.env.RECAPTCHA_SECRET_KEY;
  const verification_url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
  const response = await postRequest(verification_url, {token});

  return response.json();
}

const submitFormData = async (urlPath: string, formData: object) => {
  const url = `${process.env.NEXT_PUBLIC_GCP_API_BASE_URL}${urlPath}`;
  return postRequest(url, formData);
}

const showResponse = (res: NextApiResponse, statusCode: number) => {
  if (statusCode === 200) {
    return res.status(statusCode).json({message: "success", status: true});
  }
  return res.status(statusCode).json({message: "failed", status: false});
}