import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
// our api library
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

// use `nfn` for const
const GithubProvider = ({ children }) => {
  //the default value of useState is mockUser
  //later we can use setGithubUser() to change the value
  //`dar` - destructured array
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  //request loading
  const [requests, setRequests] = useState(0);
  const [loading, setIsLoading] = useState(false);

  //check rate
  //nfn - named function
  const checkRequests = () => {
    //default is a GET
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        console.log(data);
        let {
          //data.rate contains the limit + remaining properties
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          //throw an error
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //error
  /**
   * useEffect()
   * Sometimes, we want to run some additional code after React has updated the DOM.
   * Network requests, manual DOM mutations, and logging are common examples of
   * effects that don’t require a cleanup.
   *
  What does useEffect do? 
  By using this Hook, you tell React that your component needs to do something after render. 
  React will remember the function you passed (we’ll refer to it as our “effect”), 
  and call it later after performing the DOM updates. 
  In this effect, we set the document title, 
  but we could also perform data fetching or call some other imperative API. 
   *
   * Once the app loads, use checkRequests() as the callback
   */
  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
