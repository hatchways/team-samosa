import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileData } from '../../interface/Profile';
export async function getProfile(): Promise<ProfileData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/Profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}