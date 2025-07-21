export type DocumentType = "DNI" | "C.E." | "Otro"

export type UserRole = "admin" | "specialist" | "colaborator"

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  avatar?: string;
  email: string;
  documentType: DocumentType;
  documentNumber?: string;
  role?: UserRole;
  status: number;
  reportsTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserForm {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  documentType: DocumentType;
  documentNumber: string;
  role: UserRole;
  reportsTo: string;
}

export interface UserTop {
  assignedId: string;
  avatar?: string;
  totalServices: number;

}
