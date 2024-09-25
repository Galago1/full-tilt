import { FieldAttributes } from 'formik';
import { CardActionsProps } from '../../../components/molecules/Card/CardActions/CardActions';

type CardActionsType = 'buttons' | 'search' | 'buttonGroup' | 'none';

export interface UseCardSectionFooterProps extends CardActionsProps {
  /**
   * The type of card header
   * @default 'none'
   * @optional 'buttons', 'search', 'buttonGroup'
   *
   */
  type?: CardActionsType;
  /**
   * Use The supporting text
   */
  supportingText?: boolean;
  /**
   * The field attributes
   */
  fieldAttributes?: FieldAttributes<any>;
}

const useCardSectionFooterProps = ({
  supportingText = false,
  type = 'none',
  fieldAttributes,
  ...props
}: UseCardSectionFooterProps): CardActionsProps => {
  return {
    ...props,
    slots: {}
  };
};

export default useCardSectionFooterProps;
