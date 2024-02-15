import { useParams } from "react-router-dom";

export default function Results() {
  const { name } = useParams();
  return <div>No results for {name}!</div>;
}