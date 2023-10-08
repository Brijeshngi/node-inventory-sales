import { Packing } from "../models/Packing.js";

export const createPacking = async (req, res, next) => {
  const { packing_type, packing_quantity } = req.body;

  if (!packing_type || !packing_quantity)
    return next(new ErrorHandler("Please provide all details", 400));

  const data = await Packing.create({
    packing_type,
    packing_quantity,
  });

  res.status(201).json({
    success: true,
    message: `created`,
  });
};

export const allPacking = async (req, res, next) => {
  const data = await Packing.find({});

  if (data.length <= 0) return next(new ErrorHandler("No data found", 404));

  res.status(200).json({
    data,
  });
};
