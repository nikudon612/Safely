import { useState, useEffect } from "react";

function Sites() {
  const [siteLists, setSiteLists] = useState([]);
  const sites = "/sites";

  useEffect(() => {
    fetch(sites)
      .then((res) => res.json())
      .then((data) => setSiteLists(data));
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Sites;
