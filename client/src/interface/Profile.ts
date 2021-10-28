export interface ProfileSuccess {
  exist: boolean;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  email: string;
  phoneNum: string;
  address: string;
  description: string;
}

export interface ProfileData {
  error?: string;
  success?: ProfileSuccess;
}
