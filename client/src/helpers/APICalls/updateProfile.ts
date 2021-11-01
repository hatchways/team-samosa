import { ProfileApiData } from '../../interface/Profile';
import { FetchOptions } from '../../interface/FetchOptions';

const updateProfile = async (
  firstName: string,
  lastName: string,
  gender: string,
  birthDate: Date,
  email: string,
  phoneNum: string,
  address: string,
  description: string,
): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, gender, birthDate, email, phoneNum, address, description }),
    credentials: 'include',
  };
  return await fetch(`/profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default updateProfile;
