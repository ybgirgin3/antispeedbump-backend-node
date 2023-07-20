export class ScrapeResponseDto {
  id: string;
  username: string;
  profile_picture: string;
  full_name: string;
  biography: string;
  bio_links: [];
  is_private: boolean;
  pronouns: [];
  medias: object;
}

export class AntiSpeedDto {
  scrapeResponse: ScrapeResponseDto;
  errorResponse: object;
}
