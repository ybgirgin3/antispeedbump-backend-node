export const scrapeParser = (data: object) => {
  const ret = {};
  const user_data = data['data']['user'];
  const medias = user_data['edge_owner_to_timeline_media'];

  // text
  ret['id'] = user_data['id'];
  ret['username'] = user_data['username'];
  ret['profile_picture'] = user_data['profile_pic_url_hd'];
  ret['full_name'] = user_data['full_name'];
  ret['biography'] = user_data['biography'];
  ret['bio_links'] = user_data['bio_links'];
  ret['is_private'] = user_data['is_private'];
  ret['pronouns'] = user_data['pronouns'];

  if (user_data['is_private']) {
    console.log(
      'Account is private, Data will be limited. And no media will be included',
    );
    return ret;
  }

  // posts / media
  ret['medias'] = { count: medias['count'], media: medias['edges'] };

  return ret;
};
