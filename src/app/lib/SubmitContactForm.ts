import { SubmissionStatus } from '@/types';
import emailjs from '@emailjs/browser';

export const submitContactForm = async (
  name: string,
  email: string,
  message: string,
): Promise<SubmissionStatus> => {
  let result: SubmissionStatus = SubmissionStatus.IDLE;

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  try {
    const { status, text } = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey,
    );

    if (status === 200) {
      result = SubmissionStatus.SUCCESS;
    } else {
      result = SubmissionStatus.ERROR;
    }
  } catch (error) {
    console.log({ error });
    result = SubmissionStatus.ERROR;
  }

  return result;
};
