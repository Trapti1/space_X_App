import React from 'react';
import './App.css';
import $ from 'jquery';




class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.handleSelect = this.handleSelect.bind(this);
    this.handleLaunching = this.handleLaunching.bind(this);
    this.handleLanding = this.handleLanding.bind(this);



  }
  state = {
    isLoading: true,
    users: [],
    error: null,
    yearvalue: "2019",
    success_launch:true,
    success_land:true,
  };

  fetchUsers() {
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
    $('.buttonstyle , .buttonclass, .buttonclass_bottom').click(function(){
      $('.buttonstyle , .buttonclass, .buttonclass_bottom').removeClass("active");
      $(this).addClass("active");
  });
  }
 
  handleSelect(key) {
    this.setState({ yearvalue: key });
  }

  handleLaunching(key) {
    this.setState({ success_launch: key });
  }

  handleLanding(key) {
    this.setState({ success_land: key });
  }
  render() {
    const { isLoading, users, error } = this.state;
     return (
      <React.Fragment>
      <div className="row" >
        <div className="header-title">SpaceX Launch Programs </div>
      <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 filter"> 
      <div className="filterclass">Filters</div>
      <div className="content">Launch Year</div>
      <hr></hr>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
          <button className="buttonstyle" onClick={() => this.handleSelect("2006")}>2006</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2007")}>2007</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2008")}>2008</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2009")}>2009</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2010")}>2010</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2011")}>2011</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2012")}>2012</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2013")}>2013</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2014")}>2014</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2015")}>2015</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2016")}>2016</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2017")}>2017</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle" onClick={() => this.handleSelect("2018")}>2018</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
        <button className="buttonstyle active" onClick={() => this.handleSelect("2019")}>2019</button>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonstyle"onClick={() => this.handleSelect("2020")}>2020</button>
        </div>
        

      </div>
      <div className="contentful"  >Successful Launch  </div>

      <hr></hr>

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonclass active"  onClick={() => this.handleLaunching(true)} >True</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonclass" onClick={() => this.handleLaunching(false)} >False</button>
        </div>

      </div>
      <div className="contentful">Successful Landing</div>
      <hr></hr>

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonclass_bottom active" onClick={() => this.handleLanding(true)}>
          True
        </button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button className="buttonclass_bottom" onClick={() => this.handleLanding(false)}>False</button>
        </div>

      </div>
      </div>
<div className="col-xs-8 col-sm-10 col-md-10 col-lg-10 row">
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.map(user => {
          
          const {rocket,links, mission_name, flight_number, mission_id,launch_year,launch_success } = user;
          if(launch_year == this.state.yearvalue && launch_success== this.state.success_launch && rocket.first_stage.cores[0].land_success==this.state.success_land){
          return (
            
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 text-center card" key={flight_number}>
              <img src={links.mission_patch_small} className="image"/> 
              <div >{mission_name} # {flight_number}</div>
              <div className="row"> <div className="col-sm-5 col-md-5 col-lg-5 ">Mission Ids:</div><div className="col-sm-5 col-md-5 col-lg-5">{mission_id} </div></div>
              <div className="row"><div className="col-sm-5 col-md-5 col-lg-5">Launch Year: </div><div className="col-sm-5 col-md-5 col-lg-5">{launch_year} </div></div>
              <div className="row"><div className="col-sm-5 col-md-5 col-lg-5">Successful Launch: </div><div className="col-sm-5 col-md-5 col-lg-5"> {JSON.stringify(launch_success)} </div></div>
              <div className="row"><div className="col-sm-5 col-md-5 col-lg-5">Successful Landing: </div><div className="col-sm-5 col-md-5 col-lg-5">{JSON.stringify(rocket.first_stage.cores[0].land_success)} </div></div>


              
            </div>
            
          );
          }
        })
      ) : (
        <h3>Loading...</h3>
      )}
      </div>
              </div>

    </React.Fragment>
     )
   }
 }
 
 
 export default App;
