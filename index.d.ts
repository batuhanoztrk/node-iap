type Platform = 'amazon' | 'apple' | 'google' | 'roku';

interface KeyObject{
    client_email: string,
    private_key: string
}

interface Payment {
    receipt: any,       // always required
    productId: string,
    packageName: string,
    secret?: string,
    subscription?: boolean,
    keyObject?: KeyObject,    // required, if google
    userId?: string,    // required, if amazon
    devToken?: string,  // required, if roku
}

interface Receipt{
    orderId: string
}

interface Response {
    receipt: Receipt,
    platform: Platform,
    productId: string,
    transactionId: string,
    purchaseDate: number,
    expirationDate: number,
}

export function verifyPayment (platform: Platform, payment: Payment, callback: (error: string, response: Response) => void);
