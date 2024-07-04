interface HowItWorksCard {
  imageUrl: string;
  title: string;
  details: string[];
  description: string;
  button: {
    title: string;
    path: string;
  } | null;
}
