/* eslint-disable @typescript-eslint/no-unused-vars */
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { retrieveSearchParams } from '@/helpers/searchParams/retrieveSearchParams';
import { updateSearchParams } from '@/helpers/searchParams/updateSearchParams';
import { useCategories } from '@/hooks/useQuery/useCategories';
import { useNotices } from '@/hooks/useQuery/useNotices';
import { useSpecies } from '@/hooks/useQuery/useSpecies';
import { useUserStore } from '@/store/useUserStore';
import {
  defaultFilter,
  defaultSort,
  FIRST_PAGE,
  LIMIT_PER_PAGE,
} from '@/utils/constants/notices';
import { ROUTES } from '@/utils/constants/routes';
import { getNoticeFilterValues } from '@/utils/getNoticeFilterValues';

import PetList from '../Pets/PetList';
import Section from '../Section';
import AlertDialog from '../ui-kit/AlertDialog';
import Loader from '../ui-kit/Loader';
import CustomPagination from '../ui-kit/Pagination';
import CategoryTabs from './components/CategoryTabs';
import FilterDrawer from './components/FilterDrawer';
import SortMenu from './components/SortMenu';
import { addNoticeButtonStyles } from './styles';

const Notices = () => {
  const { user } = useUserStore();

  // Router to get and set search params
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [alertIsOpened, setAlertIsOpened] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  // Query data state
  const [page, setPage] = useState(FIRST_PAGE);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filter, setFilter] = useState<NoticeFilter>(defaultFilter);
  const [sort, setSort] = useState<Sort>(defaultSort);

  // Query requests
  const { data: categoriesData, isLoading: isCategoryLoading } =
    useCategories();
  const { data: species } = useSpecies();
  const { data: noticesData, isLoading: isNoticeLoading } = useNotices({
    category: categoriesData?.find(category => category.slug === activeCategory)
      ?.id,
    page,
    limit: LIMIT_PER_PAGE,
    ...sort,
    ...filter,
  });
  const isLoading = isCategoryLoading || isNoticeLoading;

  const totalPages = noticesData?.total
    ? Math.ceil(noticesData?.total / LIMIT_PER_PAGE)
    : FIRST_PAGE;

  const toggleDrawer = () => {
    setFilterOpen(prevState => !prevState);
  };

  //Set the first tab after categories fetched
  useEffect(() => {
    if (!activeCategory && categoriesData) {
      const updatedQuery = updateSearchParams({
        searchParams,
        searchType: 'category',
        category: categoriesData?.[1].slug,
      });
      navigate(updatedQuery);
    }
  }, [activeCategory, categoriesData, navigate, searchParams]);

  // Gets search params from URL and updates products according to search params
  useEffect(() => {
    const search = retrieveSearchParams(searchParams);
    const { page, category } = search;
    const { priceMax, priceMin, gender, sort, sortType, speciesIds } =
      getNoticeFilterValues(search, species);

    setPage(page);
    setActiveCategory(category as string);
    setFilter({
      gender,
      species: speciesIds,
      priceMin,
      priceMax,
    });
    setSort({ sort, sortType });
  }, [searchParams, categoriesData, navigate, species]);

  // Category tabs handler
  const handleTabChange = (_event: SyntheticEvent, newValue: string) => {
    const updatedQuery = updateSearchParams({
      searchParams,
      searchType: 'category',
      category: newValue,
    });
    navigate(updatedQuery);
  };

  // Update page in URL search params on page change
  const handlePageChange = (_event: ChangeEvent<unknown>, newPage: number) => {
    const updatedQuery = updateSearchParams({
      searchParams,
      searchType: 'pagination',
      page: newPage,
    });
    navigate(updatedQuery);
  };

  const handleAddNotice = () => {
    if (!user) {
      setAlertIsOpened(true);
      return;
    }

    navigate(ROUTES.noticeForm);
  };

  return (
    <>
      <Section bgcolor="background.secondary">
        <Typography variant="h2" textAlign="center" mb={5}>
          Our friends who are
          <br />
          looking for a home
        </Typography>

        {categoriesData && activeCategory && (
          <>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              flexDirection={{ xs: 'column', sm: 'row' }}
              gap={2}
              sx={{ mb: 2 }}
            >
              {/* Category tabs */}
              <CategoryTabs
                activeTab={activeCategory}
                handleTabChange={handleTabChange}
                categories={categoriesData}
              />

              <Box display="flex" gap={2} alignContent="center">
                <Tooltip title="Add new notice">
                  <IconButton
                    onClick={handleAddNotice}
                    sx={addNoticeButtonStyles}
                  >
                    <AddIcon color="secondary" />
                  </IconButton>
                </Tooltip>

                <SortMenu activeCategory={activeCategory} />

                <Tooltip title="Filter">
                  <IconButton
                    onClick={toggleDrawer}
                    sx={{ width: 40, height: 40 }}
                  >
                    <FilterAltIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {/* Notices list */}
            {noticesData?.data && noticesData?.data.length > 0 && (
              <PetList notices={noticesData?.data} />
            )}

            {/* Pagination */}
            {noticesData && totalPages > FIRST_PAGE && (
              <CustomPagination
                count={totalPages}
                currentPage={page}
                handleChange={handlePageChange}
              />
            )}
          </>
        )}
      </Section>

      <Loader open={isLoading} />

      <AlertDialog
        open={alertIsOpened}
        onConfirm={() => {
          setAlertIsOpened(false);
          navigate(ROUTES.login);
        }}
        onCancel={() => setAlertIsOpened(false)}
        title={`Please, log in to add new notice. Go to log in page" ?`}
      />

      <FilterDrawer open={filterOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Notices;
