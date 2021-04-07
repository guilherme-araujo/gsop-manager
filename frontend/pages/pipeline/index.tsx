import Link from 'next/link';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { useFetch } from '../../utils/api';

const Pipelines = () => {
  const { data } = useFetch("pipeline");

  return (
    <Layout title="User Area | GSOP Manager">
      <Header title={"Pipelines"} href={""} link={""}/>
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
      <Link href="/pipeline/new">
        <a>New pipeline</a>
      </Link>
    </Layout>
  );
};

export default Pipelines;
