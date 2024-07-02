/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Checkbox,
  FormLabel,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { inputStyles } from './styles';

interface CheckboxGroupProps {
  name: string;
  label?: string;
  placeholder?: string;
  control: Control<any>;
  options: SelectOption[];
  withSearch?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  label,
  placeholder = 'Search',
  withSearch = false,
  options,
  control,
}) => {
  const [search, setSearch] = useState('');

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {label && (
        <Typography variant="subtitle1" fontWeight={600} mb={1}>
          {label}
        </Typography>
      )}

      {withSearch && (
        <TextField
          placeholder={placeholder}
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          fullWidth
          sx={inputStyles}
        />
      )}

      <List disablePadding>
        {filteredOptions.map(({ value, label }) => (
          <ListItem key={value} disablePadding>
            <FormLabel sx={{ width: '100%' }}>
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    value={value}
                    checked={
                      Array.isArray(field.value)
                        ? field.value.includes(value)
                        : false
                    }
                    onChange={e => {
                      const newValue = e.target.checked
                        ? [...(field.value || []), value]
                        : field.value.filter((v: string) => v !== value);
                      field.onChange(newValue);
                    }}
                    sx={{ p: 0.5 }}
                  />
                )}
              />
              {label}
            </FormLabel>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CheckboxGroup;
