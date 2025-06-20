interface UseContactValidationProps {
  name: string;
  email: string;
  message: string;
}

interface UseContactValidationReturn {
  isValid: boolean;
  errors: { [key: string]: string };
}

export const UseContactValidation = ({
  name,
  email,
  message,
}: UseContactValidationProps): UseContactValidationReturn => {
  const newErrors: { [key: string]: string } = {};
  let isValid: boolean = false;

  const isNameValid = (): boolean => {
    return name.trim().length > 1;
  };

  const isEmailValid = (): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isMessageValid = (): boolean => {
    return message.trim().length >= 10;
  };

  if (isNameValid() && isEmailValid() && isMessageValid()) isValid = true;
  else {
    if (!isNameValid()) newErrors.name = 'Name is required';
    if (!isEmailValid()) newErrors.email = 'Please enter a valid email';
    if (!isMessageValid())
      newErrors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: isValid,
    errors: newErrors,
  };
};
