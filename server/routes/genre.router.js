// - IMPORTING -
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// * Route to get genres for a specific movie title
router.get("/:title", (req, res) => {
  // Declaring movie's title as variable for query
  const movieTitle = req.params.title;

  // Query to select genres of a specific movie
  const query = `
    SELECT "genres"."name"
    FROM "movies_genres"
    JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id"
    JOIN "genres" ON "movies_genres"."genre_id" = "genres"."id"
    WHERE "movies"."title" = $1;
  `;

  // Database request
  pool
    .query(query, [movieTitle])
    .then((result) => {
      // Logging
      console.log("Result is is:", result.rows);

      // Declaring result object's name property as variable
      const genres = result.rows.map((row) => row.name);
      res.send(genres);
    })
    .catch((error) => {
      console.error("Error fetching genres:", error);
      res.sendStatus(500);
    });
});

// - EXPORTING router -
module.exports = router;