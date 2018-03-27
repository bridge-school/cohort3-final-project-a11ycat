import mongoose, { Schema } from 'mongoose';

export const ratingsSchema = new Schema({
  accessible_parking: Boolean,
  automatic_front_door: Boolean,
  front_door_ramp: Boolean,
  legible_signage: Boolean,
  service_animal_welcome: Boolean
});

export const placeSchema = new Schema({
  name: String,
  lat: Number,
  lon: Number,
  ratings: [ratingsSchema]
});

export const Place = mongoose.model('Place', placeSchema);
export const Ratings = mongoose.model('Ratings', ratingsSchema);
