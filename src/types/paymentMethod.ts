export interface PaymentMethod {
  id: string;
  last4: string;
  brand: 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb' | 'unknown';
  expiry: string;
}
export interface PaymentMethodState {
  isLoading: boolean;
  error: string | null;
  paymentMethod: PaymentMethod | null;
}
