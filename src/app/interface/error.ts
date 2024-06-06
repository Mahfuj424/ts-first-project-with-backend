export type TErrorSourse = {
  path: string | number;
  message: string;
}[];

export type TGenericReturnError ={
  statusCode: number ,
  message:string ,
  errorSourse: TErrorSourse
}
