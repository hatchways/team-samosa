import { ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import Search from '../Search/Search';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const ChatSideBanner = ({ loggedInUser }: Props): JSX.Element => {
  const [search, setSearch] = useState<string>('test');
  const [newChatUser, setNewChatUser] = useState<User | null>(null);
  const classes = useStyles();
  const { userProfile } = useAuth();
  // React.FormEvent<FormControl & FormControlProps>)
  const handleChange = (e: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearch(newInputValue);
    if (newChatUser) {
      setNewChatUser(null);
    }
  };

  return (
    <Grid className={classes.chatSideBanner}>
      <Box className={classes.userPanel}>
        <AvatarDisplay url={userProfile ? userProfile.photoUrl : 'default'} />
        <Typography className={classes.userText} variant="h5">
          {loggedInUser.username}
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.chatTitle} variant="h5">
          Chat
        </Typography>
        <Search search={search} handleChange={handleChange} />
      </Box>
    </Grid>
  );
};

export default ChatSideBanner;
