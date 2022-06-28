import { Router } from "express";
import * as videosController from "../controllers/video.controller";

const router = Router();

router.get('/videos', videosController.getVideos);

router.get('/videos/:id', videosController.getVideo);

router.post('/videos', videosController.createVideos);

router.delete('/videos/:id', videosController.deleteVideos);

router.put('/videos/:id', videosController.updateVideos);


export default router;