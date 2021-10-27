import { FetchOptions } from '../../interface/FetchOptions';
import { Profile } from '../../interface/Profile';

export async function getProfiles(): Promise<{ profiles: Array<Profile> }> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch('/profile', fetchOptions);
  const resp = await res.json();
  const parsed = resp.profiles.map((element: any) => {
    const birthDateObject = new Date(Date.parse(element.birthDate));

    return {
      gender: element.gender,
      birthDate: birthDateObject,
      address: element.address,
      description: element.description,
      photoUrl: element.photoUrl,
      id: element._id,
      userId: element.userId,
      firstName: element.firstName,
      lastName: element.lastName,
      phoneNum: element.phoneNum,
    };
  });
  return { profiles: parsed };
}
