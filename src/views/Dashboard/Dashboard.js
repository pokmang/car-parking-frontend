import React, { useEffect, useState, Component } from "react";
import { LineChart,Line,PieChart,Pie,RadialBarChart,RadialBar,Legend ,} from "recharts";
import { CardActions, CardContent,Button, Divider, Table,TableBody,TableCell,TableRow,} from "@material-ui/core";
import { Card, CardBody, Row } from "reactstrap";
import { Statistic, Col } from "antd";
import { Line as LineA } from "react-chartjs-2"; 
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./card.css";
import "./chart.css";
import "react-dropdown/style.css";
import axios from "axios";
const api = 'http://localhost:8000/dashboard'


var moment = require("moment");
const time = moment().format("DD MMMM YYYY");

const data2 = [
  { name: "Group A", value: 45 },
  { name: "Group B", value: 300 },
];
const data3 = [
  { name: "car", uv: 31.47, pv: 2400, fill: "#3BD259" },
  { name: "Car parking", uv: 26.69, pv: 4567, fill: "#8EA6F7" },
  { name: "Car VIP", uv: 15.69, pv: 1398, fill: "#FDA378" },
];
const style = { top: 15, left: 250, lineHeight: "24px" };
const COLORS = ["#63C2DE", "#20A8D8"];
const data4 = {
  labels: ["10.00", "10.30", "11.30", "12.00", "12.02", "12.20"],

  datasets: [
    {
      label: "Incoming",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#54D8FF",
    },
    {
      label: "Outgoing",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#A3A0FB",
    },
  ],
};

const Dashboard = () => {
  
  const [dashboard, setDashboard] = useState([]);
  const [realtime, setRealtime] = useState([]);
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState([{}]);
  // const [card,setcard] = useState({totalcar:0,parkingcar:0,deliverycar:0,vipcar})



  useEffect(() => {
    fetchDashboard();
  }, []);
  
  const fetchDashboard = async () => {
    let dashboard = await axios.get(api);
    setDashboard(dashboard.data);
  };
          
  
  const tableRealtime = () => {
        if (realtime.success) {
            realtime.data.sort((a, b) => new moment(a.time) - new moment(b.time));
              return (
                <TableBody>
                  {realtime.data.slice(0, 3).map((realtime) => (
                    <TableRow hover key={realtime.id}>
                      <TableCell>
                        <img src={realtime.imgCar} />
                      </TableCell>
                      <TableCell>{realtime.numberOfcars}</TableCell>
                      <TableCell>{moment(realtime.time).format("hh:mm:ss")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                );
            }
          };

        


  let totalcar = 0;
  let parkingcar = 0;
  let deliverycar = 0;
  let vipcar = 0;

  if (dashboard.success) {
    totalcar = dashboard.info.totalCars;
    parkingcar = dashboard.info.carParking;
    deliverycar = dashboard.info.deliveryParking
    vipcar = dashboard.info.carVIP
  } else {
    return <div>Data Dashboard Error</div>;
    console.log("No data");
  }

  console.log("dashboard", dashboard);
  console.log("realtime", realtime);
  console.log("data", data);
  console.log("graph", graph);

  const datagraph = [];
  if (graph.success) {
    graph.data.forEach((deta) => {
      const newData = {};
      newData.name = deta.date;
      newData.number = deta.totalCars;
      datagraph.push(newData);
      console.log("test1", newData);
    });
  }

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6" lg="2" md="6" xl="4">
          <Card
            className="text-white"
            style={{ background: "#3BD259" }}
            id="card"
          >
            <img src="https://sv1.picz.in.th/images/2020/06/09/q60ITE.png" alt="car1" className="absolute"/>
            <CardBody className="pb-0">
              <img src="https://sv1.picz.in.th/images/2020/06/09/q60ITE.png" alt="car1" className="logo1"/>
              <span className="textcard1">Number of cars</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{totalcar}</h4>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="6" md="6" xl="4">
          <Card
            className="text-white"
            style={{ background: "#8EA6F7" }}
            id="card"
          >
            <img
              src="https://sv1.picz.in.th/images/2020/06/09/q670BQ.png"
              alt="parking1"
              
              className="absolute"
            />
            <CardBody className="pb-0">
              <img
                src="https://sv1.picz.in.th/images/2020/06/09/q670BQ.png"
                alt="parking1"
                
                className="logo2"
              />
              <span className="textcard2">Car Parking</span>
            </CardBody>

            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{parkingcar}</h4>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="6" md="6" xl="4">
          <Card
            className="text-white"
            style={{ background: "#FC81DF" }}
            id="card"
          >
            <img
              src="https://sv1.picz.in.th/images/2020/06/09/q60MlN.png"
              alt="delivery1"
              
              className="absolute"
            />
            <CardBody className="pb-0">
              <img
                src="https://sv1.picz.in.th/images/2020/06/09/q60MlN.png"
                alt="delivery1"
                
                className="logo3"
              />
              <span className="textcard3">Delivery Parking</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{deliverycar}</h4>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" lg="6" md="6" xl="4">
          <Card
            className="text-white"
            style={{ background: "#FDA378" }}
            id="card"
          >
            <img
              src="https://sv1.picz.in.th/images/2020/06/09/q67S8n.png"
              alt="vip1"
              
              className="absolute"
            />
            <CardBody className="pb-0">
              <img
                src="https://sv1.picz.in.th/images/2020/06/09/q67S8n.png"
                alt="vip1"
                
                className="logo4"
              />
              <span className="textcard4">Car VIP</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{vipcar}</h4>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Card id="chrat1">
              <CardBody className="pb-0">
                <h4>Statiscs</h4>

                <Statistic value={data.length} className="satistic" />
                <div className="price">
                  <img src="https://sv1.picz.in.th/images/2020/06/09/q60l9D.png" alt="price"  className="price" />
                  <text>{totalcar}</text>
                  <text>({totalcar})</text>
                </div>
                <LineChart width={900} height={200} data={datagraph}>
                  <Line dataKey="number" stroke="#1DAAFF" /> */}
                  {/* <CartesianGrid stroke="#ccc" className="line" /> */}
                </LineChart>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card className="chart4">
                <CardBody className="pb-0">
                  <div>
                    <RadialBarChart
                      width={500}
                      height={300}
                      cx={140}
                      cy={90}
                      innerRadius={20}
                      outerRadius={70}
                      barSize={10}
                      data={data3}
                    >
                      <RadialBar
                        minAngle={15}
                        label={{ position: "insideStart", fill: "#fff" }}
                        background
                        clockWise
                        dataKey="uv"
                      />
                      <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}
                      />
                    </RadialBarChart>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="chart4">
                <CardBody className="pb-0">
                  <div className="chartline">
                    <small>2.119345</small>
                    <small className="bsl">Buy Sell</small>
                    <h5>807.53</h5>
                    <LineA data={data4} width={400} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Card id="chrat2">
            <CardBody className="pb-0">
              <h3>Real time</h3>
              <h6>{time}</h6>
              <div className="move">
                <text>Movement</text>
                <div>
                  <img src="https://sv1.picz.in.th/images/2020/06/09/q60KmE.png" alt="car"  className="rtcar" />
                  <text id="car">{totalcar}</text>
                </div>
                <div>
                  <img src="https://sv1.picz.in.th/images/2020/06/09/q60bmy.png" alt="parking"  className="rtpark" />
                  <text id="car">{parkingcar}</text>
                </div>
              </div>

              <PieChart width={250} height={200}>
                <Pie
                  data={data2}
                  cx={120}
                  cy={95}
                  innerRadius={60}
                  outerRadius={70}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {/* {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))} */}
                </Pie>
              </PieChart>
            </CardBody>
            <CardContent>
              <PerfectScrollbar>
                <Table>{tableRealtime()}</Table>
              </PerfectScrollbar>
            </CardContent>
            <Divider />
            <CardActions id="dd">
              <Button color="primary" size="small" variant="text">
                View all <ArrowDropDownIcon />
              </Button>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
