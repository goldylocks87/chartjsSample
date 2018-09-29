var axios = require('axios');

const TEST_RESULT_URI = 'https://limitless-temple-75281.herokuapp.com/testresults';

module.exports = {
  getData: function () {

    var requestUrl = `${TEST_RESULT_URI}`;

    return axios.get(requestUrl).then(function (res) {
      
        if (!res) return console.error('oh fuuuuuck');

        console.log('~~~ : ',res);

        const successes = res.testresults.filter( (testResult) => {
            return testResult.Outcome === 'Pass';
        });
    
        const fails = res.testresults.filter( (testResult) => {
            return testResult.Outcome !== 'Pass';
        });
    
        console.log( 'successes : ', successes.length );
        console.log( 'fails : ', fails.length );
        console.log( 'total : ', res.testresults.length );

    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
