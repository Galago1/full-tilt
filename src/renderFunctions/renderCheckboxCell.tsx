import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { AvatarAndText } from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { get } from 'lodash';
import { Grid, GridProps } from '@mui/material';
import Checkbox from 'src/components/atoms/Checkbox';
import { Field, FieldAttributes, Formik, FormikConfig } from 'formik';

interface RenderCheckboxCellAvatarAndTextProps {
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

const RenderCheckboxCell = ({
  avatarAndTextProps,
  cellOptions,
  params
}: RenderCheckboxCellAvatarAndTextProps) => {
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
      <Grid container alignItems={'center'} {...containerGridItemProps}>
        <Grid item {...fieldGridItemProps}>
          <Field component={Checkbox} {...fieldAttributes} />
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

interface RenderCheckboxCellProps {
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
const renderCheckboxCell = ({
  avatarAndTextProps,
  cellOptions
}: RenderCheckboxCellProps = {}): Partial<GridColDef<any>> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return (
        <RenderCheckboxCell
          avatarAndTextProps={avatarAndTextProps!}
          cellOptions={cellOptions!}
          params={params}
        />
      );
    }
  };
};

export default renderCheckboxCell;
