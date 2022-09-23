import {Cast} from "./Cast";
import Gift from "./Gift";


export interface Medal {
  id: number;
  name: string;
  count_medal: number;
  image: string;
}

export interface Level {
  id: number;
  name: string;
  point_default: number;
  point_max?: number,
  point_min?: number
}

export interface ImageModel {
  id: number;
  link: string;
  model_type: string;
  model_id: number;
  type: string;
  created_at?: any;
  updated_at?: any;
}

export interface Level2 {
  id: number;
  name: string;
  point_default: number;
}

export interface Pivot {
  taggable_id: number;
  tag_id: number;
  taggable_type: string;
}

export interface District2 {
  id: number;
  name: string;
}

export interface Province2 {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
  category_id?: string;
  description?: string;
  type?: string;
  created_by?: any;
  updated_by?: any;
  deleted_by?: any;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: any;
  pivot?: Pivot;
}

export interface District2 {
  id: number;
  name: string;
}

export interface Province2 {
  id: number;
  name: string;
}

export interface CastGifts {
  id: number;
  name: string;
  count_gift: number;
  image: string;
}

export interface CastDetailResponse {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  birthday: string;
  avatar: string;
  rate: number;
  bio: string;
  repeat_booking_rate: string;
  level_id: number;
  point: number;
  gifts: Gift[];
  setting_gifts?: any;
  status: string;
  api_token: string;
  created_by?: any;
  updated_by?: any;
  deleted_by?: any;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
  address: string;
  province_id: number;
  district_id: number;
  online_status?: any;
  height: string;
  weight: string;
  medals: Medal[];
  related_cast: Cast[];
  age: number;
  desirable_rate: number;
  repeated_rate: number;
  extended_rate: number;
  is_birthday_month: boolean;
  is_interested: boolean;
  is_newbie: boolean;
  images: ImageModel[];
  level: Level2;
  district: District2;
  province: Province2;
  show_tags: any[];
  tags: Tag[];
  numb_rate: number;
  today_words?: string;
}
