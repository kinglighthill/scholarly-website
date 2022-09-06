import { useState } from "react";
import { notifyUser } from "../services/notification.service";
import useCustomToast from "./useCustomToast";

export default function useFeatureNotifier(feature: string) {
  const makeToast = useCustomToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  // Regex pattern coined from https://www.regular-expressions.info/email.html
  const emailPattern: RegExp = /^[A-Z0-9][A-Z0-9._%+-]+?@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (emailPattern.test(value) && emailError) {
      setEmailError(false);
    }
    setEmail(value);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    };

    try {
      setLoading(true);
      const payload = { email, feature }
      const response = await notifyUser(payload);
      if (response.ok) {
        makeToast('Email submitted successfully', "We'll notify you when this feature is available.");
        setEmail('');
        setLoading(false);
      }
    }
    catch (error) {
      console.log(error);
      makeToast('An error occured', "Please ensure that you're connected to the internet and try again.", 'error');
      setLoading(false);
    }
  }

  return (
    {
      email,
      emailError,
      loading,
      handleChange,
      handleSubmit
    }
  )
}
