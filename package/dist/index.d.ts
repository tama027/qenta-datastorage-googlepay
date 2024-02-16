export interface QentaDsGooglepayProps {
    [key: string]: any;
    secret? : string;
    customerId?: string;
    language?: string;
    shopId?: string;
    amount? : string;
    currency? :string;
    countryCode? :string;
    returnUrl?: string; // return url to your 'init' file
    requestUrl? : string;
}
declare const DsGooglePay: (props: QentaDsGooglepayProps) => any;
export default DsGooglePay;
