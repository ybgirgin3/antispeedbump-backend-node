import { ScrapeResponseDto } from './db/dto/antispeed.dto';

export const scrapeParser = (data: object): ScrapeResponseDto => {
  const user_data = data['data']['user'];
  const medias = user_data['edge_owner_to_timeline_media'];

  return {
    id: user_data['id'],
    username: user_data['username'],
    profile_picture: user_data['profile_pic_url_hd'],
    full_name: user_data['full_name'],
    biography: user_data['biography'],
    bio_links: user_data['bio_links'],
    pronouns: user_data['pronouns'],
    is_private: user_data['is_private'],
    medias: user_data['is_private']
      ? {}
      : { count: medias['count'], media: medias['edges'] },
  };
};
