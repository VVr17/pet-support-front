import { Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";

import { useCategories } from "@/hooks/useQuery/useCategories";
import { useNotices } from "@/hooks/useQuery/useNotices";
import useResponsive from "@/hooks/useResponsive";
import { FIRST_PAGE, LIMIT_PER_PAGE } from "@/utils/constants/notices";

import PetList from "../Pets/PetList";
import Section from "../Section";
import CustomPagination from "../ui-kit/Pagination";

const Notices = () => {
  const isDesktop = useResponsive("up", "lg");
  const { data: categoriesData } = useCategories();

  const [activeTab, setActiveTab] = useState(categoriesData?.data[0].id);
  const [page, setPage] = useState(FIRST_PAGE);

  const { data: noticesData } = useNotices({
    categoryId: activeTab,
    page,
    limit: LIMIT_PER_PAGE,
  });
  const totalPages = noticesData?.total
    ? Math.ceil(noticesData?.total / LIMIT_PER_PAGE)
    : FIRST_PAGE;

  const handleTabChange = (_event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    setPage(FIRST_PAGE);
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Section bgcolor="background.secondary">
      <Typography variant="h1" textAlign="center" mb={5}>
        Our friends who are
        <br />
        looking for a home
      </Typography>

      {categoriesData?.data && (
        <>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            scrollButtons="auto"
            aria-label="category tabs"
            variant={isDesktop ? "standard" : "scrollable"}
            sx={{ mb: 4 }}
            {...(isDesktop && { centered: true })}
          >
            {categoriesData?.data.map((category) => (
              <Tab
                key={category.id}
                value={category.id}
                label={category.titleEn}
              />
            ))}
          </Tabs>

          {noticesData?.data && noticesData?.data.length > 0 && (
            <PetList pets={noticesData?.data} />
          )}

          {noticesData && totalPages > FIRST_PAGE && (
            <CustomPagination
              count={totalPages}
              currentPage={page}
              handleChange={handleChange}
            />
          )}
        </>
      )}
    </Section>
  );
};

export default Notices;
