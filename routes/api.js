import express from 'express';
const router =express.Router();
import * as FeaturesController from "../app/controllers/FeaturesController.js"


router.get("/feature1/TokenEncode",FeaturesController.TokenEncode);
router.get("/feature2/TokenDecode",FeaturesController.TokenDecode);
router.get("/feature3/Email",FeaturesController.Email);

export default router;