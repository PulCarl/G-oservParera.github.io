var test = null;
var test2 = [];
var test3 = [];
{
mviewer.customLayers.import = {};
mviewer.customLayers.import.layer =  new ol.layer.Vector({
              source: new ol.source.Vector({
                $.ajax({url:"./data/test_import.php",dataType:"text"}).done(function(response){
                  test = response.split(';;') ; //premier découpage du géom pour avoir un géom par troncon

              //deuxième découpage en tableau où on trouve un géom = une couleur
              for (var i =0; i<test.length ; i++)
              {
              var test_1 =[]; // deuxième tableau
              test_1 = test[i].split(',,');
              test2.push(test_1); //insertion 1
              }

              var nb_items =  test.length;

              for (var i = 0; i < nb_items-1; i++) {
              var item = JSON.parse(test2[i][0]);
              test3.push(item);

              L.geoJson(test3[i]).addTo(map).bindPopup("Nom : " + test2[i][1] );

              }
                format: new ol.format.GeoJSON()
            });
          });
        });
          mviewer.customLayers.import.handle = false;
        }
