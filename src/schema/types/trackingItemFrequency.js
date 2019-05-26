const values = {
  DAILY: {
    value: 0,
  },
  WEEKLY: {
    value: 1,
  },
  BIWEEKLY: {
    value: 2,
  },
  MONTHLY: {
    value: 3,
  },
  ANNUALLY: {
    value: 4,
  },
};

const FrequencyEnumType = {
  name: 'FrequencyEnumType',
  values,
};

const FrequencyCreateInputEnumType = {
  name: 'FrequencyCreateInputEnumType',
  values,
};

const FrequencyEditInputEnumType = {
  name: 'FrequencyEditInputEnumType',
  values,
};

export { FrequencyEnumType, FrequencyCreateInputEnumType, FrequencyEditInputEnumType };
