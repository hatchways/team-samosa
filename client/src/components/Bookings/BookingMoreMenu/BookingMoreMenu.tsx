import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BookingRequest } from '../../../interface/Request';
import { updateRequest } from '../../../helpers/APICalls/updateRequest';

interface Props {
  request: BookingRequest;
  size: 'small' | 'medium' | undefined;
  fontSize: 'small' | 'inherit' | 'default' | 'large' | undefined;
  //TODO Add prop for user profile
}

export default function NextBooking({ request, size, fontSize }: Props): JSX.Element {
  //TODO Add logic to render menu specific for owner or sitter

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (status: string) => {
    updateRequest(request.id, status);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton size={size} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon color="secondary" fontSize={fontSize} />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {request.status !== 'declined' ? (
          <MenuItem onClick={() => handleMenuItemClick('accepted')}>Accept</MenuItem>
        ) : (
          ''
        )}
        {request.status !== 'accepted' ? (
          <MenuItem onClick={() => handleMenuItemClick('declined')}>Decline</MenuItem>
        ) : (
          ''
        )}
      </Menu>
    </>
  );
}
