import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  function search(q) {
      type: "VIDEO_SEARCH"
      videos: q
    };

  // function searchAsync(q) {
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch(search(q));
  //     }, 500);
  //   };
  // }

  // searchAsync(q);
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(search(q));
        }, 500);
    };

};

export default handleVideoSearch;
