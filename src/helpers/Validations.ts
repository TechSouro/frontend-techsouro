export const isBlank = (str: string) => !str || /^\s*$/.test(str);

export const containsEth = (str: string) => {
  return str.includes(".eth");
};

export const containsLens = (str: string) => {
  return str.includes(".lens");
};

export const ownsEthOrLens = (resp: any) => {
  if (resp.total == 0) return false;
  let b = false;
  resp.result.forEach((e: any) => {
    if (e.platform == "Lens" || e.platform.includes("ETH")) {
      b = true;
    }
  });
  return b;
};

export const validateUsername = async (value: string) => {
  let error = "";
  if (!value) {
    error = "The username cannot be blank.";
  } else if (["ETH", "LENS", "ADMIN"].includes(value)) {
    error = "Choose another username.";
  }
  return error;
};
