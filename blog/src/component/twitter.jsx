import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterTimeLine = () => {

  // Embeded Twitter api call that fetched the data of a particular user mentioned in screenName...
  return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Arsh_deep_19" // change to your username
        options={{height: 250}}
        />
  );
}

export default TwitterTimeLine;