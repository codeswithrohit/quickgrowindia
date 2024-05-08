import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
  
    
    let orders = await Order.find({ status: 'Paid'})
    res.status(200).json({ orders })
  }

  export default connectDb(handler);