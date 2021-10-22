import { ProfileData } from '../../interface/Profile';
import { FetchOptions } from '../../interface/FetchOptions';

const createProfile = async (
  firstName: string,
  lastName: string,
  gender: string,
  birthDate: Date,
  email: string,
  phoneNum: string,
  address: string,
  description: string,
): Promise<ProfileData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, gender, birthDate, email, phoneNum, address, description }),
    credentials: 'include',
  };
  console.log(fetchOptions);
  return await fetch(`/Profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createProfile;
