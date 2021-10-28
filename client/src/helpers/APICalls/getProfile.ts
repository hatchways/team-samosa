import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData } from '../../interface/Profile';

export async function getProfile(profileId: string): Promise<ProfileApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch(`/profile/${profileId}`, fetchOptions).then();
  const resp = await res.json();
  if (resp.error) {
    return resp;
  }
  const profile = resp.profile;
  const birthDateObject = new Date(Date.parse(profile.birthDate));
  const parsed = {
    gender: profile.gender,
    birthDate: birthDateObject,
    address: profile.address,
    description: profile.description,
    photoUrl: profile.photoUrl,
    id: profile._id,
    userId: profile.userId,
    firstName: profile.firstName,
    lastName: profile.lastName,
    phoneNum: profile.phoneNum,
  };
  return { success: parsed };
}
