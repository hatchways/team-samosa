import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileData } from '../../interface/Profile';
export async function getProfile(id?: string | ''): Promise<ProfileData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
