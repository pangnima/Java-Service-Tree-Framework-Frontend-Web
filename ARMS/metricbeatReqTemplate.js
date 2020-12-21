function metricbeat(selectedNodeHost){

    console.log("<== metricbeat ==> ");
    console.log("before savedNodeHost ==> " + savedNodeHost);
    if(typeof selectedNodeHost == "undefined" || selectedNodeHost == null || selectedNodeHost == "")
        console.log("savedNodeHost = " + savedNodeHost);
    else
        savedNodeHost = $.trim(selectedNodeHost);

    var start = $("#reservationtime").data().daterangepicker.startDate;
    console.log("start hour check = " + start.format('H'));
    var startHours = parseInt(start.format('H'));
    var startHoursStr;
    if(startHours < 10){
        startHoursStr = "0" + startHours;
    }else{
        startHoursStr = startHours;
    }
    var searchStartStr = start.format('YYYY-MM-DD') + "T" + startHoursStr + start.format(':mm:ss') + ".000Z";
    console.log("searchStartStr check = " + searchStartStr);

    var end = $("#reservationtime").data().daterangepicker.endDate;
    console.log("end hour check = " + end.format('H'));
    var endHours = parseInt(end.format('H'));
    var endHoursStr;
    if(endHours < 10){
        endHoursStr = "0" + endHours;
    }else{
        endHoursStr = endHours;
    }
    var searchEndStr = end.format('YYYY-MM-DD') + "T" + endHoursStr + end.format(':mm:ss') + ".000Z";
    console.log("searchEndStr check = " + searchEndStr);

    console.log("after savedNodeHost ==> " + savedNodeHost);

    $.getJSON("metricbeatReqTemplate.json", function (reqdata) {
        console.log(reqdata.query.bool.filter[1].range["@timestamp"].gte);
        reqdata.query.bool.filter[1].range["@timestamp"].gte = searchStartStr;
        reqdata.query.bool.filter[1].range["@timestamp"].lte = searchEndStr;
        reqdata.query.bool.filter[0].bool.should[0].match["agent.hostname"] = savedNodeHost;

        var queryString = JSON.stringify(reqdata);
        console.log(queryString);

        var url = "";
        var type = "";
        if($(location).attr('port') == 9999){
            url = "/api/elasticsearch/metricbeat/search/api.json";
            type = "get";
        }else{
            url="/elasticsearch/metricbeat-*/_search";
            type = "post";
        }

        $.ajax({
            url : url,
            type : type,
            data : queryString,
            dataType : 'json',
            jsonp : false,
            timeout : 31313,
            global : true,
            contentType : 'application/json;charset=UTF-8',
            cache : false,
            success : function(data) {

                console.log("metricbeat response data = " + JSON.stringify(data));
                var chartLabels = [];
                var chartData1 = [];
                var chartData3 = [];
                var chartData4 = [];

                var filteredObj = data.aggregations[2].buckets;

                $.each(filteredObj, function(inx, obj){
                    chartLabels.push(obj.key_as_string);
                    chartData1.push(obj[1].value);
                    chartData3.push(obj[3].value);
                    chartData4.push(obj[4].value);
                });

                var config = {
                    type: 'line',
                    data: {
                        labels: chartLabels,
                        datasets: [{
                            label: 'cpu.total.pct',
                            data: chartData1,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)'
                        },{
                            label: 'cpu.system.pct',
                            data: chartData3,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)'
                        },{
                            label: 'cpu.user.pct',
                            data: chartData4,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)'
                        }]
                    }
                }
                new Chart(document.getElementById('metricbeatCanvas'), config);
            }
        });
    });
}