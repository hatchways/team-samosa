import { FetchOptions } from '../../interface/FetchOptions';
import { PublicProfileSuccess } from '../../interface/Profile';

export async function getProfiles(): Promise<{ profiles: Array<PublicProfileSuccess> }> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch('/profile/all', fetchOptions);
  const resp = await res.json();
  const parsed = resp.profiles.map((element: any) => {
    return {
      description: element.description,
      photoUrl: element.photoUrl,
      id: element._id,
      userId: element.userId,
      firstName: element.firstName,
      lastName: element.lastName,
    };
  });
  return { profiles: parsed };
}
