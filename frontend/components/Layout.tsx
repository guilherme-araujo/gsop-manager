import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Graph Simulator of Populations - Manager",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/userarea">
          <a>User area</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>All rights reserved. 2021 Guilherme Fernandes de Araújo</span>
    </footer>
  </div>
);

export default Layout;
