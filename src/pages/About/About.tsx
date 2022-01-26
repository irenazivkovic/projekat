import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import imgPharmacy from '../../imgs/pharmacy.jpg';
import imgMilos from '../../imgs/Milos.jpg';

export const About = () => (
  <>
    <Card sx={{ m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        width="10%"
        image={imgPharmacy}
        alt="project info"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pharmacy shop
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a small React-Typescript based application (version 1.0) created by Milos Vukadinovic as a test project.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgMilos}
        alt="milos-author"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Milos Vukadinovic
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weird creature typically found sitting at his desk coding.
          Other times this bizzare enigma can be found enjoying philosophy, hanging out with it's herd, cracking jokes and being a nuisance.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link component="a" href="https://www.linkedin.com/in/milosvukadinovic/" target="_blank" underline="none">Linkedin page</Link>
        </Button>
      </CardActions>
    </Card>
  </>
);
