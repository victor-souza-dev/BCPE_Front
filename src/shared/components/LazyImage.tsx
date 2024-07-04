import { Skeleton } from "@mui/material";

import { LazyLoading } from "./LazyLoading";

interface ILazyImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeleton?: () => React.ReactElement;
}

const LazyImage = (props: ILazyImage) => {
  const { skeleton } = props;

  let customSkeleton = () => (
    <Skeleton
      variant="rounded"
      width={props.width}
      height={100}
      sx={{ p: "0px !important", m: 0 }}
    />
  );

  if (skeleton) customSkeleton = skeleton;

  return (
    <LazyLoading skeleton={customSkeleton}>
      {() => <img {...props} loading="lazy" />}
    </LazyLoading>
  );
};

export default LazyImage;
