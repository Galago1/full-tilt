import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import { FieldProps } from 'formik';
import {
  FiveSelectCircle,
  FiveSelectCircleContainer,
  FiveSelectCircleWrapper,
  FiveSelectContainer,
  FiveSelectLabel,
  FiveSelectLabelContainer,
  FiveSelectLine,
  FiveSelectSelectedInnerCircle,
  FiveSelectSelectedOuterCircle
} from './helpers';

const defaultIconMap = {
  1: <CheckIcon sx={{ color: '#fff', fontSize: 'clamp(16px, 4vw, 32px)' }} />,
  2: <CheckIcon sx={{ color: '#fff', fontSize: 'clamp(16px, 4vw, 32px)' }} />,
  3: <CheckIcon sx={{ color: '#fff', fontSize: 'clamp(16px, 4vw, 32px)' }} />,
  4: <CheckIcon sx={{ color: '#fff', fontSize: 'clamp(16px, 4vw, 32px)' }} />,
  5: <CheckIcon sx={{ color: '#fff', fontSize: 'clamp(16px, 4vw, 32px)' }} />
};

export interface FiveSelectProps extends FieldProps {
  labels: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  iconMap?: {
    1: React.ReactNode;
    2: React.ReactNode;
    3: React.ReactNode;
    4: React.ReactNode;
    5: React.ReactNode;
  };
}

const FiveSelect = ({
  labels,
  field,
  form,
  iconMap = defaultIconMap
}: FiveSelectProps) => {
  const selected = field.value;
  const setSelected = form.setFieldValue;

  return (
    <FiveSelectContainer>
      <FiveSelectCircleContainer>
        <FiveSelectLine />
        {Object.keys(labels).map((key) => (
          <FiveSelectCircleWrapper key={key}>
            <IconButton
              onClick={() => setSelected(field.name, parseInt(key))}
              sx={{
                padding: 0,
                width: 'auto',
                height: 'auto'
              }}
            >
              {selected === parseInt(key) ? (
                <FiveSelectSelectedOuterCircle>
                  <FiveSelectSelectedInnerCircle>
                    {iconMap[key as unknown as keyof typeof iconMap]}
                  </FiveSelectSelectedInnerCircle>
                </FiveSelectSelectedOuterCircle>
              ) : (
                <FiveSelectCircle
                  sx={{
                    '&': { color: 'red' }
                  }}
                />
              )}
            </IconButton>
          </FiveSelectCircleWrapper>
        ))}
      </FiveSelectCircleContainer>
      <FiveSelectLabelContainer>
        {Object.keys(labels).map((key) => (
          <FiveSelectLabel key={key} variant="caption">
            {labels[key as unknown as keyof typeof labels]}
          </FiveSelectLabel>
        ))}
      </FiveSelectLabelContainer>
    </FiveSelectContainer>
  );
};

export default FiveSelect;
