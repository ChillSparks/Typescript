"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(recipient, //can use but can't change from both outside and inside
    details, //can't used from outside
    amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
