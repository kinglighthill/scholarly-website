export interface AuthInfoState {
  app_lock_pin: string;
  confirm_app_lock_pin: string;
  bvn: string;
}

export interface ContactInfoState {
  country_id: string;
  state_of_origin_id: string;
  state_of_residence_id: string;
  address: string;
}

export interface AccountCredentialsState {
  password: string;
  confirm_password: string;
  email: string;
  phone_number: string;
}

export interface PersonalInfoState {
  first_name: string;
  middle_name?: string;
  last_name: string;
  dob: string;
  referrer_code?: string;
}

export interface SignupLevelProps {
  formData: PersonalInfoState | AccountCredentialsState | ContactInfoState | AuthInfoState | {};
  updateFormData: (targetName: string, targetValue: string) => void;
}