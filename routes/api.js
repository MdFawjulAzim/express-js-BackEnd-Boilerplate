import express from 'express';
const router =express.Router();
import * as FeaturesController from "../app/controllers/FeaturesController.js"


router.get("/feature1/TokenEncode",FeaturesController.TokenEncode);
router.get("/feature2/TokenDecode",FeaturesController.TokenDecode);

export default router;