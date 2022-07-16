import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = ({ todoLists }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        ></link>
      </Head>

      <main>
        <div>
          <h1>Todo Lists</h1>
          <div>
            {todoLists.map((todoList) => (
              <div key={todoList.id}>
                <h2>{todoList.name}</h2>
                <ul>
                  {todoList.tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/todo_lists.json");
  const data = await response.json();

  return { props: { todoLists: data } };
};