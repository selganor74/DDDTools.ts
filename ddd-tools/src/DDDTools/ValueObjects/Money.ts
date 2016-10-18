/// <reference path="../ValueObject/BaseValueObject.ts" />

/**
 * Collection of general and commonly used ValueObjects. 
 */
namespace DDDTools.ValueObjects {

    import IValueObject = ValueObject.IValueObject;
    import BaseValueObject = ValueObject.BaseValueObject;

    /**
     * A simple value object to manage money.
     */
    export class Money extends BaseValueObject<Money> implements IValueObject<Money> {

        public __typeName = "DDDTools.ValueObjects.Money";
        public __typeVersion = "v1";

        private amount: number;
        private amountEuro: number;
        private exchange: number;
        private currency: Currency;
        /**
         * 
         * @param amount    amount in the currency specified by currency
         * @param currency  currency of the amount specified (if not supplied will be Currencies.EURO)
         * @param exchange  multiplier exchange to apply. This is always the €/currency amount ==> 1 * {currency} = {exchange} * € 
         */
        constructor(
            amount?: number | Money,
            currency?: Currency,
            exchange?: number
        ) {
            super();
            if (typeof amount === "number") {
                this.amount = amount;

                // Default Exchange is 1
                this.exchange = exchange || 1.0000;

                this.currency = currency || new Currency("EUR", "€");

                this.amountEuro = this.amount * exchange;
            }

            if (amount instanceof Money) {
                this.amount = amount.amount;
                this.currency = amount.currency;
                this.exchange = amount.exchange;
                this.amountEuro = amount.amountEuro;
            }
        }

        public copy(): Money {
            return new Money(this.amount, this.currency, this.exchange);
        }

        public getAmount() {
            return this.amount;
        }

        public getAmountEuro() {
            return this.amountEuro;
        }

        public getCurrency() {
            return this.currency;
        }

        public changeAmount(newAmount: number): Money {
            return new Money(newAmount, this.currency, this.exchange);
        }

        public changeExchange(newExchange: number) {
            return new Money(this.amount, this.currency, newExchange);
        }

        public changeCurrency(newCurrency: Currency) {
            return new Money(this.amount, newCurrency, this.exchange);
         }

        public plus(toAdd: Money) {
            var newAmountEuro = this.getAmountEuro() + toAdd.getAmountEuro();
            return new Money(newAmountEuro).changeExchange(this.exchange).changeCurrency(this.currency);
        }

        public minus(toSubstract: Money) {
            var newAmountEuro = this.getAmountEuro() - toSubstract.getAmountEuro();
            return new Money(newAmountEuro).changeExchange(this.exchange).changeCurrency(this.currency);
        }

        public multiplyBy(multiplier: number) {
            var newAmount = this.getAmount() * multiplier;
            return this.changeAmount(newAmount);
        }

        public divideBy(divisor: number) {
            var newAmount = this.getAmount() / divisor;
            return this.changeAmount(newAmount);
        }

        /**
         * 
         * @param percent0_100 Percent to apply in 100th ( 1 means 1% ).
         *
         * @example var currentAmount = new Money( 1000.0 )
         *          var withPercentApplied = currentAmount.incrementByPercent( 50% ); { ==> 1500 }  
         */
        public incrementByPercent(percent0_100: number) {
            var newAmount = this.getAmount() * ( 1 + percent0_100/ 100.0 )
        }

        /**
         * 
         * @param percent0_100 Percent to apply in 100th ( 1 means 1% ).
         *
         * @example var currentAmount = new Money( 1000.0 )
         *          var withPercentApplied = currentAmount.decrementPercent( 50% ); { ==> 500 }  
         */
        public decrementByPercent(percent0_100: number) {
            var newAmount = this.getAmount() * (1 - percent0_100 / 100.0)
        }

        // See http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
        private formatNumber(
            decimals: number = 2,
            thousandsSeparator: string = ".",
            decimalSeparator: string = ",")
        {
            const lengthOfWholePart = 3;
            var re = '\\d(?=(\\d{' + (lengthOfWholePart || 3) + '})+' + (decimals > 0 ? '\\D' : '$') + ')',
                num = this.amount.toFixed(Math.max(0, ~~decimals));

            return (decimalSeparator ? num.replace('.', decimalSeparator) : num).replace(new RegExp(re, 'g'), '$&' + (thousandsSeparator || ','));
        };

        public toString(
            decimals: number = 2,
            thousandsSeparator: string = ".",
            decimalSeparator: string = ",",
            showCurrency: boolean = false
        ) : string
        {
            return (showCurrency ? this.currency.symbol + " " : "" ) + this.formatNumber(decimals, thousandsSeparator, decimalSeparator);
        }
    }

    export class Currency {
        constructor(
            public name: string,
            public symbol: string) { }
    }

    export class Currencies {
        public static EURO = new Currency("EUR", "€");
        public static DOLLAR = new Currency("USD", "$");
        /* Add here whatever new exchange you may need */
    }
}