import Image from "next/image";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  return (
    <p className="error-alert">
      <Image src="/info.svg" alt="Error icon" width={15} height={15} />
      {message}
    </p>
  );
};

export default ErrorAlert;
