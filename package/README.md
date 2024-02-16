<!-- <h1 align="center">
   <b>
        <a href="#">
        <img class="img" src="logo_qenta.png" style="width: 30%;" />
        </a><br>
    </b>
</h1> -->

<p align="center">The Qenta Datastorage googlepay is use for render the Google pay button</p>
    <p>
        <a href="#">
            <img src="https://badge.fury.io/js/your-package-name.svg" alt="npm version">
        </a>
        <a href="#">
            <img src="https://img.shields.io/github/license/your-username/your-repository-name" alt="GitHub license">
        </a>
        <a href="#">
            <img src="https://img.shields.io/github/issues/your-username/your-repository-name" alt="GitHub issues">
        </a>
    </p>
<p align="center">
    <a href="https://qenta.com/"><b>Website</b></a> •
    <a href="#"><b>Documentation</b></a>
</p>

<div align="center">

</div>

## Table of Contents
  - [Features](#Features)
  - [Browser Support](#Browser-Support)
  - [Installing](#installing)
  - [Example](#example)
  - [Resources](#Resources)
  - [Supported language](#Supported-language)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Features

- Rendar the Googlepay button in any website

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |
## Installing

Using npm:

```bash
$ npm i qenta-qmore-googlepay
```

Using yarn:

```bash
$ yarn add qenta-qmore-googlepay
```

Once the package is installed, you can import the library using `import` approach:

```js
import QMoreGooglePay from 'qenta-qmore-googlepay';
```

## Example

Include a section with usage examples to help users understand how to apply your package in different scenarios.

This are the Property you need to pass.

| Property  |  Definition   | Example |
| -------- | ----------  | ------ |
| secret * | It's your qenta's secret key. | - |
| customerId * | It's your qenta's customerId. | - |
| shopId *| It's your qenta's shopId. | - |
| language *| if you want to change your local langvage by default we use english. | en |
| amount *| It's your payment amount. | 1 or 10 or 100 any number |
| currency *| It's your local currency. | INR,USD,ERU |
| orderDescription *| It's your Description of your product. | - |
| successUrl *| It's your successurl if payment is sucessfull done then in witch page you want to redirect.| https:// or Http:// |
| cancelUrl | It's your cancelUrl if payment is cancle then in witch page you want to redirect. | - |
| failureUrl *| It's your failureurl if payment is fail then in witch page you want to redirect. | https:// or Http:// |
| serviceUrl | It's your serviceUrl | - |
| pendingUrl | It's your pendingUrl if payment is pending then in witch page you want to redirect. | - |
| confirmUrl | It's your confirmUrl if payment is confirm then in witch page you want to redirect. | - |
| consumerBillingFirstname | It's your billing consumer name. | john |
| consumerBillingLastname | It's your billing consumer lastname. | Deo |
| consumerBillingAddress1 | It's your billing consumer address. | flat name home number etc.. |
| consumerBillingCity | It's your billing consumer city. | New York. |
| consumerBillingZipCode | It's your billing consumer Zipcode. | 123456 |
| consumerBillingCountry | It's your billing consumer Country. | USA |
| consumerBillingPhone | It's your billing consumer Phone. | 1234567890 |
| consumerEmail | It's your billing consumer email. | john.doe@example.com |
| consumerBirthDate | It's your billing consumer birthdate. | 01/01/1992 |
| basketItems | It's your billing consumer basket item like how many item he purchese. | 1,5,10 |
| basketItem1ArticleNumber *| It's your Article Number. | 1,40,42 |
| basketItem1Quantity * | It's your basketItem1Quantity number. | 1,10,20 |
| basketItem1Name * | It's your basketItem1Name your product name. | Mango,Apple |
| basketItem1Description | It's your basketItem1Description your product details. | This mango is fresh or any description |
| basketItem1ImageUrl | It's your basketItem1ImageUrl your product image url. | https://url |
| basketItem1UnitGrossAmount *| It's you basketItem1UnitGrossAmount same as amount. | 1,10,20 |
| basketItem1UnitNetAmount * | It's you basketItem1UnitGrossAmount amount. | 1,10,20 |
| basketItem1UnitTaxAmount | It's you basketItem1UnitTaxAmount amount. | 1,10,20 |
| basketItem1UnitTaxRate * | It's your basketItem1UnitTaxRate your tax amount. | 1,10,20 |
| buttonType | It's you buttonType you can add here with text you need in your googlepay button. | book<br>donate<br>buy<br>order<br>pay<br>plain<br>subscribe |
| buttonLocale | It's your Langvage on your googlepay button. | For English use "en" <br> For Arabic use "ar" <br> For Chinese use "zh" <br> For Indonesian use "id" <br> For Ukrainian use "uk" |
| buttonColor | It's you buttonColor with color you need to show to user. | black,white |


Example in `React js`

```js
import QMoreGooglePay from 'qenta-qmore-googlepay';

  <QMoreGooglePay
      secret={'secret'}
      customerId={'customerId'}
      shopId={'shopId'}
      language={'language'}
      amount={'amount'}
      currency={'EUR'}
      orderDescription={'description'}
      successUrl={'http://yoursuccessUrl'}
      failureUrl={'http://yourfailureUrl'}
      basketItem1ArticleNumber={'42'}
      basketItem1Quantity={'1'}
      basketItem1Name={'your basket item name'}
      basketItem1UnitGrossAmount={'1'}
      basketItem1UnitNetAmount={'0.8'}
      basketItem1UnitTaxRate={'20'}
  />
```

Example in `Vue js`

```js
import QMoreGooglePay from'qenta-qmore-googlepay';
      export default {
      name: 'App',
      components: {
          QMoreGooglePay
      }
  }

  <template>
      <QMoreGooglePay
        :secret="'secret'"
        :customerId="'customerId'"
        :shopId="'shopId'"
        :language="'language'"
        :amount="'amount'"
        :currency="'EUR'"
        :orderDescription="'description'"
        :successUrl="'http://yoursuccessUrl'"
        :failureUrl="'http://yourfailureUrl'"
        :basketItem1ArticleNumber="'42'"
        :basketItem1Quantity="'1'"
        :basketItem1Name="'your basket item name'"
        :basketItem1UnitGrossAmount="'1'"
        :basketItem1UnitNetAmount="'0.8'"
        :basketItem1UnitTaxRate="'20'"
      />
  </template>
```

Example in `Angular js`

Inside your `.Ts File` Add below code
```js
import QMoreGooglePay from'qenta-qmore-googlepay';

export class AppComponent {
    props :any = {
        secret:'secret',
        customerId:'customerId',
        shopId:'shopId',
        language:'language',
        amount:'amount',
        currency='EUR',
        orderDescription='description',
        successUrl='http://yoursuccessUrl',
        failureUrl='http://yourfailureUrl',
        basketItem1ArticleNumber='42',
        basketItem1Quantity='1',
        basketItem1Name='mango',
        basketItem1UnitGrossAmount='1',
        basketItem1UnitNetAmount='0.8',
        basketItem1UnitTaxRate='20'
    };

    ocrGpayHtml: string;
    
    constructor() {
        this.ocrGpayHtml = QmoreGooglepay(this.props);
    }
}
```
Inside your `.Html File` Add below code

```Html
<div [innerHTML]="ocrGpayHtml"></div>
```

## Resources

* [qenta](https://qenta.com/)

## Supported language

This package supported in [Reactjs](https://react.dev/) [vuejs](https://vuejs.org/)
[AngularJS](https://angularjs.org/)

## License

This project is licensed under the License Name - see the [LICENSE](LICENSE) file for details.

## acknowledgments
If your package relies on other open-source projects or you want to give credit to contributors, include an acknowledgments section.