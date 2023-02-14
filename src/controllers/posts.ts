/** source/controllers */
import { Request, Response, NextFunction } from 'express';


// valid Insurance
const validInsurance = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  const { memberId } = req.body;

  if (parseInt(memberId) < 100)

    return res.status(200).json({
      message: 'valid'
    });
  else
    return res.status(200).json({ message: 'invalid' });
};

export default { validInsurance };