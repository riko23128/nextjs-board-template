import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const post = async () => {
    setData("名前: " + name + " / メッセージ: " + message);
    setName("");
    setMessage("");
  };

  return (
    <>
      <Head>
        <title>Next.js Board</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <p>
<div>
  <p>
	  名前:
	  <br />
	  <input
	    type="text"
	    value={name}
	    onChange={(e) => setName(e.target.value)}
	  />
  </p>
  <p>
	  内容:
	  <br />
	  <textarea
	   value={message}
	    onChange={(e) => setMessage(e.target.value)}
	  ></textarea>
  </p>
  <p>
	  <button onClick={post}>投稿</button>
  </p>
</div>
<hr />
<div>{data}</div>
</p>
      </main>
    </>
  );
}
