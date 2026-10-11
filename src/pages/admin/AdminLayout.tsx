import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <>
      <div>Hello Admin</div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export { AdminLayout };
