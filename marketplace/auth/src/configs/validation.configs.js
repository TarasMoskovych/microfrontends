export const VALIDATION_CONFIGS = {
  firstName: {
    required: {
      value: true,
      message: 'Please enter first name.',
    },
  },
  lastName: {
    required: {
      value: true,
      message: 'Please enter last name.',
    },
  },
  email: {
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email.',
    },
  },
  password: {
    pattern: {
      value: '^[a-zA-Z0-9*-_]{6,}$',
      message: 'Please enter a valid password.',
    },
  },
};
