import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { auth } from "@/lib/firebase/firebase";
import apis from "@/apis";
import { User } from "@/types/User";

export function useCurrentUser() {
  const [uid, setUid] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUid(firebaseUser?.uid ?? null)
    })
    return () => unsubscribe()
  }, [])

  const query = useQuery<User | null>({
    queryKey: ["currentUser", uid],
    enabled: !!uid,
    queryFn: async () => {
      if (!uid) return null
      const profile = await apis.users.GetUser(uid)
      return profile
    },
    staleTime: 1000 * 60 *5
  })

  return {
    ...query,
    uid
  }
}
