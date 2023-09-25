"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, //can use but can't change from both outside and inside
    details, //can't used from outside
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
