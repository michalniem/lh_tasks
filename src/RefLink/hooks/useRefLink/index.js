import { useContext } from "react";

import { RefLinkContext } from "../../RefLinkProvider";

function useRefLink() {
  const refLink = useContext(RefLinkContext);

  return refLink;
}

export default useRefLink;
