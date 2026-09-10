export interface Parent {
  id: string;
  userId: string;
  schoolId: string;
  occupation?: string;
  whatsappNo?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateParentRequest {
  userId: string;
  occupation?: string;
  whatsappNo?: string;
  studentIds: string[];
  relations: string[];
}

export interface ParentWithChildren extends Parent {
  students: Array<{
    studentId: string;
    relation: string;
    isPrimary: boolean;
  }>;
}
