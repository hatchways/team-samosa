import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData } from '../../interface/Profile';
export async function getProfile(): Promise<ProfileApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch(`/profile/`, fetchOptions);
  const resp = await res.json();
  if (resp.error) {
    return resp;
  }

  const profile = resp.profile;

  return { success: profile };
}
