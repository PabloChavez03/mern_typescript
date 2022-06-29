import { RequestHandler } from "express";
import Videos from "../models/Videos";
import { IVideo } from "../utils/types";


export const getVideos: RequestHandler = (req, res) => {
  Videos.find()
    .then((videos) => {
      videos
        ? res.status(200).json(videos)
        : res.status(404).json({ videos: "Not found videos" });
    })
    .catch((err) => res.status(500).json({ errorAll: err.message }));
};

export const getVideo: RequestHandler = (req, res) => {
  const { id } = req.params;

  Videos.findById(id)
    .then((video) => {
      video
        ? res.status(200).json(video)
        : res.status(404).json({ video: "Not found video" });
    })
    .catch((err) => res.status(500).json({ errorIdFound: err.message }));
};

export const createVideos: RequestHandler = (req, res) => {
  const { title,description,url } :IVideo = req.body;
  const video = new Videos({ title,description,url });
  video
    .save()
    .then((response) => res.status(201).json(response));
};

export const deleteVideos: RequestHandler = (req, res) => {
  const { id } = req.params;

    Videos.findByIdAndDelete(id)
      .then((video) => {
        if (!video) {
          return res.status(400).json({video: 'You have already deleted the video'});
        }
        return res.status(200).send("Deleted video");
      })
      .catch((err) => res.status(404).json({ message: err.message }));
};

export const updateVideos: RequestHandler = (req, res) => {
  const { id } = req.params;
  Videos.findByIdAndUpdate(id, req.body, {new: true})
    .then((video) => res.status(200).json(video))
    .catch((error) => res.status(404).json({updateError: error.message}));
}
