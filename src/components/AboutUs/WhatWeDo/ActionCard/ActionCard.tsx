import { CardMedia, Typography } from '@mui/material';
import React from 'react';

interface IProps {
  title: string;
  description: string;
  iconUrl: string;
}

const ActionCard: React.FC<IProps> = ({ title, description, iconUrl }) => {
  return (
    <>
      <CardMedia
        component="img"
        image={iconUrl}
        alt={title}
        sx={{
          width: { xs: 24, md: 32 },
          height: { xs: 24, md: 32 },
          mb: { xs: 2, md: 3 },
        }}
      />

      <Typography
        variant="h4"
        component="h3"
        color="text.primary"
        mb={{ xs: 1, md: 2 }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="p">
        {description}
      </Typography>
    </>
  );
};

export default ActionCard;
