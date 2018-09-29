var React = require('react');
var { Bar } = require('react-chartjs-2');
var testResultsAPI = require('../api/testResultsAPI');

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: 
        [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }]
    };

var SampleChart = React.createClass({
    componentDidMount: function () {
        var that = this;

        testResultsAPI.getData().then(function (data) {
          that.setState({
            data: data
          });
        }, function (errorMessage) {
            alert(errorMessage);
        });
    },
    render: function () {
        return (
            <div>
                <Bar data={data}
                    options={{ maintainAspectRatio: false }} />
            </div>
        );
    }
});

module.exports = SampleChart;
