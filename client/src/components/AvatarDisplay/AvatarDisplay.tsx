import Avatar from '@material-ui/core/Avatar';

interface Props {
  url: string;
}

const AvatarDisplay = ({ url }: Props): JSX.Element => {
  return <Avatar alt="Profile Image" src={url ? url : `https://robohash.org/${url}.png`} />;
};

export default AvatarDisplay;
