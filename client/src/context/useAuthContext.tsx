import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthApiData, AuthApiDataSuccess } from '../interface/AuthApiData';
import { User } from '../interface/User';
import { ProfileSuccess } from '../interface/Profile';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import { getUProfile } from '../helpers/APICalls/getUProfile';
import { downloadPhoto } from '../helpers/APICalls/downloadPhoto';
import logoutAPI from '../helpers/APICalls/logout';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  userProfile: ProfileSuccess | null | undefined;
  updateProfileContext: (profile: ProfileSuccess) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  userProfile: undefined,
  updateProfileContext: () => null,
  logout: () => null,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  // default undefined before loading, once loaded provide user or null if logged out
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const [userProfile, setUserProfile] = useState<ProfileSuccess | null | undefined>();
  const history = useHistory();

  const updateLoginContext = useCallback((data: AuthApiDataSuccess) => {
    setLoggedInUser(data.user);
  }, []);

  const updateProfileContext = useCallback((profile: ProfileSuccess) => {
    setUserProfile(profile);
  }, []);

  const logout = useCallback(async () => {
    // needed to remove token cookie
    await logoutAPI()
      .then(() => {
        setLoggedInUser(null);
        setUserProfile(null);
      })
      .catch((error) => console.error(error));
  }, []);

  // use our cookies to check if we can login straight away
  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then(async (data: AuthApiData) => {
        if (data.success) {
          const user = data.success;
          await getUProfile().then((res) => {
            if (res.success) {
              updateProfileContext(res.success);
            }
            updateLoginContext(user);
          });
        } else {
          // don't need to provide error feedback as this just means user doesn't have saved cookies or the cookies have not been authenticated on the backend
          setLoggedInUser(null);
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, updateProfileContext, history]);

  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, userProfile, updateProfileContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
