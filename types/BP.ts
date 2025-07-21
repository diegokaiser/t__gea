import { Timestamp } from "firebase/firestore";

export interface BP {
  id?: string;
  sis: number;
  dia: number;
  pul: number;
  pam: number;
  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
}

export interface BPForm {
  sis: number;
  dia: number;
  pul: number;
  pam: number;
  createdBy: string;
  updatedBy: string;
}
