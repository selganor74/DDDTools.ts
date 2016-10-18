/// <reference path="../../../build/browser/ddd-tools.d.ts" />
namespace CdC.Tests.ValueObjects.Money {

    import Money = DDDTools.ValueObjects.Money;
    import Currencies = DDDTools.ValueObjects.Currencies;
    import Currency = DDDTools.ValueObjects.Currency;

    describe("Money", () => {

        it("should be possibile to instantiate a new Money value object with an amount as number", () => {
            try {
                var aMoney = new Money(1000);
                expect(aMoney instanceof Money).toBeTruthy();
            } catch (e) {
                expect(false).toBeTruthy(e);
            }
        });

        it("should be possibile to instantiate a new Money value object from an existing Money Value Object", () => {
            try {
                var aMoney = new Money(1000)    ;
                var anotherMoney = new Money(aMoney);
                expect(anotherMoney instanceof Money).toBeTruthy();
                expect(anotherMoney.getAmount()).toEqual(aMoney.getAmount(), "Amount is not the same on the to objects");
                expect(anotherMoney.getAmountEuro()).toEqual(aMoney.getAmountEuro(), "AmountEuro is not the same on the to objects");
                expect(anotherMoney.getCurrency()).toEqual(aMoney.getCurrency(), "Currency is not the same on the to objects");
            } catch (e) {
                expect(false).toBeTruthy(e);
            }
        });

        it("should be possible to instantiate a new Money object specifying a Currency and an exchange", () => {
            var aMoney = new Money(1000, Currencies.DOLLAR, 0.500);
            expect(aMoney.getAmount()).toEqual(1000);
            expect(aMoney.getAmountEuro()).toEqual(500);
            expect(aMoney.getCurrency() instanceof Currency).toBeTruthy();
        });

        it("should be possible to get a new Money object specifying a new Currency and a new exchange", () => {
            var aMoney = new Money(1000, Currencies.DOLLAR, 0.500);
            var newMoney = aMoney.changeExchange(1).changeCurrency(Currencies.EURO);
            expect(newMoney.getAmount()).toEqual(1000);
            expect(newMoney.getAmountEuro()).toEqual(1000);
            expect(newMoney.getCurrency() instanceof Currency).toBeTruthy();
        });

        it("changeAmount must return a new Money object with the new amount.", () => {
            try {
                var aMoney = new Money(1000, Currencies.DOLLAR, 0.500);
                var anotherMoney = new Money(aMoney).changeAmount(1500);
                expect(anotherMoney instanceof Money).toBeTruthy();
                expect(anotherMoney.getAmount()).toEqual(1500);
                expect(anotherMoney.getAmountEuro()).toEqual(750);
                expect(anotherMoney.getCurrency()).toEqual(aMoney.getCurrency());
            } catch (e) {
                expect(false).toBeTruthy(e);
            }
        });
    });
}