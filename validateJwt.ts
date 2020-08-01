import { validateJwt } from "./deps.ts";

/**
 * Este metodo recibe el JWT a validar y la key y devuelve todos los datos de ese JWT.
 * @param jwt
 * @param key
 */
const completeValidateJwt = async (
  jwt: string,
  key: string
): Promise<object> => {
  return await validateJwt({ jwt, key, algorithm: "HS256" });
};

/**
 * Este metodo recibe el JWT a validat y la key y devuelve si es valido o no.
 * @param jwt 
 * @param key 
 */
const isValidJwt = async (jwt: string, key: string): Promise<boolean> => {
  return (await validateJwt({ jwt, key, algorithm: "HS256" })).isValid;
};

export { completeValidateJwt };
export { isValidJwt };
