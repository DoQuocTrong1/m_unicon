const validators = {
    required: (value) => (value ? undefined : 'Required'),
    maxLength: (max) => (value) => (value && value.length > max ? `Must be ${max} characters or less` : undefined),
    minLength: (min) => (value) => (value && value.length < min ? `Must be ${min} characters or more` : undefined),
    email: (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined),
    alphaNumeric: (value) => (value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined),
};
export default validators;
//# sourceMappingURL=index.js.map