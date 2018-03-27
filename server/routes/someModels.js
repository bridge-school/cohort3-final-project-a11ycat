import express from 'express';

import { Place, Ratings } from '../models/placesModel';

const router = express.Router();

/* GET Places listing. */

router.get('/', function(req, res, next) {
  return (
    Place
      // we are providing the empty object to mean we are not giving any constraints -- we want them all!
      .find({})
      .then(places =>
        res
          .status(200) // explicitly set the status code to 200 to indicate the request was successful
          .send(places)
      )
      .catch(err => next(err))
  ); // if we get an error, propagate the error to the next middleware
});

/* POST a Places. (This will create one in the database, if successful) */
router.post('/:name', function(req, res, next) {
  const newPlace = new Place({
    name: req.params.name,
    lat: 2,
    lon: 2,
    ratings: [
      new Ratings({
        accessible_parking: false,
        automatic_front_door: true,
        front_door_ramp: true,
        legible_signage: true,
        service_animal_welcome: true
      })
    ]
  });

  newPlace
    .save()
    .then(() =>
      res
        .status(201) // explicitly set the status code to 201 to indicate an entry was successfully created
        .send(
          `Successfully created the model with name '${
            req.params.name
          }'! Try and view all the models now!`
        )
    )
    .catch(err => next(err));
});

/* DELETE a Places. (This will remove one in the database, if successful) */
router.delete('/:name', function(req, res, next) {
  Place.remove({ name: req.params.name })
    .then(() =>
      res
        .status(200) // explicitly set the status code to 201 to indicate the request was successful
        .send(
          `Successfully removed the model with name '${
            req.params.name
          }'! Try and view all the models now!`
        )
    )
    .catch(err => next(err)); // if we get an error, propagate the error to the next middleware
});

export default router;
