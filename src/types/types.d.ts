export interface Window {
    ethereum: any;
}

export interface TipProps {
    amount: number;
    contractAddress: string;
    to: string;
}