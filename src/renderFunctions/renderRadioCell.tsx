import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { AvatarAndText } from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { get } from 'lodash';
import { Grid, GridProps } from '@mui/material';
import { Field, FieldAttributes, Formik, FormikConfig } from 'formik';
import RadioButton from 'src/components/atoms/RadioButton/RadioButton';

interface RenderRadioCellAvatarAndTextProps {
  avatarAndTextProps: AvatarAndTextProps;
  cellOptions: {
    subtitlePath?: string;
    fieldAttributes?: FieldAttributes<any>;
    containerGridItemProps?: GridProps;
    fieldGridItemProps?: GridProps;
    avatarAndTextGridItemProps?: GridProps;
    formikProps?: FormikConfig<any>;
  };
  params: GridRenderCellParams<any, any, any>;
}

const RenderRadioCell = ({
  avatarAndTextProps,
  cellOptions,
  params
}: RenderRadioCellAvatarAndTextProps) => {
  const {
    fieldAttributes,
    subtitlePath,
    containerGridItemProps,
    fieldGridItemProps,
    avatarAndTextGridItemProps,
    formikProps
  } = cellOptions || {};
  const title = params.value;
  const subtitle = subtitlePath ? get(params.row, subtitlePath) : '';
  return (
    <Formik {...formikProps!}>
      <Grid
        container
        alignItems={'center'}
        spacing={1}
        {...containerGridItemProps}
      >
        <Grid item {...fieldGridItemProps}>
          <Field component={RadioButton} {...fieldAttributes} />
        </Grid>
        <Grid item {...avatarAndTextGridItemProps}>
          <AvatarAndText
            title={title}
            subtitle={subtitle}
            {...avatarAndTextProps}
          />
        </Grid>
      </Grid>
    </Formik>
  );
};

interface RenderRadioCellProps {
  avatarAndTextProps?: AvatarAndTextProps;
  cellOptions?: {
    subtitlePath?: string;
    fieldAttributes?: FieldAttributes<any>;
    containerGridItemProps?: GridProps;
    fieldGridItemProps?: GridProps;
    avatarAndTextGridItemProps?: GridProps;
    formikProps?: FormikConfig<any>;
  };
}
const renderRadioCell = ({
  avatarAndTextProps,
  cellOptions
}: RenderRadioCellProps = {}): Partial<GridColDef<any>> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return (
        <RenderRadioCell
          avatarAndTextProps={avatarAndTextProps!}
          cellOptions={cellOptions!}
          params={params}
        />
      );
    }
  };
};

export default renderRadioCell;
