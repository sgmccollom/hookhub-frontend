function addCookie(documentStore, unique_string) {
  documentStore.cookie += `unique_string=${unique_string};max-age=360`;
}

function findCookieBins(documentStore, binData) {
  const cookieUniqueStrings = documentStore.cookie.split(/;|unique_string=/);
  return binData.filter(bin => cookieUniqueStrings.includes(bin.unique_string));
}

export { addCookie, findCookieBins };