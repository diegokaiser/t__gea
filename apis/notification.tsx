import {
	addDoc,
	collection,
	doc,
	getDocs,
	serverTimestamp,
	query,
	where,
	updateDoc,
	arrayUnion,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

const notification = {
	GetNotReadedNotificationsByUser: async (userId: string) => {
		const q = query(
			collection(db, "notifications", userId),
			where("recipients", "array-contains", userId)
		);
		const all = await getDocs(q);
		const unread = all.docs.filter(
			(doc) => !doc.data().readBy.includes(userId)
		);
		return unread;
	},
	CreateNotification: async ({
		createdBy,
		message,
		refType,
		refId,
	}: {
		createdBy: string;
		message: string;
		refType: string;
		refId: string;
	}) => {
		const usersSnap = await getDocs(collection(db, "users"));
		const recipients = usersSnap.docs
			.map((doc) => doc.id)
			.filter((id) => id !== createdBy);

		await addDoc(collection(db, "notifications"), {
			message,
			createdBy,
			recipients,
			readBy: [],
			ref: { type: refType, id: refId },
			createdAt: serverTimestamp(),
		});
	},
	MarkNotificationAsRead: async (notificationId: string, userId: string) => {
		await updateDoc(doc(db, "notifications", notificationId), {
			readBy: arrayUnion(userId),
		});
	},
};

export default notification;
