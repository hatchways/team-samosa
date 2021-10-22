import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileData } from '../../interface/Profile';
interface Props {
  search: string;
}
export async function getProfile({ search }: Props): Promise<ProfileData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile?search=${search}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
