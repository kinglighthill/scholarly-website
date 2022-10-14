import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { postRequest } from '../services/default.service';

export default function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const verifyUser = async (action: string, formData: object, urlPath: string) => {
    if (!executeRecaptcha) {
      console.log("ReCaptcha not yet available");
      return;
    }

    try {
      // Retrieve Recaptcha token
      const token = await executeRecaptcha(action);
      if (token) {
        const body = { ...formData, urlPath, token }
        const verificationStatus = await postRequest('/api/recaptcha', body);
        return verificationStatus;
      }
    }
    catch (error) {
      console.log("An error occurred in useRecaptcha.tsx: " + error);
    }
  }

  return verifyUser;
}
