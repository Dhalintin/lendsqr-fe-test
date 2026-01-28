export interface UserDto {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  code: string;
  tier: number;

  fullName?: string;
  bvn?: string;
  gender: "Male" | "Female" | "Prefer not to say";
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
  children?: string;
  residenceType: string;
  balance: string;
  accountNumber: string;
  bankName: string;

  educationLevel: string;
  employmentStatus:
    | "Employed"
    | "Self-Employed"
    | "Unemployed"
    | "Student"
    | "Retired";
  employmentSector: string | null;
  employmentDuration: string | null;
  officeEmail: string | null;
  monthlyIncome: string;
  loanRepayment: string;

  // Socials (optional fields)
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;

  // Guarantor
  guarantor: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  };

  // Optional: add profile photo, address, etc. if needed later
  profilePhoto?: string;
  residentialAddress?: string;
}
