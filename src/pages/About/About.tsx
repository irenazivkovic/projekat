import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imgPharmacy from '../../imgs/pharmacy.jpg';

export const About = () => (
  <>
    <Card sx={{ m: 2 }}>
      <CardMedia
        component="img"
        height="250"
        width="10%"
        image={imgPharmacy}
        alt="project info"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          XG Pharmacy shop
        </Typography>
        <Typography variant="body2" color="text.secondary">
         XG Pharmacy is a part of  Hospitals - Serbia's trusted pharmacy. It is Serbia's first and largest branded pharmacy network, with over 4200 plus outlets in key locations.<br/><br/>

Accredited with - International Quality Certification,  XG Pharmacy offers genuine medicines round-the-clock, through our 24-hour Pharmacies.  XG Pharmacy also provides customer care any time of the day!<br/><br/>

Quality is the cornerstone of our existence. We have gained experience in pharmacy operations management over the last 2 decades and are committed to delivering best service in the industry.<br/><br/>

 XG Pharmacy is well stocked with medicines, OTC and FMCG products, manned by a team of qualified and experienced staff available to cater to your every need.<br/>

This pharmacy has more than 5000 products in various categories like Vitamins and Supplements, Baby Care, Personal Care, Health & Nutrition Foods and OTC. <br/>
In addition to this we have more than 400 XG Pharmacy Products in the following categories like vitamins and supplements, health food, oral care, skincare, personal care, baby care, OTC etc.
        </Typography>
      </CardContent>
    </Card>
  </>
);
