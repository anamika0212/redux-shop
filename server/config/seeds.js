const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cookies',
      description:
        'One pack of delicious cookies',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 3.50,
      quantity: 500
    },
    {
      name: 'Coffee',
      description:
        'Canned Coffee for a wonderful morning.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 2.50,
      quantity: 400
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Best in class',
      image: 'toilet-paper.jpg',
      price: 9.99,
      quantity: 20
    },
    {
      name: 'Soap',
      category: categories[1]._id,
      description:
        'Please Keep yourself clean.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Spoons',
      category: categories[1]._id,
      description:
        'You may need them while eating',
      image: 'wooden-spoons.jpg',
      price: 12.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Create Memories',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'Work on the go',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Sleep Well',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Playing is fun',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Real ones are very costly.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Great alternative to dolls.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Learning game',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@demo.com',
    password: 'demo123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@test.com',
    password: 'test123'
  });

  console.log('users seeded');

  process.exit();
});
