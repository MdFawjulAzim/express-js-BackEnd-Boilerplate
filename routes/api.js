import express from 'express';
const router =express.Router();
import * as FeaturesController from "../app/controllers/FeaturesController.js"


router.get("/feature1/TokenEncode",FeaturesController.TokenEncode);

export default router;