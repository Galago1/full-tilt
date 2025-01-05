export enum DateFormat {
  MDY = 'MM/dd/yyyy',
  yyyyMMdd = 'yyyy-MM-dd',
  // MMMddyyyy = 'MMM dd, yyyy',
  MMMMddyyyy = 'MMMM dd, yyyy',
  // yyyyMd = 'yyyy-M-d',
  EEEEd = 'EEEE d',
  HHMM = 'h:mm a',
  MMMdd = 'MMM dd',
  // iso8601
  // ISO8601 = 'yyyy-MM-ddTHH:mm:ss.SSSZ'
  // YMDZ = 'yyyy-MM-dd 00:00:00.000',
  ISO8601 = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",

  // yyyyMMddTHHmmssZ = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  // Alternative format if you need offset instead of Z
  yyyyMMddTHHmmssXXX = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  yyyyMMddTHHmmssZ = "yyyy-MM-dd'T'HH:mm:ss.SSS'X'" // Note the escaped 'X' for timezone
}
