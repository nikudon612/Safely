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
      <h1>hello world</h1>
    </div>
  );
}

export default Sites;
