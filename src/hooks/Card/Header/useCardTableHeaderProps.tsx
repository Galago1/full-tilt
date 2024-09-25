import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { CardHeaderProps } from '../../../components/molecules/Card/CardHeader/CardHeader';
import { Field, FieldAttributes } from 'formik';

interface DefaultSearchTypeProps {
  fieldAttributes: FieldAttributes<any>;
}

const defaultSearchType = ({ fieldAttributes }: DefaultSearchTypeProps) => {
  return <Field {...fieldAttributes} />;
};

interface DetermineChildrenProps {
  type: CardHeaderType;
  fieldAttributes?: FieldAttributes<any>;
  props: CardHeaderProps;
}

const determineChildren = ({
  type,
  props,
  fieldAttributes
}: DetermineChildrenProps) => {
  if (props.slots?.avatarAndTextProps?.children)
    return props.slots?.avatarAndTextProps?.children;
  if (type === 'search') {
    return defaultSearchType({ fieldAttributes });
  }
};

const avatarAndTextProps: AvatarAndTextProps = {
  titleTypography: { variant: 'textLgSemibold' },
  subtitleTypography: { variant: 'textMdRegular', color: 'text.secondary' },
  textGridItemProps: { xs: 12, sm: 6, md: 6 },
  childrenGridProps: { xs: 12, sm: 6, md: 6 }
};

// const styles = {};

type CardHeaderType = 'buttons' | 'search' | 'buttonGroup' | 'none';

export interface UseCardTableHeaderPropsProps extends CardHeaderProps {
  /**
   * The type of card header
   * @default 'none'
   * @optional 'buttons', 'search', 'buttonGroup'
   *
   */
  type?: CardHeaderType;
  /**
   * Use The supporting text
   */
  supportingText?: boolean;
  /**
   * The field attributes
   */
  fieldAttributes?: FieldAttributes<any>;
}

const useCardTableHeaderProps = ({
  supportingText = false,
  type = 'none',
  fieldAttributes,
  ...props
}: UseCardTableHeaderPropsProps): CardHeaderProps => {
  const children = determineChildren({ type, props, fieldAttributes });

  return {
    ...props,
    slots: {
      avatarAndTextProps: {
        ...avatarAndTextProps,
        ...props.slots?.avatarAndTextProps,
        subtitle: supportingText
          ? props.slots?.avatarAndTextProps?.subtitle
          : '',
        childrenGridProps: {
          ...(props.slots?.avatarAndTextProps?.childrenGridProps ??
            avatarAndTextProps.childrenGridProps)
        },
        children
      }
    }
    // children: defaultSearchType({ fieldAttributes: props.fieldAttributes })
  };
};

export default useCardTableHeaderProps;
