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


const DsGooglePay = (props) => {
    const url = props.requestUrl;
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
    let randomString = "";
    for (let i = 0; i < 10; i++) {
        randomString += characters[Math.floor(Math.random() * characters.length)];
    }
    const postFields = {
        customerId: props.customerId || "",
        language: props.language || "en",
        shopId: props.shopId || "",
        javascriptScriptVersion: "googlepay",
        orderIdent: randomString,
        returnUrl:props.returnUrl || "",
        // secret: props.secret || "",
        googlepaymerchantid : "qenta",
        googlepaymerchantname : "seamless",
        googlepayallowedauthmethod : json_encode(["PAN_ONLY", "CRYPTOGRAM_3DS"]),
        googlepayallowedcardnetwork :  json_encode(["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]),
        googlepaycurrencycode : props.currency || "", 
        googlepaycountrycode :  props.countryCode || "", 
        googlepaytotalprice :  props.amount || "", 
    };
    const add_key = ["requestFingerprintOrder"];
    const noneed_keys = [
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
    const desiredOrder = [
        "customerId",
        "shopId",
        "orderIdent",
        "returnUrl",
        "language",
        "javascriptScriptVersion",
        "secret",
    ];
    const filteredKeys = desiredOrder.filter((key) => !noneed_keys.includes(key));
    const requestFingerprintOrder = [...filteredKeys, ...add_key].join(",");
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
        ...addValue,
        ...cleanedValuesInOrder,
        requestFingerprintOrder,
    ].join("");
    const hmacSha512Hash = generateHmacSha512(props.secret, requestFingerprintSeed);
    const formData = new FormData();
    for (const key in postFields) {
        formData.append(key, postFields[key]);
    }
    formData.append("requestFingerprint", hmacSha512Hash);
    formData.append('requestFingerprintOrder', requestFingerprintOrder);
    const fetchData = async () => {
        try {
            const response = await axios_1.default.post(url, formData);
            const responseData = response.data;
            if (responseData) {
                const iframe = document.createElement('iframe');
                iframe.title = "Response";
                iframe.srcdoc = responseData;
                iframe.style.width = "20%";
                iframe.style.height = "60px";
                iframe.style.borderWidth = "0";
                document.body.appendChild(iframe);
            }
            console.log("response from ds :" + responseData); 
        }
        catch (error) {
            console.error(error);
        }
    };
    fetchData();
};
exports.default = DsGooglePay; 
