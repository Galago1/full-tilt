import isSubmitDisabled from '../isSubmitDisabled';

describe('isSubmitDisabled()', () => {
  const defaultProps = {
    isSubmitting: false,
    dirty: false,
    isValid: false,
  };

  it('when form pristine', () => {
    expect(isSubmitDisabled(defaultProps)).toEqual(true);
  });

  it('when valid and dirty', () => {
    const props = {
      ...defaultProps,
      dirty: true,
      isValid: true,
    };

    expect(isSubmitDisabled(props)).toEqual(false);
  });

  it('when valid and dirty but submitting', () => {
    const props = {
      isSubmitting: true,
      dirty: true,
      isValid: true,
    };

    expect(isSubmitDisabled(props)).toEqual(true);
  });

  it('when dirty but not valid', () => {
    const props = {
      ...defaultProps,
      dirty: true,
    };

    expect(isSubmitDisabled(props)).toEqual(true);
  });

  it('when valid but not dirty', () => {
    const props = {
      ...defaultProps,
      isValid: true,
    };

    expect(isSubmitDisabled(props)).toEqual(true);
  });
});
