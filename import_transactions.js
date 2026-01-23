import { Transaction } from './records/transaction';

/**
 * Parse account data specific to Edfinancial Loan Servicer.
 *
 * The following parameters are required to accurately import all loan
 * transactions:
 *
 *   - Display: All Loans
 *   - Date Range: Life of Loan
 *
 * Then, download the information as a .csv file.
 */
function parseEdfinancialCSV(csvFilePath) {
    const fs = require('fs');

    // Read the file
    fs.readFile(csvFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const lines = data.trim().split("\n");
    const headers = lines[0].split(",");

    // Remove unnecessary DOCTYPE declaration from Date column header
    headers[0] = headers[0].replace(/^<!DOCTYPE HTML PUBLIC "-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/EN">/, "");
    
    });
}

/**
 * Uncomment function call below and insert file name to parse
 * Edfinancial CSV file
 */ 
// parseEdfinancialCSV();