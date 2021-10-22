import PageWrapper from '../PageWrapper/PageWrapper';
import NavBar from '../Navbar/NavBar';

export default function NavWrapper({ children }: any): JSX.Element {
  return (
    <>
      <NavBar elevation={16} color="inherit" />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
