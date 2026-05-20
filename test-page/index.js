d3.csv(
    'https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv',
    function(d) {
        return d;
    },
    function(data) {
        var instance = paneledOutlierExplorer(
            '#container', // element
            {
            } // settings
        );
        instance.init(data);
        console.log(instance)
        //quick test of participantSelected event
        instance.wrap.on("participantsSelected",function(){
          console.log("Participant Selected Event:")
          console.log(d3.event.data)
        })
    }
);
