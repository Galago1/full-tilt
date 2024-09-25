import yup from '../..';

jest.mock('yup', () => ({
  ...jest.requireActual('yup')
}));

describe('yup', () => {
  describe('phone()', () => {
    const testSchema = yup.string().phone('');
    it('success validation', async () => {
      const isValid = await testSchema.isValid('(623) 522-6265');

      expect(isValid).toBe(true);
    });

    it('failure validation', async () => {
      const isValid = await testSchema.isValid('623522626');

      expect(isValid).toBe(false);
    });
  });
});
