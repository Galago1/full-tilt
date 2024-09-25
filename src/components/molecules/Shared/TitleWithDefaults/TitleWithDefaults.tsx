import AvatarAndText from '../../AvatarAndText';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';

const defaultMyAuto = (props: any) => {
  return {
    ...props,
    sx: {
      ...props.sx,
      my: props.sx?.my || 'auto'
    },
    textSx: {
      ...props.textSx,
      my: props.textSx?.my || 'auto'
    }
  };
};

export interface TitleWithDefaultsProps extends AvatarAndTextProps {}

const TitleWithDefaults = ({ ...props }: TitleWithDefaultsProps) => {
  const finalProps: AvatarAndTextProps = defaultMyAuto(props);
  return <AvatarAndText {...finalProps} />;
};

export default TitleWithDefaults;
