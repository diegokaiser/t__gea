'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from '@/lib/firebase/firebase'
import { 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut, 
  User
} from "firebase/auth"
import { doc, getDoc, getDocs, getFirestore, setDoc, serverTimestamp } from "firebase/firestore"

export function useAuth(
  redirectAuthenticated = "/dashboard", 
  redirectUnauthenticated = "/login",
  allowUnauthenticatedRoutes: string[] = []
) {
  const [ user, setUser ] = useState<User | null>(null)
  const [ loading, setLoading ] = useState(true)
  const router = useRouter()

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
      setLoading(false);
      
      const currentPath = window.location.pathname;
      const isPublicRoute = allowUnauthenticatedRoutes.includes(currentPath);
      
      if (firebaseUser) {  
        document.cookie = "session=true; path=/";
        if (isPublicRoute) {
          router.push(redirectAuthenticated);
        }
      } else {
        document.cookie = "session=; Max-Age=0; path=/";
        if (!isPublicRoute) {
          router.push(redirectUnauthenticated);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async ( email: string, password: string ) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    document.cookie = "session=true; path=/"
    return userCredential
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user

    const db = getFirestore()
    const userRef = doc(db, "users", user.uid)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        fullName: user.displayName ?? "",
        wmail: user.email ?? "",
        avatar: user.photoURL ?? "",
        role: "user",
        createdAt: serverTimestamp(),
      })
    }

    document.cookie = "session=true; path=/"
    router.push('/dashboard')
    
    return userCredential
  }

  const signUpWithEmail = async (email: string, password: string ) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    document.cookie = "session=true; path=/"
    return userCredential
  }

  const logout = async () => {
    await signOut(auth)
    document.cookie = "session=; Max-Age=0; path=/"
  }

  return { 
    user, 
    loading, 
    login, 
    loginWithGoogle, 
    signUpWithEmail,
    logout,
  }
}
