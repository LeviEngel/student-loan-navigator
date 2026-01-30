/**
 * Represents a single financial transaction affecting a loan, such as a 
 *     payment, refund, disbursement, or capitalized interest. Stores the
 *     amounts applied to the principal, interest, and fees, the total amount
 *     applied, and the remaining principal balance.
 * 
 * @param {Date} date - The date of this transaction
 * @param {string} loanCode - The code representing the specific loan
 *     assocaited with this transaction (ex: #-##)
 * @param {string} loanClassification - Classification of the loan associated
 *     with this transaction (ex: Direct Parent PLUS, 
 *     Direct Loan - Unsubsidized, Direct Loan - Subsidized)
 * @param {string} type - Type of this transaction, (ex: DISBURSEMENT, 
 *     REFUND, CAPITALIZED INTEREST, PAYMENT)
 * @param {number} amountAppliedToPrincipal - Amount applied from this
 *     transaction to the principal of the loan
 * @param {number} amountAppliedToInterest - Amount applied from this
 *     transaction to the interest of the loan
 * @param {number} amountAppliedToFees - Amount applied from this transaction
 *     to fees related to the loan
 * @param {number} amountAppliedTotal - Total amount applied from this 
 *     transaction (sum of amountAppliedToInterest, amountAppliedToInterest,
 *     and amountAppliedToFees)
 * @param {number|null} outstandingPrincipal - Remaining principal balance of
 *     the loan associated with this transaction, null if unavailable
 */
export class Transaction {

    /*
    Each corresponding comment represents each of the headers' name from 
    Edfinancial's Account History, downloadable CSV file, using the following
    criteria:
       
    Display: All Loans
    Date Range: Life of Loan
    */
    constructor(
        date,                       // Date
        loanName,                   // LoanName (Loan)
        type,                       // Description
        amountAppliedToPrincipal,   // Principal
        amountAppliedToInterest,    // Interest
        amountAppliedToFees,        // Fees
        amountAppliedTotal,         // Total
        outstandingPrincipal        // UnpaidPincipalBalanceValue
    ) {
        if (!(date instanceof Date) || isNaN(date))
            throw new TypeError("Invalid date");
        if (typeof amountAppliedToPrincipal !== "number")
            throw new TypeError("amountAppliedToPrincipal must be a number");
        if (typeof amountAppliedToInterest !== "number")
            throw new TypeError("amountAppliedToInterest must be a number");
        if (typeof amountAppliedToFees !== "number")
            throw new TypeError("amountAppliedToFees must be a number");
        if (typeof amountAppliedTotal !== "number")
            throw new TypeError("amountAppliedTotal must be a number");
        if (typeof outstandingPrincipal !== "number")
            throw new TypeError("outstandingPrincipal must be a number");

        this.date = date;
        this.loanName = loanName;
        this.type = type;
        this.amountAppliedToPrincipal = amountAppliedToPrincipal;
        this.amountAppliedToInterest = amountAppliedToInterest;
        this.amountAppliedToFees = amountAppliedToFees;
        this.amountAppliedTotal = amountAppliedTotal;
        this.outstandingPrincipal = outstandingPrincipal === "Unavailable"
            ? null : outstandingPrincipal;
    }
}