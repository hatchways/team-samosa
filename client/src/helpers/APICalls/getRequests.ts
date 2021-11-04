import { FetchOptions } from '../../interface/FetchOptions';
import { BookingRequest } from '../../interface/Request';

export async function getRequests(profileType: string): Promise<{ requests: Array<BookingRequest> }> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  const res = await fetch(`/request/${profileType}`, fetchOptions);
  const resp = await res.json();
  const parsed = resp.requests.map((element: any) => {
    const startDateObject = new Date(Date.parse(element.startDate));
    const endDateObject = new Date(Date.parse(element.endDate));

    return {
      paid: element.paid,
      sitter: { id: element._id, username: element.sitterId.username },
      startDate: startDateObject,
      endDate: endDateObject,
      status: element.status,
      user: { id: element._id, username: element.userId.username },
      id: element._id,
    };
  });
  return { requests: parsed };
}
