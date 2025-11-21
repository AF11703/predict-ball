import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PredictionResult from "../components/PredictionResult";
import axios from "axios";
import averageTeamStats from "../helper/averageTeamStats";
import { useQuery } from "@tanstack/react-query";
import queryStats from "../helper/queryStats";


const PredictionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [prediction, setPrediction] = useState(null);

  const { homeTeam, awayTeam } = location.state || {};

  const { data: responseHome, isLoading: loadingHome, error: errorHome } = useQuery({queryKey: ['statsHome'], queryFn: async () => queryStats(homeTeam.value)});
  const { data: responseAway, isLoading: loadingAway, error: errorAway } = useQuery({queryKey: ['statsAway'], queryFn: async () => queryStats(awayTeam.value)});

  const homeStats = responseHome?.data;
  const awayStats = responseAway?.data;  

  const { data: responsePrediction, isLoading: loadingPrediction, error: errorPrediction } = useQuery({queryKey: ['prediction'], queryFn: async () => {
    const homeAvgs = averageTeamStats(homeStats);
    const awayAvgs = averageTeamStats(awayStats);
    return await axios.post("http://localhost:3000/api/games/predict", {
      homeTeam: homeAvgs,
      awayTeam: awayAvgs
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }, enabled: !!homeStats && !!awayStats});

  const predictValue = responsePrediction?.data;

  useEffect(() => {
    if (!homeTeam || !awayTeam) {
      navigate("/");
      return;
    }

    // const homeAbbr = homeTeam.value;
    // const awayAbbr = awayTeam.value;

    // console.log(`Home: ${homeAbbr}`);
    // console.log(`Away: ${awayAbbr}`);

    // const fetchPrediction = async () => {
    //   setError(null);
    //   setLoading(true);

    //   try {
    //     const responseHome = await axios.get(`http://localhost:3000/api/games/${homeAbbr}`);
    //     const responseAway = await axios.get(`http://localhost:3000/api/games/${awayAbbr}`);

    //     console.log("Home Response", responseHome);
    //     console.log("Away Response", responseAway);

    //     const homeAvgs = averageTeamStats(responseHome.data);
    //     const awayAvgs = averageTeamStats(responseAway.data);

    //     console.log("Home avg", homeAvgs);
    //     console.log("Away avg", awayAvgs);

    //     const response = await axios.post("http://localhost:3000/api/games/predict", {
    //       homeTeam: homeAvgs,
    //       awayTeam: awayAvgs
    //     }, {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     });

    //     console.log(response.data);
    //     setPrediction(response.data);
    //   }
    //   catch (error) {
    //     console.error(error);
    //     setError(error);
    //   }
    //   finally{
    //     setLoading(false);
    //   }
    // }

    //fetchPrediction();
  }, [homeTeam, awayTeam, navigate]);

  useEffect(() => {
    if(predictValue) setPrediction(predictValue);
  }, [predictValue]);

  if (loadingHome || loadingAway || loadingPrediction) {
    return(
      <div className="flex flex-col justify-center items-center align-middle h-screen">
        <h2>Loading prediction...</h2>
      </div>
    );
  }

  if (errorHome || errorAway || errorPrediction) {
    const error = errorHome || errorAway || errorPrediction;
    console.error(error);
    if (error.status === 429) {
      return(
        <div className="flex flex-col justify-center items-center align-middle h-screen">
          <h2><span className="text-red-500/70">Error</span></h2>
          <p>Too many requests, please try again later</p>
      </div>
      )
    }
    return(
      <div className="flex flex-col justify-center items-center align-middle h-screen">
        <h2>Error</h2>
        <p>Something went wrong, please try again later</p>
      </div>
    );
  }

  if (prediction) {
    return(
      <PredictionResult homeTeam={homeTeam} awayTeam={awayTeam} prediction={prediction} />
    )
  }
  
}

export default PredictionPage;