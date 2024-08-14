const URLS = {
  AUTH_DUMMY: process.env.DATA_DUMMY,
  AUTH: process.env.AUTH,
};
export const CONFIG_URLS = {
  POSTS: [],
  GETS: [URLS.AUTH_DUMMY],
};
export default URLS;
