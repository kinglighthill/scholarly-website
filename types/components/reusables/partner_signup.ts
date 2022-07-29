export interface AuthInfoState {
  pin: string;
  confirmPin: string;
  bvn: string;
}

export interface ContactInfoState {
  country: string;
  stateOfOrigin: string;
  stateOfResidence: string;
  address: string;
}

export interface AccountCredentialsState {
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
}

export interface PersonalInfoState {
  firstName: string;
  middleName?: string;
  lastName: string;
  referralCode?: string;
}

export interface SignupLevelProps {
  formData: PersonalInfoState | AccountCredentialsState | ContactInfoState | AuthInfoState | {};
  updateFormData: (targetName: string, targetValue: string) => void;
}