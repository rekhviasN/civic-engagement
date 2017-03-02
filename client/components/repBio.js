import React from 'react';

import Title from 'grommet/components/Title';
// import Card from 'grommet/components/Card';
import Label from 'grommet/components/Label';

// anchor and icons
import Anchor from 'grommet/components/Anchor';
import LinkIcon from 'grommet/components/icons/base/Link';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import PlatformGoogleIcon from 'grommet/components/icons/base/PlatformGoogle';
import SocialYoutubeIcon from 'grommet/components/icons/base/SocialYoutube';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';


const RepBio = ({ bio, google }) => {

  console.log('repbio: ', bio, google);
  // static info is available via props.rep
  const { title } = bio.roles[0];
  const { facebook_account, twitter_account, 
          youtube_account, url, google_entity_id } = bio;

  const { first_name, middle_name, last_name } = bio;
  const first = `${first_name} ${middle_name}`;

  return (
    <div className="rep-bio">
      <img src={google.photoUrl} alt={bio.name} />
      <Title>{ title }</Title>
      <h3>{ first }</h3>
      <h1>{ last_name }</h1>

      <Anchor icon={<LinkIcon />}
        label={`${url}`}
        animateIcon={true}
        href={`${url}`}
      /><br />
      <Anchor icon={<SocialFacebookIcon />}
        label={`${facebook_account}`}
        animateIcon={true}
        href={`http://www.facebook.com/${facebook_account}`}
      /><br />
      <Anchor icon={<SocialTwitterIcon />}
        label={`${url}`}
        animateIcon={true}
        href={`${url}`}
      /><br />
      
      
      <SocialYoutubeIcon />
      <PlatformGoogleIcon />
    </div>
  );
};

export default RepBio;

// date_of_birth: "1950-11-23"
// url: "https://www.schumer.senate.gov"
// times_topics_url: "http://topics.nytimes.com/top/reference/timestopics/people/s/charles_e_schumer/index.html"
// times_tag: "Schumer, Charles E (Per)"
// govtrack_id: "300087"
// cspan_id: "5929"
// icpsr_id: "14858"
// twitter_account: "SenSchumer"
// facebook_account: "chuckschumer"
// facebook_id: "15771239406"
// youtube_account: "SenatorSchumer"
// google_entity_id: "/m/01w74d"
// rss_url: ""
// domain: "www.schumer.senate.gov"
// current_party: "D"
// most_recent_vote: "2017-03-02"
