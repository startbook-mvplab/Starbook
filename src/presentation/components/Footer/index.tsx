import { Divider, Link, Stack, Typography, styled } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const FooterWrapper = styled(Stack)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);


export interface FooterProps {
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
}

const Footer: React.FC<FooterProps> = ({ position }) => {
  return (
    <FooterWrapper sx={{zIndex:999, position: position, bottom: '0px', width: '100%', }} className="footer-wrapper">
      <Divider sx={{ height: '1px', background: 'grey' }} />
      <Stack
        sx={{ backdropFilter: 'blur(10px)', }}
        // width={'98vw'}
        direction={'row'}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Stack direction={'row'} spacing={2} paddingX={4} >

          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://api.whatsapp.com/send?phone=573022468366&text=Hola!%20"
          >
            <WhatsAppIcon sx={{ fontSize: 30, color: 'yellow' }} />
          </a>

          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://www.instagram.com/starter.company/"
          >
            <InstagramIcon sx={{ fontSize: 30, color: 'yellow' }} />
          </a>

          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://co.linkedin.com/company/startco"
          >
            <LinkedInIcon sx={{ fontSize: 30, color: 'yellow' }} />
          </a>

          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://twitter.com/starter_company"
          >
            <TwitterIcon sx={{ fontSize: 30, color: 'yellow' }} />
          </a>


          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://www.facebook.com/startco.co/"
          >
            <FacebookIcon sx={{ fontSize: 30, color: 'yellow' }} />
          </a>

        </Stack>

        <Stack direction={'row'} spacing={3}>
          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://startbook.net/privacy-policy/"
          >
            <Typography variant="subtitle1">
              Términos y Condiciones
            </Typography>
          </a>

          <a style={{ color: '#000', textDecoration: ' none' }}
            href="https://startbook.net/privacy-policy/"
          >
            <Typography variant="subtitle1">
              Políticas de Privacidad
            </Typography>
          </a>

        </Stack>

        <Stack direction={'row'} spacing={3} alignItems={'center'}>

          <img
            src='/energia.png'
            style={{
              borderRadius: '5px',
              width: '100px',
              height: '80px',
              // backgroundColor: 'white'
            }}
          />
          <img
            src='/starter.png'
            style={{
              borderRadius: '5px',
              width: '100px',
              height: '40px',
              // backgroundColor: 'white'
            }}
          />
          <img
            src='/startup.png'
            style={{
              borderRadius: '5px',
              width: '130px',
              height: '90px',
              // backgroundColor: 'white'
            }}
          />
        </Stack>
      </Stack>
      <Divider sx={{ height: '1px', background: 'grey', marginBottom: '0px' }} />
    </FooterWrapper >
  );
}

export default Footer;
