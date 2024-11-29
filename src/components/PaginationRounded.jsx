import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';

export const PaginationRounded = () => {
  const [page, setPage] = React.useState(1);
  const count = 10;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={3} alignItems="center">
      <Box display="flex" alignItems="center" justifyContent="between">
        <Button
          variant="contained"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              components={{ previous: () => null, next: () => null }}
            />
          )}
        />
        <Button
          variant="contained"
          onClick={() => setPage((prev) => Math.min(prev + 1, count))}
          disabled={page === count}
        >
          Next
        </Button>
      </Box>
    </Stack>
  );
};