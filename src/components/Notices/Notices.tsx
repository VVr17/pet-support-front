import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useCategories } from '@/hooks/useQuery/useCategories';
import { useNotices } from '@/hooks/useQuery/useNotices';
import { useUserStore } from '@/store/useUserStore';
import { FIRST_PAGE, LIMIT_PER_PAGE } from '@/utils/constants/notices';
import { ROUTES } from '@/utils/constants/routes';

import PetList from '../Pets/PetList';
import Section from '../Section';
import AlertDialog from '../ui-kit/AlertDialog';
import Loader from '../ui-kit/Loader';
import CustomPagination from '../ui-kit/Pagination';
import CategoryTabs from './components/CategoryTabs';
import { addNoticeButtonStyles } from './styles';

const Notices = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  const { data: categoriesData, isLoading: isCategoryLoading } =
    useCategories();

  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [page, setPage] = useState(FIRST_PAGE);
  const [alertIsOpened, setAlertIsOpened] = useState(false);

  const { data: noticesData, isLoading: isNoticeLoading } = useNotices({
    categoryId: activeTab,
    page,
    limit: LIMIT_PER_PAGE,
  });
  const isLoading = isCategoryLoading || isNoticeLoading;

  const totalPages = noticesData?.total
    ? Math.ceil(noticesData?.total / LIMIT_PER_PAGE)
    : FIRST_PAGE;

  // Set the first tab after categories fetched
  useEffect(() => {
    if (!activeTab && categoriesData) {
      setActiveTab(categoriesData[1].id);
    }
  }, [activeTab, categoriesData]);

  // Category tabs handler
  const handleTabChange = (_event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    setPage(FIRST_PAGE);
  };

  // Page handler
  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
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

        {categoriesData && activeTab && (
          <>
            <Box width="100%" display="flex" justifyContent="space-between">
              {/* Category tabs */}
              <CategoryTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                categories={categoriesData}
              />

              <Tooltip title="Add new notice">
                <IconButton
                  onClick={handleAddNotice}
                  sx={addNoticeButtonStyles}
                >
                  <AddIcon color="secondary" />
                </IconButton>
              </Tooltip>
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
    </>
  );
};

export default Notices;
