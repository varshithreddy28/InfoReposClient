import React, { useEffect } from "react";
import Top from "../../components/Home Top/top";
import Content from "../../components/HomeContent/content";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";


export default function Home({ error }) {

  useEffect(() => {
    toast.error(error)
  }, [error])

  return (
    <div className="homepage">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Top />
      <Content />
    </div>
  );
}
