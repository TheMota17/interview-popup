export default {
  data: () => ({
    moneyMask: {
      decimal: ",",
      thousands: " ",
      prefix: "",
      suffix: " ₽",
      precision: 0,
      masked: false,
      disableNegative: false,
      disabled: false,
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER,
      allowBlank: true,
      minimumNumberOfCharacters: 0
    }
  })
};
