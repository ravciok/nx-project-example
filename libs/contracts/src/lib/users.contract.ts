interface Address {
  streetLine: string;
  city: string;
  postalCode: string;
  country: string;
}

export type UserOffboardActionBodyContract = {
  receiver: string;
  phone: string;
  email: string;
  address: Address;
  notes?: string;
};
