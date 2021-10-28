export interface BookingRequest {
  paid: boolean;
  sitter: { id: string; username: string };
  startDate: Date;
  endDate: Date;
  status: string;
  user: { id: string; username: string };
  id: string;
}
