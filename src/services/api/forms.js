import axios from 'utils/axios';

export const getFormFields = (formCode) =>
  axios.get(`/api/forms/${encodeURIComponent(formCode)}/fields`);

export const createFormSubmission = (formCode, data) =>
  axios.post(`/api/forms/${encodeURIComponent(formCode)}/submissions`, {
    data,
  });
