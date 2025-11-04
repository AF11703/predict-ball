import express from "express";
import { 
  getAllGamesStats, 
  getTeamsGameStats, 
  predictMatchup 
} from "../controllers/games.js";


const router = express.Router();

router.route('/games').get(getAllGamesStats);
router.route('/games/:abbr').get(getTeamsGameStats);
router.route('/games/predict').post(predictMatchup)

export default router;