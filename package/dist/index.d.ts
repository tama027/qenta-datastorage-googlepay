export interface QentaDsGooglepayProps {
    [key: string]: any;
    secret? : string;
    customerid?: string;
    language?: string;
    shopid?: string;
    amount? : string;
    currency? :string;
    countrycode? :string;
    returnurl?: string; 
}
declare const DsGooglepay: (props: QentaDsGooglepayProps) => any;
export default DsGooglepay;
