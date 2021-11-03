import { FetchOptions } from '../../interface/FetchOptions';
import { FullProfileApiData } from '../../interface/Profile';

export async function getProfile(): Promise<FullProfileApiData> {
  try {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      credentials: 'include',
    };
    const res = await fetch(`/profile`, fetchOptions);
    const profile = await res.json();
    return { success: profile };
  } catch {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
}
