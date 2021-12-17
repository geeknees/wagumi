import { useSwitchNetwork } from "ethereal-react";

import { Container } from "@/cats/components/molecules/Container";

export const SwitchNetwork = () => {
  const [switchNetwork, { loading }] = useSwitchNetwork({ chainId: 4 });

  return (
    <Container>
      <h3 className="text-5xl">
        The example only supports the Rinkeby network.
      </h3>
      <button
        className="p-4 mt-8 text-3xl hover:bg-gray-300 hover:bg-opacity-40 border-4 border-current"
        disabled={loading}
        onClick={switchNetwork}
      >
        Switch to Rinkeby Network
      </button>
    </Container>
  );
};