import Link from "next/link";
import Layout from "../../components/Layout";
import { useFetch } from "../../utils/api";

const Pipelines = () => {
  const { data } = useFetch("pipeline");

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>Pipelines</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.keys(data).map((p, i) => {
            return (
              <li key={i}>
                <Link href={`/pipeline/${p}`}>
                  <a>{data[p].name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
};

export default Pipelines;
