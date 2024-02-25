import { Button } from '@mui/material';

export default function LoadButton({ onLoadMore }) {
  return (
    <Button variant="contained" onClick={onLoadMore}>
      Load More
    </Button>
  );
}
