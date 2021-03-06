/* eslint-disable no-console */
export const REACTPATH = {
  Basic: "/basic1",
  Axios: "/axios2",
  Redux: "/redux3",
  Website: "/document",
  Notices: "/fisNotices",
  Newsletters: "/fisNewsletters",
  Calendar: "/fisCalendar",
  Weather: "/weather",
  Rm14newsletters: "/14newsletters",
};

export const REDUXPATH = {
  LikedVideos: "/LikedVideos2",
  PlayedVideos: "/PlayedVideos5",
  SearchVideos: "/SearchVideos3",
};

export const myLog = (var1, var2, var3) => {
  console.log(var1, var2, var3);
};

export const lastPath = (prefix = "/") =>
  prefix + document.location.pathname.split("/").slice(-1)[0];
