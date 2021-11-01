export interface ProfileSuccess {
  exist: boolean;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  email: string;
  photoUrl: string;
  phoneNum: string;
  address: string;
  description: string;
}

export interface ProfileApiData {
  error?: { message: string };
  success?: ProfileSuccess;
}

export interface PublicProfileSuccess {
  firstName: string;
  lastName: string;
  description: string;
  id: string;
  userId: string;
  photoUrl: string;
  address: string;
}

export interface PublicProfileApiData {
  error?: { message: string };
  success?: PublicProfileSuccess;
}
