import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
	Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import apis from "@/apis";
import { BP, BPForm } from "@/types/BP";

const bp = {
	GetBPs: async (): Promise<BP[]> => {
		const q = query(collection(db, "bps"), orderBy("createdAt", "desc"));
		const snapshot = await getDocs(q);
		return snapshot.docs.map((doc) => doc.data() as BP);
	},
	AddBps: async (data: BPForm): Promise<void> => {
		const id = crypto.randomUUID();
		const ref = doc(db, "bps", id);

		const bp: BP = {
			id,
			sis: data.sis,
			dia: data.dia,
			pul: data.pul,
			pam: data.pam,
			createdAt: Timestamp.now(),
			createdBy: data.createdBy,
			updatedAt: Timestamp.now(),
			updatedBy: data.updatedBy,
		};

		await setDoc(ref, bp);

		await apis.notification.CreateNotification({
			createdBy: data.createdBy,
			message: `Nuevo registro! (${data.sis}/${data.dia})`,
			refType: "bp",
			refId: id,
		});
	},
};

export default bp;
