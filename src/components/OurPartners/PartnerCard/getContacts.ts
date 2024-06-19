export const getContacts = (partner: Partner) => {
  return [
    { href: partner.website, label: "Website:", value: partner.website },
    { href: `mailto:${partner.email}`, label: "Email:", value: partner.email },
    { href: `tel:${partner.phone}`, label: "Phone:", value: partner.phone },
  ];
};
