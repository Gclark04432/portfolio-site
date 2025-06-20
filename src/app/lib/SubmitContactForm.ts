import emailjs from '@emailjs/browser';

export const submitContactForm = async (
  name: string,
  email: string,
  message: string,
): Promise<{ status: string; error: string }> => {
  const result = { status: '', error: '' };

  const serviceId = process.env.SERVICE_ID as string;
  const templateId = process.env.TEMPLATE_ID as string;
  const publicKey = process.env.PUBLIC_KEY as string;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  try {
    const { status } = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey,
    );

    if (status === 200) {
      result.status = 'success';
    } else {
      result.status = 'error';
      result.error = 'Unknown status response received';
    }
  } catch (error) {
    result.status = 'error';
    result.error = (error as Error).message;
  }

  return result;
};
