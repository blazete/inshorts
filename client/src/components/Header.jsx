import { AppBar, styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {Menu} from '@mui/icons-material';


const StyleHeader = styled(AppBar)({
  background: '#fff',
  height: '70px'
});

const MenuIcon = styled(Menu)`
color:#000;
`;

const Image=styled('img')({
  height:56,
  margin:'auto',
  paddingRight: '70'
  
})

const Header = () => {
  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <StyleHeader position='static'>
      <Toolbar>
        <MenuIcon/>
        <Image src={url} alt='logo'/>
      </Toolbar>
    </StyleHeader>
  );
}

export default Header;
