import { useRouter } from "next/navigation";
import React from "react";
/**
 * @interface
 * @property {Array<object>} routes - Array of route objects
 */

/**
 *
 * @returns {JSX.Element} - list of buttons
 * @component
 * @example return (
 *   <>
 *    {routes.map((route, index) => (<button key={index}>{route.name}</button>))
 *   </>
 * )
 */

const NavPanel: React.FC<{ routes: Array<{ name: string; path: string }> }> = ({
  routes,
}): JSX.Element => {
  const route = useRouter();
  return (
    <>
      {routes.map((data, index) => (
        <button
          onClick={() =>
            data.path == "/"
              ? route.push(data.path)
              : route.push(
                  `/space/${data.path.includes("space") ? "" : data.path}`
                )
          }
          key={index}
        >
          {data.name}
        </button>
      ))}
    </>
  );
};

export default NavPanel;
