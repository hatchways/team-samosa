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

export interface FullProfileSuccess {
  profile: {
    userId: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;
    phoneNum: string;
    address: string;
    description: string;
    photoUrl: string;
    isSitter: boolean;
  };
}

export interface FullProfileApiData {
  error?: { message: string };
  success?: FullProfileSuccess;
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
