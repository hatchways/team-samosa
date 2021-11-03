export interface BookingRequest {
  paid: boolean;
  sitter: { id: string; username: string };
  startDate: Date;
  endDate: Date;
  status: string;
  user: { id: string; username: string };
  id: string;
}
export interface BookingRequestApiData {
  error?: { message: string; status: number };
  success?: BookingRequestApiData;
}
