import CheckIcon from '@mui/icons-material/Check';
import SortIcon from '@mui/icons-material/Sort';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { retrieveSearchParams } from '@/helpers/searchParams/retrieveSearchParams';
import { updateSearchParams } from '@/helpers/searchParams/updateSearchParams';
import { getSortTypes } from '@/utils/getSortTypes';

interface ISortMenuProps {
  activeCategory: string;
}
const SortMenu: React.FC<ISortMenuProps> = ({ activeCategory }) => {
  const sortTypes = getSortTypes(activeCategory);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);

  const [currentSort, setCurrentSort] = useState<Sort>({
    sort: '',
    sortType: 'DESC',
  });

  // Gets search params from URL and updates products according to search params
  useEffect(() => {
    const search = retrieveSearchParams(searchParams);
    const sort = search.sort as unknown as string;
    const sortType = search.sortType as unknown as SortType;

    setCurrentSort({ sort, sortType });
  }, [searchParams]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElMenu(null);
  };

  const handleSort = (id: number) => {
    const dataToUpdate = sortTypes.find(type => type.id === id);

    if (dataToUpdate) {
      const updatedQuery = updateSearchParams({
        searchParams,
        searchType: 'sort',
        dataToUpdate,
      });

      handleCloseUserMenu();
      navigate(updatedQuery);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'fit-content',
      }}
    >
      <Tooltip title="Open sort menu">
        <IconButton
          aria-label="sort menu"
          onClick={handleOpenUserMenu}
          sx={{ width: 40, height: 40 }}
        >
          <SortIcon color="secondary" />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseUserMenu}
      >
        {sortTypes.map(({ id, label, sort, sortType }) => (
          <MenuItem
            key={id}
            onClick={() => handleSort(id)}
            sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}
          >
            <Typography
              color={
                currentSort.sort === sort && currentSort.sortType === sortType
                  ? 'secondary'
                  : 'text.primary'
              }
            >
              {label}
            </Typography>
            <CheckIcon
              sx={{
                opacity:
                  currentSort.sort === sort && currentSort.sortType === sortType
                    ? 1
                    : 0,
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SortMenu;
