import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';

export const PaginationRounded = ({ count, page, onChange }) => {
  return (
    <Stack spacing={2} >
      <Box className="justify-between flex items-center">
        <Button
          variant="contained"
          onClick={() => onChange(null, Math.max(page - 1, 1))}
          disabled={page === 1}
          className="hover:bg-red-600"
        >
          Previous
        </Button>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              components={{ previous: () => null, next: () => null }}
              className="mx-5 flex gap-10"
            />
          )}
        />
        <Button
          variant="contained"
          onClick={() => onChange(null, Math.min(page + 1, count))}
          disabled={page === count}
          className="hover:bg-red-600"
        >
          Next
        </Button>
      </Box>
    </Stack>
  );
};