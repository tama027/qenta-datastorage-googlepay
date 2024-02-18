"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const hmacSHA512 = crypto_js_1.default.HmacSHA512;
const generateHmacSha512 = (key, data) => {
    const hmac = hmacSHA512(data, key); 
    return hmac.toString();
};

let count = 0;
const DsGooglepay = (props) => {
    const formData = new FormData();
    const url = '/qmore/dataStorage/init'; 
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
    let randomString = "";
    for (let i = 0; i < 10; i++) {
        randomString += characters[Math.floor(Math.random() * characters.length)];
    }
    const postFields = {
        customerId: props.customerid || "",
        shopId: props.shopid || "",
        orderIdent: randomString,
        returnUrl:props.returnurl || "",
        language: props.language || "en",
        javascriptScriptVersion: "googlepay",
        googlepaymerchantid : "qenta",
        googlepaymerchantname : "seamless",
        googlepayallowedauthmethod : JSON.stringify(["PAN_ONLY", "CRYPTOGRAM_3DS"]),
        googlepayallowedcardnetwork :  JSON.stringify(["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]),
        googlepaycurrencycode : props.currency || "", 
        googlepaycountrycode :  props.countrycode || "", 
        googlepaytotalprice :  props.amount || "", 
    };

    const addValue = [props.secret];
    const removeValue = [
        "googlepaymerchantid",
        "googlepaymerchantname",
        "googlepayallowedauthmethod",
        "googlepayallowedcardnetwork",
        "googlepaycurrencycode",
        "googlepaycountrycode",
        "googlepaytotalprice",
        "amount",
        "countryCode",
        "currency", 
    ];
    const valuesInOrder = Object.keys(postFields)
        .filter((key) => !removeValue.includes(key))
        .map((key) => postFields[key]);

    const cleanedValuesInOrder = valuesInOrder.filter((value) => value !== undefined && value !== null);
    const requestFingerprintSeed = [
        ...cleanedValuesInOrder,
        ...addValue,
    ].join("");

    const hmacSha512Hash = generateHmacSha512(props.secret.trim(), requestFingerprintSeed.trim());
    for (const key in postFields) {
        formData.append(key, postFields[key]);
    }
    formData.append("requestFingerprint", hmacSha512Hash);
    fetchData(url,formData,count++);
};

const fetchData = async (url,formData,count) => {
    if(count == 0){
        try {
            const response = await axios_1.default.post(url,formData);
            const responseData = response.data;
                if (responseData) {
                    const urlParams = new URLSearchParams(responseData);
                    const storageId = urlParams.get("storageId"); 
                    const javascriptUrl = urlParams.get("javascriptUrl");
                    
                    const input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    input.setAttribute("id", "storageId");
                    input.setAttribute("storageId", storageId);
                    document.body.appendChild(input);    

                    const iframe = document.createElement('iframe');
                    var html = 
                        "<head>"
                        +"<script src=\'"+javascriptUrl+"\'></script>"
                        +"</head>"
                        +"<div id=\"googlePayIframe\"></div>"
                        +"<script type=\"text/javascript\">"
                        +"const wd = new QentaCEE_DataStorage();"
                        +"wd.buildIframeGooglePay(\'googlePayIframe\', \'100%\', \'200px\');"
                        +"</script>";
                    iframe.srcdoc = html;
                    iframe.style.width = "20%";
                    iframe.style.height = "60px";
                    document.body.appendChild(iframe);   
                }
            }
        catch (error) {
            console.error(error);
        }
    }
};

exports.default = DsGooglepay;
