import {
	collection,
	doc,
	getDocs,
	getDoc,
	orderBy,
	setDoc,
	Timestamp,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { User, UserForm } from "@/types/User";

const users = {
	GetUser: async (id: string): Promise<User | null> => {
		const ref = doc(db, "users", id);
		const snap = await getDoc(ref);
		if (snap.exists()) {
			return snap.data() as User;
		}
		return null;
	},
	GetUsers: async (): Promise<User[]> => {
		const q = query(collection(db, "users"));
		const snapshop = await getDocs(q);
		return snapshop.docs.map((doc) => doc.data() as User);
	},
	GetSpecialists: async (): Promise<User[]> => {
		const q = query(
			collection(db, "users"),
			where("role", "==", "specialist"),
			where("status", "==", 1)
		);
		const snapshot = await getDocs(q);
		return snapshot.docs.map((doc) => doc.data() as User);
	},
	AddUser: async (data: UserForm): Promise<void> => {
		const id = crypto.randomUUID();
		const ref = doc(db, "users", id);
		const user: User = {
			id,
			firstName: data.firstName,
			lastName: data.lastName,
			fullName: `${data.firstName} ${data.lastName}`,
			avatar: `${data.avatar ? data.avatar : "/assets/images/users/avatar-6.png"}`,
			email: data.email,
			documentType: data.documentType,
			documentNumber: data.documentNumber,
			role: data.role,
			status: 1,
			reportsTo: data.reportsTo,
			createdAt: Timestamp.now().toDate().toISOString(),
			updatedAt: Timestamp.now().toDate().toISOString(),
		};
		await setDoc(ref, user);
	},
	AddUserFromGoogle: async (
		uid: string,
		fullName: string,
		email: string,
		avatar?: string
	) => {
		const ref = doc(db, "users", uid);
		const user: User = {
			id: uid,
			fullName,
			avatar,
			email,
			documentType: "Otro",
			role: "colaborator",
			status: 1,
			createdAt: Timestamp.now().toDate().toISOString(),
			updatedAt: Timestamp.now().toDate().toISOString(),
		};
		await setDoc(ref, user);
	},
	EditUser: async (id: string, data: Partial<UserForm>): Promise<void> => {
		const ref = doc(db, "users", id);
		const updateData = {
			...data,
			updatedAt: Timestamp.now().toDate().toISOString(),
		};
		await updateDoc(ref, updateData);
	},
	DeleteUser: async (id: string, data: Partial<UserForm>): Promise<void> => {
		const ref = doc(db, "users", id);
		await updateDoc(ref, {
			status: 0,
			updatedAt: Timestamp.now().toDate().toISOString(),
		});
	},
};

export default users;
