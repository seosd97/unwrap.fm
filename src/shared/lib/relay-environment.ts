import {
  Environment,
  type FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

const GRAPHQL_ENDPOINT =
  typeof window !== "undefined"
    ? "/graphql"
    : (process.env.GRAPHQL_ENDPOINT ?? "http://localhost:4000/graphql");

const fetchFn: FetchFunction = async (operation, variables) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
};

function createEnvironment(records?: Record<string, unknown>) {
  const source = records ? new RecordSource(records) : new RecordSource();
  const store = new Store(source);
  const network = Network.create(fetchFn);

  return new Environment({ network, store });
}

let clientEnvironment: Environment | undefined;

export function getClientEnvironment(
  records?: Record<string, unknown>
): Environment {
  if (typeof window === "undefined") {
    return createEnvironment(records);
  }

  if (!clientEnvironment) {
    clientEnvironment = createEnvironment(records);
  }

  return clientEnvironment;
}

export function createServerEnvironment(): Environment {
  return createEnvironment();
}
