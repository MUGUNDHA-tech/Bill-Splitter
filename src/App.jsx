import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import BillSplitter from "./BillSplitter";

const App = () => {
  const [page, setPage] = useState("welcome");

  return (
    <div>
      {page === "welcome" && <WelcomePage onStart={() => setPage("login")} />}
      {page === "login" && <LoginPage onLogin={() => setPage("billSplitter")} onSignup={() => setPage("signup")} />}
      {page === "signup" && <SignupPage onSignupComplete={() => setPage("login")} />}
      {page === "billSplitter" && <BillSplitter onBack={() => setPage("welcome")} />}
    </div>
  );
};

export default App;
