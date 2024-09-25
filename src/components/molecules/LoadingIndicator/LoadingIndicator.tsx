import CircularProgressIndicator, {
  CircularProgressIndicatorProps,
  CircularProgressIndicatorSize
} from '../CircularProgressIndicator/CircularProgressIndicator';

export interface LoadingIndicatorProps extends CircularProgressIndicatorProps {
  /**
   * The optional label
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const LoadingIndicator = ({
  label,
  size = CircularProgressIndicatorSize.XSMALL,
  ...props
}: LoadingIndicatorProps) => {
  const value = 100;
  return (
    <CircularProgressIndicator
      {...props}
      hideValue={true}
      size={size}
      variant="indeterminate"
      value={value}
      label={label}
    />
  );
};
export default LoadingIndicator;
