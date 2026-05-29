export interface Reason {
  number: string;
  text: string;
}

export interface Feature {
  icon: string;     // bootstrap-icons class
  title: string;
  description: string;
}

export interface Outcome {
  icon: string;
  text: string;
}

export interface Modality {
  type: 'presencial' | 'online';
  title: string;
  highlight: string;
  details: string[];
  badge: string;
}

export interface EnrollmentData {
  studentName: string;
  age: number | null;
  guardianName: string;
  email: string;
  phone: string;
  city: string;
  modality: 'presencial' | 'online' | '';
  acceptTerms: boolean;
}

export interface Teacher {
  name: string;
  profile: string;
  quote: string;
  photo: string;
}
