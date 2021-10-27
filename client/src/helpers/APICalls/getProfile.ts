import { FetchOptions } from '../../interface/FetchOptions';
import { Profile } from '../../interface/Profile';

export async function getProfile(): Promise<{ profile: Profile }> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch('/profile', fetchOptions);
  const resp = await res.json();
  const birthDateObject = new Date(Date.parse(resp.birthDate));
  const parsed = {
    gender: resp.gender,
    birthDate: birthDateObject,
    address: resp.address,
    description: resp.description,
    photoUrl: resp.photoUrl,
    id: resp._id,
    userId: resp.userId,
    firstName: resp.firstName,
    lastName: resp.lastName,
    phoneNum: resp.phoneNum,
  };
  return { profile: parsed };
}
