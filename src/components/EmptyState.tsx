interface Props {
  message: string;
}
function EmptyState({ message }: Props) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
export default EmptyState;