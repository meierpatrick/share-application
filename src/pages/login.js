import React from "react";
import { useAuth } from "../hooks/useAuth";

// .... other code .... //

export default function Login() {
  const { login } = useAuth();
  return (
    <section>
      <div>
        <h1>Welcome to the App</h1>

        <p>You can try out logging in below!</p>

        <button
          onClick={() => {
            return login().catch((e) => {
              console.error(e);
            });
          }}
        >
          LOG IN
        </button>
      </div>
    </section>
  );
}
