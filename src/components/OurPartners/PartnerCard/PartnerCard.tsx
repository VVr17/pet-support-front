import { Box, Card, CardContent, Link, Typography } from "@mui/material";

import { getContacts } from "./getContacts";
import { cardContentStyles, cardStyles } from "./styles";

interface IPartnerCardProps {
  partner: Partner;
}
const PartnerCard: React.FC<IPartnerCardProps> = ({ partner }) => {
  const { name_en, address } = partner;

  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <Box>
          <Typography variant="h5" component="p" mb={1}>
            {name_en}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {address.en}
          </Typography>
        </Box>
        <Box>
          {getContacts(partner).map(({ href, label, value }, index) => (
            <Typography key={href} variant="body1" color="text.secondary">
              <Typography component="span" fontWeight={600}>
                {label}
              </Typography>{" "}
              <Link
                href={href}
                {...(index === 0 && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                underline="hover"
                color="secondary"
              >
                {value}
              </Link>
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
