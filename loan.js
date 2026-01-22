

// Stores all information related to an individual loan
class Loan {
    
    /* Each corresponding comment represents the parameter's name from FSA's
       Download My Aid Data File */
    constructor({
        id,                             // loan award id
        typeCode,                       // loan type code
        typeDescription,                // loan type description
        schoolName,                     // loan attending school name
        
        loanAmount,                     // loan amount
        interestRate,                   // loan interest rate
        interestRateTypeCode,           // loan interest rate type code
        interestRateTypeDescription,    // loan interest rate type description
        outstandingPrincipal,           // total outstanding principal
        outstandingInterest,            // total outstanding interest

        originationDate,                // loan date
        beginDate,                      // loan period begin date
        endDate,                        // loan period end date


        /*... incomplete, need to create more categories to capture
            all required data */


  }) {
    // Identity
    this.id = String(id);
    this.typeCode = String(typeCode);
    this.typeDescription = String(typeDescription);
    this.schoolName = String(schoolName);

    // Financials
    this.loanAmount = Number(loanAmount);
    this.outstandingPrincipal = Number(outstandingPrincipal);
    this.outstandingInterest = Number(outstandingInterest);
    this.interestRate = Number(interestRate);
    this.interestRateTypeCode = String(interestRateTypeCode);
    this.interestRateTypeDescription = String(interestRateTypeDescription);

    // Dates
    this.originationDate = originationDate ? new Date(originationDate) : null;
    this.beginDate = beginDate ? new Date(beginDate) : null;
    this.endDate = endDate ? new Date(endDate) : null;
  }
}