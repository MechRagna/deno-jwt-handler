import { makeJwt, Jose, Payload, setExpiration } from "./deps.ts";

/**
 * Este metodo genere un JWT con la secretKey y datos especificados, predefinido el identifier es "default" y no expira.
 * @param secretKey
 * @param data
 * @param exp
 * @param identifier
 */
const createJwt = async (
  secretKey: string,
  data: any = {},
  exp?: number,
  identifier: string = "default"
): Promise<string> => {
  const key = secretKey;

  let payload: Payload = {
    iss: identifier,
    data: data,
  };

  if (exp) {
    payload.exp = setExpiration(exp);
  }

  const header: Jose = {
    alg: "HS256",
    typ: "JWT",
  };

  return await makeJwt({ header, payload, key });
};

export { createJwt };
