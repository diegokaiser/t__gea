import { useAuth } from "./useAuth";

export function useGlobalAuth() {
  return useAuth(
    "/dashboard",
    "/login",
    ["/login", "/register", "/forgot-password"]
  )
}
