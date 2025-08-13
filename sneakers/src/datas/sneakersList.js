// Imports des images de sneakers une par marque
import airMax from '../assets/sneakers/airJordan.jpg'; //jordan
import forceZoom from '../assets/sneakers/airJordan.jpg'; // Jordan
import airJordan from '../assets/sneakers/airJordan.jpg';
import allStar from '../assets/sneakers/chuckTaylor.jpg'; // converse
import chuckTaylor from '../assets/sneakers/chuckTaylor.jpg';
import runStar from '../assets/sneakers/chuckTaylor.jpg';
import sneakersRouge from '../assets/sneakers/basketsPatch.jpg'; // Givenchy
import basketsPatch from '../assets/sneakers/basketsPatch.jpg';
import urbanStreet from '../assets/sneakers/basketsPatch.jpg';
import airForce from '../assets/sneakers/airJordan.jpg'; // jordan

export const sneakersList = [
  {
    id: '1',
    nom: 'Air Max Isla Sandal',
    marque: 'Nike',
    prix: 69.95,
    style: 'Casual',
    esthetique: 4,
    confort: 5,
    image: airMax // <- nom simplifié de la sneaker
  },
  {
    id: "2",
    nom: "Force Zoom Trout 7 Pro",
    marque: "Nike",
    prix: 84.95,
    style: "Training",
    esthetique: 3,
    confort: 4,
    image: forceZoom,
    bestSeller: true
  },
  {
    id: "3",
    nom: "Air Jordan 4 RM",
    marque: "Nike",
    prix: 115,
    style: "Streetwear",
    esthetique: 5,
    confort: 3,
    image: airJordan
  },
  {
    id: "4",
    nom: "All Star",
    marque: "Converse",
    prix: 69.99,
    style: "Casual",
    esthetique: 4,
    confort: 4,
    image: allStar
  },
  {
    id: "5",
    nom: "Chuck Taylor All Star Lift",
    marque: "Converse",
    prix: 85,
    style: "Streetwear",
    esthetique: 4,
    confort: 1,
    image: chuckTaylor
  },
  {
    id: "6",
    nom: "Run Star Hike Platform",
    marque: "Converse",
    prix: 110,
    style: "Streetwear",
    esthetique: 3,
    confort: 1,
    image: runStar,
    bestSeller: true
  },
  { id: "7",
    nom: "Sneakers Rouge Vif",
    marque: "Givenchy",
    prix: 438,
    style: "Mode",
    esthetique: 5,
    confort: 4,
    image: sneakersRouge
  },
  {
    id: "8",
    nom: "Baskets à Patch Logo",
    marque: "Givenchy",
    prix: 374,
    style: "Urbain",
    esthetique: 4,
    confort: 4,
    image: basketsPatch
  },
  {
    id: "9",
    nom: "Urban Street Sneaker",
    marque: "Givenchy",
    prix: 450,
    style: "Mode",
    esthetique: 5,
    confort: 2,
    image: urbanStreet
  },
  {
    id: "10",
    nom: "Air Force 1",
    marque: "Nike",
    prix: 119.99,
    style: "Streetwear",
    esthetique: 3,
    confort: 5,
    image: airForce
  }
];
