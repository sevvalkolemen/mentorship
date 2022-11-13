import { initializeApp } from "firebase/app";
import toast from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import store from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { setUsers } from "./store/users";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (e) {
    toast.error(e.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e) {
    toast.error(e.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (e) {
    toast.error(e.message);
  }
};

export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profile Updated");
    return true;
  } catch (e) {
    toast.error(e.message);
  }
};

export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success("Password Updated");
    return true;
  } catch (e) {
    toast.error(e.message);
  }
};

export const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Check your email address");
    return true;
  } catch (e) {
    toast.error(e.message);
  }
};

// login and logout change control
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      loginHandle({
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        uid: user.uid,
      })
    );
  } else {
    store.dispatch(logoutHandle());
  }
});

export const addUser = async (data) => {
  try {
    const result = await addDoc(collection(db, "users"), data);
    return result.id;
  } catch (e) {
    toast.error(e.message);
  }
};

onSnapshot(collection(db, "users"), (doc) => {
  store.dispatch(
    setUsers(
      doc.docs.reduce(
        (users, user) => [...users, { ...user.data(), id: user.id }],
        []
      )
    )
  );
});

export default app;
