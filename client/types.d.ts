type ExpenseType =
  | "Materiales"
  | "Social"
  | "Estadías"
  | "Necesidades"
  | "Alimentación"
  | "Otros";
type ExpenseReportStatus = "Pending" | "Accepted" | "Closed";
type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type DateType =
  `${digit}${digit}${digit}${digit}-${digit}${digit}-${digit}${digit}`;

interface ExpenseReportData {
  author: string;
  date: DateType;
  type: ExpenseType;
  amount: string | number;
  status: ExpenseReportStatus;
  comment?: string;
  backupURL: string;
}
