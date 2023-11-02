// fix type issue for xss-clean
declare module "xss-clean" {
  import { RequestHandler } from "express";

  function xssClean(): RequestHandler;

  export = xssClean;
}
