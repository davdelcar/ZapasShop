import { Order } from './Order.js'
import { Shoe } from './Shoe.js'
import { Stock } from './Stock.js'
import { User } from './User.js'
import { Cart } from './Cart.js'
import { CartShoe } from './CartShoe.js'

User.hasMany(Order)
Order.belongsTo(User)

User.hasOne(Cart)
Cart.belongsTo(User)

Shoe.hasMany(Stock)
Stock.belongsTo(Shoe)

Shoe.hasMany(CartShoe)
CartShoe.belongsTo(Shoe)

Cart.hasMany(CartShoe)
CartShoe.belongsTo(Cart)

export { User, Order, Cart, Stock, CartShoe, Shoe }
