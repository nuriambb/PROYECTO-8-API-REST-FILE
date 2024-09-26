const mongoose = require('mongoose')
const Campania = require("../../api/models/campanias_models")

const campaniasData = [
  {
    marca: 'Loreal',
    titulo: 'Productos Keratina',
    fecha: '02/02/2025',
    imgURL: "",
    influencer: []
  },
  {
    marca: 'HBO',
    titulo: 'Evento Juego de Tronos',
    fecha: '03/02/2025',
    imgURL: "",
    influencer: []
  },
 
]

const seedCampanias = async () => {
  try {
    await mongoose.connect('mongodb+srv://proyecto8:EmJ4XTTfZJm4S8Rl@proyecto8-influs.emccz.mongodb.net/?retryWrites=true&w=majority&appName=proyecto8-influs');

    for (const campaniaData of campaniasData) {
    
      const existingCampania = await Campania.findOne({ titulo: campaniaData.titulo });

     
      if (!existingCampania) {
        const campania = new Campania({
          marca: campaniaData.marca,
          titulo: campaniaData.titulo,
          fecha: campaniaData.fecha,
          imgURL: campaniaData.imgURL,
          influencer: campaniaData.influencer 
        });

        await campania.save();
        console.log(`Campania creada: ${campania.titulo}`);
      } else {
        console.log(`La campania ${campaniaData.titulo} ya existe.`);
      }
    }

    console.log('Semilla completada');
  } catch (error) {
    console.error('Error al sembrar campanias:', error);
  } finally {

    await mongoose.disconnect();
  }
};
seedCampanias()


