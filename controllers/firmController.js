import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";
import { Firm } from "../models/Firm.js";

export const addFirm = async (req, res, next) => {
  const { Firm_name, GSTIN, PAN, DL, Food_License, address, city, PIN } =
    req.body;

  if (
    !Firm_name ||
    !GSTIN ||
    !PAN ||
    !DL | !Food_License ||
    !address ||
    !city ||
    !PIN
  )
    return next(new ErrorHandler("please provide all details", 400));

  const data = await Firm.create({
    Firm_name,
    GSTIN,
    PAN,
    DL,
    Food_License,
    address,
    city,
    PIN,
  });

  res.status(201).json({
    success: true,
    message: `${Firm} Added `,
  });
};
