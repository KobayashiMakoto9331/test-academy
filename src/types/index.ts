export type listVideo = {
  items: Video[] | undefined;
};

export type Video = {
  thumbnail_img_url: string;
  content_name: string;
  content_id: string;
  video_id: string;
};
