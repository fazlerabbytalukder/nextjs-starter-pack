const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

const ApiPath = {
  baseURL,

  //global path
  setting: (settingsKey) => `/get-settings?key=${settingsKey}`,
  allSettings: `/get-settings`,

  //authentication path
  login: `/auth/agent/login`,
  register: `/auth/agent/register`,

  //dashboard path
  dashboard: `/dashboard`,
};

export default ApiPath;
