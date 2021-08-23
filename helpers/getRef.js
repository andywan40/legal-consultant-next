export const getRef = issueref => {
  const parts = issueref.split(" ");
  const first =
    parts[0].split("-").length === 2
      ? `${parts[0].split("-")[0]}之${parts[0].split("-")[1]}`
      : parts[0];
  if (parts.length === 1) {
    return `第${first}條`;
  } else if (parts.length === 2) {
    if (parts[0].indexOf("-") === -1) {
      //第幾條第幾項
      return `第${first}條第${parts[1]}項`;
    } else {
      //第幾之幾條;
      return `第${first}條第${parts[1]}項`;
    }
  } else if (parts.length === 3) {
    //第幾條第幾項第幾款
    return `第${first}條第${parts[1]}項第${parts[2]}款`;
  }
};
