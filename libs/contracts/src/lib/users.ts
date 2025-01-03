interface Address {
  streetLine1: string;
  country: string;
  postalCode: string;
  receiver: string;
}

interface User {
  address: Address;
  notes: string;
  phone: string;
  email: string;
}

export type UserOffboardActionBody = User;
