export default function CurrentAnswer({ currentAnswer }) {
  return currentAnswer && <p>{"> " + currentAnswer.value}</p>;
}
