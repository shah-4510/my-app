import React, {Component} from "react";
import SeriesList from "../SeriesList";
import Loader from "../../component/Loader";
import Intro from "../../component/intro/App";
// import { fetch } from 'whatwg-fetch';

class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isFetching: false 
      }
    
    //   componentDidMount(){
        // const series = ["Vikings", "Game of Thrones"];
        // setTimeout(() => {
        //   this.setState({ series: series});
        // }, 2000)
        // fetch('https://api.tvmaze.com/search/shows?q=Vikings')
        //   .then((response) => response.json())
        //   .then(json => this.setState({ series: json }))
      //} //api request

      onSeriesInputChange = e => {
        const value = e.target.value;
        this.setState({ seriesName: value, isFetching: true });
        fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
          .then((response) => response.json())
          .then(json => this.setState({ series: json, isFetching: false }))
      }
      
    render() {
        const { series, seriesName, isFetching} = this.state;
        return(
            <div>
                <Intro message = 'Here you can find all of your most loved series.'/>
                {/* The length of series array = {this.state.series.length} */}
                <div>
                    <input 
                        value = { seriesName} 
                        type="text" 
                        onChange={this.onSeriesInputChange}/>
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV Series have been found with this name</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && <SeriesList list= {this.state.series}/>
                }
                <SeriesList list = {this.state.series}/>
            </div>
        )
    }
}

export default Series;