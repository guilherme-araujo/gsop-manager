import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useFetch } from "../../utils/api";

const Simulation = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useFetch(`simulation/id/${id}`);
  console.log(data);

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/simulation">Simulations</Link>
      <h1>This is Simulation {id}</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {data.name} </p>
          <p>Descriptions: {data.descr} </p>
          <p>Pipeline: {data.pipeline} </p>
          <p>Parameters: {Object.keys(data.parameters).length} </p>
          <p>Status: {data.status} </p>
          <button>Start now</button>
          <p>Results: None yet</p>
        </>
      )}
    </Layout>
  );
};

export default Simulation;
