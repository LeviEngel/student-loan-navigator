class Transaction {

    /* Each corresponding comment represents the parameter's name from 
       Edfinancial's All Loans downloadable CSV file */
    constructor({
        date,                   // Date
        loanName,               // LoanName
        description,            // Description
        principal,              // Principal
        interest,               // Interest
        fees,                   // Fees
        total                   // UnpaidPincipalBalanceValue
    }) {
        this.date = date;
        this.loanName = loanName;
        this.description = description;
        this.princpal = principal;
        this.interest = interest;
        this.fees = fees;
        this.total = total;
    }
}