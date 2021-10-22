export interface ProfileSuccess {
  userId: string;
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
  error?: { message: string };
  success?: ProfileSuccess;
}
