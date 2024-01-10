export function slugify(str) {
  str = str.toLowerCase();
  str = str.replace(/[\s\W]+/g, "-");
  str = str.replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes

  return str;
}

export default slugify;
