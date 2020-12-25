function metricbeat2(selectedNodeHost){

    console.log("<== metricbeat2 ==> ");
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
            url = "/api/elasticsearch/metricbeat/search/api2.json";
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
                var chartData5 = [];
                var chartData6 = [];

                var filteredObj = data.aggregations[2].buckets;

                $.each(filteredObj, function(inx, obj){
                    chartLabels.push(obj.key_as_string);
                    chartData5.push(obj[5].value);
                    chartData6.push(obj[6].value);
                });

                var config = {
                    type: 'line',
                    data: {
                        labels: chartLabels,
                        datasets: [{
                            label: 'memory.actual.used.pct',
                            data: chartData5,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)'
                        },{
                            label: 'memory.used.pct',
                            data: chartData6,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)'
                        }]
                    }
                }
                new Chart(document.getElementById('metricbeat2Canvas'), config);
            }
        });
    });
}