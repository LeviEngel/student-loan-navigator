import fs from 'fs';
import { Transaction } from './records/transaction.js';

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

    // Read the file
    fs.readFile(csvFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        let lines = data.trim().split("\n");
        let headers = lines[0].split(",");

        // Remove unnecessary DOCTYPE declaration from Date column header
        headers[0] = headers[0].replace(/^<!DOCTYPE[^>]*>/i, "");
        let transactions = [];

        lines.forEach(line => {
            let test = false;

            let transaction = line.split(",")
            let [month, day, year] = transaction[0].split("/").map(Number);

            console.log(transaction[7].replace(/[$\r]/g, ""))

            transactions.push(new Transaction(
                new Date(year, month - 1, day),             // Date
                transaction[1],                             // LoanName (Loan)
                transaction[2],                             // Description
                parseMoney(transaction[3]),                 // Principal
                parseMoney(transaction[4]),                 // Interest
                parseMoney(transaction[5]),                 // Fees
                parseMoney(transaction[6]),                 // UnpaidPincipalBalanceValue (Total)
                parseMoney(transaction[7])                
            ));
        });

        transactions.forEach(transaction => {
            console.log(transaction);
        });
    });
}

function parseMoney(value) {
    if (!value) return 0; // avoid undefined
    return parseFloat(value.replace(/[$,"\r]/g, ""));
}

/**
 * Uncomment function call below and insert file name to parse
 * Edfinancial CSV file
 */
parseEdfinancialCSV("./sample_data.csv");