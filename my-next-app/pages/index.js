import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import HomeComponent from "../components/HomeComponent";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", "i am the user");
    }
  }, []);
  return (
    <div>
      my next app
      <div></div>
      <div>
        <HomeComponent />
      </div>
    </div>
  );
}
