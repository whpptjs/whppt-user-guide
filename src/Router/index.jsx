import { PublicRouter } from "public/Router";
// import { CustomRouter } from "custom/Router";
// import { useServices } from "services";
import { useEffect, useState } from "react";

export const Router = () => {
  //   const { auth } = useServices();
  const [loading, setLoading] = useState(true);
  //   const [user, setUser] = useState();

  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       setUser(user);
  //       setLoading(false);
  //     });
  //   }, [auth]);

  return (
    <div>
      <PublicRouter />
      {/* {!loading && (
        <>
          {!user && <PublicRouter />}
          {user && <DashboardRouter />}
        </>
      )} */}
    </div>
  );
};
