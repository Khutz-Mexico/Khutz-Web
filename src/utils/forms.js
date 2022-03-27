export const validateFormSubmission = (fields = [], formData, t) => {
  let error;

  fields.forEach((field) => {
    if (error) return;
    const value = formData[field.code];
    if (field.isRequired && !value) {
      error = `${t('contactScreen.enterAValue')} ${field.label}`;
    }
  });

  return error;
};
