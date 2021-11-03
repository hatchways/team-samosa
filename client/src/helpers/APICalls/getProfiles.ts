import { FetchOptions } from '../../interface/FetchOptions';
import { PublicProfileArrayApi } from '../../interface/Profile';

export async function getProfiles(search?: string): Promise<PublicProfileArrayApi> {
  try {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      credentials: 'include',
    };
    const res = await fetch(`/profile/all?search=${search}`, fetchOptions);
    if (!res.ok) {
      throw res;
    }
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
    return { success: { profiles: parsed } };
  } catch (err) {
    return { error: { message: err.statusText, status: err.status } };
  }
}
