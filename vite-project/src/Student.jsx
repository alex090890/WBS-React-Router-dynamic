import { useParams } from "react-router-dom";

export default function Student() {
  const { id } = useParams();
  return <div>Hello {id}!</div>;
}