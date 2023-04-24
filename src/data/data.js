import { GiHotSpices, GiMeal } from 'react-icons/gi'
import { IoFastFood } from 'react-icons/io5'
import {
  MdFoodBank,
  MdOutlineAddBusiness,
  MdSavings,
  MdEditLocationAlt,
  MdOutlineAttachMoney,
} from 'react-icons/md'

export const data = [
  {
    id: 1,
    name: 'White rice & Chicken stew with pancakes ',
    category: 'Rice',
    image:
      'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 25.99,
  },
  {
    id: 2,
    name: 'Nigerian Ofada rice',
    category: 'Rice',
    image:
      'https://images.pexels.com/photos/1618955/pexels-photo-1618955.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 10.99,
  },
  {
    id: 3,
    name: 'Rice and Egg Sauce with toasted bread',
    category: 'Rice',
    image:
      'https://images.pexels.com/photos/7538055/pexels-photo-7538055.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 8.99,
  },
  {
    id: 4,
    name: 'Rice dumplings',
    category: 'Rice',
    image:
      'https://images.pexels.com/photos/2114062/pexels-photo-2114062.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 15.99,
  },
  {
    id: 5,
    name: 'Semo and Egusi',
    category: 'Local Nigerian Dishes',
    image:
      'https://media.istockphoto.com/id/1398351215/fr/photo/soupe-egusi-au-fufu-igname-pil%C3%A9e.jpg?b=1&s=612x612&w=0&k=20&c=mxSFDs3scHtC5SPTvF7Z4tGEx74d51WP4GAEICBRXqc=',
    price: 20.99,
  },
  {
    id: 6,
    name: 'Yellow garrie and vegitable soup',
    category: 'Local Nigerian Dishes',
    image:
      'https://media.istockphoto.com/id/1327486548/photo/nigerian-okra-soup-with-garri.jpg?s=612x612&w=0&k=20&c=AW5kYEgtpxoWw1198IiLQ-cyDj0ieCH9XWTiZU-ZKWI=',
    price: 18.99,
  },
  {
    id: 7,
    name: 'Moi Moi',
    category: 'Local Nigerian Dishes',
    image:
      'https://www.chefspencil.com/wp-content/uploads/Nigerian-Moi-Moi-960x960.jpg.webp',
    price: 5.99,
  },
  {
    id: 8,
    name: 'Amala with peanut and ewedu soup',
    category: 'Local Nigerian Dishes',
    image:
      'https://t4.ftcdn.net/jpg/03/79/47/45/360_F_379474557_vjJkefDeHbiDr7QtCordbJJXLBPMD5jz.jpg',
    price: 9.99,
  },
  {
    id: 9,
    name: 'Instant Noodles',
    category: 'Breakfast',
    image:
      'https://media.istockphoto.com/id/860563038/photo/delicious-tomyam-flavor-instant-noodle-in-paper-cup.jpg?s=612x612&w=0&k=20&c=5Ivmg_PK-Da9ImhmkPNk7AxDePLHNAEj95Gq5cwnOSc=',
    price: 8.99,
  },
  {
    id: 10,
    name: 'Potatoe and porridge',
    category: 'Breakfast',
    image:
      'https://media.istockphoto.com/id/1325028396/photo/hot-chicken-soup-with-potatoes-meat-and-fresh-dill-in-interesting-ceramic-dishes-on-parchment.jpg?s=612x612&w=0&k=20&c=bUzwPY-Rjm8CyoZS_GNMhyC8oTvBIK5h0Aqy5d_noEQ=',
    price: 15.99,
  },
  {
    id: 11,
    name: 'Bread deepings',
    category: 'Breakfast',
    image:
      'https://media.istockphoto.com/id/1311593740/photo/french-onion-soup-with-toasts-and-cheese-french-cuisine-vegetarian-food.jpg?s=612x612&w=0&k=20&c=0KH3XgPzUY8CxfzTKotEy5FZgVImVjucX9hRyo3pd9A=',
    price: 4.99,
  },
  {
    id: 12,
    name: 'White Oat',
    category: 'Breakfast',
    image:
      'https://media.istockphoto.com/id/1191863390/photo/traditional-homemade-chick-pea-hummus-drizzled-with-olive-oil-and-fresh-parsley-and-fresh.jpg?s=612x612&w=0&k=20&c=XoPThc2-VYKkSZxdiSdiJwzfPBBZde4ffVLgeSg2TIE=',
    price: 5.99,
  },
  {
    id: 14,
    name: 'Beef Burger',
    category: 'FastFood',
    image:
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 3.99,
  },
  {
    id: 15,
    name: 'Pizza',
    category: 'FastFood',
    image:
      'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 4.99,
  },
  {
    id: 16,
    name: 'SandWich',
    category: 'FastFood',
    image:
      'https://images.pexels.com/photos/6605653/pexels-photo-6605653.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1.99,
  },
  {
    id: 17,
    name: 'BiobaEats Special',
    category: 'FastFood',
    image:
      'https://images.pexels.com/photos/15476375/pexels-photo-15476375.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1.0,
  },
]

export const categories = [
  {
    id: 1,
    name: 'Spicy',
    images: <GiHotSpices size={36} />,
  },
  {
    id: 2,
    name: 'Heavy',
    images: <GiMeal size={36} />,
  },
  {
    id: 3,
    name: 'Junks',
    images: <IoFastFood size={36} />,
  },
  {
    id: 4,
    name: 'Local',
    images: <MdFoodBank size={36} />,
  },
  {
    id: 5,
    name: 'latest Deal',
    images: <MdOutlineAttachMoney size={36} />,
  },
  {
    id: 6,
    name: 'Resturant Reward',
    images: <MdOutlineAddBusiness size={36} />,
  },
  {
    id: 7,
    name: 'Points',
    images: <MdSavings size={36} />,
  },
  {
    id: 8,
    name: 'Location',
    images: <MdEditLocationAlt size={36} />,
  },
]
