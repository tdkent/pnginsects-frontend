// layout
export interface NavLink {
  id: number;
  text: string;
  root?: boolean;
  sublinks?: {
    id: number;
    text: string;
  }[];
}

// cloudinary
export interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: "upload";
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
}
