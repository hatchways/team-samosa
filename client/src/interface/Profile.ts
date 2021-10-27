export interface Profile {
  gender: string;
  birthDate: Date;
  address: string;
  description: string;
  photoUrl: string;
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
}

export interface ProfileApiData {
  error?: { message: string };
  success?: Profile;
}
