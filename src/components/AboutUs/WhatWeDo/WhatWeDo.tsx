import Section from "@/components/Section";
import { List, ListItem, Typography } from "@mui/material";

const WhatWeDo = () => {
  return (
    <Section bgcolor="background.secondary">
      <Typography variant="h2">What We Do</Typography>

      <List>
        <ListItem>
          <div>
            <Typography component="span" fontWeight={600}>
              Find Your Lost Pet:
            </Typography>
            <Typography component="span">
              Losing a pet is a distressing experience. At Cozy House, we
              provide a comprehensive platform where you can post notices about
              your lost pet and browse listings of found pets in your area. Our
              community-driven approach increases the chances of a joyful
              reunion.
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Typography component="span" fontWeight={600}>
              Adopt a New Friend:
            </Typography>
            <Typography component="span">
              Looking to add a new member to your family? Cozy House offers a
              wide range of adoption listings, from pets needing new homes to
              animals rescued and cared for by loving individuals. Browse our
              categories, such as "sell" and "in-good-hands," to find the
              perfect companion for your lifestyle.
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Typography component="span" fontWeight={600}>
              Stay Informed:
            </Typography>
            <Typography component="span">
              Keep up with the latest pet-related news and stories through our
              dedicated news section. Learn about pet care tips, heartwarming
              rescue stories, and updates on animal welfare.
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Typography component="span" fontWeight={600}>
              Create Notices:
            </Typography>
            <Typography component="span">
              Whether you're looking to find a new home for a pet, reunite a
              lost pet with its owner, or share important news, Cozy House
              allows you to create detailed notices that reach a wide audience.
              Choose from categories like "sell," "in-good-hands," and
              "lost/found" to ensure your message gets to the right people.
            </Typography>
          </div>
        </ListItem>
      </List>
    </Section>
  );
};

export default WhatWeDo;
