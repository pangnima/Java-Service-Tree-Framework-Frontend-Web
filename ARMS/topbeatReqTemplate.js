$(function() {
    //Date range picker
    //$('#reservation').daterangepicker()
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({ timePicker: true, timePickerIncrement: 30, locale: { format: 'YYYY-MM-DD H:mm:ss', separator: " ~ " }},
        function(start, end) {
            topbeat(null);
        }
    )

});


var savedNodeHost;
function topbeat(selectedNodeHost){

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

    $.getJSON("topbeatReqTemplate.json", function (reqdata) {
        console.log(reqdata.query.bool.filter[1].range["@timestamp"].gte);
        reqdata.query.bool.filter[1].range["@timestamp"].gte = searchStartStr;
        reqdata.query.bool.filter[1].range["@timestamp"].lte = searchEndStr;
        reqdata.query.bool.filter[0].bool.should[0].match["beat.hostname"] = savedNodeHost;

        var queryString = JSON.stringify(reqdata);
        console.log(queryString);

        var url = "";
        var type = "";
        if($(location).attr('port') == 9999){
            url = "/api/elasticsearch/topbeat/search/api.json";
            type = "get";
        }else{
            url="/elasticsearch/topbeat-*/_search";
            type = "post";
        }

        $.ajax({
            url : url,
            type : type,
            data : queryString,
            dataType : 'json',
            contentType : 'application/json',
            success : function(data) {

                console.log(JSON.stringify(data));

                var chartLabels = [];
                var chartData = [];

                var filteredObj = data.aggregations[2].buckets;

                $.each(filteredObj, function(inx, obj){
                    chartLabels.push(obj.key);
                    chartData.push(obj.doc_count);
                });

                var config = {
                    type: 'radar',
                    data: {
                        labels: chartLabels,
                        datasets: [{
                            label: 'Topbeat Chart',
                            data: chartData,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)'
                        }]
                    }
                }
                new Chart(document.getElementById('canvas'), config);
            }
        });
    });
}