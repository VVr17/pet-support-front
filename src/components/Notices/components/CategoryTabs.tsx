import { Tab, Tabs } from '@mui/material';
import { SyntheticEvent } from 'react';

interface ICategoryTabsPRops {
  categories: Category[];
  activeTab: string;
  handleTabChange: (_event: SyntheticEvent, newValue: string) => void;
}

const CategoryTabs: React.FC<ICategoryTabsPRops> = ({
  categories,
  activeTab,
  handleTabChange,
}) => {
  return (
    <Tabs
      value={activeTab}
      onChange={handleTabChange}
      textColor="secondary"
      indicatorColor="secondary"
      scrollButtons="auto"
      aria-label="category tabs"
      variant="scrollable"
    >
      {categories.map(category => (
        <Tab key={category.id} value={category.slug} label={category.titleEn} />
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
