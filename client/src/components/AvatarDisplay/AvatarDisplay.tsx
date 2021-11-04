import Avatar from '@material-ui/core/Avatar';
import { ProfileSuccess } from '../../interface/Profile';

interface Props {
  loggedIn: boolean;
  profile: ProfileSuccess;
}

const AvatarDisplay = ({ profile }: Props): JSX.Element => {
  return <Avatar alt="Profile Image" src={profile.PhotoUrl} />;
};

export default AvatarDisplay;
