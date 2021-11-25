const { AuthenticationError } = require('apollo-server-express');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {user: async (parent, args, context) => {
        if (context.user) {
            const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
            });

            user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

            return user;
        }

        throw new AuthenticationError('Not logged in');
    }
}
};

module.exports = resolvers;
