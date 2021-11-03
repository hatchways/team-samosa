import { FetchOptions } from '../../interface/FetchOptions';
import { BookingRequestApiData } from '../../interface/Request';

export async function createRequest(sitterId: string, startDate: Date, endDate: Date): Promise<BookingRequestApiData> {
  try {
    const fetchOptions: FetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ sitterId, startDate, endDate }),
    };
    const res = await fetch(`/request`, fetchOptions);
    if (!res.ok) {
      throw res;
    }
    const resp = await res.json();
    return { success: resp };
  } catch (err) {
    return { error: { message: err.statusText, status: err.status } };
  }
}
