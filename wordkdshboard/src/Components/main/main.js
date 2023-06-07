import React from "react";
import "./Main.css";
import Chart from "../Charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__cards">
        <div className="card">
          <i className="fa fa-clipboard fa-2x text-black"></i>
          <div className="card_inner">
            <p className="text-primary-p">Used Space</p>
            <span className="font-bold text-title">"49/50GB"</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-home fa-2x text-black"></i>
          <div className="card_inner">
            <p className="text-primary-p">Revenue</p>
            <span className="font-bold text-title">"$34,245"</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-info-circle fa-2x text-black"></i>
          <div className="card_inner">
            <p className="text-primary-p">Fixed Issues</p>
            <span className="font-bold text-title">75</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-twitter fa-2x text-black"></i>
          <div className="card_inner">
            <p className="text-primary-p">Followers</p>
            <span className="font-bold text-title">245</span>
          </div>
        </div>
      </div>

      <div className="chart">
        <div className="chart__left">
          <div className="chart__left_title">
            <h1>Daily Sales</h1>
            <p>55% increase in today's sales</p>
          </div>
        </div>
        <i className="fa fa-arrow-up"></i>
      </div>

      <Chart />

      <div className="chart1">
        <div className="chart1__center">
          <div className="chart1__center_title">
            <h1>Email Subscriptions</h1>
            <p>Last Campaign Performance</p>
          </div>
        </div>

        <Chart />

        <div className="chart2">
          <div className="chart2__right">
            <div className="chart2__right_title">
              <h1>Completed Tasks</h1>
              <p>Last Campaign Performance</p>
            </div>
          </div>

          <div className="card1">
            <h1>Tasks:</h1>
            <i className="fa fa-bug"></i>
            <h2>BUGS</h2>
            <i className="fa fa-chevron-left fa fa-chevron-right"></i>
            <h3>Website</h3>
            <i className="fa fa-cloud"></i>
            <h3>Website</h3>
          </div>

          <div className="card2">
            <h4>Employees Stats</h4>
            <p>New employees on 15th September, 2016</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
