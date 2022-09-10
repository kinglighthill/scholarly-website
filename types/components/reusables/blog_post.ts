export interface BlogPostData {
  feature_image: string;
  title: string;
  excerpt: string;
  published_at: string;
  reading_time: number;
  url: string;
}

export interface BlogPostProps {
  post_data: BlogPostData;
}