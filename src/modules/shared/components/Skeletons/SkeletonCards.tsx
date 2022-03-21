import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";

const SkeletonCards = ({ length }: { length?: number }) => {
  const theme = useTheme();
  let len = new Array(length || 8).fill(undefined);
  return (
    <Grid container mt={1} spacing={2}>
      {len.map((el, i) => (
        <Grid key={`skeleton-card-${i}`} item xs={12} sm={6} md={4} lg={3}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={400}
            sx={{ borderRadius: theme.shape.borderRadius }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonCards;
