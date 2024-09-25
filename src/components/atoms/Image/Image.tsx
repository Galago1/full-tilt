import { Grid, GridProps } from '@mui/material';
import { CSSProperties } from '@mui/styles';

export interface ImageProps {
  alt?: string;
  onLoadingComplete?: () => void;
  width?: any;
  height?: any;
  style?: CSSProperties;
  src?: string;
  withGrid?: boolean;
  boxProps?: GridProps;
}

export const Image = ({
  onLoadingComplete,
  withGrid,
  boxProps,
  ...props
}: ImageProps) => {
  /*eslint-disable */
  if (withGrid) {
    return (
      <Grid {...boxProps}>
        <img onLoad={onLoadingComplete} {...(props as any)} />
      </Grid>
    );
  }
  return <img onLoad={onLoadingComplete} {...(props as any)} />;
  /*eslint-enable */
};
export default Image;
