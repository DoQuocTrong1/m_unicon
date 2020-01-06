const validators: any = {
    required: (value: any) => (value ? undefined : 'Required'),
    maxLength: (max: number) => (value: string | any[]) => (value && value.length > max ? `Must be ${max} characters or less` : undefined),
    minLength: (min: number) => (value: string | any[]) => (value && value.length < min ? `Must be ${min} characters or more` : undefined),
    email: (value: string) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined),
    alphaNumeric: (value: string) => (value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined),
};

export default validators;
