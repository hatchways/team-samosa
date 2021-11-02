import { FetchOptions } from '../../interface/FetchOptions';
import { PublicProfileApiData } from '../../interface/Profile';
export async function getPublicProfile(profileId: string): Promise<PublicProfileApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch(`/profile/public/${profileId}`, fetchOptions);
  const resp = await res.json();
  if (resp.error) {
    return resp;
  }
  const profile = resp.profile;
  const parsed = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    description: profile.description,
    id: profile._id,
    userId: profile.userId,
    photoUrl: profile.photoUrl,
    address: profile.address,
  };
  return { success: parsed };
}
