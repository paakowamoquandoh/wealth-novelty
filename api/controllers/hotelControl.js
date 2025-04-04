import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"
//create
export const createHotel = async (req,res,next)=>{
    const newHotel = Hotel(req.body)
    try {
     const savedHotel = await newHotel.save()
     res.status(200).json(savedHotel)
    } catch (err) {
     next(err)
    }
}

//update
export const updateHotel = async (req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
       } catch (err) {
        next(err)
       }
}

//delete
export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
       } catch (err) {
        next(err)
       }
}

//get
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//getall
export const getAllHotels = async (req,res,next)=>{
  const limit = req.query.limit
  delete req.query.limit
  const { min, max, ...others} = req.query
  try {
    const hotels = await Hotel.find({...others, cheapestPrice: {$gt:min | 1, $lt:max || 999}}).limit(limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err)
  }
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "sedan" });
      const apartmentCount = await Hotel.countDocuments({ type: "suv" });
      const resortCount = await Hotel.countDocuments({ type: "others" });
  
      res.status(200).json([
        { type: "sedan", count: hotelCount },
        { type: "suv", count: apartmentCount },
        { type: "others", count: resortCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

  export const countByModel = async (req, res, next) => {
    try {
      const toyotaCount = await Hotel.countDocuments({ model: "Toyota" });
      const hondaCount = await Hotel.countDocuments({ model: "Honda" });
      const hyundaiCount = await Hotel.countDocuments({ model: "Hyundai" });
      const nissanCount = await Hotel.countDocuments({ model: "Nissan" });
      const benzCount = await Hotel.countDocuments({ model: "Benz" });
      const BMWCount = await Hotel.countDocuments({ model: "BMW" });
      const kiaCount = await Hotel.countDocuments({ model: "Kia" });
      const fordCount = await Hotel.countDocuments({ model: "Ford" });
      const otherModelsCount = await Hotel.countDocuments({ model: "Other" });
  
      res.status(200).json([
        { model: "Toyota", count: toyotaCount },
        { model: "Honda", count: hondaCount },
        { model: "Hyundai", count: hyundaiCount },
        { model: "Nissan", count: nissanCount },
        { model: "Benz", count: benzCount },
        { model: "BMW", count: BMWCount },
        { model: "Kia", count: kiaCount },
        { model: "Ford", count: fordCount },
        { model: "Other", count: otherModelsCount },
      ]);
    } catch (err) {
      next(err);
    }
  };
  

  // export const countByType = async (req, res, next) => {
  //   try {
  //     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  //     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  //     const resortCount = await Hotel.countDocuments({ type: "resort" });
  //     const villaCount = await Hotel.countDocuments({ type: "villa" });
  //     const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
  //     res.status(200).json([
  //       { type: "hotel", count: hotelCount },
  //       { type: "apartments", count: apartmentCount },
  //       { type: "resorts", count: resortCount },
  //       { type: "villas", count: villaCount },
  //       { type: "cabins", count: cabinCount },
  //     ]);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
  
  export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };


