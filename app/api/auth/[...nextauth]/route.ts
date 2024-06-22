import { handlers, signIn as signInFunction, signOut } from "@/auth";

export const { GET, POST } = handlers 
// export const signIn = signInFunction;

// export const combinedExports = {
//   GET: handlers.GET,
//   POST: handlers.POST,
//   signIn: signInFunction
// };