// Returns true if the string is a valid URL, false otherwise
// Source: https://stackoverflow.com/a/49849482
export const isValidURL = (str: string) => {
  let res = str.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  );
  return res !== null;
};

// Note it won't catch URLs without protocol, so one must ensure to include it
// Source: https://stackoverflow.com/a/5717133
/*
export const isStringAUrl = (str: string): boolean => {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}
*/
