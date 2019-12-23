import { useEffect } from "react";
import Router from "next/router";

export default () => {
  // Redirecting to letter to dad for now; could replace this in the future
  // with a landing page meant for a broader group of people.
  useEffect(() => {
    Router.replace("/dear-dad");
  });

  return null;
};
