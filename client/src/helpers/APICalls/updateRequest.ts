import { FetchOptions } from '../../interface/FetchOptions';
import { BookingRequest } from '../../interface/Request';

export async function updateRequest(id: string, status: string): Promise<{ requests: Array<BookingRequest> }> {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
    credentials: 'include',
  };
  return await fetch(`/request/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
