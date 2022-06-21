import { useState } from 'react';

export const useForm = (options) => {
  const [data, setData] = useState((options?.initialValues || {}));
  const [errors, setErrors] = useState({});

  const validate = (key) => {
    const validations = options?.validations;
    const newErrors = {};

    if (!validations) {
      return {};
    }

    const validation = validations[key];

    if (validation) {
      const value = data[key];

      if (validation?.required?.value && !value) {
        newErrors[key] = validation?.required?.message;
      }

      const pattern = validation?.pattern;

      if (pattern?.value && !RegExp(pattern.value).test(value)) {
        newErrors[key] = pattern.message;
      }

      const custom = validation?.custom;

      if (custom?.isValid && !custom.isValid(value)) {
        newErrors[key] = custom.message;
      }
    }

    return newErrors;
  };

  const isFormValid = () => {
    const validations = options?.validations;
    let newErrors = {};

    if (validations) {
      for (const key in validations) {
        newErrors = { ...newErrors, ...validate(key) };
      }

      setErrors(newErrors);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (key) => (e, sanitizeFn) => {
    const { value: targetValue, checked, type } = e.target;
    let value = sanitizeFn && typeof sanitizeFn === 'function' ? sanitizeFn(targetValue) : targetValue;

    if (type === 'checkbox') {
      value = checked;
    }

    setErrors({ ...errors, [key]: false });
    setData({ ...data, [key]: value });
  };

  const handleBlur = (key) => () => {
    setErrors({ ...errors, ...validate(key) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    if (isFormValid() && options?.onSubmit) {
      options.onSubmit(data);
    }
  };

  const resetForm = () => {
    setData(options.initialValues);
  };

  return {
    data,
    errors,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
