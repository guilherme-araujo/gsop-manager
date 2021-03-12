import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useFetch } from "../../utils/api";

const Program = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useFetch(`program/id/${id}`);

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/program">Programs</Link>
      <h1>This is Program {id}</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {data.name} </p>
          <p>Description: {data.descr} </p>
          <p>Filesystem path: {data.binaryPath} </p>
        </>
      )}
    </Layout>
  );
};

export default Program;
