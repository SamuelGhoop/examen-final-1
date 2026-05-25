interface Props {
  message: string;
  onRetry: () => void;
}
//No sé porque el otro murió
function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onRetry}>Reintentar</button> 
    </div>
  );
}
export default ErrorMessage;